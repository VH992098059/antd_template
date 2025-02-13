import api from "../../dataApi.tsx";
import {message} from "antd";


/*注册用户*/
export const RegisterUser = async (regData:never)=>{
    try{
        const response = await api.post('/backend/register', regData);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        switch (response.code) {
            case 401:
                message.error('验证码不正确');
                break;
            case 200:
                message.success('注册成功');
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
