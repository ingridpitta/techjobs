import React from "react";
import { MainTitle } from "../../atoms";
import "./homeContent.css";

const HomeContent = ({ title }) => {
  return (
    <main className="homeContent--container">
      <MainTitle title={title} />
    </main>
  );
};
export default HomeContent;
