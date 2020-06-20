import React from "react";
import { MainTitle } from "../../atoms";
import { Card } from "../../molecules";
import "./jobDetailsContent.css";

const JobDetailsContent = ({data}) => {
  const {company,
  role,
  logo,
  position,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  id} = data;
  
  return (
    <main className="jobDetailsContent--container">
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
          />
    </main>
  );
};
export default JobDetailsContent;
