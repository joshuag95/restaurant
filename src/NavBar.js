import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <div>
            <ul className='navBar'>
               <a className='home'><NavLink to='/Home'> Home </NavLink></a>
               <a><NavLink to='/FullMenu'> Full Menu </NavLink></a>
               <a><NavLink to='/RecipeForm'> Recipe Form </NavLink></a>
            </ul>
        </div>

    )
}


export default NavBar;