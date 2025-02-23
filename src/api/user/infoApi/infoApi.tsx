import { message } from "antd";
import api from "../../dataApi";

export const InfoUser=async(userKey: object)=>{
    try{
    
        const response=await api.get('/backend/info?user_key=User:'+userKey)
        return response; // 返回成功状态
    }catch(err){
        message.error('请求失败，请稍后重试');
    }
}

export const GetUserPerson=async(uuid:string)=>{
    try{
        const response =await api.get("/backend/userPersonMsg?uuid="+uuid)
        return response.data.user
        
    }catch(err){
        message.error('请求失败，请稍后重试');
    }
}