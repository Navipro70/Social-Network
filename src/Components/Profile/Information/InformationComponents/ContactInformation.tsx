import Button from '@material-ui/core/Button'
import { FC } from 'react';

import { contactsType } from '../../../../Types/types'

type PropsType = {
  contacts: contactsType
  isOwner: boolean
  setEditMode: (editMode: boolean) => void
}

const ContactInformation: FC<PropsType> = ({ contacts, isOwner, setEditMode }) => {
  const realContacts = Object.entries(contacts).filter((item) => item[1])
  const editModeHandler = () => setEditMode(true)
  const profileContacts = realContacts.map((i) => (
    <li key={i[0]}>
      {i[0]}: <a href={`//${i[1]}`}>{i[1]}</a>
    </li>
  ))
  if (!realContacts.length) {
    return (
      <div style={{ marginLeft: '40px' }}>
        <h4>No contact information</h4>
        {isOwner && (
          <Button color="primary" variant="contained" onClick={editModeHandler}>
            Set information
          </Button>
        )}
      </div>
    )
  }

  return (
    <ul>
      {profileContacts}
      {isOwner && (
        <Button
          color="primary"
          style={{ marginTop: '15px' }}
          variant="contained"
          onClick={editModeHandler}
        >
          Change information
        </Button>
      )}
    </ul>
  )
}

export default ContactInformation
