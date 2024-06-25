import configToaster from "../configToaster.js";
import http from "./httpService.js";

async function sortTransactions(sortBy= "price", sortValue = "asc"){
    try{
        const {data, status} = await http.get(`?_sort=${sortBy}&_order=${sortValue}`);
        if(status === 200){
            return data;
        } 
    }catch(err){
        if(err.response.status){
            configToaster("error",`درخواست با کد وضعیت ${err.response.status} ناموفق بود!`, "ناموفق");
        }else{
            configToaster("error",err.message, "Error");
        }
    }
    
}

export default sortTransactions;