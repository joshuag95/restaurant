import React from 'react';
import RecipeCard from "./RecipeCard"


function RecipeContainer({ food }) {
    console.log("2", food)
    const recipes = food.map((foodObj) => { <RecipeCard key={foodObj.id} food={foodObj} /> })

    return (
        <div>
            {recipes}
        </div>
    )
}


export default RecipeContainer;