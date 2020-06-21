import React from "react";
import { MainTitle } from "../../atoms";
import { SearchBar, FilterBar, Card } from "../../molecules";
import "./homeContent.css";

const HomeContent = ({
  title,
  filters,
  handleFilters,
  handleChange,
  onClick,
  getJobInfos,
  cardsInfo,
  value,
}) => {
  return (
    <main className="homeContent--container">
      <MainTitle title={title} />
      <SearchBar handleChange={handleChange} onClick={onClick} value={value} />
      <FilterBar filters={filters} onClick={handleFilters} />
      {cardsInfo.map(data => {
        const {
          company,
          role,
          logo,
          position,
          level,
          postedAt,
          contract,
          location,
          languages,
          tools,
          id
        } = data;
        return (
          <Card
            company={company}
            role={role}
            logo={logo}
            position={position}
            level={level}
            postedAt={postedAt}
            contract={contract}
            location={location}
            languages={languages}
            tools={tools}
            id={id}
            onClick={getJobInfos}
          />
        );
      })}
    </main>
  )
};
export default HomeContent;
