import React, { useEffect, useState } from 'react';
import './App.css';
import {
	Switch,
	Route
} from "react-router-dom";
import HeaderPage from './HeaderPage';
import NavBar from './NavBar';
// import RecipeContainer from './RecipeContainer';
import FullMenu from './FullMenu';
import RecipeForm from './RecipeForm'
// import styled from 'styled-components';
import Home from './Home';
import SearchBar from './SearchBar';

function App() {
	const [food, setFood] = useState([])

		useEffect(() => {
		fetch("http://localhost:3000/recipes")
			.then(res => res.json())
			.then(data => setFood(data))
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

	const [searchString, setSearchString] = useState('')

	const filtered = food.filter(filterObj => filterObj.name.toLowerCase().includes(searchString.toLowerCase()))


	return (
		<div className='App'>
			<HeaderPage />
			<NavBar  food={food} />
			<SearchBar setSearchString={setSearchString}/>
			<Switch>
				<Route exact path='/Home' ><Home food={food} /></Route>
				<Route exact path='/FullMenu' ><FullMenu food={filtered} handleDelete={handleDelete} /></Route>
				<Route exact path='/RecipeForm'><RecipeForm addRecipe={handleAddRecipe} /></Route>
			</Switch>

			
		</div>

	);
}



export default App;
