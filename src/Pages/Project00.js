import React from "react";
import '../Styling/Project00.css';
import '../Styling/FontStyles.css';

function Project00(){
    return(
        <div className="Project00">
            {/* Hero section  */}
            <div className="Project00_hero_section">
                <img className="Project00_hero_image"
                src={require('../Assets/project_image1_placeholder.png')}
                alt=""/>
                <div className="Project00_hero_container">
                    <h2 className="Font_style_2">
                        Project Name Here
                    </h2>
                    <p className="Font_style_3">
                        Feel free to get in touch with me to discuss any 
                        potential projects or collaborations. Whether you 
                        want to explore a new idea or just say hello, I'm 
                        always open to new opportunities.
                        Feel free to get in touch with me to discuss
                        any potential projects or collaborations. 
                        Whether you want to explore a new idea or 
                        just say hello, I'm always open to new 
                        opportunities. Feel free to get in touch with
                        me to discuss any potential projects or collaborations.
                        Whether you want to explore a new idea or just say hello, 
                        I'm always open to new opportunities.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project00;