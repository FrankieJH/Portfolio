import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../Styling/Navbar.css';
import { MenuItems } from "./MenuItems";
import { HiOutlineX } from "react-icons/hi";
import SubMenu from './SubMenu';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return(
        <>
        <div className="Navbar">
            <Link to="/">
                <img 
                className="Navbar_logo" 
                src={require('../Assets/letter-f-2.png')}
                alt="Logo" />
            </Link>
            <Link to="#">
                <img 
                className="Menu_bars" 
                src={require('../Assets/menu-2.png')} 
                onClick={showSidebar} 
                alt="Hamburger Menu"/>
            </Link>
        </div>
            <nav className={sidebar ? 'Nav_menu active' : 'Nav_menu'}>
            <ul className="Nav_menu_items">
                <li className="Navbar_toggle">
                    <Link to="#" className="Menu_bars">
                        <HiOutlineX className="close_icon" onClick={showSidebar}/>
                    </Link>
                </li>
                    {MenuItems.map((item, index) => {
                    return(
                        <SubMenu 
                        item={item} 
                        key={index}  
                        onClick={showSidebar}/>
                    )})}
            </ul>
        </nav> 
        </>
    )
}

export default Navbar;