import React from "react";
import '../Styling/Home.css';

function Home(){
    return(
        <div className="Home">
            {/* Hero section container  */}
            <div className="Hero_section">
                <img className="Hero_image" src= {require('../Assets/HeroImg.jpg')} />
                <div className="Hero_overlay">
                    <p className="Style_2">Hello, my name is</p>
                    <h1 className="Style_1">FRANKIE <span id="Style_1_transparent">HRNDZ</span></h1>
                    <p className="Style_2">I am passionate about crafting visually stunning and 
                     engaging web experiences. With a keen eye for design and a 
                     proficiency in modern front-end technologies, I strive to create
                     intuitive and responsive interfaces that enhance user engagement 
                     and satisfaction.</p>
                </div>
                <div className="Scroll_indicator" >
                    <p className="Style_2">SCROLL DOWN</p>
                    <img className="Indicator_image" src={require('../Assets/next.png')} />
                </div>

            </div>
        </div>
    )
}

export default Home;