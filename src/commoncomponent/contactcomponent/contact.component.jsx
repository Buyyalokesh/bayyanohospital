
import cont from '../../asserts/contact.png';
import headd from '../../asserts/Header.png';
import logo from '../../asserts/logod.png';
import './contact.component.css';
export function ContactComponent() {
    return (
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
                    <li className='contact-style'>CONTACT</li>

                    <a href="/login">
                        <li className='login-style'>LOGIN</li>
                    </a>
                </ol>
            </div>
            <div>
                <img className='conttt1' src={cont}></img>
            </div>
            <div className='icon2'>
                <form method='post' action='http://localhost:4002/savecontact'>
                    <div className='row'>
                        <div className='col-4'>
                            <p className='yourname'>Your Name</p>
                            <input type='text' className='form-control name' id="Yourname" ></input>
                        </div>
                        <div className='col-6'>
                            <p className='yournames'>Your Name</p>
                            <input type='text' className='form-control names' id="Yourname" ></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4'>
                            <p className='yourname'>Phone</p>
                            <input type='text' className='form-control name' id="Yourname" ></input>
                        </div>
                        <div className='col-4'>
                            <p className='yournames'>Adress</p>
                            <input type='text' className='form-control names' id="Yourname" ></input>
                        </div>
                        <p className='messageheading'>Message</p>
                        <textarea className='form-control textarea' id="Message" ></textarea>
                    </div>
                    <input type='submit' className='button'></input>
                </form>
            </div>

            <div className='backggground-container'>
                <div className='row'>

                    <div className='col-4'>
                        <img className='logo-footer' src={logo}></img>
                        <h1 className='bayanno-heading'>Bayanno Diagnostic Center</h1>
                    </div>
                    <div className='col-4 headi1'>
                        <p className='main-footer'>MAIN MENU</p>
                        <a href='/'>
                            <p className='home-footer'>Home</p>
                        </a>
                        <a href='/doc'>
                            <p className='doctor-footer'>Doctors</p>
                        </a>
                        <a href='/appointment'>
                            <p className='appointment-footer'>MAke An Appointment</p>
                        </a>
                        <a href='/login'>
                            <p className='login-footer'>Login</p>
                        </a>
                    </div>
                    <div className='col-4 headi2'>
                        <p className='help-footer'>HELP AND SUPPORT</p>
                        <a href='/contact'>
                            <p className='contact-footer'>Contact Us</p>
                        </a>
                        <a href='/about'>
                            <p className='about-footer'>About Us</p>
                        </a>
                        <a href='/Blog'>
                            <p className='blog-footer'>Blog</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}