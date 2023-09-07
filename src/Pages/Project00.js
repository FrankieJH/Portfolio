import React from "react";
import '../Styling/Project00.css';
import '../Styling/FontStyles.css';

function Project00(){
    return(
        <div className="Project00">
            {/* Hero section  */}
            <div className="Project_hero_section">
                <img className="Project_hero_image"
                src={require('../Assets/project_image1_placeholder.png')}
                alt=""/>
                <div className="Project_hero_container">
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
            {/*  main section*/}
            <div className="Project_main_section">
                <div className="Main_top">
                    <div className="Main_top_image_wrapper">
                        <img className="Main_top_image_1"
                        src={require('../Assets/project_image02_placeholder.png')}
                        alt=""/>
                    </div>
                    <div className="Main_top_wrapper">
                        <ul className="Font_style_4">
                            <li>
                                Github:<br/>
                                <img src={require('../Assets/code-branch.png')} 
                                alt=""/>
                            </li>
                            <li>
                                Preview:<br/>
                                <img src={require('../Assets/preview.png')} 
                                alt=""/>
                            </li>
                            <li>
                                Preview:<br/>
                                React, JavaScript,<br/> HTML, Node.js
                            </li>
                        </ul>
                        <p className="Font_style_3">
                            Feel free to get in touch with me to discuss 
                            any potential projects or collaborations. Whether
                            you want to explore a new idea or just say hello, 
                            I'm always open to new opportunities.
                        </p>
                    </div>
                </div>
                <div className="Main_bottom">
                    <div className="Main_bottom_image_wrapper">
                        <img 
                        src={require('../Assets/project_image04_placeholder.png')}
                        alt=""/>
                    </div>
                    <div className="Main_bottom_wrapper">
                        <h2 className="Font_style_4">
                            Some title here
                        </h2>
                        <p className="Font_style_3">
                            Feel free to get in touch with me to discuss 
                            any potential projects or collaborations. 
                            Whether you want to explore a new idea or 
                            just say hello, I'm always open to new
                            opportunities.
                        </p>
                    </div>
                </div>
            </div>
            {/* footer section */}
            <div className="Footer_section">
                <div className="Footer_container_1">
                    <p className="Font_style_3">What's Next?</p>
                    <h2 className="Font_style_4">GET IN TOUCH</h2>
                </div>
                <div className="Footer_container_2">
                    <p className="Font_style_3">
                        Feel free to get in touch with me to discuss any potential 
                        projects or collaborations. Whether you want to explore a new 
                        idea or just say hello, I'm always open to new opportunities.
                    </p>
                    <button 
                    className="Font_style_3 button_style_1">
                        Get in <br/> touch
                    </button>
                </div>
                <div className="Footer_container_3">
                    <img src= {require('../Assets/code-branch.png')} 
                    alt=""/>
                    <h2 className="Font_style_3">
                        Proudly built By<br/> Francisco Hernandez
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default Project00;