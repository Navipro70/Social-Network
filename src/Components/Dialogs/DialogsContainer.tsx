import { ComponentType } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { withAuthRedirect } from '../../HihgOrderComponents/RedirectComponent'
import { actions, MessageType, UsersType } from '../../redux/dialog-reducer'
import { AppStateType } from '../../redux/redux-store'

import Dialogs from './Dialogs'



type MapStatePropsType = {
  users: UsersType[]
  messages: MessageType[]
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
