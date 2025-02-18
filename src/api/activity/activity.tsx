import api from "../dataApi.tsx";
/* 获取列表数据 */
export const ActivityList =async (page:number,size:number)=>{
    try {
        const response = await api.get('/backend/activityList?page='+page+"&size="+size);
        return response.data

    }
    catch(err){
        console.log(err)
        return []
    }
}
/* 获取活动 */
export const GetActivity=async(uuid:string)=>{
    try{
        const response = await api.get('/backend/GetActivity?uuid='+uuid);
        return response.data.list
    }
    catch(err){
        console.log(err)
    }
}
/* 搜索活动 */
export const ActivitySearch=async(title: string | null,page:number,size:number)=>{
    try{
        const response=await api.get('/backend/activitySearch?activity_title='+title+"&page="+page+"&size="+size)
        return response.data
    }catch(err){
        console.log(err);
        
    }
}
/* 参加活动 */
export const ActivityJoin=async(activity_uuid:string,user_id:string)=>{
    try{
        const response=await api.post('/backend/join?activity_uuid='+activity_uuid+"&"+"user_id="+user_id)
        return response
        
    }catch(err){
        console.log(err);
        
    }
}
