import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";
import HeaderPage from './HeaderPage';
import NavBar from './NavBar';
// import RecipeContainer from './RecipeContainer';
import Favorites from './Favorites';
import FullMenu from './FullMenu';
import RecipeForm from './RecipeForm'
import styled from 'styled-components';

function App() {
  const [food, setFood] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
      .then(res => res.json())
      .then(data => setFood(data))
  }, [])

  const handleAddRecipe = (recipeObj) => {
    console.log(recipeObj)
    const newArray = [...food, recipeObj]
    console.log("array", newArray)
    setFood(newArray)
    fetch("http://localhost:3000/recipes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipeObj)
    }
    )
      .then(res => res.json())
      .then(res => console.log("res", res))
  }

  function handleDelete(objId) {
    console.log("object", objId)
    const deleteArray = food.filter(foodObj => {
      foodObj.id = !objId
    })
    console.log("array", deleteArray)
  }

  return (
    <div className='App'>
      <HeaderPage />
      <NavBar />
      <Switch>
        <Route exact path='/Favorites' ><Favorites /></Route>
        <Route exact path='/FullMenu' ><FullMenu food={food} handleDelete={handleDelete} /></Route>
        <Route exact path='/RecipeForm'><RecipeForm addRecipe={handleAddRecipe} /></Route>
      </Switch>

      This is the start of a beautiful thing
    </div>

  );
}



export default App;
