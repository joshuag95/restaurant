import React from 'react';
import FavoriteCard from './FavoriteCard';

function Favorites({ filterArray, handleFilter }) {

    const favoriteObj = filterArray.map(foodObj => {
        return <FavoriteCard handleFilter={handleFilter} foodObj={foodObj} key={foodObj.id} />
    })
    return (
        <div>{favoriteObj}</div>
    )
}


export default Favorites