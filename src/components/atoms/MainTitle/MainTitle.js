import React from "react";
import "./mainTitle.css";

const MainTitle = ({title}) => {
    return (
        <div className="mainTitle--container">
            <h1>{title}</h1>
        </div>
    )
}

export default MainTitle;