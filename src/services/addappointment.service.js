import {  save } from "./context.service";





//creating varaible for adddepartment api
const url = "http://localhost:3000/addappoint";

// //function for get adddepartment
// export function getUser(){
//     return get(url);
// }

//function for save adddepartment data
export function saveUssser(data){
    return save(url,data);
}
