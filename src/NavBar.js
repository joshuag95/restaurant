import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <div>
            <ul>
               <li><NavLink to='/'> Home </NavLink></li>
               <li><NavLink to='/Favorites'> Favorites </NavLink></li>
               <li><NavLink to='/FullMenu'> FullMenu </NavLink></li>
            </ul>
        </div>

    )
}


export default NavBar;