
export const getActivityUuid=()=>{
    return window.localStorage.getItem("activity_uuid");
}
export const clearActivityUuid=()=>{
    return window.localStorage.removeItem("activity_uuid");
}
export const setActivityUuid=(uuid: string)=>{
    return window.localStorage.setItem("activity_uuid",uuid);
}
export const getUuid=()=>{
    return window.localStorage.getItem("uuid");
}
export const setUuid= (Uuid: string)=>{
    return window.localStorage.setItem("uuid",Uuid);
}
export const clearUuid=()=>{
    return window.localStorage.removeItem("uuid");
}
export const getAuth=()=>{
    return window.localStorage.getItem("auth")
}
export const setAuth=(auth:string)=>{
    return window.localStorage.setItem("auth",auth)
}
export const clearAuth=()=>{
    return window.localStorage.removeItem("auth")
}
export const setRefreshTime=(time:string)=>{
    return window.localStorage.setItem("refresh_time",time)
}
export const getRefreshTime=()=>{
    return window.localStorage.getItem("refresh_time")
}
export const clearRefreshTime=()=>{
    return window.localStorage.removeItem("refresh_time")
}
export const clearToken = () => {
    clearAuth()
    clearUuid()
    // clearRefreshTime()
    return window.location.reload
};