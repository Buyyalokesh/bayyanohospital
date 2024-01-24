import { useEffect, useRef, useState } from "react";
import { ArrowRightCircle, Plus } from "react-bootstrap-icons";
import './Reciptionist.Component.css';
import { GridComponent } from "../gridcomponent/grid.component";
import { deletereceptdata, getreceptionist } from "../../services/addreciption.service";




export function ReciptionistComponent(){

    //create a ref variable 
    const recnameRef = useRef();
    const recEmailRef = useRef();
    const recpasswordRef = useRef();
    const recaddressRef = useRef();
    const recphoneRef = useRef();
    const receptionidref = useRef(0);

    //create a variable for header section
    const [receptionisttypegridheaders, setreceptionisttypegridheaders] = useState(["ID", "Name", "Email", "Password", "Address", "Phone", "options"]);

    // create a variable for body section
    const [receptionisttypeofdata, setreceptionisttypeofdata] = useState([]);


    // //create a function for get data from API.
    function getreceptionisttypedata() {
        getreceptionist().then((res) => { setreceptionisttypeofdata(res.data) });
    }

    useEffect(() => {
        getreceptionisttypedata();
    }, []);

    const [receptionid, setreceptionid] = useState(0);


    function editreceptiondata(value) {
        // nameref.current.value = value.name;
        // descref.current.value = value.description;

        recnameRef.current.value = value.Name;
        recEmailRef.current.value = value.Email;
        recpasswordRef.current.value = value.Password;
        recaddressRef.current.value = value.Address;
        recphoneRef.current.value =value.Phone;

        setSavebtn('update');
      
        receptionidref.current.value = value.id;
      }

      
  function deletereceptionistdata(value) {
    let confrimDelete = window.confirm("Are You sure you want to delete the record")
    if (confrimDelete == true) {
        deletereceptdata(value.id)
        .then((res) => {

        //   clearDoctordata();
        getreceptionisttypedata();
          
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
   
    return(
        <div>
            <div>
                <ArrowRightCircle className="arrow-icon12"></ArrowRightCircle>
                <p className='Reciptionisttext'>Reciptionist</p>
            </div>
            <div className="showform">
                <button onClick={() => setShowForm(!showForm)} className="add-Reciptionist"><Plus className='plus-icon'></Plus> Add Reception</button>
            </div>


            {showForm && (

                <form method="post" action="http://localhost:4002/savereception">
                    <div>
                        <input type="hidden" ref={receptionidref} name="receptionimptid"></input>
                    </div>
                    <div className="recept-container" >

                        <div className="form-group ">
                            <label for="field-1" className="col-sm-3 control-label namehead">Name</label>

                            <div className="col-sm-7 namebox">
                                <input type="text" name="Name" className="form-control nameheader" id="field-1" required="" ref={recnameRef} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="field-1" className="col-sm-3 control-label namehead">Email</label>

                            <div className="col-sm-7">
                                <input type="email" name="Email" className="form-control nameheader" id="field-1" required="" ref={recEmailRef} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="field-1" className="col-sm-3 control-label nameheaddd">Password</label>

                            <div className="col-sm-7">
                                <input type="password" name="Password" className="form-control  nameheader" id="field-1" required="" ref={recpasswordRef} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="field-ta" className="col-sm-3 control-label namehead">Address</label>

                            <div className="col-sm-7">
                                <textarea name="Address" className="form-control  nameheader" id="field-ta" rows="5" ref={recaddressRef}></textarea>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="field-1" className="col-sm-3 control-label namehead">Phone</label>

                            <div className="col-sm-7">
                                <input type="text" name="Phone" className="form-control  nameheader" id="field-1" ref={recphoneRef} />
                            </div>
                        </div>
                        <div className="mt-3">
                            <input type="submit" value={savebtn} className="btn btn-success" style={{ backgroundColor: 'green', color: 'white', width: '99px', fontSize: '16px', padding: '4px', borderRadius: '16px' }}></input>
                            &nbsp;&nbsp;&nbsp;&nbsp;

                            <input type="button" value="cancel" className="btn btn-danger "
                                style={{ backgroundColor: 'red', color: 'white', width: '99px', fontSize: '16px', padding: '4px', borderRadius: '20px' }} ></input>

                            <div>
                                {
                                    savemsg && <div> data saved</div>
                                }
                            </div>
                        </div>
                    </div>
                </form>
            )}
             <GridComponent  tittle={'add table'} headers={receptionisttypegridheaders} body={receptionisttypeofdata} 
             edititemfromgrid={(value) => { editreceptiondata(value) }}
             deleteRecord={(value) => { deletereceptionistdata(value)}}
             ></GridComponent>
        </div>
    )
}