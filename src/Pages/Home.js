import React from "react";
import '../Styling/Home.css';

function Home(){
    return(
        <div className="Home">
            {/* Hero section container  */}
            <div className="Hero_section">
                <img className="Hero_image" src={require('../Assets/HeroImg.jpg')} />
            </div>
        </div>
    )
}

export default Home;