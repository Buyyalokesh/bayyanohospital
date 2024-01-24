import { useEffect, useRef, useState } from "react";
import { ArrowRightCircle, Plus } from "react-bootstrap-icons";
import './accountant.component.css';
import { GridComponent } from "../gridcomponent/grid.component";
import { getaccountant, saveaccountant } from "../../services/addaccountant.service";



export function AccountantComponent(){

      //create a refvariable
      const accountantnameref = useRef();
      const accountantemailref = useRef();
      const accountantpasswordref = useRef();
      const accountantadressref = useRef();
      const accountantphoneref = useRef();
   
      //create function savedepartment
      function saveaccountantdata() {
         let data = {
            id: 0,
            name: accountantnameref.current.value,
            email: accountantemailref.current.value,
            password: accountantpasswordref.current.value,
            adress: accountantadressref.current.value,
            phone: accountantphoneref.current.value,
         };
         saveaccountant(data).then(() => {
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
     const [accountanttypegridheaders, setaccountanttypegridheaders] = useState(["ID", "Name","Email", "Password", "Address","Phone","options"]);

     //create a variable for body section
     const [accountanttypeofdata, setaccountanttypeofdata] = useState([]);
  
     //create a function for get data from api
     function getaccountanttypedata() {
        getaccountant().then((res) => { setaccountanttypeofdata(res.data) });
     }
     useEffect(() => {
        getaccountanttypedata();
     }, []);

    return(
        <div>
              <div>
                <ArrowRightCircle className="arrow-icon12"></ArrowRightCircle>
                <p className='Accountanttext'>Accountant</p>
            </div>
            <button className='add-Accountant' onClick={openForm}><Plus className='plus-icon10'></Plus>Add Accountant</button>
            {isFormOpen && (
                <div className="overlayyer" onClick={closeForm}>
                    <div className="addAccountantForm" onClick={(e) => e.stopPropagation()}>
                        <h2 className='addAccountant'>Add Accountant</h2>
                        <form onsubmit={handleSubmit}>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label namehead'>Name</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='name' name='name' className='from-control' id='field-1' required='' ref={accountantnameref} ></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label namehead'>Email</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='Email' name='Email' className='from-control' id='field-1' required='' ref={accountantemailref} ></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label passwordtext'>Password</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='password' name='password' className='from-control-label' id='field-1' required='' ref={accountantpasswordref}></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-ta" className='col-sm-3 control-label adress'>Address</label>
                                <div className='col-sm-7 adressbox'>
                                    <textarea name='adress' className='form-control' id='field-ta' rows='3' ref={accountantadressref}></textarea>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-ta" className='col-sm-3 control-label phonetext2'>Phone</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='phone' className='form-control-label' id='field-1' ref={accountantphoneref}></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <div>
                                    <lable className='seclecttext2' htmlFor="imageInput">Select image</lable>
                                    <input className='filebut' type='file' id='imageInput' name='imageInput' accept='image/*' onChange={handleImageChange}>
                                    </input>
                                </div>
                                <button className='save' type="submit" onClick={(()=>{saveaccountantdata()})}>Save</button>
                            </div>
                        </form>
                        <button className='close' onClick={closeForm}>close</button>
                    </div >
                </div >
            )
            }
            <GridComponent tittle={'add table'} headers={accountanttypegridheaders} body={accountanttypeofdata} ></GridComponent>
        </div>
    )
}