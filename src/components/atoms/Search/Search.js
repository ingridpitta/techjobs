import React from "react";
import "./search.css";

const Search = ({ placeholder, value, handleChange }) => {
  return (
    <input placeholder={placeholder} value={value} onChange={handleChange} />
  );
};

export default Search;
