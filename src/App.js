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

	const [darkToggle, setDarkToggle] = useState("App")
	const [titleToggle, setTitleToggle] = useState("title")

	useEffect(() => {
		fetch("http://localhost:3000/recipes")
			.then(res => res.json())
			.then(data => setFood(data))
	}, [])

	// Function for adding new recipe on RecipeForm
	const handleAddRecipe = (recipeObj, formReset) => {
		const newArray = [...food, recipeObj]
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
			.then(formReset())
			
	
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

	const filtered = food.filter(filterObj => {
		return (
			filterObj.name.toLowerCase().includes(searchString.toLowerCase()) 
			||
		 	filterObj.ingredients.toLowerCase().includes(searchString.toLowerCase())
	)})

	function darkMode(){
		if (darkToggle === "App" || titleToggle === "title"){
			setDarkToggle("AppDarkMode")
			setTitleToggle("titleDark")
		}
		else if (darkToggle === "AppDarkMode" || titleToggle === "titleDark"){
			setDarkToggle("App")
			setTitleToggle("title")
		}

	}

	const rickRoll = url => {
		window.open(url, '_blank', 'noopener,noreferrer')
	}

	return (
		<div className={darkToggle}>
			<button onClick={darkMode}>DARK MODE</button>
			<HeaderPage titleToggle={titleToggle} rickRoll={rickRoll}/>
			<NavBar food={food} />
			<Switch>
				<Route exact path='/Home' ><Home food={food} /></Route>
				<Route exact path='/FullMenu' ><FullMenu food={filtered} handleDelete={handleDelete} setSearchString={setSearchString} /></Route>
				<Route exact path='/RecipeForm'><RecipeForm addRecipe={handleAddRecipe} /></Route>
			</Switch>
			<button onClick={() => rickRoll('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>DO NOT CLICK</button>


		</div>

	);
}



export default App;
