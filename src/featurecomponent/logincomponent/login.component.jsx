import './login.component.css';
import logo from '../../asserts/logod.png';
import img1 from '../../asserts/doctorimg.png';
import { Lock } from 'react-bootstrap-icons';
export function LoginComponent() {

    return (
        <div>
            <div className='row'>
                <div className='login-background col-6'>
                    <img className='logo1' src={logo}></img>
                    <h1 className='heading-1'>Bayanno Hospital</h1>
                    <h1 className='heading-2'>Management System</h1>
                    <div>
                        <input type='text' placeholder='Email' className='form-control email'></input>
                        <input type='password' placeholder='Password' className='form-control password'></input>
                        <a href='/admindashboard'>
                        <button className='login-button'>Login <Lock className='lock-icon'></Lock> </button>
                        </a>
                        <p className='fypassword'>Forgot Your Password ?</p>
                    </div>
                </div>
                <div className='col-6'>
                    <img className='image' src={img1}></img>
                </div>
            </div>
        </div>
    )
}