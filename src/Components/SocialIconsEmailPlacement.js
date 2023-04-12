import React from "react";
import { Link } from 'react-router-dom'
import '../Styling/SocialIconsEmailPlacement.css';

function SocialIconsEmailPlacement(){
    return(
        <div className="SocialIconsEmailPlacement">
            <div className="SocialIcons_Container">
                <ul>
                    <li>
                        <Link to="https://github.com/FrankieJH">
                            <img className="github_icon" 
                            src={require('../Assets/github.png')}
                            alt="Github icon" /> 
                        </Link>
                    </li>
                    <li>
                        <Link to="https://linkedin.com/in/francisco-hernandez91">
                            <img className="linkedin_icon" 
                            src={require('../Assets/linkedin.png')}
                            alt="Linkedin icon" /> 
                        </Link>
                    </li>
                    <li>
                        <div id="social_icon_line"></div>
                    </li>
                </ul>
            </div>
            <div className="EmailContainer">
                <button   
                onClick={(e) => 
                {window.location.href ='mailto:example@email.com';}}>
                kikohernandez91@yahoo.com</button>
                <div id="email_line"></div>
            </div>
        </div>
    )
}

export default SocialIconsEmailPlacement;