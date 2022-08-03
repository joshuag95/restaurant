import React, { useState } from "react";

function RecipeForm({ addRecipe }) {

    const [ingredients, setIngredients] = useState()

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [isvegetarian, setIsVegetarian] = useState(false)
    const [containPeanuts, setContainPeanuts] = useState(false)
    const [hasDairy, setHasDairy] = useState(false)

    function vegetarianHandler() {
        setIsVegetarian(isvegetarian => !isvegetarian)
    }
    function peanutHandler() {
        setContainPeanuts(containPeanuts => !containPeanuts)
    }
    function dairyHandler() {
        setHasDairy(hasDairy => !hasDairy)
    }

    function setId() {
        const max = Math.floor(1000)
        const min = Math.ceil(Math.random * 200)
        return Math.floor(Math.random() * (max - min) + min)
    }


    return (
        <form style={{background: "aqua", border: "dotted red"}}>
            <h6>Name: <input onChange={(e) => { setName(e.target.value) }} type='text' placeholder="Name" /></h6>
            <h6>Image URL: <input onChange={(e) => { setImage(e.target.value) }} type='text' placeholder="Image URL" /></h6>

            <h6>Vegetarian: <input onClick={vegetarianHandler} type='checkbox' placeholder="Vegetarian?" /></h6>
            <h6>Peanuts? <input onClick={peanutHandler} type='checkbox' placeholder="Nutty?" /></h6>
            <h6>Dairy Free? <input onClick={dairyHandler} type='checkbox' placeholder="Dariy Free?" /></h6>
            <h6>Ingredients: <input onChange={(e) => { setIngredients(e.target.value) }} type="text" placeholder="milk, eggs, flour, etc..." /></h6>
            <button onClick={(e) => {
                e.preventDefault()
                const recipeObj = {
                    // id: setId(),
                    name: name,
                    image: image,
                    vegetarian: isvegetarian,
                    hasPeanuts: containPeanuts,
                    dairyFree: hasDairy,
                    ingredients: ingredients,
                    comments: "",
                    likes: 0,
                    favorite: false
                    
                }            
                addRecipe(recipeObj)
            }} type="submit">Recommend Recipe</button>

        </form>
    )
}

export default RecipeForm;