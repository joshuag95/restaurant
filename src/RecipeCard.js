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
        setLikeCount(likeCount = likeCount + 1, console.log(likeCount))
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                likes: likeCount
            })
        })
    }


    return (
        <div className='card'>
            <ul>
            <h2 style={{color: "crimson"}}>{name}</h2>
            <img src={image} style={{ height: "200px" }} />
            </ul>
            <ul style={{paddingBlock: "20px"}}>
                <a>{vegetarian ? "🍖: No" : "🍖: Yes"}</a><br/>
                <a>{hasPeanuts ? "🥜: Yes" : "🥜: No"}</a><br/>
                <a>{dairyFree ? "🐮: No" : "🐮: Yes"}</a><br/>
                <a onClick={handleLikeCount}>😘:{" " + likeCount}</a>
                <ul>
                    <br/>
                    <a style={{fontWeight: "bold", color: "turquoise"}}>COMMENTS</a>
                    <br/>
                    <br/>
                    <li className="cardComments"><a>{comments}</a></li>
                    <button onClick={() => { handleFavoriteToggle() }}>⭐ Favorite</button>
                    <button onClick={() => { handleDelete(id) }}>Remove Recipe</button>
                </ul>
            </ul>
        </div>
    )
}


export default RecipeCard;