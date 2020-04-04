import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Messages/Messages";
import DialogId from "./DialogId/DialogId";

const Dialogs = props => {
  let currentUsers = props.users.map(user => (
    <DialogId name={user.name} id={user.id} key={user.id} />
  ));

  let currentMessages = props.messages.map(currentValue => (
    <Message mess={currentValue.message} key={currentValue.id} />
  ));

  let info = React.createRef();

  function onChangeFunction() {
    let currentText = info.current.value;
    props.changeMessage(currentText)
  }

  function messageMaker() {
    props.addMessage();
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
          <textarea
            ref={info}
            onChange={onChangeFunction}
            value={props.newMessage}
          />
          <button onClick={messageMaker}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
