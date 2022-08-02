import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <div>
            <ul>
               <li><NavLink to='/'> Home </NavLink></li>
               <li><NavLink to='/Favorites'> Favorites </NavLink></li>
               <li><NavLink to='/FullMenu'> Full Menu </NavLink></li>
               <li><NavLink to='/RecipeForm'> Recipe Form </NavLink></li>
            </ul>
        </div>

    )
}


export default NavBar;