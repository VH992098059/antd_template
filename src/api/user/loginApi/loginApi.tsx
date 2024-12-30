import api from "../../dataApi.tsx";

export function LoginData(regData: object){
    api.post('/login',{regData}).then(response=>{
        console.log(response);
    })
}
