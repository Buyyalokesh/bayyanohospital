import { get, save } from "./context.service";





//creating varaible for adddepartment api
const url = "http://localhost:3000/addlabaratory";

//function for get adddepartment
export function getlabaratory(){
    return get(url);
}

//function for save adddepartment data
export function savelabaratory(data){
    return save(url,data);
}