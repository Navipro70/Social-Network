import { memo, useState, FC } from 'react'

import { ProfileInformationType, profileType, Nullable } from '../../../Types/types'
import { LoadingView } from '../../../components'
import { UserPhoto } from '../../../components/UserPhoto'

import classes from './Information.module.css'
import ContactInformation from './InformationComponents/ContactInformation'
import FileInput from './InformationComponents/FileInput'
import InformationFormContainer from './InformationForm/InformationFormContainer'
import StatusHook from './Status/StatusHook'

type PropsType = {
  profile: Nullable<profileType>
  statusText: string
  setStatus: (statusText: string) => void
  thunkPutUserInformation: (data: ProfileInformationType, userIf: number) => void
  isOwner: boolean
  thunkSavePhoto: (file: any) => void
}

const Information: FC<PropsType> = ({
  profile,
  statusText,
  setStatus,
  thunkPutUserInformation,
  isOwner,
  thunkSavePhoto,
}) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const photoHandler = (e: any) => {
    const files = new FormData()
    files.append('image', e.target.files[0])
    thunkSavePhoto(files)
  }

  if (!profile) return <LoadingView />
  return (
    <div className={classes.profile_information}>
      <div>
        <UserPhoto photo={profile.photos.small} />
        {isOwner && <FileInput photoHandler={photoHandler} />}
      </div>
      <div>
        <div className={classes.profileStatus}>
          <h4>{profile.fullName}</h4>
          <StatusHook isOwner={isOwner} setStatus={setStatus} statusText={statusText} />
          {profile.lookingForAJob && <h4>{profile.lookingForAJobDescription}</h4>}
          {profile.aboutMe && <h4>About me: {profile.aboutMe}</h4>}
        </div>
        {!editMode && (
          <ContactInformation
            contacts={profile.contacts}
            isOwner={isOwner}
            setEditMode={setEditMode}
          />
        )}

        {editMode && (
          <InformationFormContainer
            profile={profile}
            setEditMode={setEditMode}
            thunkPutUserInformation={thunkPutUserInformation}
          />
        )}
      </div>
    </div>
  )
}

export default memo(Information)
