import logo from '../../asserts/logod.png';
import imageA from '../../asserts/about.png';
import aboutus from '../../asserts/aboutus.png';
import world from  '../../asserts/world.png';
import subff from '../../asserts/Imagefont.png';
import makee from '../../asserts/makee.png';


import './about.component.css'; 

export function AboutComponent(){
    return(
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
                    <li className='blog-style'>BLOG</li>
                    <li className='contact-style'>CONTACT</li>

                    <a href="/login">
                        <li className='login-style'>LOGIN</li>
                    </a>
                </ol>
            </div>
            <div>
                <img className='imageabout' src={imageA}></img>
            </div>
            <div>
                <img src={aboutus}></img>
            </div>
            <div>
                <img className='world' src={world}></img>
            </div>
            <div>
                <img className='subff' src={subff}></img>
            </div>
            <div>
                <img className='makeA' src={makee}></img>
            </div>
            <div>
                 <a href='/appointment'>
                 <h3 className='HII'>HIIII</h3>
                 </a>
            </div>
            <div className='backgrounnd-container'>
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