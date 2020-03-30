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

let users = [
  { id: 1, name: "Dmitry" },
  { id: 2, name: "Sasha" },
  { id: 3, name: "Kostya" },
  { id: 4, name: "Diana" },
  { id: 5, name: "Andrew" },
  { id: 6, name: "Vadya" }
];

let currentUsers = users.map(user => (
  <DialogId name={user.name} id={user.id} />
));

let messages = [
  { id: 1, message: "Hello" },
  { id: 2, message: "How are you" },
  { id: 3, message: "Fine. What about you?" },
  { id: 4, message: "Me too, thanks" },
  { id: 5, message: "Goodbye" }
];

let currentMessages = messages.map(currentValue => (
  <Message mess={currentValue.message} />
));

const Dialogs = () => {
  return (
    <div className={classes.gridContent}>
      <div className={classes.names}>
        <div>Direct messages</div>
        {currentUsers}
      </div>

      <div className={classes.dialog}>{currentMessages}</div>
    </div>
  );
};

export default Dialogs;
