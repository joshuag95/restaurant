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

  // delete function that appears on cards
  function handleDelete(objId) {
    const deleteArray = food.filter(foodObj => {
      return foodObj.id !== objId
    })
    fetch(`http://localhost:3000/recipes/${objId}`, {method: 'DELETE'})
    setFood(deleteArray)
  }

  // favorite function that appears on cards
  function handleFavorite(favoriteToggle) {
    console.log(favoriteToggle)
    const favoritesArray = food.filter( foodObj => {
      return foodObj.favorite === true
    })
    console.log(favoritesArray)
  }

  return (
    <div className='App'>
      <HeaderPage />
      <NavBar />
      <Switch>
        <Route exact path='/Favorites' ><Favorites /></Route>
        <Route exact path='/FullMenu' ><FullMenu handleFavorite={handleFavorite} food={food} handleDelete={handleDelete} /></Route>
        <Route exact path='/RecipeForm'><RecipeForm addRecipe={handleAddRecipe} /></Route>
      </Switch>

      This is the start of a beautiful thing
    </div>

  );
}



export default App;
