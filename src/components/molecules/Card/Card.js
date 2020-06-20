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
  id,
  onClick
}) => {
  return (
    <div className="card--container" key={id} onClick={onClick} id={`container--${id}`}>
      <CompanyInfos id={`companyInfos--${id}`} logo={logo} company={company} position={position} postedAt={postedAt} contract={contract} location={location} />
      <RoleInfos id={`roleInfos--${id}`}  role={role} level={level} languages={languages} tools={tools}/>
    </div>
  );
};

export default Card;
