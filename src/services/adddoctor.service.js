import { deleteitem, get, save, update } from "./context.service";



//create a url for doctor
const  doctorurl="http://localhost:4002/doctorform";

const doctordeleteurl ="http://localhost:4002/deletedoctor/";

//create a function for get data of doctor
export function gettdoc(){
    return get( doctorurl);
}

//create a function for save data of doctor

export function savedoctor(data){
    return save(doctorurl,data);
}

//create a function for update of doctor

export function updatedoctor(data){
    return update(doctorurl,data);
}



 //create a function for delete of propertytype
export function deletedatadoc(id){
    return deleteitem(doctordeleteurl+id);
}