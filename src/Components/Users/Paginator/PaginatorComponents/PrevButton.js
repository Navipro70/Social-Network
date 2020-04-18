import React from "react";
import "../Paginator.css";

export const PrevButton = ({prevButtonHandler}) => {
    return <button className="user-button" onClick={prevButtonHandler}>Prev</button>
};