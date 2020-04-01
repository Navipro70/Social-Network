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

  function onChangeFunction(){
    props.newMessageChanger(info.current.value);
  }

  function messageMaker() {
    props.newMessage();
  }

  return (
    <div className={classes.gridContent}>
      <div className={classes.names}>
        <div>Friends</div>
        {currentUsers}
      </div>

      <div className={classes.dialog}>
        {currentMessages}
        <div>
          <textarea ref={info} onChange={onChangeFunction} value={props.dialogPage.newMessage}></textarea>
          <button onClick={messageMaker}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
