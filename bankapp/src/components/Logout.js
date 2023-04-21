import React, { useEffect } from 'react'
import Footer from './Footer';

function Logout() {
    useEffect(()=>{
        localStorage.clear();
    })
    return (
        <React.Fragment>
            <header class="border-bottom">
                <span style={{ marginLeft: "20px" }}>
                    <img src="/images/logo1.png" style={{ height: "50px", width: "100px" }} />
                </span>
            </header>
            <center>
                <br /><br />
                <div class="card" style={{ width: "45rem" }}>
                    <div class="card-body">
                        <div>
                            <span style={{ float: "right" }}><img src="images/check.png" height="80px" width="100px" /></span>
                            <strong><p style={{ textAlign: "left", color: "rgba(1, 3, 131, 0.822)" }}>Logout Successful</p></strong>
                            <p style={{ textAlign: "left" }}>For security reasons, please exit your browser</p>
                        </div>
                        <hr style={{ height: "2px", borderWidth: "0", color: "rgb(187, 183, 183)", backgroundColor: "rgb(168, 168, 168)" }} />
                        <div>
                            <button type="button" class="btn btn-primary float-right" style={{ borderRadius: "20px" }} onClick={()=>{
                                window.location.href="/login";
                            }}>Go to Login Page</button><br /><br />
                            <img src="/images/slide1.jpg" width="450px" />
                        </div>
                    </div>
                </div>
            </center>
            <Footer/>

        </React.Fragment >
    )
}

export default Logout