import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <div>
            <ul className='navBar'>
               <a><NavLink to='/'> Home </NavLink></a>
               <a><NavLink to='/Favorites'> Favorites </NavLink></a>
               <a><NavLink to='/FullMenu'> Full Menu </NavLink></a>
               <a><NavLink to='/RecipeForm'> Recipe Form </NavLink></a>
            </ul>
        </div>

    )
}


export default NavBar;