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
// import styled from 'styled-components';

function App() {
	const [food, setFood] = useState([])

	const filterArray = food.filter(foodObj => {
		return foodObj.favorite === true
	})

	useEffect(() => {
		fetch("http://localhost:3000/recipes")
			.then(res => res.json())
			.then(data => setFood(data))
			.then(setFavoritesArray(filterArray))
	}, [])

	// Function for adding new recipe on RecipeForm
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
		fetch(`http://localhost:3000/recipes/${objId}`, { method: 'DELETE' })
		setFood(deleteArray)
	}

	// favorite function that appears on cards
	const [favoritesArray, setFavoritesArray] = useState([])

	function handleFilter() {
		const filterArray = food.filter(foodObj => {
			return foodObj.favorite === true
		})
		setFavoritesArray(filterArray)
	}





	return (
		<div className='App'>
			<HeaderPage />
			<NavBar />
			<Switch>
				<Route exact path='/Favorites' ><Favorites handleFilter={handleFilter} filterArray={favoritesArray} /></Route>
				<Route exact path='/FullMenu' ><FullMenu handleFilter={handleFilter} food={food} handleDelete={handleDelete} /></Route>
				<Route exact path='/RecipeForm'><RecipeForm addRecipe={handleAddRecipe} /></Route>
			</Switch>

			This is the start of a beautiful thing
		</div>

	);
}



export default App;
