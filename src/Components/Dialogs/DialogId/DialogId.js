import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Dialogs.module.css";

const DialogId = ({id, name}) => {
  return (
    <NavLink
      to={`/dialogs/${id}`}
      activeClassName={classes.active}
      className={classes.name}
    >
      {name}
    </NavLink>
  );
};

export default DialogId;
