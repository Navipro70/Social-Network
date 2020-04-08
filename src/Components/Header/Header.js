import React from "react";
import brave from "../../Images/brave.png";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = props => {
    return (
        <header className={classes.header}>
            <img src={brave} alt="hello"/>
            <h4>Grid social</h4>
            <div className={classes.auth}>
                {props.currentUserProfile && <NavLink to={`/profile/${props.currentUserProfile.id}`}>
                    {props.currentUserProfile.login}
                </NavLink>}
            </div>
        </header>
    );
};

export default Header;
