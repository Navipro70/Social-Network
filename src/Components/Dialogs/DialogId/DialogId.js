import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Dialogs.module.css";

const DialogId = props => {
  return (
    <NavLink
      to={`/dialogs/${props.id}`}
      activeClassName={classes.active}
      className={classes.name}
    >
      {props.name}
    </NavLink>
  );
};

export default DialogId;
