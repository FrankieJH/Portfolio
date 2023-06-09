import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styling/SubMenu.css';

function SubMenu({ item }) {
    const [subnavOpen, setSubnavOpen] = useState(false);
  
    const showSubnav = () => setSubnavOpen(!subnavOpen);
    return (
      <>       
      <Link 
      className='Menu_item_links' 
      to={item.path} 
      onClick={item.subNav && showSubnav}>
        <div className='Menu_items'>{item.page}</div>
        <div className='subNav_opened'>
            {item.subNav && subnavOpen
            ? item.subNav_opened
            : item.subNav
            ? item.subNav_closed
            : undefined}
        </div>
      </Link>
      {subnavOpen && item.subNav.map((item, index) => {
        return (
          <Link 
          className='Dropdown_Link' 
          to={item.path} 
          key={index}>
            <div className='Menu_items'>{item.page}</div>
          </Link>
        );
      })}
      </>
    )
  }

export default SubMenu;