import axios from "axios";




//get--> get action verb
export function get(url){
    return axios.get(url);
}

//save-->post action verb
export function save(url,data){
    return axios.post(url,data);
}

//update---> put/patch action verb
export function update(url,data){
    return axios.put(url+data.id,data);
}

//delete-->delete action verb
export function deleteitem(url){
    return axios.delete(url);
}