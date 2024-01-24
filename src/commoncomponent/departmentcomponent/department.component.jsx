import { ArrowRightCircle, Plus } from 'react-bootstrap-icons';
import './department.component.css';
import { useEffect, useRef, useState } from 'react';
import { deletedepartmentdata, getdeparrt, getdepart, getuser, saveuser } from '../../services/adddepartment.service';
import { GridComponent } from '../gridcomponent/grid.component';

export function DepartmentComponent() {
    
   //create a ref variable 
   const depnameRef = useRef();
   const depdecriptionRef = useRef();
   const departmentidref = useRef(0);

   //create a variable for header section
   const [departtypegridheaders, setdeparttypegridheaders] = useState(["ID", "Name", "Description", "options"]);

   // create a variable for body section
   const [departtypeofdata, setdeparttypeofdata] = useState([]);


   // //create a function for get data from API.
   function getdeparttypedata() {
       getdeparrt().then((res) => { setdeparttypeofdata(res.data) });
   }

   useEffect(() => {
       getdeparttypedata();
   }, []);

   // const [receptionid, setreceptionid] = useState(0);


   //function for edite department data
   function Editdeparttypeitem(value) {
      depnameRef.current.value = value.Name;
      depdecriptionRef.current.value = value.Description;
      departmentidref.current.value = value.id;
      setSavebtn('update');
   }

   //function for delete property type data
   function deletedepart(value) {
      //creating variable for defind popup by using javascript conscept
      let confirmdelete = window.confirm("Are you want to delete")

      if (confirmdelete == true) {


         deletedepartmentdata(value.id).then((res) => {


            getdeparttypedata();

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
            <ArrowRightCircle className='arrow-icon1'></ArrowRightCircle>
            <p className='departtext'>Department</p>
         </div>
         <div>
            <button className='add-department' onClick={()=>setShowForm(!showForm)} ><Plus className='plus-icon'></Plus>Add Department</button>
         </div>
         {showForm && (
            <form method='post' action='http://localhost:4002/saveDepartmentType'>
                   <div>
                        <input type="hidden" ref={departmentidref} name="receptionimptid"></input>
                    </div>
               <div className="addDeepartmenntForm" >
                  <label className='name66' htmlFor="departmentName">Name</label>
                  <input className='dept-name' type='text' placeholder='' id='departmentName' name='Name' ref={depnameRef} required></input>
                  <p className="description">Description</p>
                  <textarea className='form-control text-area' ref={depdecriptionRef} name='Description'></textarea>
                  <div>
                     <lable className='image-input' htmlFor="imageInput">Select image:</lable>
                     <input className='chosefile' type='file' id='imageInput' name='imageInput' accept='image/*' onChange={''}>
                     </input>
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

               </div >
            </form>
         )}
   <GridComponent  tittle={'add table'} headers={departtypegridheaders} body={departtypeofdata} 
             edititemfromgrid={(value) => { Editdeparttypeitem(value) }}
             deleteRecord={(value) => { deletedepart(value)}}
             ></GridComponent>
         
      </div >
   )
}