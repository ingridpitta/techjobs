import React from "react";
import { CompanyInfos, RoleInfos } from "../";
import "./card.css";

const Card = ({
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
  key
}) => {
  return (
    <div className="card--container" key={key}>
      <CompanyInfos logo={logo} company={company} position={position} postedAt={postedAt} contract={contract} location={location} />
      <RoleInfos role={role} level={level} languages={languages} tools={tools}/>
    </div>
  );
};

export default Card;
