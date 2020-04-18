import React from "react";
import classes from "../Header.module.css";
import {NavLink} from "react-router-dom";

export const CurrentProfileNavLink = ({login, logoutHandler}) => {
    return (
        <div className={classes.auth}>
            <NavLink to={`/profile`}>{login}</NavLink>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
};