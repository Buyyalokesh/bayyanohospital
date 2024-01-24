import { useEffect, useRef, useState } from "react";
import { ArrowRightCircle, Plus } from "react-bootstrap-icons";
import './nurse.component.css';
import { deleteNnurse, getnurse } from "../../services/addnurse.service";
import { GridComponent } from "../gridcomponent/grid.component";




export function NurseComponent() {

    //create a ref variable 
    const nursenameRef = useRef();
    const nurseEmailRef = useRef();
    const nursepasswordRef = useRef();
    const nurseaddressRef = useRef();
    const nursephoneRef = useRef();
    const nurseidRef = useRef(0);

    //create a variable for header section
    const [nursetypegridheaders, setnursetypegridheaders] = useState(["ID", "Name", "Email", "Password", "Address", "Phone", "options"]);

    // create a variable for body section
    const [nursetypeofdata, setnursetypeofdata] = useState([]);


    // //create a function for get data from API.
    function getnursetypedata() {
        getnurse().then((res) => { setnursetypeofdata(res.data) });
    }

    useEffect(() => {
        getnursetypedata();
    }, []);

    const [receptionid, setreceptionid] = useState(0);


    function editnursedata(value) {
        // nameref.current.value = value.name;
        // descref.current.value = value.description;

        nursenameRef.current.value = value.Name;
        nurseEmailRef.current.value = value.Email;
        nursepasswordRef.current.value = value.Password;
        nurseaddressRef.current.value = value.Address;
        nursephoneRef.current.value = value.Phone;

        setSavebtn('update');

        nurseidRef.current.value = value.id;
    }


    function deletenursedata(value) {
        let confrimDelete = window.confirm("Are You sure you want to delete the record")
        if (confrimDelete == true) {
            deleteNnurse(value.id)
                .then((res) => {

                    //   clearDoctordata();
                    getnursetypedata();

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
                <ArrowRightCircle className="arrow-icon9"></ArrowRightCircle>
                <p className='nursetext'>Nurse</p>
            </div>
            <div className="showform">
                <button onClick={() => setShowForm(!showForm)} className='add-Nurse'><Plus className='plus-icon7'></Plus>Add Nurse</button>
            </div>
            {showForm && (
                <form method="post" action="http://localhost:4002/savenurse" >
                    <div className="addnurseForm">
                        {/* <div>
                            <input type="hidden" ref={nurseidRef} name="nurseimptid"></input>
                        </div> */}
                        <div className='form-group'>
                            <label for="field-1" className='col-sm-3 control-label namehead'>Name</label>
                            <div className='col-sm-7 nameheader'>
                                <input type='name' name='Name' className='from-control' id='field-1' required='' ref={nursenameRef} ></input>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label for="field-1" className='col-sm-3 control-label namehead'>Email</label>
                            <div className='col-sm-7 nameheader'>
                                <input type='Email' name='Email' className='from-control' id='field-1' required='' ref={nurseEmailRef} ></input>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label for="field-1" className='col-sm-3 control-label passwordtext'>Password</label>
                            <div className='col-sm-7 nameheader'>
                                <input type='password' name='Password' className='from-control-label' id='field-1' required='' ref={nursepasswordRef} ></input>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label for="field-ta" className='col-sm-3 control-label adress'>Address</label>
                            <div className='col-sm-7 adressbox'>
                                <textarea name='Address' className='form-control' id='field-ta' rows='3' ref={nurseaddressRef}></textarea>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label for="field-ta" className='col-sm-3 control-label phonetext2'>Phone</label>
                            <div className='col-sm-7 nameheader'>
                                <input type='phone' name="Phone" className='form-control-label' id='field-1' ref={nursephoneRef}></input>
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
            <GridComponent tittle={'add table'} headers={nursetypegridheaders} body={nursetypeofdata}
                edititemfromgrid={(value) => { editnursedata(value) }}
                deleteRecord={(value) => { deletenursedata(value) }}
            ></GridComponent>
        </div>
    )
}