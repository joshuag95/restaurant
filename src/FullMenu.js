import React from "react";
import RecipeCard from "./RecipeCard";

function FullMenu({ food, handleDelete, handleFilter }) {
    const recipes = food.map((foodObj) => <RecipeCard key={foodObj.id} food={foodObj} handleFilter={handleFilter} handleDelete={handleDelete} />)

    return (
        <div>
            {recipes}
        </div>
    )
}





export default FullMenu