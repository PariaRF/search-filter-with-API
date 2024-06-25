import configToaster from "../configToaster.js";
import http from "./httpService.js";

async function getAllTransaction(){
    try{
        const {data, status} = await http.get("/");
        if(status === 200){
            configToaster("success","درخواست موفق بود.", "موفق");
            return data;
        } 
    }catch(err){
        console.log(err.response.status);
        if(err.response.status === 404){
            configToaster("error","درخواست با کد وضعیت ۴۰۴ ناموفق بود!", "ناموفق");
        }else{
            configToaster("error",err.message, "Error");
        }
    }
    
}

export default getAllTransaction;