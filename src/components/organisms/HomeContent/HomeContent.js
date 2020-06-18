import React from "react";
import { MainTitle } from "../../atoms";
import { SearchBar, FilterBar } from "../../molecules";
import "./homeContent.css";

const HomeContent = ({
  title,
  filters,
  handleFilters,
  handleChange,
  onClick
}) => {
  return (
    <main className="homeContent--container">
      <MainTitle title={title} />
      <SearchBar handleChange={handleChange} onClick={onClick}/>
      <FilterBar filters={filters} onClick={handleFilters} />
    </main>
  );
};
export default HomeContent;
