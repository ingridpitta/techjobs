import React from "react";
import { Button, Search } from "../../atoms";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="searchBar--container">
      <Search placeholder="O que você procura" />
      <Button text="Buscar" className="searchBar--btn" destination="" />
    </div>
  );
};

export default SearchBar;
