import React from 'react'

function HeaderLogin() {
  return (
    <React.Fragment>
         <header class="border-bottom">
             <span style={{marginLeft: "20px"}}>
                 <img src="/images/logo1.png" style={{height: "50px",width: "100px",marginTop:10,marginBottom:10}} />
             </span>
             <span style={{float:"right",marginTop: "20px",marginRight: "20px"}}>
                 <label>Customer Service:022 6115 6300 | Credit Card Helpline: 022 6232 7777</label>
             </span>
         </header>
     </React.Fragment>
  )
}

export default HeaderLogin