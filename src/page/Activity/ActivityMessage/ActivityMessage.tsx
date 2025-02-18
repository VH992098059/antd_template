import {Button, message} from "antd";
import {useContext, useEffect} from "react";
import {getUuid, setActivityUuid} from "../../../router/token/token.tsx";
import MyContent from "../ActivityContent/ActivityContent.tsx";
import { useNavigate } from 'react-router-dom';
import { ActivityJoin } from "../../../api/activity/activity.tsx";
const params = new URLSearchParams(window.location.search);
/* 获取活动信息 */
const GetMes=(key:string)=>{
    const content =useContext(MyContent);
    const navigate = useNavigate();
    const SignUp =async ()=>{
        if(getUuid()===null){
            message.warning("请登录")
            // 1.2秒后跳转到登录页面
            setTimeout(() => {
                navigate('/userLayout/login');
            }, 1200);
        }else{
            const response=await ActivityJoin(params.get('key') as string,params.get('uuid') as string)
            if(response?.data.msg==""){
                message.success("报名成功")
            }else{
                message.warning("已报名，无需再次报名")
            }
        }
    }
    useEffect(() => {
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-expect-error
        if(content.items.length > 0){
            setActivityUuid(key)
        }
    }, [key]);
    useEffect(() => {
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-expect-error
        if (content.items.length > 0 && content.items[0]?.activity_title) {
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-expect-error
            document.title = content.items[0].activity_title;
        }
        
        // 组件卸载时恢复原标题
        return () => {
            document.title = '校园生活'; // 或者你的默认标题
        };
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-expect-error
    }, [content.items]);
    return (
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-expect-error
        content.items.map((item:never)=>(
    /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
    // @ts-expect-error
            <div id="activity_message" key={item.uuid}>


                <h2>{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                    // @ts-expect-error
                    item.activity_title}</h2>
                <p>活动介绍:</p>
                <p>{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                    // @ts-expect-error
                    item.activity_about}</p>
                <p>报名时间：
                    <span>{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                        // @ts-expect-error
                    item.registration_start_time}</span></p>
                <p>截止时间：
                    <span>{
                        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                        // @ts-expect-error
                item.registration_end_time}</span></p>
                <p>报名人数：
                    <span>{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                        // @ts-expect-error
                    item.person_current}</span>
                    / 
                    <span>{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                        // @ts-expect-error
                    item.person_limit}</span></p>
                <Button type={"primary"} onClick={SignUp}>报名参加</Button>
            </div>
        ))
    )
}
const ActivityMessage:React.FC = () => {
    return GetMes(params.get('key') as string);
}
export default ActivityMessage
