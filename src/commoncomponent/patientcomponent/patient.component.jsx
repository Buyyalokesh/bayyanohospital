

import { useEffect, useRef, useState } from 'react';
import './patient.component.css';

import { ArrowRightCircle, Plus } from "react-bootstrap-icons";
import { getUsser, saveUsser } from '../../services/addpatient.service';
import { GridComponent } from '../gridcomponent/grid.component';





export function PatientComponent() {

     //create a refvariable
   const patientnameref = useRef();
   const patientemailref = useRef();
   const patientpasswordref = useRef();
   const patientadressref = useRef();
   const patientphoneref = useRef();
   const patientsexref = useRef();
   const patientbirthref = useRef();
   const patientbloodgroupref =useRef();

   //create function savedepartment
   function savepatientdata() {
      let data = {
         id: 0,
         name: patientnameref.current.value,
         email: patientemailref.current.value,
         password: patientpasswordref.current.value,
         adress: patientadressref.current.value,
         phone: patientphoneref.current.value,
         sex: patientsexref.current.value,
         birth: patientbirthref.current.value,
         blood: patientbloodgroupref.current.value
      };
      saveUsser(data).then(() => {
         alert("added sucessfully")
      }).catch(() => {
         alert("data not save")
      })
   }
   //create a variable for header section
   const [patienttypegridheaders, setpatienttypegridheaders] = useState(["ID", "Name","Email", "Password", "Address","Phone","sex","Birth","bloodgroup","options"]);

   //create a variable for body section
   const [patienttypeofdata, setpatienttypeofdata] = useState([]);

   //create a function for get data from api
   function getpatienttypedata() {
      getUsser().then((res) => { setpatienttypeofdata(res.data) });
   }
   useEffect(() => {
      getpatienttypedata();
   }, []);





    const [isFormopen, setFormOpen] = useState(false);

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
    return (
        <div>
            <div>
                <ArrowRightCircle className="arrow-icon2"></ArrowRightCircle>
                <p className='patienttext'>Patient</p>
            </div>
            <button className='add-patient' onClick={openForm}><Plus className='plus-icon3'></Plus>Add Patient</button>
            {isFormopen && (
                <div className="overlay" onClick={closeForm}>
                    <div className="addpatientForm" onClick={(e) => e.stopPropagation()}>
                        <h2 className='adddpatient'>ADD PATIENT</h2>
                        <form onsubmit={handleSubmit}>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label nameheads'>Name</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='name' name='name' className='from-control' id='field-1' required='' ref={patientnameref} ></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label nameheads'>Email</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='Email' name='Email' className='from-control' id='field-1' required='' ref={patientemailref} ></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-1" className='col-sm-3 control-label passwordtext'>Password</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='password' name='password' className='from-control-label' id='field-1' required='' ref={patientpasswordref}></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-ta" className='col-sm-3 control-label Adresstext'>Address</label>
                                <div className='col-sm-7 adressbox'>
                                    <textarea name='adress' className='form-control' id='field-ta' rows='2' ref={patientadressref}></textarea>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-ta" className='col-sm-3 control-label phone-text'>Phone</label>
                                <div className='col-sm-7 nameheader'>
                                    <input type='phone' className='form-control-label' id='field-1' ref={patientphoneref}></input>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-ta" className='col-sm-3 control-label sextext'>Sex:</label>
                                <div className='col-sm-7'>
                                    <select name='department-id' className='form-control nameheaderr' required='' ref={patientsexref}>
                                        <option value=''>Select sex</option>
                                        <option value='1'>Male</option>
                                        <option value='2'>Female</option>
                                    </select>
                                </div>
                                <div className='form-group'>
                                    <label for="field-ta" className='col-sm-3 control-label birthtexxt'>Birth:</label>
                                    <div className='col-sm-7 nameheader'>
                                        <input type='text' className='form-control-datepicker' id='field-1' ref={patientbirthref}></input>
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label for="field-ta" className='col-sm-3 control-label bloodgrouptext'>BloodGroup:</label>
                                <div className='col-sm-7'>
                                    <select name='department-id' className='form-control nameheaderr' required='' ref={patientbloodgroupref}>
                                        <option value=''>Blood Group</option>
                                        <option value='1'>O+</option>
                                        <option value='2'>O-</option>
                                        <option value='3'>A+</option>
                                        <option value='4'>B+</option>
                                        <option value='5'>AB+</option>
                                    </select>
                                </div>
                                <div>
                                    <lable className='selectimage' htmlFor="imageInput">Select image:</lable>
                                    <input className='filetext' type='file' id='imageInput' name='imageInput' accept='image/*' onChange={handleImageChange}>
                                    </input>
                                </div>
                                <button className='saves' type="submit" onClick={(()=>{savepatientdata()})}>Save</button>
                                <button className='closes' onClick={closeForm}>close</button>
                            </div>

                        </form>
                      
                    </div >
                </div >
            )
            }
            <GridComponent tittle={'add table'} headers={patienttypegridheaders} body={patienttypeofdata} ></GridComponent>
        </div>
    
    )
}