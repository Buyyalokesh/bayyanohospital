import { get, save } from "./context.service";





//creating varaible for adddepartment api
const url = "http://localhost:3000/addphramcist";

//function for get adddepartment
export function getphramcist(){
    return get(url);
}

//function for save adddepartment data
export function savephramcist(data){
    return save(url,data);
}