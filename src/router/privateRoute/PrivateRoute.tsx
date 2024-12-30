import {ReactElement, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {getToken} from "../token/token.tsx";
import {message} from "antd";

interface Props{
    children:ReactElement;
}
export function isPastHours(timestamp:number):boolean{
    const currentTimeStamp = Math.floor(Date.now() / 1000);/*当前时间戳*/
    const timeDifference = currentTimeStamp - timestamp;/*时间差*/
    const hoursInSeconds=60*60/*一小时*/
    return timeDifference > hoursInSeconds;
}
/*token拦截*/
export const PrivateRoute=({children}:Props)=>{
    const navigator=useNavigate();


    useEffect(()=>{
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const token: string= getToken();
            const tokenObj = JSON.parse(token);
            if(tokenObj===null||isPastHours(tokenObj.expired )){
                message.warning({content:"token过期，请重新登录"});
                navigator("/userLayout/login");
            }
        }catch (e){
            message.warning({content:"token过期，请重新登录"});
            navigator("/userLayout/login");
            console.error(e);
        }
    },[])
    return <>{children}</>;
}

