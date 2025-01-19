import api from "../dataApi.tsx";

export const ActivityList =async ()=>{
    try {
        const response = await api.get('/backend/activityList');
        return response.data.list

    }
    catch(err){
        console.log(err)
    }
}
export const GetActivity=async()=>{}
