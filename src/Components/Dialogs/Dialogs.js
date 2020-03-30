import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

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

const Message = props => {
  return <div className={classes.message}>{props.mess}</div>;
};

const Dialogs = () => {
  return (
    <div className={classes.gridContent}>
      <div className={classes.names}>
        <div>Direct messages</div>
        <DialogId name="Dmitry" id="1" />
        <DialogId name="Sasha" id="2" />
        <DialogId name="Kostya" id="3" />
        <DialogId name="Diana" id="4" />
        <DialogId name="Andrew" id="5" />
        <DialogId name="Vadya" id="6" />
      </div>

      <div className={classes.dialog}>
        <Message mess="Hi" />
        <Message mess="How are you?" />
        <Message mess="I'm ok thank you" />
      </div>
    </div>
  );
};

export default Dialogs;
