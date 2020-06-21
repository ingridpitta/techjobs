import React from "react";
import "./filterOptions.css";

const FilterOptions = ({ filters, onClick }) => {
  return (
    <div className="filterOptions--container">
      {filters.map((filter, index) => {
        return (
          <div className="filterOptions--filter" id={filter} onClick={onClick} key={`${index + 1}--options`}>
            <h3 id={filter}>{filter}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default FilterOptions;
