import React, { FC } from 'react'

import { DispatchReduxFormType } from '../../../../Types/ReduxFormTypes'
import { ProfileInformationType, profileType } from '../../../../Types/types'

import InformationForm from './InformationForm'

export type PropsType = {
  profile: profileType
  thunkPutUserInformation: (data: ProfileInformationType, userIf: number) => void
  setEditMode: (editMode: boolean) => void
}

const InformationFormContainer: FC<PropsType> = ({
  profile,
  thunkPutUserInformation,
  setEditMode,
}) => {
  const onSubmit = (data: ProfileInformationType, dispatch: DispatchReduxFormType) => {
    thunkPutUserInformation(data, profile.userId)
    setEditMode(true)
  }

  return (
    <div>
      <InformationForm
        initialValues={{ ...profile, ...profile.contacts }}
        profile={profile}
        setEditMode={setEditMode}
        thunkPutUserInformation={thunkPutUserInformation}
        onSubmit={onSubmit}
      />
    </div>
  )
}

export default InformationFormContainer
