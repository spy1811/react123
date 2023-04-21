import React, { useEffect } from "react"


function HeaderPage() {

    const uname = localStorage.getItem('uname');
    const ldate = localStorage.getItem('log');
    useEffect(() => {
        const info = localStorage.getItem('token')
        if (!info) {
            window.location.href = '/login'
        }
    }, [])
    return (
        <React.Fragment>
            <div class="row">
                <div class="col-sm-12 px-0">
                    <div class="container">
                        <div class="row" style={{ marginLeft: "0px", marginRight: "-3px", height: "66px" }}>
                            <div class="col-sm">
                                <nav class="navbar" style={{ marginLeft: "-60px", marginRight: "15px" }}>
                                    <div class="container">
                                        <div>
                                            <button class="btn">
                                                <img src="/images/logo1.png" width="100px" height="50px" alt="" />
                                            </button>
                                        </div>

                                        <div class="d-flex" style={{ marginRight: "-70px" }}>
                                            <button class="btn"><i class="fa fa-comments" aria-hidden="true"></i></button>
                                            <button class="btn"><i class="fa fa-volume-control-phone" aria-hidden="true"></i></button>
                                            <button class="btn"><i class="fa fa-bell-o" aria-hidden="true"></i></button>
                                            <button class="btn"><i class="fa fa-user" aria-hidden="true"></i></button>
                                            <button class="btn" data-toggle="modal" data-target="#myModal"><i class="fa fa-power-off" aria-hidden="true"></i></button>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" id="home-banner" style={{ marginBottom: 4 + "rem" }}>
                <div class="col-sm-12 px-0">
                    <div class="container" style={{
                        borderRadius: "10px", color: "white", backgroundColor: "red",
                        backgroundImage: "linear-gradient(to right, #990033, #6600cc)"
                    }}>
                        <span style={{ paddingLeft: 8, paddingTop: 12, marginBottom: 0 }}>Welcome {uname}</span>
                        <span style={{ paddingLeft: 8, paddingTop: 2, marginBottom: 0,float:'right' }}>Last Login: {ldate}</span>
                        <nav class="navbar navbar-expand-lg px-0">


                            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Navigation</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/dashboard" style={{ color: 'white' }}>Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" aria-current="page" href="/statement" style={{ color: "white" }}>Accounts</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" aria-current="page" href="#" style={{ color: "white" }}><i class="fa fa-btc" style={{ color: "yellow" }} aria-hidden="true"></i>&nbsp;Bill Payments</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" aria-current="page" href="#" style={{ color: "white" }}>Payments</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" aria-current="page" href="#" style={{ color: "white" }}>Investments</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" aria-current="page" href="#" style={{ color: "white" }}>Insurence</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" aria-current="page" href="#" style={{ color: "white" }}>Requests</a>
                                        </li>
                                    </ul>

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
                            <span style={{ float: "left", marginLeft: "10%", marginTop: "5px" }}><img src="images/logout.png" style={{ height: "50px", width: "50px" }} /></span>
                            <span style={{ float: "right", marginRight: "50%" }}> <h4 class="modal-title">Application Signoff</h4>
                                Are you sure you wish to Logout?   </span>
                        </div>


                        <div class="modal-footer">
                            <button type="button" class="btn btn-outline-primary modal-button" data-dismiss="modal" style={{ borderRadius: "25px" }}>Cancel</button>
                            <button type="button" class="btn btn-primary modal-button" data-dismiss="modal" style={{ borderRadius: "25px" }} onClick={() => {

                                window.location.href = '/logout';
                            }}>Logout</button>
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default HeaderPage;