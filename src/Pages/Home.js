import React from "react";
import '../Styling/Home.css';

function Home(){
    return(
        <div className="Home">
            {/* hero section container  */}
            <div className="hero_section">
                <img className="hero_image" src={require('../Assets/HeroImg.jpg')} />
            </div>
        </div>
    )
}

export default Home;