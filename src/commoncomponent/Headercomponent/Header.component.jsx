


import { ArrowRight, Globe, Person } from 'react-bootstrap-icons';
import './Header.component.css';



export function Headercomponent(){
    return(
        <div>
            <div className='maincontainer'>
                <h1 className='head-line'>Bayanno Hospital Management System</h1>
                <ol className='menubar'>
                 <li className='admintext'>
                    <Person className='person-icon3'></Person> Admin
                 </li>
                 <li className='webtext'>
                    <Globe className='globe-icon'></Globe> website
                 </li>
                <a href='/'>
                <li className='logouttext'>
                 Logout <ArrowRight className='log-icon'></ArrowRight> 
                 </li>
                </a>
                </ol>
            </div>
        </div>
    )
}