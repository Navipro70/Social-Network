import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Messages/Messages";
import DialogId from "./DialogId/DialogId";
import MessageFormContainer from "./MessageForm/MessageFormContainer";

const Dialogs = ({users, messages, addMessage}) => {
  const currentUsers = users.map(user => (
    <DialogId name={user.name} id={user.id} key={user.id} />
  ));

  const currentMessages = messages.map(currentValue => (
    <Message mess={currentValue.message} key={currentValue.id} />
  ));

  const sendMessage = (messageText) => addMessage(messageText);

  return (
    <div className={classes.gridContent}>
      <div className={classes.names}>
        <div>Friends</div>
        {currentUsers}
      </div>

      <div className={classes.dialog}>
        {currentMessages}
          <MessageFormContainer addMessage={sendMessage}/>
      </div>
    </div>
  );
};

export default React.memo(Dialogs);
