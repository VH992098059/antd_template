import { getUuid, setAuth, setRefreshTime, setUuid } from "../../../router/token/token.tsx";
import api from "../../dataApi.tsx";
import {message} from "antd";

/*登录验证*/
export const LoginUser=async (regData: object)=>{
    try{
        const response = await api.post('/backend/login', regData);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        switch (response.code) {
            case -1:
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                message.error(response.msg);
                break;
            case 200:
                message.success('登录成功');
                /* 设置token */
                setAuth(response.data.token)
                setUuid(response.data.uuid)

                return true; // 返回成功状态
            default:
                console.log(response);
                message.error('发生未知错误');
        }
        
    }catch (err) {
        console.error(err);
        message.error('请求失败，请稍后重试');
    }
    return false; // 返回失败状态
}
export const LogoutUser=async()=>{
    try{
        const response= await api.post('/backend/logout')
        switch (response.code) {
            case -1:
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                message.error(response.msg);
                break;
            case 200:
                return true; // 返回成功状态
            default:
                message.error('发生未知错误');
        }
    }catch (err) {
        console.error(err);
        message.error('请求失败，请稍后重试');
    }
    return false; // 返回失败状态
}