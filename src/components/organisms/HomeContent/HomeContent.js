import React from "react";
import { MainTitle } from "../../atoms";
import { SearchBar } from "../../molecules";
import "./homeContent.css";

const HomeContent = ({ title }) => {
  return (
    <main className="homeContent--container">
      <MainTitle title={title} />
      <SearchBar />
    </main>
  );
};
export default HomeContent;
