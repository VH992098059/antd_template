import axios from 'axios';
import {message} from "antd";

const api=axios.create({
    baseURL:`http://localhost:18000`,
    timeout:15000,
})
//请求拦截器
api.interceptors.request.use(
    (config) => {
        console.log(config);
        const token=localStorage.getItem("auth");
        if(token){
            config.headers.Authorization = "Bearer "+token;
        }
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
)
//响应拦截器
api.interceptors.response.use(
    (response)=>{
        console.log(response);
        const code=response.data.code;
        switch (code){
            case "200":
                return {message:message.open({
                        type:"success",
                        content:response.data.msg,
                    })};

        }
        return response.data;
    },
    () => {
        return {message:message.open({
                type:"error",
                content:"服务器错误",
            })};
    }
)
export default api
