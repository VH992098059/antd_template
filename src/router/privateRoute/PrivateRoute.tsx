import {ReactElement, useContext, useEffect, useState} from "react";
import { message } from "antd";
import { getAuth, getUuid, clearToken } from "../token/token.tsx";
import { InfoUser} from "../../api/user/infoApi/infoApi.tsx";
import MyContext from "../../layout/Home/HeaderModel/AvaterModel/AvaterContext.tsx"
import { useNavigate } from "react-router-dom";
interface Props{
    children:ReactElement;
}
interface User{
  avatar: "",
  nickname:"",
  uuid:""
}
export function isPastHours(timestamp:number):boolean{
    // const currentTimeStamp = Math.floor(Date.now() / 1000);/*当前时间戳*/
    const currentTimeStamp = Math.floor(Date.now());/*当前时间戳*/
    const timeDifference = currentTimeStamp - timestamp;/*时间差*/
    const hoursInSeconds=60*60*24*1000/*24小时*/
    return timeDifference > hoursInSeconds;
}
/*token拦截*/
export const PrivateRoute = ({ children }: Props) => {
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [user,setUser]=useState([])
  const navigate=useNavigate()
  
  useEffect(() => {
    const verifyAuthentication = async () => {
      // 1. 检查本地凭证
      const authToken = getAuth();
      const uuid = getUuid();
      
      try {
        // 如果缺少凭证，则直接认为未登录，不弹出错误提示
        if (!authToken && !uuid) {
          setCheckedAuth(true);
          if((authToken===null||uuid===null)&&/^\/account\//.test(window.location.pathname)){
            navigate("/userLayout/login")
            message.warning("请登录")
          }
          return;
        }
        //调用用户信息API验证
        if(authToken&&uuid){
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          // @ts-expect-error
          await InfoUser(uuid).then((res)=>{
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-expect-error
            if(res.code==-401){
              message.warning('登录状态已过期，请重新登录');
              clearToken();
              setCheckedAuth(true);
              if((authToken===null||uuid===null)&&/^\/account\//.test(window.location.pathname)){
                  navigate("/home")
              }
            }else{
              setUser(res?.data)
            }
            
          })
        }
        // 凭证缺失
        else if(!authToken||!uuid){
          message.warning('登录状态已过期，请重新登录');
          clearToken();
          setCheckedAuth(true);
        }
        // 3. 验证通过
        setCheckedAuth(true);
       
        
      } catch (error) {
        // 处理登录期间的验证失败情况
        console.error('认证验证失败:', error);
        message.error('登录状态已过期，请重新登录');
        clearToken();
        setCheckedAuth(true);
      }
    };
  
    verifyAuthentication();
  }, []);
  

  if (!checkedAuth) {
    return <div className="flex justify-center items-center h-screen">
      <span className="text-gray-500">正在验证登录状态...</span>
    </div>;
  }

  return <>
    <MyContext.Provider value={[user,setUser]}>
      {children}
    </MyContext.Provider>
  </>;
};
