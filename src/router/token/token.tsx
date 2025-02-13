export const setToken= (token: string)=>{
    return window.localStorage.setItem("token",token);
}
export const setActivityUuid=(uuid: string)=>{
    return window.localStorage.setItem("activity_uuid",uuid);
}
export const getToken=()=>{
    return window.localStorage.getItem("token");
}
export const getActivityUuid=()=>{
    return window.localStorage.getItem("activity_uuid");
}
export const clearToken=()=>{
    return window.localStorage.removeItem("token");
}
export const clearActivityUuid=()=>{
    return window.localStorage.removeItem("activity_uuid");
}
export const setAuth=(auth:string)=>{
    return window.localStorage.setItem("auth",auth)
}
export const getAuth=()=>{
    return window.localStorage.getItem("auth")
}
export const clearAuth=()=>{
    return window.localStorage.removeItem("auth")
}