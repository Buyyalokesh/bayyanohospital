
import './menu.component.css'
import logo from '../../asserts/logod.png';
import slider1 from '../../asserts/slider51.jpg';
import slider2 from '../../asserts/slider52.jpg';
import slider3 from '../../asserts/slider53.jpg';
import slider5 from '../../asserts/slider51.jpg';

import image00 from '../../asserts/carosuels.png';
import image01 from '../../asserts/book.png';
import image02 from '../../asserts/docf.png';
import image03 from '../../asserts/world.png';
import image04 from '../../asserts/heart.png';
import image05 from '../../asserts/clogo.png';
import image06 from '../../asserts/hlogo.png';
import image002 from '../../asserts/Imagefont.png';



export function MenuComponent() {
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
                        <a href='/doc'>
                            <li className='departments-style'>DEPARTMENTS

                            </li>
                        </a>
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
            <div >
            <div id="carouselExampleCaptions" className="carousel slide" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner" >
                        <div className="carousel-item active">
                            <img src={slider1} className="d-block imgs" align='center' style={{ width: '100%', height:'80vh' }} alt="..."></img>
                        </div>
                        
                        <div className="carousel-item">
                            <img src={slider2} className="d-block imgs" align='center'style={{ width: '100%', height:'80vh' }} alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={slider5} className="d-block imgs" align='center' style={{ width: '100%', height:'80vh' }}alt="..."></img>
                        </div>
                        <div className="carousel-item">
                            <img src={slider3} className="d-block imgs" align='center' style={{ width: '100%', height:'80vh' }} alt="..."></img>
                           
                        </div> 
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="Next">
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>  &nbsp; &nbsp; &nbsp;
                {/* <div>
                    <img className='immg' src={image00}></img>
                </div> */}
                <div>
                    <img className='immg1' src={image01}></img>
                </div>
                <div>
                    <img className='immg3' src={image02}></img>
                </div>
                <div>
                    <img className='immg4' src={image03}></img>
                </div>
                <div>
                    <img src={image002}></img>
                </div>
                <div>
                    <img className='immg5' src={image04}></img>
                </div>
                <div>
                    <img className='immg6' src={image05}></img>
                </div>
                <div>
                    <img className='immg7' src={image06}></img>
                    <a href='/appointment'>
                        <p className='text009'>--</p>
                    </a>
                </div>
                <div>
                    <a href='/appointment'>
                        <h3 className='text88'>hiii</h3>
                    </a>

                </div>
            </div>
            <div className='backgrounds-container'>
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



