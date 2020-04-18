import React from "react";
import "../Paginator.css";

export const NextButton = ({nextButtonHandler}) => {
    return <button className="user-button" onClick={nextButtonHandler}>Next</button>
};