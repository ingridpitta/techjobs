import React from "react";
import "./roleInfos.css";

const RoleInfos = ({ role, level, languages, tools }) => {
  return (
    <div className="role--infos">
      <div>
        <h2>{role}</h2>
      </div>
      <div>
        <h2>{level}</h2>
      </div>
      {languages && languages.map(language => (
        <div>
          <h2>{language}</h2>
        </div>
      ))}
      {tools && tools.map(tool => (
        <div>
          <h2>{tool}</h2>
        </div>
      ))}
    </div>
  );
};

export default RoleInfos;
