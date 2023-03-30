import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styling/SubMenu.css';


const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
  
    const showSubnav = () => setSubnav(!subnav);
  
    return (
      <>       
            <Link className='Menu_item_links' 
            to={item.path} onClick={item.subNav && showSubnav}>
            <div className='Menu_icons'>
                <div className='Menu_items'>{item.title}</div>
                {item.icon}
            </div>
          <div>
            {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ? item.iconClosed
              : null}
          </div>
        </Link>
        {subnav &&
          item.subNav.map((item, index) => {
            return (
              <Link className='DropdownLink' 
              to={item.path} key={index}>
                {item.icon}
                <div className='Menu_items'>{item.title}</div>
              </Link>
            );
          })}
      </>
    )
}

export default SubMenu;