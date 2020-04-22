import Dialogs from "./Dialogs";
import {actions} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {authRedirect} from "../../HihgOrderComponents/redirectComponent";

let mapStateToProps = (state) => {
  return {
    users: state.dialogPage.users,
    messages: state.dialogPage.messages,
  }
};


const DialogRedirect = authRedirect(Dialogs);

export default connect(mapStateToProps, {
  addMessage: actions.addMessage
})(DialogRedirect);