import React from "react";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";

function FullMenu({ food, handleDelete, setSearchString}) {
    

    const recipes = food.map((foodObj) => <RecipeCard key={foodObj.id} food={foodObj} handleDelete={handleDelete} />)

    return (
        <div>
            <SearchBar setSearchString={setSearchString} />
            {recipes}
        </div>
    )
}





export default FullMenu