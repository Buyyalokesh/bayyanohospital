import { get, save } from "./context.service";





//creating varaible for adddepartment api
const url = "http://localhost:3000/addaccountant";

//function for get adddepartment
export function getaccountant(){
    return get(url);
}

//function for save adddepartment data
export function saveaccountant(data){
    return save(url,data);
}