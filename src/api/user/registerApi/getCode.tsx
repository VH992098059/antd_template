import api from "../../dataApi.tsx";
import {message} from "antd";

export function GetCode(phone:string){
    api.post(`/sendCode`, {phone}).then(response=>{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if(response.code!=200){
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return message.error(response.msg)
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return message.success(response.msg)
    }).catch(err=>{
        console.log(err);
    })
}
