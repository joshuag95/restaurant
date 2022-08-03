import React from 'react';
import FavoriteCard from './FavoriteCard';

function Favorites({ favoritesArray, handleFilter }) {
    console.log(favoritesArray)
    const favoriteObj = favoritesArray.map(foodObj => {
        return <FavoriteCard key={foodObj.id} handleFilter={handleFilter} foodObj={foodObj} />
    })
    return (
        <div>{favoriteObj}</div>
    )
}


export default Favorites