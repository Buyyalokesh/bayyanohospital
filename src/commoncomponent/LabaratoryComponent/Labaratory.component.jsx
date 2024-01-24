import { useEffect, useRef, useState } from "react";
import { ArrowRightCircle, Plus } from "react-bootstrap-icons";
import './Labaratory.component.css';
import { getlabaratory, savelabaratory } from "../../services/addlabaratory.service";
import { GridComponent } from "../gridcomponent/grid.component";


export function LabaratoryComponent() {

    //create a refvariable
    const labaratorynameref = useRef();
    const labaratoryemailref = useRef();
    const labaratorypasswordref = useRef();
    const labaratoryadressref = useRef();
    const labaratoryphoneref = useRef();
 
    //create function savedepartment
    function savelabaratorydata() {
       let data = {
          id: 0,
          name: labaratorynameref.current.value,
          email: labaratoryemailref.current.value,
          password: labaratorypasswordref.current.value,
          adress: labaratoryadressref.current.value,
          phone: labaratoryphoneref.current.value,
       };
       savelabaratory(data).then(() => {
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
     const [labaratorytypegridheaders, setlabaratorytypegridheaders] = useState(["ID", "Name","Email", "Password", "Address","Phone","options"]);

     //create a variable for body section
     const [labaratorytypeofdata, setlabaratorytypeofdata] = useState([]);
  
     //create a function for get data from api
     function getlabaratorytypedata() {
        getlabaratory().then((res) => { setlabaratorytypeofdata(res.data) });
     }
     useEffect(() => {
        getlabaratorytypedata();
     }, []);

    return (
        <div>
            <div>
                <ArrowRightCircle className="arrow-icon11"></ArrowRightCircle>
                <p className='Labaratorytext'>Labaratory</p>
            </div>
            <button className='add-Labaratory' onClick={openForm}><Plus className='plus-icon9'></Plus>Add Labaratory</button>
            {isFormOpen && (
                <div className="overlayyer" onClick={closeForm}>
                    <div className="addLabaratoryForm" onClick={(e) => e.stopPropagation()}>
                        <h2 className='addLabaratory'>Add Labaratory</h2>
                        <form onsubmit={handleSubmit}>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label namehead'>Name</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='name' name='name' className='from-control' id='field-1' required='' ref={labaratorynameref} ></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label namehead'>Email</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='Email' name='Email' className='from-control' id='field-1' required='' ref={labaratoryemailref} ></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label passwordtext'>Password</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='password' name='password' className='from-control-label' id='field-1' required='' ref={labaratorypasswordref}></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-ta" className='col-sm-3 control-label adress'>Address</label>
                                <div className='col-sm-7 adressbox'>
                                    <textarea name='adress' className='form-control' id='field-ta' rows='3' ref={labaratoryadressref}></textarea>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-ta" className='col-sm-3 control-label phonetext2'>Phone</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='phone' className='form-control-label' id='field-1' ref={labaratoryphoneref}></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div>
                                    <lable className='seclecttext2' htmlFor="imageInput">Select image</lable>
                                    <input className='filebut' type='file' id='imageInput' name='imageInput' accept='image/*' onChange={handleImageChange}>
                                    </input>
                                </div>
                                <button className='save' type="submit" onClick={(()=>{savelabaratorydata()})}>Save</button>
                            </div>
                        </form>
                        <button className='close' onClick={closeForm}>close</button>
                    </div >
                </div >
            )
            }
            <GridComponent tittle={'add table'} headers={labaratorytypegridheaders} body={labaratorytypeofdata} ></GridComponent>
        </div>
        
    )
}