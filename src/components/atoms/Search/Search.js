import React from "react";
import "./search.css";

const Search = ({placeholder, value}) => {
    return(
        <input placeholder={placeholder} value={value} />
    )
}

export default Search;