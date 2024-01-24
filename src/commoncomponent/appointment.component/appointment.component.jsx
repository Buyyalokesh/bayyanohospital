import './appointment.component.css'
import logo1 from '../../asserts/APPINTBACK.png';
import logo from '../../asserts/logod.png';
import { useRef } from 'react';
import { saveUssser } from '../../services/addappointment.service';

export function AppointmentComponent() {


    //create a ref variable
    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const dateRef = useRef();
    const departmentRef =useRef();
    const doctorRef = useRef();
   const messageRef =useRef();

  //create a save function for patiemt
function Saveappointmentdata(){
    let data = {
        id:0,
        Name:nameRef.current.value,
        Email:emailRef.current.value,
        Phone:phoneRef.current.value,
        Date:dateRef.current.value,
        Department:departmentRef.current.value,
        doctor:doctorRef.current.value,
        message:messageRef.current.value,
        
    };
    saveUssser(data).then(()=>{
        alert("saved successfull    ");
    }).catch(()=>{
        alert("not added");
    })
}


    return (
        <>
            <div>
            <div className='background-1'>
                <ol className='menubars'>

                    <li className='bayanno-style'><img className='logo' src={logo}></img>
                        Bayanno Diagnostic Center   </li>
                   <a href='/'>
                   <li className='home-style'>HOME</li>
                   </a>
                    <a >
                        <li className='departments-style'>DEPARTMENTS
                        </li>
                    </a>
                    <a href='/doc'>
                        <li className='doctors-style'>DOCTORS</li>
                    </a>
                    <a href='/about'>
                        <li className='about-style'>ABOUT</li>
                    </a>
                    <a href='/appointment'>
                        <li className='appointment-style'>APPOINTMENT</li>
                    </a>
                    <a href='/Blog'>
                  <li className='blog-style'>BLOG</li>
                  </a>
                    <a href='/contact'>
                    <li className='contact-style'>CONTACT</li>
                    </a>

                    <a href="/login">
                        <li className='login-style'>LOGIN</li>
                    </a>
                </ol>
            </div>
                <div className="appointment-body" >
                      <img className='img-log' src={logo1}></img>
                </div>
                <div className='bg-light '>

                    <h2 className='text-center mt-3'>Make An Appointment</h2>
                    <br></br>
                    <hr></hr>
                    <form className='form container' style={{ width: '750px' }}>
                        <div>
                            <label>Name :</label>
                        </div>
                        <div>
                            <input type='text' placeholder='patient name' className='form-control' id='appointmentName' ref={nameRef}></input>
                        </div>
                        <div>
                            <label>Email :</label>
                        </div>
                        <div>
                            <input type='email' placeholder='patient name' className='form-control' id='appointmentEmail' ref={emailRef}></input>
                        </div>
                        <div>
                            <label>Phone :</label>
                        </div>
                        <div>
                            <input type='number' placeholder='patient name' className='form-control' id='appointmentPhone' ref={phoneRef}></input>
                        </div>
                        <div>
                            <label>Date :</label>
                        </div>
                        <div>
                            <input type='date' placeholder='patient name' className='form-control' id='appointmentDate'ref={dateRef} ></input>
                        </div>
                        <div>
                            <label>Department :</label>
                        </div>
                        <div>
                            <select className='form-control' id='appointmentDepartment' ref={departmentRef}>
                                <option>Select Deartment</option>
                                <option>Anesthetics</option>
                                <option>Cardiology</option>
                                <option>Gastroenterology</option>
                            </select>
                        </div>
                        <div>
                            <label>Doctor :</label>
                        </div>
                        <div>
                            <select className='form-control' id='appointmentDoctor' ref={doctorRef}>
                                <option>Select Doctor</option>
                                <option>DR.HARSHA</option>
                                <option>DR.SANDEEP</option>
                                <option>DR.SAI</option>
                            </select>
                        </div>
                        <div>
                            <label>Message :</label>
                        </div>
                        <div>
                            <textarea rows={5} className='form-control' placeholder='your message to thr Doctor' id='appointmentMessage' ref={messageRef}></textarea>
                        </div>
                        <br></br>
                        <br></br>
                        <button className='appointment-btn btn' onClick={(()=>{Saveappointmentdata()})}> Book Now </button>
                    </form>
                </div>

            </div>
        </>
    )
}