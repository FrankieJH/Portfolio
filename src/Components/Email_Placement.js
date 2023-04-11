import React from "react";
import '../Styling/Email_Placement.css';

function Email_Placement(){
    return(
       <div className="Email_container">
             <button   
             onClick={(e) => 
            {window.location.href ='mailto:example@email.com';}}>
            kikohernandez91@yahoo.com</button>
            <div id="email_line"></div>
        </div>
    )
}

export default Email_Placement;