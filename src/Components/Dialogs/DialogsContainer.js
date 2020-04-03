import React from "react";
import Dialogs from "./Dialogs";
import {
  newMessageActionCreator,
  newMessageChangerActionCreator
} from "../../redux/dialog-reducer";

const DialogsContainer = props => {
  const messageValue = props.store.getState().dialogPage.newMessage;
  let users = props.store.getState().dialogPage.users;
  let messages = props.store.getState().dialogPage.messages;

  function changeMessage(currentText) {
    props.store.dispatch(newMessageChangerActionCreator(currentText));
  }

  function addMessage() {
    props.store.dispatch(newMessageActionCreator());
  }

  return (
    <Dialogs addMessage={addMessage} changeMessage={changeMessage} messageValue={messageValue} users={users} messages={messages} />
  );
};

export default DialogsContainer;
