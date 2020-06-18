import React from "react";
import { MainTitle } from "../../atoms";
import { SearchBar, FilterBar } from "../../molecules";
import "./homeContent.css";

const HomeContent = ({ title, filters, handleFilters }) => {
  return (
    <main className="homeContent--container">
      <MainTitle title={title} />
      <SearchBar />
      <FilterBar filters={filters} onClick={handleFilters} />
    </main>
  );
};
export default HomeContent;
