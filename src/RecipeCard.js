import React, { useState } from 'react';


function RecipeCard({ food }) {
    const { name, vegetarian, image, hasPeanuts, dairyFree, ingredients, comments, likes, favorite } = food
    console.log("3", food)
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} style={{height: "120px"}}/>
            <ul>
                <li><a>{vegetarian ? "🍖: No" : "🍖: Yes"}</a></li>
                <li><a>{hasPeanuts ? "🥜: Yes" : "🥜: No"}</a></li>
                <li><a>{dairyFree ? "🐮: No" : "🐮: Yes"}</a></li>
                <li><a>😘:{" " + likes}</a></li>
                <li><a>{comments}</a></li>
            </ul>
        </div>
    )
}


export default RecipeCard;