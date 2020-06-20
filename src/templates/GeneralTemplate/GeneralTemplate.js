import React from "react";
import { ReactComponent as Logo } from "../../images/logo.svg";
import {Link} from "react-router-dom";
import "./generalTemplate.css";

const GeneralTemplate = ({ children }) => {
  return (
    <div className="generalTemplate--container">
      <nav>
        <div>
          <Logo />
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/login">
              <li>Entrar</li>
            </Link>
            <Link to="/signup">
              <li>Cadastro</li>
            </Link>
          </ul>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default GeneralTemplate;
