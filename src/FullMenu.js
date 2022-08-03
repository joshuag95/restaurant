import React from "react";
import RecipeCard from "./RecipeCard";

function FullMenu({food, handleDelete, handleFavorite}) {
    const recipes = food.map((foodObj) => <RecipeCard key={foodObj.id} food={foodObj} handleFavorite={handleFavorite} handleDelete={handleDelete} />)

    return (
        <div>
            {recipes}
        </div>
    )
}





export default FullMenu