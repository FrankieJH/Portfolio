import React from "react";
import '../Styling/Home.css';
import '../Styling/FontStyles.css';
import SocialIconsAndEmail from "../Components/SocialIconsAndEmail";

function Home(){
    return(
        <div className="Home">
            {/* Hero section container  */}
            <div className="Hero_section">
                <img className="Hero_image" 
                src= {require('../Assets/HeroImg.jpg')} 
                alt="Hero"/>
                <div className="Hero_overlay">
                    <p className="Font_style_2">Hello, my name is</p>
                    <h1 className="Font_style_1">FRANKIE <span id="Font_style_1_transparent">HRNDZ</span></h1>
                    <p className="Font_style_2">I am passionate about crafting visually stunning and 
                     engaging web experiences. With a keen eye for design and a 
                     proficiency in modern front-end technologies, I strive to create
                     intuitive and responsive interfaces that enhance user engagement 
                     and satisfaction.</p>
                </div>
                <div className="Scroll_indicator" >
                    <p className="Font_style_2">SCROLL DOWN</p>
                    <img className="Indicator_image" 
                    src={require('../Assets/next.png')} 
                    alt="Arrow Indicator"/>
                </div>
                 {/* SocialEmail component container */}
                 <SocialIconsAndEmail />
            </div>
            {/* About Me Section  */}
            <div className="About_section">
                <div className="About_me_container">
                    <h2> <span>00.</span> About Me</h2>
                    <p> I am a highly motivated and passionate <span>software engineer</span> with a 
                        deep love for problem-solving. Using my expertise in modern programming 
                        languages and technologies, I enjoy tackling complex technical 
                        challenges and developing innovative solutions that exceed expectations.
                        My strong communication and collaboration skills allow me to work 
                        effectively with colleagues and stakeholders to ensure project success.
                        <br/><br/>
                        With a commitment to <span>excellence</span> and a keen eye for detail, 
                        I take great pride in delivering high-quality work that meets 
                        or exceeds expectations. As a self-motivated individual, I am 
                        constantly seeking new challenges and opportunities to learn and grow, 
                        both personally and professionally. 
                        <br/><br/>
                        My dedication to my craft has earned me a reputation as a reliable and 
                        dependable team player who is always willing to go the extra mile.
                    </p>
                    <div className="About_skills_container">
                        <ul>
                            <li>React.js</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Redux</li>
                            <li>Git</li>
                        </ul>
                    </div>
                </div>
                <div className="About_image_container" >
                    <img src={require('../Assets/Profile_placeholder.jpeg')} 
                    alt="Image of Frankie"/>
                    <button>Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Home;