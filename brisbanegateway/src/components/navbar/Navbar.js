import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import { Link } from 'react-router-dom';

function Navbar(props) {

    


    return (
        <nav className='NavbarItems'>

            <a className='NavbarLogo' href='/'><img class='logoImage' src='/images/nav-logo.png'/></a>
            
            <ul>
                {MenuItems.map((item, index)=>{
                    return (
                        <li key={index}>
                            <Link to={item.url}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
            <button className='MenuButton' >Menu</button>
        </nav>
    )
}

export default Navbar;