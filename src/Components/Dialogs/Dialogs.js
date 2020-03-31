import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Messages/Messages";
import DialogId from "./DialogId/DialogId";

const Dialogs = props => {
  let currentUsers = props.dialogPage.users.map(user => (
    <DialogId name={user.name} id={user.id} />
  ));

  let currentMessages = props.dialogPage.messages.map(currentValue => (
    <Message mess={currentValue.message} />
  ));

  let info = React.createRef();

  return (
    <div className={classes.gridContent}>
      <div className={classes.names}>
        <div>Friends</div>
        {currentUsers}
      </div>

      <div className={classes.dialog}>
        {currentMessages}
        <div>
          <textarea ref={info}></textarea>
          <button onClick={() => alert(info.current.value)}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
