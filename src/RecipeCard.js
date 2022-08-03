import React, { useEffect, useState } from 'react';


function RecipeCard({ food, handleDelete, handleFavorite }) {
    
    const { name, vegetarian, image, hasPeanuts, dairyFree, ingredients, comments, likes, favorite, id } = food

    let [likeCount, setLikeCount] = useState(likes)

    const [favoriteToggle, setFavoriteToggle] = useState(favorite)

    function handleFavoriteToggle() {
        setFavoriteToggle(favoriteToggle => !favoriteToggle)
        console.log(favoriteToggle)
        handleFavorite(favoriteToggle)
    }

    const handleLikeCount = () => {
        setLikeCount(likeCount = likeCount +1, console.log(likeCount))
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: "PATCH", 
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                likes: likeCount
            })
        } )
    }
    
    
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} style={{height: "120px"}}/>
            <ul>
                <li><a>{vegetarian ? "🍖: No" : "🍖: Yes"}</a></li>
                <li><a>{hasPeanuts ? "🥜: Yes" : "🥜: No"}</a></li>
                <li><a>{dairyFree ? "🐮: No" : "🐮: Yes"}</a></li>
                <li onClick={handleLikeCount}><a >😘:{" " + likeCount}</a></li>
                <li><a>{comments}</a></li>
                <button onClick={() => {handleFavoriteToggle()}}>⭐ Favorite</button>
                <button onClick={() => {handleDelete(id)}}>Remove Recipe</button>
            </ul>
        </div>
    )
}


export default RecipeCard;