import axios from "axios";
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import HeaderLogin from "./HeaderLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";
var CryptoJS = require("crypto-js");

function Authenticate() {

    const [passError,setPassError] = useState(false);
    const query = new URLSearchParams(useLocation().search)
    let bytes = CryptoJS.AES.decrypt(localStorage.getItem('crypto'), 'bankapp')
    const userid = bytes.toString(CryptoJS.enc.Utf8)
    // console.log(query.get('userid'))
    const [password, setPassword] = useState('');
    function AddCC(urlOfTheLibrary) {
        const script = document.createElement('link');
        script.href = urlOfTheLibrary;
        script.rel = "stylesheet";
        script.type = "text/css";
        document.head.appendChild(script);
    }
    function checkLogin() {
        if (!password) {
            toast.error("password is empty")
            setPassError(true)
            return false;
        }
        const data = {
            username: userid,
            password: password
        }
        
        // axios.post("http://localhost:8080/api/v1/auth/authenticate", data)
        axios.post("http://18.223.182.139:31301/api/v1/auth/authenticate", data)
        // axios.post('https://vishnusudarshana.vertextechnosys.com/api/login',data)
            .then((res) => {
                // console.log(res.data);
                // localStorage.setItem('token', res.data.data.token);
                localStorage.setItem('token', res.data.token);

                var currentdate = new Date(); 
                var datetime =  + currentdate.getDate() + "/"
                                + (currentdate.getMonth()+1)  + "/" 
                                + currentdate.getFullYear() + " "  
                                + currentdate.getHours() + ":"  
                                + currentdate.getMinutes() + ":" 
                                + currentdate.getSeconds();
                localStorage.setItem('log',datetime);
                // var info = await sha1(uname)
                localStorage.setItem('uname',query.get('pname'));
                // var info = CryptoJS.AES.encrypt(uname, 'bankapp').toString();
                window.location.href = "/dashboard";
                // console.log(info);

            })
            .catch((err)=>{
                toast.error("Password not match")
                setPassError(true);
            })
    }

    return (
        <React.Fragment>
            <ToastContainer />
            <HeaderLogin />
            <div class="container">
                <div class="row" style={{ width: "100%" }}>
                    <div class="col-lg-6">
                        <div class="text-center" style={{ width: "500px", marginTop: "50px" }}>
                            <div class="px-2 py-2" style={{ boxShadow: "0 10px 20px 0 rgba(0,0,0,0.2)", boxShadow: "inset 0px 0px 10px 5px #efefef", borderBottom: "2px solid blue" }}>
                                <h3 style={{ color: "rgb(1,1,145)" }}>LOGIN</h3>
                            </div>
                            <div class="card" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                                <div class="card-body">
                                    <form>
                                        <div class="mb-3">
                                            <div class="form-outline">
                                                <input type="text" class="form-control" style={{ border: "none", borderBottom: "2px solid gray" }} value={userid} disabled />
                                                <div class="text-center" style={{ marginTop: "20px", marginLeft: "20px" }}>
                                                    <span><img src="/images/user.png" style={{ height: "70px", width: "70px", float: "left", borderRadius: "50%" }} /></span>
                                                    <span style={{ marginRight: "100px" }}><label>Phrase: {query.get('pname')}</label></span>
                                                </div><br></br>

                                                <input type="password" placeholder="Password*" class="form-control" style={{ border: "none", borderBottom: "2px solid gray", marginTop: "20px" }} onChange={(e) => setPassword(e.target.value)} />
                                                {passError && <span style={{color:'red'}}>Invalid password</span>}<br/>
                                                <div style={{ marginTop: "20px", fontSize: "14px" }}>
                                                    <input type="checkbox" style={{ height: "12px", width: "12px", marginRight: 10 }} />
                                                    <span >I confirm the image and phrase displayed matched my initial selection</span>
                                                </div>
                                                <div class="btn-group btn-group-sm" style={{ marginTop: "20px" }}>
                                                    <button type="button" class="btn border-right">Forgot Password</button>
                                                    <button type="button" class="btn">Unlock User ID</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- Submit button --> */}
                                        <button type="button" class="btn btn-primary" data-dismiss="modal" style={{ borderRadius: "25px", width: "40%" }} onClick={() => checkLogin()} ><b>Login</b></button><br></br>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div style={{ marginTop: "50px" }}>
                            <span>
                                <img src="/images/slide1.jpg" style={{ height: 443, width: 500, }} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Authenticate;