
import { useEffect, useRef, useState } from 'react';
import './doctor.component.css';

import { ArrowRightCircle, Plus } from "react-bootstrap-icons";
import { GridComponent } from '../gridcomponent/grid.component';
import {deletedatadoc, deletedoctordataa, deletedoctorrdata, gettdoc} from "../../services/adddoctor.service";


export function DoctorComponent() {

   //create a ref variable 
   const doctornameref = useRef();
   const doctoremailref = useRef();
   const doctorpasswordref = useRef();
   const doctoradressref = useRef();
   const doctorphoneref = useRef();
   const doctordepartmentref = useRef();
   const doctoridref = useRef(0);

   //create a variable for header section
   const [doctortypegridheaders, setdepartmenttypegridheaders] = useState(["ID", "Name", "Email", "Password", "Address", "Phone", "Department", "options"]);

   //create a variable for body section
   const [doctortypeofdata, setdoctortypeofdata] = useState([]);

   //create a function for get data from api
   function getdoctortypedata() {
      gettdoc().then((res) => { setdoctortypeofdata(res.data) });
   }
   useEffect(() => {
      getdoctortypedata();
   }, []);

   function editdoctordata(value) {
      // nameref.current.value = value.name;
      // descref.current.value = value.description;
      doctornameref.current.value = value.Name;
      doctoremailref.current.value = value.Email;
      doctorpasswordref.current.value = value.Password;
      doctoradressref.current.value = value.Address;
      doctorphoneref.current.value = value.Phone;
      doctordepartmentref.current.value = value.Department;
      setSavebtn('update');
      doctoridref.current.value = value.id;
   }

   function deletedoctordata(value) {
      let confrimDelete = window.confirm("Are You sure you want to delete the record")
      if (confrimDelete == true) {
         deletedatadoc(value.id)
            .then((res) => {

               //   clearDoctordata();
               getdoctortypedata();

            }).catch(() => {
               alert("failed to delete your property")
            })


      }
   }







   //create alert
   const [savemsg, setUpdatamsg] = useState(false);
   //savebtn
   const [savebtn, setSavebtn] = useState("save");
   //show form and hideform
   const [showForm, setShowForm] = useState(false);


   return (
      <div>
         <div>
            <ArrowRightCircle className="arrow-icon2"></ArrowRightCircle>
            <p className='doctortext'>Doctor</p>
         </div>
         <div className='showform'>
            <button className='add-doctor' onClick={() => setShowForm(!showForm)}><Plus className='plus-icon'></Plus>Add Doctor</button>
         </div>
         {showForm && (
            <form method="post" action="http://localhost:4002/savedoctor" >
               <div className="addDepartmentForm" >
                  <div>
                     <input type="hidden" ref={doctoridref} name="receptionimptid"></input>
                  </div>
                  <div className='form-group'>
                     <label for="field-1" className='col-sm-3 control-label namehead'>Name</label>
                     <div className='col-sm-7 nameheader'>
                        <input type='name' name='Name' className='from-control' id='field-1' ref={doctornameref} required='' ></input>
                     </div>
                  </div>
                  <div className='form-group'>
                     <label for="field-1" className='col-sm-3 control-label namehead'>Email</label>
                     <div className='col-sm-7 nameheader'>
                        <input type='Email' name='Email' className='from-control' id='field-1' ref={doctoremailref} required='' ></input>
                     </div>
                  </div>
                  <div className='form-group'>
                     <label for="field-1" className='col-sm-3 control-label passwordtext'>Password</label>
                     <div className='col-sm-7 nameheader'>
                        <input type='password' name='Password' className='from-control-label' id='field-1' ref={doctorpasswordref} required=''></input>
                     </div>
                  </div>
                  <div className='form-group'>
                     <label for="field-ta" className='col-sm-3 control-label passwordtext'>Address</label>
                     <div className='col-sm-7 adressbox'>
                        <textarea name='Address' className='form-control' id='field-ta' ref={doctoradressref} rows='3'></textarea>
                     </div>
                  </div>
                  <div className='form-group'>
                     <label for="field-ta" className='col-sm-3 control-label passwordtext'>Phone</label>
                     <div className='col-sm-7 nameheader'>
                        <input type='phone' className='form-control-label' name='Phone' id='field-1' ref={doctorphoneref}></input>
                     </div>
                  </div>
                  <div className='form-group'>
                     <label for="field-ta" className='col-sm-3 control-label departmenthead'>Department:</label>
                     <div className='col-sm-7'>
                        <select name='Department' className='form-control nameheaderr' ref={doctordepartmentref} required=''>
                           <option value=''>select department</option>
                           <option value='1'>Anesthetics</option>
                           <option value='2'>Cardiology</option>
                           <option value='3'>Gastroenterology</option>
                        </select>
                     </div>
                  </div>
                  <div className="mt-3">
                            <input type="submit" value={savebtn} className="btn btn-success" style={{ backgroundColor: 'green', color: 'white', width: '99px', fontSize: '16px', padding: '4px', borderRadius: '16px' }}></input>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div>
                                {
                                    savemsg && <div> data saved</div>
                                }
                            </div>
                        </div>
               </div>
            </form>
         )}
          <GridComponent  tittle={'add table'} headers={doctortypegridheaders} body={doctortypeofdata} 
             edititemfromgrid={(value) => { editdoctordata(value) }}
             deleteRecord={(value) => { deletedoctordata(value)}}
             ></GridComponent>
      </div>
   )
}