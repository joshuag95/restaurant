import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import HeaderPage from './HeaderPage';
import NavBar from './NavBar';
import RecipeContainer from './RecipeContainer';
import Favorites from './Favorites';
import FullMenu from './FullMenu'


function App() {
  const [food, setFood] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then(res => res.json())
      .then(data => setFood(data))
  }, [])
console.log("1", food)

  return (
    <div className='App'>
      <HeaderPage />
      <NavBar />
      <Switch>
        <Route exact path='/Favorites' ><Favorites /></Route>
        <Route exact path='/FullMenu' ><FullMenu /></Route>
      </Switch>
      <RecipeContainer food={food}/>
      This is the start of a beautiful thing
    </div>

  );
}



export default App;
