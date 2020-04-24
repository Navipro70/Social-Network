import Dialogs from "./Dialogs";
import {actions, MessageType, UsersType} from "../../redux/dialog-reducer";
import {connect} from "react-redux";
import {authRedirect} from "../../HihgOrderComponents/redirectComponent";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    users: Array<UsersType>
    messages: Array<MessageType>
}

type MapDispatchPropsType = {
    addMessage: (messageText: string) => void
}

export type PropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    users: state.dialogPage.users,
    messages: state.dialogPage.messages,
});

const DialogRedirect = authRedirect(Dialogs); // SHOULD ADD TYPO

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addMessage: actions.addMessage
})(DialogRedirect);