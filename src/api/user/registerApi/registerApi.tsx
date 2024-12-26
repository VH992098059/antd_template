import api from "../../dataApi.tsx";

export function RegisterData(regData: never){
    api.post('/users',{regData}).then(response=>{
        console.log(response);
    }).catch(err=>{
        console.log(err);
    })
}
