import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Messages/Messages";
import DialogId from "./DialogId/DialogId";
import MessageFormContainer from "./MessageForm/MessageForm";

const Dialogs = props => {
  let currentUsers = props.users.map(user => (
    <DialogId name={user.name} id={user.id} key={user.id} />
  ));

  let currentMessages = props.messages.map(currentValue => (
    <Message mess={currentValue.message} key={currentValue.id} />
  ));

  const addMessage = (messageText) => {
    props.addMessage(messageText);
  };

  return (
    <div className={classes.gridContent}>
      <div className={classes.names}>
        <div>Friends</div>
        {currentUsers}
      </div>

      <div className={classes.dialog}>
        {currentMessages}
          <MessageFormContainer addMessage={addMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;
