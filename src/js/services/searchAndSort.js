import configToaster from "../configToaster.js";
import http from "./httpService.js";


async function searchAndSort(refId = "" , sortBy = "price", sortValue = "asc"){
    try{
        const {data, status} = await http.get(`?refId_like=${refId}&_sort=${sortBy}&_order=${sortValue}`);
        if(status === 200){
            return data;
        } 
    }catch(err){
        console.log(err.message);
        configToaster("error",err.message, "Error");
        
        if(err.response.status === 404) configToaster("error","درخواست با کد وضعیت ۴۰۴ ناموفق بود!", "ناموفق");
    }
}

export default searchAndSort;