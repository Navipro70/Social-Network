import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink to="/profile" activeClassName={classes.activeColor}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={classes.activeColor}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" activeClassName={classes.activeColor}>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" activeClassName={classes.activeColor}>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" activeClassName={classes.activeColor}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
