import React, { useState } from "react";

function RecipeForm({addRecipe}){

    let [name, setName] =useState("")
    let [image, setImage] = useState("")
    let [isvegetarian, setIsVegetarian] = useState(false)
    let [containPeanuts, setContainPeanuts] = useState(false)
    let [hasDairy, setHasDairy] = useState(false)
    
    

    

    return (
    <form>
        <h6>Name: <input type='text' placeholder="Name"/></h6>
        <h6>Image URL: <input type='text' placeholder="Image URL"/></h6>
        
        <h6>Vegetarian: <input onClick={()=> {setIsVegetarian(isvegetarian = !isvegetarian)}} type='checkbox' placeholder="Vegetarian?" /></h6>
        <h6>Peanuts? <input onClick={()=> {setIsVegetarian(isvegetarian = !isvegetarian)}} type='checkbox' placeholder="Nutty?"/></h6>
        <h6>Dairy Free? <input onClick={()=> {setIsVegetarian(isvegetarian = !isvegetarian)}} type='checkbox' placeholder="Dariy Free?"/></h6>
        <h6>Ingredients: <input type="text" placeholder="milk, eggs, flour, etc..."/></h6>
        <button onClick={(e) => {
            e.preventDefault()}} type="submit">Recommend Recipe</button>  

    </form>    
    )
}

export default RecipeForm;