import React from "react";
import {FilterOptions} from "../../atoms";
import "./filterBar.css";

const FilterBar = ({ filters, onClick }) => {
  return (
    <div className="filterBar--container" onClick={onClick}>
      <FilterOptions filters={filters} onClick={onClick}/>
    </div>
  );
};

export default FilterBar;
