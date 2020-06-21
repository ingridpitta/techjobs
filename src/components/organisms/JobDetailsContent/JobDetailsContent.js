import React from "react";
import { MainTitle } from "../../atoms";
import { CardDetails } from "../../molecules";
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
  onClick,
  id} = data;
  
  return (
    <main className="jobDetailsContent--container">
       <CardDetails
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
            onClick={onClick}
            key={`${id + 1}`}
          />
    </main>
  );
};
export default JobDetailsContent;
