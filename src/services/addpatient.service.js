import { get, save } from "./context.service";





//creating varaible for adddepartment api
const url = "http://localhost:3000/addpatient";

//function for get adddepartment
export function getUsser(){
    return get(url);
}

//function for save adddepartment data
export function saveUsser(data){
    return save(url,data);
}