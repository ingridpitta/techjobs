import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ text, destination, className, onClick }) => {
  return (
    <div>
      {destination !== "" ? (
        <Link to={destination} className={className} onClick={onClick}>
          {text}
        </Link>
      ) : (
        <button className={className} onClick={onClick}>
          {text}
        </button>
      )}
    </div>
  );
};
export default Button;
