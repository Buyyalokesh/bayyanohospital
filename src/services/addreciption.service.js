import {  deleteitem, get, save, update } from "./context.service";


//create a url for receptionist
const  receptionisturl="http://localhost:4002/receptionform";

const receptiondeleteurl ="http://localhost:4002/deletereception/";

//create a function for get data of receptionist
export function getreceptionist(){
    return get( receptionisturl);
}

//create a function for save data of receptionist

export function savereceptionist(data){
    return save(receptionisturl,data);
}

//create a function for update of receptionist

export function updatereceptionist(data){
    return update(receptionisturl,data);
}



 //create a function for delete of propertytype
export function deletereceptdata(id){
    return deleteitem(receptiondeleteurl+id);
}