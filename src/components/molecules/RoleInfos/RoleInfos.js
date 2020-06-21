import React from "react";
import "./roleInfos.css";

const RoleInfos = ({ role, level, languages, tools, key }) => {
  return (
    <div className="role--infos" key={`${key}--role`}>
      <div>
        <h2>{role}</h2>
      </div>
      <div>
        <h2>{level}</h2>
      </div>
      {languages && languages.map((language, index) => (
        <div key={`${index + 1}--languages`}>
          <h2>{language}</h2>
        </div>
      ))}
      {tools && tools.map((tool, index) => (
        <div key={`${index + 1}--tools`}>
          <h2>{tool}</h2>
        </div>
      ))}
    </div>
  );
};

export default RoleInfos;
