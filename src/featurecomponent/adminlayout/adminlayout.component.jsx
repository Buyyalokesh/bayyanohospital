import { AccountantComponent } from "../../commoncomponent/Accountantcomponent/accountant.component";
import { Headercomponent } from "../../commoncomponent/Headercomponent/Header.component";
import { LabaratoryComponent } from "../../commoncomponent/LabaratoryComponent/Labaratory.component";
import { NurseComponent } from "../../commoncomponent/Nursecomponent/nurse.component";
import { PharmacistComponent } from "../../commoncomponent/PharmacistComponent/pharmacist.component";
import { ReciptionistComponent } from "../../commoncomponent/Reciptionistcomponent/Reciptionist.Component";
import { Dashboard } from "../../commoncomponent/dashboard/dashboard.component";
import { DepartmentComponent } from "../../commoncomponent/departmentcomponent/department.component";
import { DoctorComponent } from "../../commoncomponent/doctorcomponent/doctor.component";
import { PatientComponent } from "../../commoncomponent/patientcomponent/patient.component";
import { AdminMenu } from "../adminmenu/adminmenu.component";



export function AdminLayout() {
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <AdminMenu></AdminMenu>
                </div>
                <div className="col-8">
                    <div> 
                        <Headercomponent></Headercomponent>
                    </div>
                    <div>
                        <Dashboard></Dashboard>
                    </div>
                </div>
            </div>
        </div>
    )
}