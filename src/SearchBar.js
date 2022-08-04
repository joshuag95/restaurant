import React from "react";

function SearchBar({setSearchString}) {

    return (
        <input onChange={(e) => setSearchString(e.target.value)} placeholder="Search"/>
    )
}

export default SearchBar