import React from 'react'

function Footer() {
    return (
        <React.Fragment>
            <hr class="fixed-bottom" style={{border:"2px solid grey",marginBottom: "60px"}}/>
            <footer class="mainfooter fixed-bottom" style={{marginBottom: "10px",marginTop:"20px"}}>
                <span style={{marginLeft: "30px"}}>
                    <label style={{borderRight:"2px solid grey",paddingRight:"10px"}}>Privacy and Policy</label>
                    <label style={{borderRight:"2px solid grey",paddingRight:"10px",paddingLeft:"10px"}}>Terms and Conditions</label>
                    <label style={{borderRight:"2px solid grey",paddingRight:"10px",paddingLeft:"10px"}}>Security</label>
                    <label style={{borderRight:"2px solid grey",paddingRight:"10px",paddingLeft:"10px"}}>Bank Policies</label>
                    <label style={{paddingLeft:"10px"}}>FAQs</label>
                </span>
                <span style={{float: "right",marginRight: "30px"}}>
                    <label>Copyright RBL Bank,All rights reserved</label>
                </span>
            </footer>
        </React.Fragment>
    )
}

export default Footer