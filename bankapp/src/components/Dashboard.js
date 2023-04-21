import axios from "axios";
import React, { useState,useEffect } from "react"

function Dashboard() {

    const [bal,setBal] = useState('');

    function fetchBal(){}
    function AddCC(urlOfTheLibrary) {
        const script = document.createElement('link');
        script.href = urlOfTheLibrary;
        script.rel = "stylesheet";
        script.type = "text/css";
        document.head.appendChild(script);
    }
    useEffect(()=>{
        const info = localStorage.getItem('token')
        if(!info){
            window.location.href='/login'
        }
    },[])
    return (

        <React.Fragment>
            {AddCC("/styles/style.css")}
            {AddCC('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css')}
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <nav class="navbar navbar-expand-lg" style={{ marginLeft: 15, marginRight: 15 }}>
                            <div class="container">
                                <div>
                                    <button class="btn">
                                        <img src="/images/logo1.png" width="100px" height="50px" alt="" />
                                    </button>
                                </div>

                                <div class="d-flex align-items-center">
                                    <button class="btn"><i class="fa fa-comments" aria-hidden="true"></i></button>
                                    <button class="btn"><i class="fa fa-volume-control-phone" aria-hidden="true"></i></button>
                                    <button class="btn"><i class="fa fa-bell-o" aria-hidden="true"></i></button>
                                    <button class="btn"><i class="fa fa-user" aria-hidden="true"></i></button>
                                    <button class="btn" data-toggle="modal" data-target="#myModal"><i class="fa fa-power-off"
                                        aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            <nav class="navbar navbar-expand-lg py-2" style={{ marginLeft: 140, marginRight: 140 }}>
                <div class="container-fluid">
                    <div class="container" id="grad1" style={{ borderRadius: 10, color: 'white' }}>

                        <div>
                            <div class="row">
                                <div class="col-lg-6"><span style={{ float: 'left' }}>Welcome</span></div>
                                <div class="col-lg-6"><span style={{ float: 'right' }}>Last Login</span></div>
                            </div>
                            <ul class="navbar-nav me-auto mb-3 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="/dashboard" id="col">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#" id="col">Accounts</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#" id="col">Bill Payments</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#" id="col">Payments</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#" id="col">Investments</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#" id="col">Insurence</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#" id="col">Requests</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>

            <div>
                <div style={{ marginLeft: 150, marginRight: 150, marginTop: 20, borderRadius: 5 }}>
                    <div class="container-fluid">
                        <div class="row" style={{ width: 100 + '%' }}>


                            <div class="col-lg-4">
                                <div class="card" style={{ width: 18 + 'rem', height: 310, borderRadius: 12 }}>

                                    <div class="card-body">
                                        <div class="card-title bg-body-secondary" style={{
                                            width: 285, height: 40,
                                            marginLeft: -15,
                                            marginTop: -15,
                                            borderRadius: 10,
                                            background: '#c1bfbf'
                                        }}>
                                            <h5 style={{ marginLeft: 20, color: 'rgb(1, 1, 145)', paddingTop: 10, }}>Quick Links
                                            </h5>
                                        </div>
                                        <div>
                                            <div class="btn-group-vertical text-left" style={{
                                                width: 285, height: 45,
                                                marginLeft: -15,
                                                marginTop: 110,
                                                color: 'rgb(11, 11, 196)'
                                            }}>
                                                <button type="button" class="btn border-bottom" style={{ textAlign: 'left' }}><i
                                                    class="fa fa-inr " style={{ color: 'red' }}
                                                    aria-hidden="true"></i>&nbsp;&nbsp;Open Term Deposite</button>
                                                <button type="button" class="btn border-bottom" style={{ textAlign: 'left' }}><i
                                                    class="fa fa-credit-card-alt " style={{ color: 'red' }}
                                                    aria-hidden="true"></i>&nbsp;&nbsp; Upgrade Your Credit Card</button>
                                                <button type="button" class="btn border-bottom" style={{ textAlign: 'left' }}><i
                                                    class="fa fa-exchange " style={{ color: 'red' }}
                                                    aria-hidden="true"></i>&nbsp;&nbsp;Fund Transfer - Other bank</button>
                                                <button type="button" class="btn border-bottom" style={{ textAlign: 'left' }}><a href="/statement"><i
                                                    class="fa fa-file-text " style={{ color: 'red' }}
                                                    aria-hidden="true" ></i>&nbsp;&nbsp;Account Statement</a></button>
                                                <button type="button" class="btn border-bottom" style={{ textAlign: 'left' }}><i
                                                    class="fa fa-user-circle-o" style={{ color: 'red' }}
                                                    aria-hidden="true"></i>&nbsp;&nbsp;Re-KYC</button>
                                                <button type="button" class="btn border-bottom" style={{ textAlign: 'left' }}><i
                                                    class="fa fa-id-card" style={{ color: 'red' }}
                                                    aria-hidden="true"></i>&nbsp;&nbsp;Debit Card Pin Set/Reset</button>
                                                <button type="button" class="btn" style={{ textAlign: 'left' }}><i
                                                    class="fa fa-files-o" style={{ color: 'red' }}
                                                    aria-hidden="true"></i>&nbsp;&nbsp;OD Against FD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br />

                            </div>
                            <div class="col-lg-8">
                                <div class="container" style={{ border: ('1px solid grey'), borderRadius: 10 }}>
                                    <div class="card-body">
                                        <div class="card-title"
                                            style={{ background: '#c1bfbf', marginLeft: -12, marginRight: -12, borderRadius: 10 }}>
                                            <h5
                                                style={{ color: 'rgb(1, 1, 145)', paddingTop: 5, paddingBottom: 5, paddingLeft: 10 }}>
                                                Financial Overview
                                                <button type="button" class="btn btn-primary"
                                                    style={{ float: 'right', height: 35, width: 35, marginTop: -5 }}><i
                                                        class="fa fa-refresh" style={{ color: 'white' }}
                                                        aria-hidden="true"></i></button>


                                            </h5>
                                        </div>
                                        <div style={{ marginTop: 20 }}>
                                            <button type="button" class="btn btn-primary border">Bank Accounts</button>
                                            <button type="button" class="btn border" style={{ paddingLeft: 10 }}>Term
                                                Deposites</button>
                                            <button type="button" class="btn border" style={{ paddingLeft: 10 }}>Loans</button>
                                            <button type="button" class="btn border" style={{ paddingLeft: 10 }}>Credit
                                                Cards</button>
                                            <button type="button" class="btn border" style={{ paddingLeft: 10 }}>Demat</button>
                                            <button type="button" class="btn border" style={{ paddingLeft: 10 }}>Mutual
                                                Funds</button>
                                        </div>
                                        <div>
                                            <table class="table table-hover" style={{ marginTop: 20 }}>
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Account Name</th>
                                                        <th scope="col">Account Number</th>
                                                        <th scope="col">Account Balance</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr class="border">
                                                        <td>Ramesh Kumar</td>
                                                        <td>309017160553</td>
                                                        <td><i class="fa fa-inr" aria-hidden="true"></i>2165.64</td>
                                                        <td><button type="button" class="btn btn-primary" data-dismiss="modal"
                                                            style={{ borderRadius: 25 }}>Account Details</button></td>
                                                        <td><button type="button" class="btn btn-primary" data-dismiss="modal"
                                                            style={{ borderRadius: 25 }}>Statement</button></td>
                                                    </tr>
                                                    <tr class="border" style={{ marginTop: 10 }}>
                                                        <td>Ramesh Kumar</td>
                                                        <td>309017160553</td>
                                                        <td><i class="fa fa-inr" aria-hidden="true"></i>2165.64</td>
                                                        <td><button type="button" class="btn btn-primary" data-dismiss="modal"
                                                            style={{ borderRadius: 25 }}>Account Details</button></td>
                                                        <td><button type="button" class="btn btn-primary" data-dismiss="modal"
                                                            style={{ borderRadius: 25 }}>Statement</button></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="myModal">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">

                        <div class="modal-body">
                            <span style={{ float: 'left', marginLeft: 10 + '%', marginTop: 5 }}><img src="/images/Logout.png"
                                style={{ height: 50, width: 50 }} /></span>
                            <span style={{ float: 'right', marginRight: 50 + '%' }}>
                                <h4 class="modal-title">Application Signoff</h4>
                                Are you sure you wish to Logout?
                            </span>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary modal-button" data-dismiss="modal"
                                style={{ borderRadius: 25 }}>Cancel</button>
                            <button type="button" class="btn btn-primary modal-button" data-dismiss="modal"
                                style={{ borderRadius: 25 }} onClick={()=>{
                                    localStorage.clear();
                                    window.location.href='/';
                                }}>Logout</button>
                        </div>

                    </div>
                </div>
            </div>
            <footer class="mainfooter fixed-bottom border-top" style={{marginBottom: 20}}>
                <span style={{marginLeft: 30}}>
                    <label>Privacy and Policy | </label>
                    <label>Terms and Conditions | </label>
                    <label>Security | </label>
                    <label>Bank Policies | </label>
                    <label>FAQs</label>
                </span>
                <span style={{float: 'right',marginRight: 30}}>
                    <label>Copyright RBL Bank,All rights reserved</label>
                </span>
            </footer>
        </React.Fragment >
    )
}

export default Dashboard;