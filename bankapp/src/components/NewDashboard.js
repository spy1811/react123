import { useState,useEffect } from "react";
import HeaderPage from "./HeaderPage";
import axios from "axios";

function NewDashboard() {
    const [bal,setBal] = useState([]);
    const uname = localStorage.getItem('uname');
    function fetchBal() {
        // axios.get('http://localhost:8080/api/v1/auth/topRecord')
        // axios.get('http://54.183.245.156:8080/api/v1/auth/topRecord')
        axios.get('https://vishnusudarshana.vertextechnosys.com/api/info')
            .then((res) => {
                console.log(res.data)
                // var temp = [];
                // temp.push(res.data)
                setBal(res.data);
            })
    }
    useEffect(() => {
        const info = localStorage.getItem('token')
        if (!info) {
            window.location.href = '/login'
        }
        fetchBal();
    }, [])
    return (
        <div class="container-fluid">

            <HeaderPage />
            <div class="container">
                <div class="row">


                    <div class="col-lg-4 px-0">
                        <div class="card" style={{ width: "18rem", height: "360px", borderRadius: "12px" }}>

                            <div class="card-body py-0">
                                <div class="card-title " style={{
                                    width: "287px", height: "40px",
                                    marginLeft: "-20px",
                                    borderRadius: "10px",
                                    background: "#e6e6e6"
                                }}>
                                    <h5 style={{ marginLeft: "20px", color: "rgb(1, 1, 145)", paddingTop: "5px" }}>Quick Links</h5>
                                </div>
                                <div>
                                    <div class="btn-group-vertical text-left" style={{
                                        width: "287px", height: "45px",
                                        marginLeft: "-20px",
                                        marginTop: "125px",
                                        color: "rgb(11, 11, 196)"
                                    }}>
                                        <button type="button" class="btn border-bottom" style={{ textAlign: "left", paddingLeft: 20 }}><i class="fa fa-inr " style={{ color: "red", width: "10px" }} aria-hidden="true"></i><label style={{ marginLeft: "22px" }}>Open Term Deposite</label></button>
                                        <button type="button" class="btn border-bottom" style={{ textAlign: "left", paddingLeft: 20 }}><i class="fa fa-credit-card-alt " style={{ color: "red", width: "10px" }} aria-hidden="true"></i><label style={{ marginLeft: "22px" }}> Upgrade Your Credit Card</label></button>
                                        <button type="button" class="btn border-bottom" style={{ textAlign: "left", paddingLeft: 20 }}><i class="fa fa-exchange " style={{ color: "red", width: "10px" }} aria-hidden="true"></i><label style={{ marginLeft: "22px" }}>Fund Transfer - Other bank</label></button>
                                        <button type="button" class="btn border-bottom" style={{ textAlign: "left", paddingLeft: 20 }}><i class="fa fa-file-text " style={{ color: "red", width: "10px" }} aria-hidden="true"></i><label style={{ marginLeft: "22px" }}>Account Statement</label></button>
                                        <button type="button" class="btn border-bottom" style={{ textAlign: "left", paddingLeft: 20 }}><i class="fa fa-user-circle-o" style={{ color: "red", width: "10px" }} aria-hidden="true"></i><label style={{ marginLeft: "22px" }}>Re-KYC</label></button>
                                        <button type="button" class="btn border-bottom" style={{ textAlign: "left", paddingLeft: 20 }}><i class="fa fa-id-card" style={{ color: "red", width: "10px" }} aria-hidden="true"></i><label style={{ marginLeft: "22px" }}>Debit Card Pin Set/Reset</label></button>
                                        <button type="button" class="btn" style={{ textAlign: "left", paddingLeft: 20 }}><i class="fa fa-files-o" style={{ color: "red", width: "10px" }} aria-hidden="true"></i><label style={{ marginLeft: "22px" }}>OD Against FD</label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />

                    </div>
                    <div class="col-lg-8 px-0">
                        <div style={{ border: "1px solid #e6e6e6", borderRadius: "10px" }}>
                            <div class="card-body px-0">
                                <div class="card-title " style={{
                                    width: "auto", height: "40px",

                                    marginTop: "-20px",
                                    borderRadius: "10px",
                                    background: "#e6e6e6"
                                }}>
                                    <h5 style={{ marginLeft: "20px", color: "rgb(1, 1, 145)", paddingTop: "5px" }}>Financial Overview <button type="button" class="btn btn-primary" style={{ float: "right", height: "40px", width: "35px", marginTop: "-10px", borderRadius: "10px", marginTop: -5 }}><i class="fa fa-refresh" style={{ color: "white" }} aria-hidden="true"></i></button></h5>

                                </div>
                            </div>
                            <div>
                                <button type="button" class="btn btn-primary border">Bank Accounts</button>
                                <button type="button" class="btn border">Term Deposites</button>
                                <button type="button" class="btn border">Loans</button>
                                <button type="button" class="btn border">Credit Cards</button>
                                <button type="button" class="btn border">Demat</button>
                                <button type="button" class="btn border">Mutual Funds</button>
                            </div>
                            <div>
                                <table class="table" style={{ marginTop: "10px" }}>
                                    <thead style={{ border: "none" }}>
                                        <tr>
                                            <th scope="col">Account Name</th>
                                            <th scope="col">Account Number</th>
                                            <th scope="col">Account Balance</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bal.length>0 && <tr class="border">
                                            <td>{uname}</td>
                                            <td>409001795135</td>
                                            <td><i class="fa fa-inr" aria-hidden="true"></i>{bal[0].bal}</td>
                                            <td><button type="button" class="btn btn-primary" data-dismiss="modal"
                                                style={{ borderRadius: 25 }}>Account Details</button></td>
                                            <td><button type="button" class="btn btn-primary" data-dismiss="modal"
                                                style={{ borderRadius: 25 }}>Statement</button></td>
                                        </tr>}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )

}

export default NewDashboard;