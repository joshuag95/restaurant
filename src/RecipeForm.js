import React, { useEffect, useState } from "react";

function RecipeForm({ addRecipe}) {

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

    function randomNum(){
        return Math.random()
    }

    function formReset(){
        
        setName("")
        setImage("") 
        setIngredients("") 
        setIsVegetarian(false) 
        setContainPeanuts(false) 
        setHasDairy(false)
    
    }


   
    return (
        <form style={{background: "aqua", border: "dotted red"}}>
            <h6>Name: <input onChange={(e) => { setName(e.target.value) }} type='text' value={name} placeholder="Name" /></h6>
            <h6>Image URL: <input onChange={(e) => { setImage(e.target.value) }} value={image} type='text' placeholder="Image URL" /></h6>

            <h6>Vegetarian: <input onClick={vegetarianHandler} type='checkbox' value={isvegetarian} placeholder="Vegetarian?" /></h6>
            <h6>Peanuts? <input onClick={peanutHandler} type='checkbox' placeholder="Nutty?" value={containPeanuts} /></h6>
            <h6>Dairy Free? <input onClick={dairyHandler} type='checkbox' placeholder="Dariy Free?" value={hasDairy} /></h6>
            <h6>Ingredients: <input onChange={(e) => { setIngredients(e.target.value) }}value={ingredients} type="text" placeholder="milk, eggs, flour, etc..." /></h6>
            <button onClick={(e) => {
                e.preventDefault()
                const recipeObj = {
                    id: randomNum(),
                    name: name,
                    image: image,
                    vegetarian: isvegetarian,
                    hasPeanuts: containPeanuts,
                    dairyFree: hasDairy,
                    ingredients: ingredients,
                    comments: [""],
                    likes: 0,
                    favorite: false
                   
                }            
                addRecipe(recipeObj, formReset)
                               
            }} type="submit">Recommend Recipe</button>
        
        </form>
    )
}

export default RecipeForm;