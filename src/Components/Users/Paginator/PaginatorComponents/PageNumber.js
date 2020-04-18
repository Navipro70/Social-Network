import React from "react";
import classes from "../../Users.module.css";

export const PageNumber = ({i, currentPage, setCurrentPage}) => {
    const spanHandler = () => setCurrentPage(i);
    return (
        <span
            key={i}
            className={i === currentPage ? null : classes.selected}
            onClick={spanHandler}>{i}
        </span>
    )
};