import React from "react";
import { Link } from 'react-router-dom'
import '../Styling/SocialIconsAndEmail.css';

function SocialIconsAndEmail(){
    return(
        <div className="SocialIconsAndEmail">
            <div className="SocialIcons_Container">  
                <Link to="https://github.com/FrankieJH">
                    <img src={require('../Assets/github.png')}
                    alt="Github icon" /> 
                </Link>
                <Link to="https://linkedin.com/in/francisco-hernandez91">
                    <img  src={require('../Assets/linkedin.png')}
                    alt="Linkedin icon" /> 
                </Link>
                <hr id="social_icon_line"/> 
            </div>
            <div className="email_Container">
                <button   
                onClick={(e) => 
                {window.location.href ='mailto:kikohernandez91@yahoo.com';}}>
                kikohernandez91@yahoo.com</button>
                <hr id="email_line"/>
            </div>
        </div>
    )
}

export default SocialIconsAndEmail;