import React from "react";

function SearchBar({ setSearchString }) {

    return (
        <p className="searchBar">
            <input  onChange={(e) => setSearchString(e.target.value)} placeholder="Search" />
        </p>
    )
}

export default SearchBar