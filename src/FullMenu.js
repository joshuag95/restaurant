import React from "react";
import RecipeCard from "./RecipeCard";


function FullMenu({ food, handleDelete }) {
    

    const recipes = food.map((foodObj) => <RecipeCard key={foodObj.id} food={foodObj} handleDelete={handleDelete} />)

    return (
        <div>
            {recipes}
        </div>
    )
}





export default FullMenu