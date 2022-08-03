import React, { useState } from 'react';


function FavoriteCard({ foodObj, handleFilter }) {

    const { name, vegetarian, image, hasPeanuts, dairyFree, ingredients, comments, likes, favorite, id } = foodObj

    let [likeCount, setLikeCount] = useState(likes)

    const [favoriteToggle, setFavoriteToggle] = useState(false)

    function handleFavoriteToggle() {
        setFavoriteToggle(favoriteToggle => !favoriteToggle)
        handleFilter()
        fetch(`http://localhost:3000/recipes/${id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                favorite: favoriteToggle
            })
        })
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
        <div>
            <h3>{name}</h3>
            <img src={image} style={{ height: "120px" }} />
            <ul>
                <li><a>{vegetarian ? "🍖: No" : "🍖: Yes"}</a></li>
                <li><a>{hasPeanuts ? "🥜: Yes" : "🥜: No"}</a></li>
                <li><a>{dairyFree ? "🐮: No" : "🐮: Yes"}</a></li>
                <li onClick={handleLikeCount}><a >😘:{" " + likeCount}</a></li>
                <li><a>{comments}</a></li>
                <li><a>{favorite ? "★" : "☆"}</a></li>
                <button onClick={() => handleFavoriteToggle()}>⭐ Favorite</button>
            </ul>
        </div>
    )
}


export default FavoriteCard;