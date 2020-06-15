import React from "react";
import { Link } from "react-router-dom";
import "./button.css";

const Button = ({ text, destination, className }) => {
  return (
    <div>
      {destination !== "" ? (
        <Link to={destination} className={className}>
          {text}
        </Link>
      ) : (
        <button className={className}>{text}</button>
      )}
    </div>
  );
};
export default Button;
