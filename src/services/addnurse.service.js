import {  deleteitem, get, save, update } from "./context.service";


//create a url for nurse
const  nurseurl="http://localhost:4002/nurseform";

const nursedeleteurl ="http://localhost:4002/deletenurse/";

//create a function for get data of nurse
export function getnurse(){
    return get( nurseurl);
}

//create a function for save data of nurse

export function savenurse(data){
    return save(nurseurl,data);
}

//create a function for update of nurse

export function updatenurse(data){
    return update(nurseurl,data);
}



 //create a function for delete of propertytype
export function deleteNnurse(id){
    return deleteitem(nursedeleteurl+id);
}