import './adminmenu.component.css';
import logo from '../../asserts/logod.png';
import adminlogo from '../../asserts/adminlogo.jpg';
import { Diagram3Fill, Envelope, FileEarmarkMedical, HospitalFill, Justify, PcDisplayHorizontal, PersonFill, PersonSquare, PersonVcardFill, PlusSquare, WrenchAdjustable } from 'react-bootstrap-icons';

export function AdminMenu() {
    return (
        <div>
            <div>
                <div className="headingbackground">
                    <img className='logoD' src={logo}></img>
                    <div>
                        <img className='Alogo' src={adminlogo}></img>
                        <p className='wel'>welcome,</p>
                        <span className='MA'>MR.ADMIN</span>
                        <Justify className='justify'></Justify>
                    </div>
                    <div>
                        <div>
                            <PcDisplayHorizontal className='pc-icon'></PcDisplayHorizontal>
                            <a href='/admindashboard'>
                            <h3 className='textboard'>DashBoard</h3>
                            </a>
                        </div>
                        <div>
                            <Diagram3Fill className='Dept-icon'></Diagram3Fill>
                           <a href='/department'>
                           <h3 className='textdept'>Deparment</h3>
                           </a>
                        </div>
                        <div>
                            <PersonSquare className='Doc-icon'></PersonSquare>
                           <a href='/doctor'>
                           <h3 className='textdoc'>Doctor</h3>
                           </a>
                        </div>
                        <div>
                            <PersonFill className='paictent-icon'></PersonFill>
                            <a href='/patient'>
                            <h3 className='textpat'>patient</h3>
                            </a>
                        </div>
                        <div>
                            <PlusSquare className='nur-icon'></PlusSquare>
                            <a href='/nurse'>
                            <h3 className='textnurse'>Nurse</h3>
                            </a>
                        </div>
                        <div>
                            <HospitalFill className='hos-icon'></HospitalFill>
                           <a href='/reciptionist'>
                           <h3 className='textpharma'>phramacist</h3>
                           </a>
                        </div>
                        <div>
                            <PersonFill className='lab-icon'></PersonFill>
                          <a href='/reciptionist'>
                          <h3 className='textlab'>Labaratory</h3>
                          </a>
                        </div>
                        <div>
                            <PersonVcardFill className='acc-icon'></PersonVcardFill>
                            <a href='/reciptionist'>
                            <h3 className='textacc'>Accountant</h3>
                            </a>
                        </div>
                        <div>
                            <PlusSquare className='rep-icon'></PlusSquare>
                             <a href='/reciptionist'>
                             <h3 className='textrep'>Reciptionist</h3>
                             </a>
                        </div>
                        <div>
                            <WrenchAdjustable className='set-icon'></WrenchAdjustable>
                            <h3 className='textset'>monitor hospital</h3>
                        </div>
                        <div>
                            <Envelope className='e-icon'></Envelope>
                            <h3 className='texte'>payroll</h3>
                        </div>
                        <div>
                            <Envelope className='e-icon'></Envelope>
                            <h3 className='texte'>Noticeboard</h3>
                        </div>
                        <div>
                            <WrenchAdjustable  className='e-icon'></WrenchAdjustable >
                            <h3 className='texte'>setting</h3>
                        </div>
                        <div>
                            <Envelope className='e-icon'></Envelope>
                            <h3 className='texte'>Frontend</h3>
                        </div>
                        <div>
                            <Envelope className='e-icon'></Envelope>
                            <h3 className='texte'>Contact Email</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
