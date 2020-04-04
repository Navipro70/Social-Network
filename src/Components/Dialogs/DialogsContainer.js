import Dialogs from "./Dialogs";
import {
  newMessageActionCreator,
  newMessageChangerActionCreator
} from "../../redux/dialog-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    users: state.dialogPage.users,
    messages: state.dialogPage.messages,
    newMessage: state.dialogPage.newMessage
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(newMessageActionCreator())
    },
    changeMessage: (currentText) => {
      dispatch(newMessageChangerActionCreator(currentText))
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
