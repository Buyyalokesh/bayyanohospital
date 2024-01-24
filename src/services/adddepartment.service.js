import { Update, deleteitem, get, save, update } from "./context.service";


//creating varaible for user api

const url = "http://localhost:4002/deparmentform";
const deletedepurl = "http://localhost:4002/DeletedepartmentType/";
//function for get adddepartment 
export function getdeparrt(){
    return get(url);
}

//function for save adddepartment
export function savedepart(data){
    return save(url,data);
}

//function for update 
export function updatedepartmentdata(data)
{
    return update(url,data);
}

//create a function for delete of propertytype
export function deletedepartmentdata(id){
    return deleteitem(deletedepurl+id);
}