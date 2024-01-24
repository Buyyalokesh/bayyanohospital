import { ArrowRightCircle } from "react-bootstrap-icons";
import './dashboard.component.css';



export function Dashboard(){
    return(
        <div>
            <div>
                <ArrowRightCircle className="arrow-icon"></ArrowRightCircle>
                <h1 className="dashboardA">Admin Dashboard</h1>
            </div>
            <div className="row">
                <div className="card1 col-3">
                    <h1 className="number-1">2</h1>
                   <a href="/doctor">
                   <p className="Dtext">Doctor</p>
                   </a>
                </div>
                <div className="card2 col-3">
                    <h1 className="number-2">1</h1>
                   <a href="/patient">
                   <p className="ptext">Patient</p>
                   </a>
                </div>
                <div className="card3 col-3">
                    <h1 className="number-3">1</h1>
                    <a href="/nurse">
                    <p className="Ntext">Nurse</p>
                    </a>
                
                </div>
                <div className="card4 col-3">
                    <h1 className="number-4">1</h1>
                    <p className="Ltxt">Pharmacist</p>
                </div>
                <div className="card1 col-3">
                    <h1 className="number-5">2</h1>
                    <p className="ltxt">Laboratorist</p>
                </div>
                <div className="card2 col-3">
                    <h1 className="number-6">1</h1>
                    <a href="/reciptionist">
                    <p className="atxt">Accountant</p>
                    </a>
                   
                </div>
                <div className="card3 col-3">
                    <h1 className="number-7">1</h1>
                    <p className="ptxt">Payment</p>
                </div>
                <div className="card4 col-3">
                    <h1 className="number-8">1</h1>
                    <p className="textm">medicine</p>
                </div>
                <div className="card1 col-3">
                    <h1 className="number-9">2</h1>
                    <p className="otxt">Operation Report</p>
                </div>
                <div className="card10 col-3">
                    <p className="btext">Birth Report</p>
                </div>
                <div className="card11 col-3">
                    <p className="dtext">Death Report</p>
                </div>
            </div>
        </div>
    )
}