import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
        <NavLink to="/profile" activeClassName={classes.activeColor}>Profile</NavLink>
        <NavLink to="/dialogs" activeClassName={classes.activeColor}>Messages</NavLink>
        <NavLink to="/users" activeClassName={classes.activeColor}>Users</NavLink>
        <NavLink to="/news" activeClassName={classes.activeColor}>News</NavLink>
        <NavLink to="/settings" activeClassName={classes.activeColor}>Settings</NavLink>
    </nav>
  );
};

export default Navbar;
