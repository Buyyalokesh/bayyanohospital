import { Route, Routes } from "react-router-dom"
import { Headercomponent } from "./commoncomponent/Headercomponent/Header.component"
import { Dashboard } from "./commoncomponent/dashboard/dashboard.component"
import { AdminMenu } from "./featurecomponent/adminmenu/adminmenu.component"
import { MenuComponent } from "./featurecomponent/menucomponent/menu.component"
import { LoginComponent } from "./featurecomponent/logincomponent/login.component"
import { AppointmentComponent } from "./commoncomponent/appointment.component/appointment.component"
import { DepartmentComponent } from "./commoncomponent/departmentcomponent/department.component"
import { DoctorComponent } from "./commoncomponent/doctorcomponent/doctor.component"
import { PatientComponent } from "./commoncomponent/patientcomponent/patient.component"
import { NurseComponent } from "./commoncomponent/Nursecomponent/nurse.component"
import { PharmacistComponent } from "./commoncomponent/PharmacistComponent/pharmacist.component"
import { LabaratoryComponent } from "./commoncomponent/LabaratoryComponent/Labaratory.component"
import { AccountantComponent } from "./commoncomponent/Accountantcomponent/accountant.component"
import { ReciptionistComponent } from "./commoncomponent/Reciptionistcomponent/Reciptionist.Component"
import { DooctorsComponent } from "./doctoorscomponent/doctoors.component"
import { AboutComponent } from "./commoncomponent/AboutComponent/about.component"
import { BlogComponent } from "./commoncomponent/BlogComponent/blog.component"
import { ContactComponent } from "./commoncomponent/contactcomponent/contact.component"





export function Approute() {
    return (
       <Routes>
         <Route path="/" element={<MenuComponent></MenuComponent>} ></Route>
            <Route path="/login" element={<LoginComponent></LoginComponent>}></Route>
            <Route path="/appointment" element={<AppointmentComponent></AppointmentComponent>}></Route>
            <Route path="/departtt" element={''}></Route>
            <Route path="/Blog" element={<BlogComponent></BlogComponent>}></Route>
            <Route path="/contact" element={<ContactComponent></ContactComponent>}></Route>
            <Route path="/about" element={<AboutComponent></AboutComponent>}></Route>
            <Route path="/doc" element={<DooctorsComponent></DooctorsComponent>}></Route>
            <Route path="/admindashboard" element={<NavigateDashboard></NavigateDashboard>}></Route>
            <Route path="/admindashboard" element={<NavigateDashboard></NavigateDashboard>}></Route>
            <Route path="/department" element={<NavigateDepartment></NavigateDepartment>}></Route>
            <Route path="/doctor" element={<Navigatedoctor></Navigatedoctor>}></Route>
            <Route path="/patient" element={<Navigatepatient></Navigatepatient>}></Route>
            <Route path="/nurse" element={<Navigatenurse></Navigatenurse>}></Route>
            <Route path="/phramacist" element={<Navigatephramacist></Navigatephramacist>}></Route>
            <Route path="/Labaratory" element={<Navigatelabaratory></Navigatelabaratory>}></Route>
            <Route path="/Accountat" element={<Navigateaccountant></Navigateaccountant>}></Route>
            <Route path="/reciptionist" element={<Navigatereciptionist></Navigatereciptionist>}></Route>
            
       </Routes>
    )
}


function NavigateDashboard() {
    return (
        <div className="row">
            <div className="col-3">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-8">
                <div >
                    <Headercomponent></Headercomponent>
                </div>
                <div>
                    <Dashboard></Dashboard>
                </div>
            </div>
        </div>
    )
}
function NavigateDepartment() {
    return (
        <div className="row">
            <div className="col-3">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-8">
                <div >
                    <Headercomponent></Headercomponent>
                </div>
                <div>
                    <DepartmentComponent></DepartmentComponent>
                </div>
            </div>
        </div>
    )
}
function Navigatedoctor() {
    return (
        <div className="row">
            <div className="col-3">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-8">
                <div >
                    <Headercomponent></Headercomponent>
                </div>
                <div>
                    <DoctorComponent></DoctorComponent>
                </div>
            </div>
        </div>
    )
}
function Navigatepatient() {
    return (
        <div className="row">
            <div className="col-3">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-8">
                <div >
                    <Headercomponent></Headercomponent>
                </div>
                <div>
                    <PatientComponent></PatientComponent>
                </div>
            </div>
        </div>
    )
}
function Navigatenurse() {
    return (
        <div className="row">
            <div className="col-3">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-8">
                <div >
                    <Headercomponent></Headercomponent>
                </div>
                <div>
                 <NurseComponent></NurseComponent>
                </div>
            </div>
        </div>
    )
}
function Navigatephramacist() {
    return (
        <div className="row">
            <div className="col-3">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-8">
                <div >
                    <Headercomponent></Headercomponent>
                </div>
                <div>
                    <PharmacistComponent></PharmacistComponent>
                </div>
            </div>
        </div>
    )
}
function Navigatelabaratory() {
    return (
        <div className="row">
            <div className="col-3">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-8">
                <div >
                    <Headercomponent></Headercomponent>
                </div>
                <div>
                    <LabaratoryComponent></LabaratoryComponent>
                </div>
            </div>
        </div>
    )
}
function Navigateaccountant() {
    return (
        <div className="row">
            <div className="col-3">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-8">
                <div >
                    <Headercomponent></Headercomponent>
                </div>
                <div>
                    <AccountantComponent></AccountantComponent>
                </div>
            </div>
        </div>
    )
}
function Navigatereciptionist() {
    return (
        <div className="row">
            <div className="col-3">
                <AdminMenu></AdminMenu>
            </div>
            <div className="col-8">
                <div >
                    <Headercomponent></Headercomponent>
                </div>
                <div>
                    <ReciptionistComponent></ReciptionistComponent>
                </div>
            </div>
        </div>
    )
}
