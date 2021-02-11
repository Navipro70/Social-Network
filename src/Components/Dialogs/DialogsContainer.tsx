import Dialogs from './Dialogs'
import { actions, MessageType, UsersType } from '../../redux/dialog-reducer'
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../HihgOrderComponents/RedirectComponent'
import { AppStateType } from '../../redux/redux-store'
import { compose } from 'redux'
import { ComponentType } from 'react'

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
})

export default compose<ComponentType>(
  connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addMessage: actions.addMessage,
  }),
  withAuthRedirect,
)(Dialogs)
