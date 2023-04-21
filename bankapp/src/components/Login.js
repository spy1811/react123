import axios from "axios";
import React, { useState } from "react"
import { sha256, sha1 } from "crypto-hash";
import HeaderLogin from "./HeaderLogin";
import validator from 'react-validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Footer";

var CryptoJS = require("crypto-js");


function Login() {

    const [uname, setUname] = useState('');
    const [emailError,setEmailError] = useState(false)
    function AddCC(urlOfTheLibrary) {
        const script = document.createElement('link');
        script.href = urlOfTheLibrary;
        script.rel = "stylesheet";
        script.type = "text/css";
        document.head.appendChild(script);
    }

    function checkLogin() {
        // var emailValid = uname.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        // console.log(emailValid)
        if (!uname) {
            setEmailError(true)
            toast.error("Invalid Email-Id");
            return false;
        }
        const data = {
            username: uname
        }
        
        // axios.post("http://localhost:8080/api/v1/auth/validate", data)
        axios.post("http://10.244.1.59:31732/api/v1/auth/validate", data)
        // axios.post('https://vishnusudarshana.vertextechnosys.com/api/validate',data)
            .then(async (res) => {
                console.log(res.data);
                // var info = await sha1(uname)

                var info = CryptoJS.AES.encrypt(uname, 'bankapp').toString();
                localStorage.setItem("crypto", info);
                window.location.href = "/auth-controller?userid=" + info + "&pname=" + res.data;
                // console.log(info);

            })
            .catch((err)=>{
                console.log(err);
                toast.error("Invalid Email-Id or mail-id not exist");
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
                                                <input type="text" placeholder="User ID*" class="form-control"
                                                    style={{ border: "none", borderBottom: "2px solid gray" }} value={uname} onChange={(e) => setUname(e.target.value)} />
                                                    {emailError && <span style={{color:'red'}}>Invalid Email</span>}<br/>
                                                <div class="btn-group btn-group-sm" style={{ marginTop: "20px" }}>
                                                    <button type="button" class="btn" style={{ borderRight: "1px solid blue" }}>Forgot Password</button>
                                                    <button type="button" class="btn" style={{ borderRight: "1px solid blue" }}>Forgot User ID</button>
                                                    <button type="button" class="btn">Unlock User ID</button>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-primary" data-dismiss="modal"
                                            style={{ borderRadius: "25px", width: "40%" }} onClick={() => checkLogin()} ><b>Next</b></button><br />
                                        <label style={{ marginTop: "20px" }}>First Time User</label><br />
                                        <label style={{ marginTop: "10px" }}>Register</label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div style={{ marginTop: "50px" }}>
                            <span>
                                <img src="/images/slide1.jpg" style={{ height: 364 }} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}
export default Login;