import React from "react";
import { Button, Search } from "../../atoms";
import "./searchBar.css";

const SearchBar = ({ handleChange, onClick }) => {
  return (
    <div className="searchBar--container">
      <Search placeholder="O que você procura" handleChange={handleChange} />
      <Button text="Buscar" className="searchBar--btn" destination="" onClick={onClick}/>
    </div>
  );
};

export default SearchBar;
