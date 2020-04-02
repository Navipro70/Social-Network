import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Messages/Messages";
import DialogId from "./DialogId/DialogId";
import {
  newMessageActionCreator,
  newMessageChangerActionCreator
} from "../../redux/state";

const Dialogs = props => {
  let currentUsers = props.dialogPage.users.map(user => (
    <DialogId name={user.name} id={user.id} />
  ));

  let currentMessages = props.dialogPage.messages.map(currentValue => (
    <Message mess={currentValue.message} />
  ));

  let info = React.createRef();

  function onChangeFunction() {
    let currentText = info.current.value;
    props.dispatch(newMessageChangerActionCreator(currentText));
  }

  function messageMaker() {
    props.dispatch(newMessageActionCreator());
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
            value={props.dialogPage.newMessage}
          />
          <button onClick={messageMaker}>Send message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
