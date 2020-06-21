import React from "react";
import "./companyInfos.css";

const CompanyInfos = ({
  logo,
  company,
  position,
  postedAt,
  contract,
  location,
  key
}) => {
  return (
    <div className="company--infos" key={`${key}--company`}>
      <img src={logo} alt={`${company}-logo`} />
      <div className="role--details">
        <h3>{company}</h3>
        <h2>{position}</h2>
        <div className="details">
          <h3>{postedAt}</h3>
          <span></span>
          <h3>{contract}</h3>
          <span></span>
          <h3>{location}</h3>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfos;
