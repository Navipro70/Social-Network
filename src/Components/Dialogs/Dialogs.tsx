import React, { FC } from 'react'

import DialogId from './DialogId/DialogId'
import classes from './Dialogs.module.css'
import { PropsType } from './DialogsContainer'
import MessageFormContainer from './MessageForm/MessageFormContainer'
import Message from './Messages/Messages'

const Dialogs: FC<PropsType> = ({ users, messages, addMessage }) => {
  const currentUsers = users.map((user) => <DialogId id={user.id} key={user.id} name={user.name} />)

  const currentMessages = messages.map((currentValue) => (
    <Message key={currentValue.id} mess={currentValue.message} />
  ))

  const sendMessage = (messageText: string) => addMessage(messageText)

  return (
    <div className={classes.gridContent}>
      <div className={classes.names}>
        <div>Friends</div>
        {currentUsers}
      </div>
      <div className={classes.dialog}>
        {currentMessages}
        <MessageFormContainer addMessage={sendMessage} />
      </div>
    </div>
  )
}

export default React.memo<PropsType>(Dialogs)
