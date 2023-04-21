import React, { useEffect, useState } from "react";
import HeaderPage from "./HeaderPage";
import axios from "axios";

function NewStatement() {

    const [statements, setStatements] = useState([]);
    const [stype, setStype] = useState('last');
    const [fromDate, setFromDate] = useState(() => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        let separator = "-";
        let dt = `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ? `0${date}` : `${date}`}`;
        return dt;
    })

    const [toDate, setToDate] = useState(() => {
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        let separator = "-";
        let dt = `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ? `0${date}` : `${date}`}`;
        return dt;
    })
    const info = localStorage.getItem('token')
    function fetchStatements() {


        // axios.get('http://localhost:8080/api/v1/auth/getTransaction', { headers: { 'Authorization': 'Bearer ' + info } })
            axios.get('http://54.193.178.5:8080/api/v1/auth/getTransaction', { headers: { 'Authorization': 'Bearer ' + info } })
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
    function handleChange(e) {
        setFromDate(e.target.value)
    }
    function handleTChange(e) {
        setToDate(e.target.value);
    }
    function handleClick() {


        if (stype === "between") {
            let newDate = new Date(fromDate)
            let date = newDate.getDate();
            let month = newDate.getMonth() + 1;
            let year = newDate.getFullYear();

            let separator = "-";
            let fdt = `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ? `0${date}` : `${date}`}`;

            newDate = new Date(toDate)
            date = newDate.getDate();
            month = newDate.getMonth() + 1;
            year = newDate.getFullYear();

            separator = "-";
            let tdt = `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ? `0${date}` : `${date}`}`;
            const dts = {
                "sdate": fdt,
                "edate": tdt
            }

            // axios.post('http://localhost:8080/api/v1/auth/byDateBetween', dts, { headers: { 'Authorization': 'Bearer ' + info } })
            // axios.post('http://54.183.245.156:8080/api/v1/auth/byDateBetween', dts, { headers: { 'Authorization': 'Bearer ' + info } })
            axios.post('https://vishnusudarshana.vertextechnosys.com/api/byDateBetween',dts,{headers:{'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'}})
                .then((res) => {
                    const data = res.data;

                    setStatements(data);
                    // console.log(statements)
                })
        }
        else {
            let newDate = new Date(fromDate)
            let date = "1";//newDate.getDate();
            let month = newDate.getMonth();
            let year = newDate.getFullYear();

            let separator = "-";
            let fdt = `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ? `0${date}` : `${date}`}`;

            newDate = new Date(toDate)
            date = '31';
            month = newDate.getMonth();
            year = newDate.getFullYear();

            separator = "-";
            let tdt = `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ? `0${date}` : `${date}`}`;
            const dts = {
                "sdate": fdt,
                "edate": tdt
            }
            console.log(dts)

            // axios.post('http://localhost:8080/api/v1/auth/byDateBetween', dts, { headers: { 'Authorization': 'Bearer ' + info } })
            // axios.post('http://54.183.245.156:8080/api/v1/auth/byDateBetween', dts, { headers: { 'Authorization': 'Bearer ' + info } })
            axios.post('https://vishnusudarshana.vertextechnosys.com/api/byDateBetween',dts,{headers:{'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'}})
                .then((res) => {
                    const data = res.data;

                    setStatements(data);
                    // console.log(statements)
                })
        }
    }
    useEffect(() => {

        // fetchStatements();

    }, [])
    return (
        <React.Fragment>
            <div class="container-fluid">
                <HeaderPage />
                <div class="container">

                    <div class="container-fluid px-0">
                        <div class="row">
                            <div class="col-lg-8"
                                style={{ border: "1px solid #e6e6e6", borderRadius: "10px" }}>

                                <div>
                                    <h5 class="card-title" style={{
                                        marginLeft: "-15px",
                                        marginRight: "-15px",
                                        borderRadius: "10px",
                                        color: "rgb(1, 1, 145)",
                                        height: "45px",
                                        backgroundColor: "#e6e6e6"
                                    }}>
                                        <label style={{ marginLeft: "20px", marginTop: "10px" }}>
                                            Account Statement</label>
                                    </h5>

                                </div>


                                <h5 class=" "
                                    style={{
                                        marginTop: "20px",
                                        marginLeft: "-15px",
                                        marginRight: "-15px",

                                        color: "rgb(1, 1, 145)",
                                        height: "45px",

                                        backgroundColor: "#e6e6e6"
                                    }}>
                                    <label style={{ marginLeft: "20px", marginTop: "10px" }}>
                                        Advance Filters
                                        <i class="fa fa-chevron-down" aria-hidden="true"></i></label>
                                </h5>

                                <div class="row">
                                    <div class="col-lg-6">
                                        <input type="radio" value="last" checked={stype === "last"} onChange={() => setStype("last")} />Last Month
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="radio" value="between" checked={stype === "between"} onChange={() => setStype("between")} />Transaction Between<br />
                                        From Date <input class="form-control" type="date" value={fromDate} id="html5-date-input" onChange={handleChange} /><br />
                                        To Date <input class="form-control" type="date" value={toDate} id="html5-date-input" onChange={handleTChange} /><br />
                                        <button style={{
                                            backgroundColor: "white", borderRadius: "10px", float: "left", margin: 10,
                                            color: "rgba(0, 128, 0, 0.925)", marginTop: "5px"
                                        }} onClick={(e) => handleClick()}>Show</button>
                                    </div>

                                </div>

                                <div class="row" style={{ marginTop: 20 }}>



                                    <div class="col-lg-6">Download:
                                        <a><i class="fa fa-file-excel-o" aria-hidden="true" style={{ marginLeft: "10px", fontSize: 30, color: 'green' }}></i></a>
                                        <a><i class="fa fa-file-pdf-o" aria-hidden="true" style={{ marginLeft: "10px", fontSize: 30, color: 'red' }}></i></a>
                                        <a><i class="fa fa-file-text-o" aria-hidden="true" style={{ marginLeft: "10px", fontSize: 30, color: 'blue' }}></i></a>
                                        <a><i class="fa fa-file-excel-o" aria-hidden="true" style={{ marginLeft: "10px", fontSize: 30, color: 'green' }}></i></a>
                                    </div>

                                    <div class="col-lg-6">
                                        {/* <!-- <button class="btn bg-white btn-lg float-right" style="float: right; height:50px; border-radius:5px">Back</button> --> */}
                                        <button style={{
                                            backgroundColor: "white", borderRadius: "10px", float: "right",
                                            color: "rgba(0, 128, 0, 0.925)", marginTop: "5px"
                                        }}>Back</button>
                                    </div><br />

                                    <h5 class=" "
                                        style={{
                                            marginTop: "20px",

                                            marginRight: "-13px",
                                            color: "rgb(1, 1, 145)",
                                            height: "45px",
                                            borderRadius: "2px",
                                            backgroundColor: "#e6e6e6"
                                        }}>
                                        <label style={{ marginLeft: "0px", marginTop: "10px" }}>
                                            Statement
                                        </label>
                                    </h5>




                                    <table class=" table table-bordered" style={{ marginTop: "0px" }}>
                                        <thead>
                                            <tr>
                                                <th style={{ fontSize: 12 }}>Transition Date</th>
                                                <th style={{ fontSize: 12 }}>Transition Details</th>
                                                <th style={{ fontSize: 12 }}>Chq No.</th>
                                                <th style={{ fontSize: 12 }}>Value Date</th>
                                                <th style={{ fontSize: 12 }}>Amount</th>
                                                <th style={{ fontSize: 12 }}>Balance</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {statements.map((obj) => {
                                                return (<tr>
                                                    <td style={{ fontSize: 12 }}>{new Date(obj.tdate).toLocaleDateString('en-GB')}</td>
                                                    {/* <td style={{ fontSize: 10, }}>{obj.tdetails.toString().substr(10)}</td> */}
                                                    <td style={{ fontSize: 10, }}>{obj.tdetails}</td>
                                                    <td style={{ fontSize: 12 }}>{obj.chqno}</td>
                                                    <td style={{ fontSize: 12 }}>{new Date(obj.vdate).toLocaleDateString('en-GB')}</td>
                                                    {!obj.withdrawl_amt ? (<td style={{ fontSize: 12,color: 'green' }}>{obj.deposit_amt} <span style={{ fontWeight:'bold' }}>cr</span></td>) :
                                                        (<td style={{ fontSize: 12,color: 'red' }}>{obj.withdrawl_amt} <span style={{ fontWeight:'bold' }}>dr</span></td>)
                                                    }
                                                    <td style={{ fontSize: 12 }}>{obj.bal}</td>
                                                </tr>)
                                            })
                                            }
                                        </tbody>
                                    </table>

                                    <div><b>Please Note:</b><br /><br />
                                        <div style={{ fontSize: "12px" }}>
                                            1. You can download statement for a maximum period of 6 months at a time.<br />
                                            2. Statement is available only form 18-12-2012 for Retail Internet Banking.<br />
                                            3. For statement prior to the above date, visit the nearest <a href="#">RBL Bank
                                                Branch</a> or contect our Customer Care at +91 2261156300.
                                        </div>
                                    </div>

                                </div>




                            </div>

                            <div class="col-lg-4">
                                <div class="card" style={{ width: "22rem", height: "240px", borderRadius: "7px" }}>
                                    <div class="card-body">
                                        <h5 class="card-title " style={{
                                            width: "351px",
                                            height: "45px",
                                            borderRadius: "7px",
                                            color: " rgb(1, 1, 145)",
                                            marginLeft: -"12px",
                                            backgroundColor: "#e6e6e6",
                                            marginLeft: "-20px",
                                            marginTop: "-20px"
                                        }}>
                                            <label style={{ marginLeft: "20px", marginTop: "10px" }}>Favourites</label>
                                        </h5>
                                        <div> Select your favorite activity</div><br />

                                        <div class="dropdown">
                                            <div class="dropdown-toggle" type="button" id="dropdownMenuButton"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Select
                                            </div>
                                            <div style={{ borderBottom: "1px solid", width: "80px" }}></div>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                {/* <!-- <a class="dropdown-item" href="#">Action</a>
                                            <a class="dropdown-item" href="#">Another action</a>
                                            <a class="dropdown-item" href="#">Something else here</a> --> */}
                                            </div>
                                        </div>

                                        <br /><br />
                                        <div>
                                            <i class="fa fa-star-o" aria-hidden="true" style={{ marginLeft: "22px" }}></i>
                                            <label style={{ marginLeft: "9px" }}>Add to Favorites</label>
                                        </div>
                                    </div>
                                </div>
                                <br />

                                {/* <!-- Navigate card --> */}
                                <div class="card" style={{ width: "22rem", height: "230px", borderRadius: "7px" }}>

                                    <div class="card-body">
                                        <h5 class="card-title " style={{
                                            width: "351px",
                                            height: "45px",
                                            borderRadius: "7px",
                                            color: " rgb(1, 1, 145)",
                                            marginLeft: -"12px",
                                            backgroundColor: "#e6e6e6",
                                            marginLeft: "-20px",
                                            marginTop: "-20px"
                                        }}>
                                            <label style={{ marginLeft: "20px", marginTop: "10px", borderRadius: "7px" }}>Navigate to..</label>
                                        </h5>
                                        <div style={{ marginTop: "10px" }}> Credit Card Payment</div>
                                        <div style={{ borderBottom: "1px solid", width: "250px" }}></div>
                                    </div>
                                    <a href="#" style={{ marginBottom: "100px", marginLeft: "20px" }}>Manage page</a>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default NewStatement;