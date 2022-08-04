import React, { useState } from "react";

function Search({ food, getFilteredArray }) {
    const [searchString, setSearchString] = useState('')

    const filteredArray = food.filter(foodObj => {
        return foodObj.name.toLowerCase().includes(searchString.toLowerCase())
        
    })

    getFilteredArray(filteredArray)


    return (
        <form>
            <input placeholder="Search Dishes" value={searchString} onChange={(e) => { setSearchString(e.target.value) }} />
        </form>
    )
}
export default Search;