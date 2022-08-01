import React,{useState} from 'react';


function RecipeCard({food}) {
    console.log("3", food)
    return (
        <div>
            <h1>{food.name}</h1>
        </div>
    )
}


export default RecipeCard;