import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './Search';


function NavBar({getFilteredArray, food}) {
    return (
        <div>
            <ul className='navBar'>
               <a><NavLink to='/Home'> Home </NavLink></a>
               <a><NavLink to='/FullMenu'> Full Menu </NavLink></a>
               <a><NavLink to='/RecipeForm'> Recipe Form </NavLink></a>
               <Search food={food} getFilteredArray={getFilteredArray} />
            </ul>
        </div>

    )
}


export default NavBar;