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
  key,
  onClick
}) => {
  return (
    <div className="card--container" key={`${key}--key`} onClick={onClick} id={`container--${id}`}>
      <CompanyInfos key={`companyInfos--${key}--key`} id={`companyInfos--${id}`} logo={logo} company={company} position={position} postedAt={postedAt} contract={contract} location={location} />
      <RoleInfos key={`roleInfos--${key}--key`} id={`roleInfos--${id}`}  role={role} level={level} languages={languages} tools={tools}/>
    </div>
  );
};

export default Card;
