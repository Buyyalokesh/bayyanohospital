import { useEffect, useRef, useState } from "react";
import { ArrowRightCircle, Plus } from "react-bootstrap-icons";
import './pharmacist.component.css';
import { getphramcist, savephramcist } from "../../services/addphramcist.service";
import { GridComponent } from "../gridcomponent/grid.component";


export function PharmacistComponent(){

    
    //create a refvariable
   const phramcistnameref = useRef();
   const phramcistemailref = useRef();
   const phramcistpasswordref = useRef();
   const phramcistadressref = useRef();
   const phramcistphoneref = useRef();

   //create function savedepartment
   function savephramcistdata() {
      let data = {
         id: 0,
         name: phramcistnameref.current.value,
         email: phramcistemailref.current.value,
         password: phramcistpasswordref.current.value,
         adress: phramcistadressref.current.value,
         phone: phramcistphoneref.current.value,
      };
      savephramcist(data).then(() => {
         alert("added sucessfully")
      }).catch(() => {
         alert("data not save")
      })
   }

    const [isFormOpen, setFormOpen] = useState(false);

   const openForm = () => {
      setFormOpen(true);
   };
   const closeForm = () => {
      setFormOpen(false);
   };
   const handleSubmit = (event) => {
      event.preventDefault();
      closeForm();
   };

   const [selectedImage, setSelectedImage] = useState(null);

   const handleImageChange = (event) => {
      const file = event.target.files[0];
      setSelectedImage(file);
   };

     //create a variable for header section
     const [phramcisttypegridheaders, setphramcisttypegridheaders] = useState(["ID", "Name","Email", "Password", "Address","Phone","options"]);

     //create a variable for body section
     const [phramcisttypeofdata, setphramcisttypeofdata] = useState([]);
  
     //create a function for get data from api
     function getphramcisttypedata() {
        getphramcist().then((res) => { setphramcisttypeofdata(res.data) });
     }
     useEffect(() => {
        getphramcisttypedata();
     }, []);


return(
    <div>
         <div>
                <ArrowRightCircle className="arrow-icon10"></ArrowRightCircle>
                <p className='Pharmacisttext'>Pharmacist</p>
            </div>
            <button className='add-Pharmacist' onClick={openForm}><Plus className='plus-icon8'></Plus>Pharmacist</button>
            {isFormOpen && (
                <div className="overlayy" onClick={closeForm}>
                    <div className="addPharmacistForm" onClick={(e) => e.stopPropagation()}>
                        <h2 className='addPharmacist'>Add Pharmacist</h2>
                        <form onsubmit={handleSubmit}>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label namehead'>Name</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='name' name='name' className='from-control' id='field-1' required='' ref={phramcistnameref} ></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label namehead'>Email</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='Email' name='Email' className='from-control' id='field-1' required=''ref={phramcistemailref} ></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label passwordtext'>Password</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='password' name='password' className='from-control-label' id='field-1' required='' ref={phramcistpasswordref} ></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-ta" className='col-sm-3 control-label adress'>Address</label>
                                <div className='col-sm-7 adressbox'>
                                    <textarea name='adress' className='form-control' id='field-ta' rows='3' ref={phramcistadressref}></textarea>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-ta" className='col-sm-3 control-label phonetext2'>Phone</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='phone' className='form-control-label' id='field-1' ref={phramcistphoneref}></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div>
                                    <lable className='seclecttext2' htmlFor="imageInput">Select image</lable>
                                    <input className='filebut' type='file' id='imageInput' name='imageInput' accept='image/*' onChange={handleImageChange}>
                                    </input>
                                </div>
                                <button className='save' type="submit" onClick={(()=>{savephramcistdata()})}>Save</button>
                            </div>
                        </form>
                        <button className='close' onClick={closeForm}>close</button>
                    </div >
                </div >
            )
            }
            <GridComponent  tittle={'add table'} headers={phramcisttypegridheaders} body={phramcisttypeofdata}></GridComponent>
    </div>
)
}