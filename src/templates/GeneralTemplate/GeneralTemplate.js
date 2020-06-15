import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import "./generalTemplate.css";

const GeneralTemplate = ({ children }) => {
  return (
    <div className="generalTemplate--container">
      <nav>
        <div>
          <Logo />
          <ul>
            <li>Home</li>
            <li>Entrar</li>
            <li>Cadastro</li>
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
};

return GeneralTemplate;
