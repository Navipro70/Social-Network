import Button from '@material-ui/core/Button'
import React, { FC, useEffect, useState } from 'react'
import { InjectedFormProps, reduxForm } from 'redux-form'

import { ProfileInformationType } from '../../../../Types/types'
import { emptyField, urlValidator } from '../../../../utils/validators'
import classes from '../Information.module.css'

import { PropsType } from './InformationFormContainer'
import { CheckboxItem } from './InformationFormItems/CheckboxItem'
import { ContactsItem } from './InformationFormItems/ContactsItem'
import { SnackbarError } from './InformationFormItems/SnackbarError'



const InformationForm: FC<InjectedFormProps<ProfileInformationType, PropsType> & PropsType> = ({
  profile,
  error,
  setEditMode,
  ...props
}) => {
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(typeof error === 'string'), [error])

  const contactsMap = [...Object.keys(profile.contacts)]
  return (
    <form className={classes.fullForm} onSubmit={props.handleSubmit}>
      <ul className={classes.profileInfoForm}>
        <ContactsItem name="aboutMe" placeholder="About you" validators={[emptyField]} />
        {contactsMap.map((i) => (
          <ContactsItem
            key={i}
            name={`contacts.${i}`}
            placeholder={i}
            validators={[urlValidator]}
          />
        ))}
        <CheckboxItem />
        <ContactsItem
          name="lookingForAJobDescription"
          placeholder="What job is your favourite?"
          validators={[emptyField]}
        />
        <ContactsItem name="fullName" placeholder="Your full name" validators={[emptyField]} />
      </ul>
      <Button color="primary" type="submit" variant="contained">
        Set changes
      </Button>
      <Button variant="contained" onClick={() => setEditMode(false)}>
        Cancel
      </Button>
      <SnackbarError error={error} open={open} setOpen={setOpen} />
    </form>
  )
}

export default reduxForm<ProfileInformationType, PropsType>({
  form: 'settings',
})(InformationForm)
