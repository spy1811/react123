import axios from "axios";
import React, { useState, useEffect } from "react"
function Statement() {

    const [statements, setStatements] = useState([]);
    const info = localStorage.getItem('token')
    function AddCC(urlOfTheLibrary) {
        const script = document.createElement('link');
        script.href = urlOfTheLibrary;
        script.rel = "stylesheet";
        script.type = "text/css";
        document.head.appendChild(script);
    }
    function fetchStatements() {

        axios.get('http://54.219.82.182:8080/api/v1/auth/getTransaction', { headers: { 'Authorization': 'Bearer ' + info } })
            .then((res) => {
                const data = res.data;

                setStatements(data);
                // console.log(statements)
            })
        // .catch((err)=>{
        //     alert('Invalid Authetication')
        //     // window.location.href='/login'

        // })
    }
    useEffect(() => {

        if (!info) {
            window.location.href = '/login'
        }
        else {
            fetchStatements();
        }
    }, [])
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
                                        <img src="/images/logo1.png" width="100," height="50," alt="" />
                                    </button>
                                </div>

                                <div class="d-flex align-items-center">
                                    <button class="btn"><i class="fa fa-comments" aria-hidden="true"></i> </button>
                                    <button class="btn"><i class="fa fa-volume-control-phone" aria-hidden="true"></i> </button>
                                    <button class="btn"><i class="fa fa-bell-o" aria-hidden="true"></i> </button>
                                    <button class="btn"><i class="fa fa-user" aria-hidden="true"></i> </button>
                                    <button class="btn" data-toggle="modal" data-target="#myModal"><i class="fa fa-power-off"
                                        aria-hidden="true"></i> </button>
                                </div>
                            </div>
                        </nav>
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
                                style={{ borderRadius: 25 }} onClick={() => {
                                    localStorage.clear();
                                    window.location.href = '/'
                                }}>Logout</button>
                        </div>

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
                <nav class="navbar navbar-collapse-lg " style={{ marginLeft: 150, marginRight: 150, marginTop: 20, }}>
                    <div class="container-fluid">
                        <div class="row" style={{ width: 150 + '%', marginLeft: -33, }}>
                            <div class="col-lg-8">
                                <div class="container" style={{ border: '1, solid rgb(189, 188, 188)', borderRadius: 5 }}>

                                    <div class="" style={{ marginLeft: -11, }} id="g">Account Statement</div>

                                    <div class=" " id="g"
                                        style={{ marginTop: 20, width: 100 + '%', marginLeft: -11, marginRight: -12, }}>
                                        Advance Filters
                                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                    </div><br />

                                    <div class="row" style={{ width: 100 + '%' }}>
                                        <div class="col-lg-6">Download:
                                            <a style={{ padding: 10, fontSize: 20 }}><i class="fa fa-file-excel-o" aria-hidden="true"></i></a>
                                            <a style={{ padding: 10, fontSize: 20 }}><i class="fa fa-file-pdf-o" aria-hidden="true"></i></a>
                                            <a style={{ padding: 10, fontSize: 20 }}><i class="fa fa-file-text-o ml-5" aria-hidden="true"></i></a>
                                            <a></a>
                                        </div>

                                        <div class="col-lg-6">

                                            <button style={{
                                                backgroundColor: 'white', borderRadius: 10, float: 'right',
                                                color: 'rgba(0, 128, 0, 0.925)'
                                            }}>Back</button>
                                        </div><br /><br />

                                        <div class="" style={{ marginLeft: 0, }} id="g"><label>Statement</label></div>
                                        <table class=" table table-bordered" style={{ marginTop: 0, }}>
                                            <thead>
                                                <tr>
                                                    <th>Transition Date</th>
                                                    <th>Transition Details</th>
                                                    <th>Chq No.</th>
                                                    <th>Value Date</th>
                                                    <th>Amount</th>
                                                    <th>Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {statements.map((obj) => {
                                                    return (<tr>
                                                        <td>{obj.tdate}</td>
                                                        <td>{obj.tdetails}</td>
                                                        <td>{obj.chqno}</td>
                                                        <td>{obj.vdate}</td>
                                                        <td>{obj.amt}</td>
                                                        <td>{obj.bal}</td>
                                                    </tr>)
                                                })
                                                }
                                            </tbody>
                                        </table>
                                    </div>

                                    <div>
                                        <div><b>Please Note:</b><br /><br />
                                            <div style={{ fontSize: 12, }}>
                                                1. You can download statement for a maximum period of 6 months at a time.<br />
                                                2. Statement is available only form 18-12-2012 for Retail Internet Banking.<br />
                                                3. For statement prior to the above date, visit the nearest <a href="#">RBL Bank
                                                    Branch</a> or contect our Customer Care at +91 2261156300.
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div class="col-lg-4">
                                <div class="card" style={{ width: 22 + 'rem', height: 240, borderRadius: 4, }}>
                                    <div class="card-body">
                                        <h5 class="card-title " id="g" style={{
                                            width: 351,
                                            height: 45,
                                            marginLeft: -16,
                                            marginTop: -15,
                                        }}>
                                            <label style={{ marginLeft: 20, marginTop: 10, }}>Favourites</label>
                                        </h5>
                                        <div> Select your favorite activity</div><br />

                                        <div class="dropdown">
                                            <div class="dropdown-toggle" type="button" id="dropdownMenuButton"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select
                                            </div>
                                            <div style={{ borderBottom: '(1, solid)', width: 80, }}></div>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            </div>
                                        </div>

                                        <br /><br />
                                        <div>
                                            <i class="fa fa-star-o" aria-hidden="true" style={{ marginLeft: 22, }}></i>
                                            <label style={{ marginLeft: 9, }}>Add to Favorites</label>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="card" style={{ width: 22 + 'rem', height: 230, }}>

                                        <div class="card-body">
                                            <h5 class="card-title " id="g" style={{
                                                width: 351,
                                                height: 45,
                                                marginLeft: -16,
                                                marginTop: -15,
                                            }}>
                                                <label style={{ marginLeft: 20, marginTop: 10, }}>Navigate to..</label>
                                            </h5>
                                            <div style={{ marginTop: 10, }}> Credit Card Payment</div>
                                            <div style={{ borderBottom: '1, solid', width: 250, }}></div>
                                        </div>
                                        <a href="#" style={{ marginBottom: 100, marginLeft: 20, }}>Manage page</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div >
        </React.Fragment >
    )
}

export default Statement;