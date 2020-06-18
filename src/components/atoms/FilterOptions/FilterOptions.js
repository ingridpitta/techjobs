import React from "react";
import "./filterOptions.css";

const FilterOptions = ({ filters, onClick }) => {
  return (
    <div className="filterOptions--container" onClick={onClick}>
      {filters.map(filter => {
        return (
          <div className="filterOptions--filter" id={filter}>
            <h3>{filter}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptions;
