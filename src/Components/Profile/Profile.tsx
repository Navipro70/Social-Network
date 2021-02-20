import React, { FC } from 'react'

import { photosType, postType, ProfileInformationType } from '../../Types/types'
import { initialStateType } from '../../redux/profile-reducer'

import Information from './Information/Information'
import Posts from './Posts/Posts'
import classes from './Profile.module.css'


export type PropsType = {
  isOwner: boolean
  profilePage: initialStateType
  thunkSavePhoto: (photoFile: photosType) => void
  thunkPutUserInformation: (data: ProfileInformationType, userId: number) => void
  thunkSetStatus: (statusText: string) => void
  addPost: (postText: string) => void
  posts: postType[]
}

const Profile: FC<PropsType> = ({
  isOwner,
  profilePage,
  thunkSavePhoto,
  thunkPutUserInformation,
  thunkSetStatus,
  addPost,
  posts,
}) => (
  <div className={classes.profile}>
    <Information
      isOwner={isOwner}
      profile={profilePage.profile}
      setStatus={thunkSetStatus}
      statusText={profilePage.statusText}
      thunkPutUserInformation={thunkPutUserInformation}
      thunkSavePhoto={thunkSavePhoto}
    />
    <Posts addPost={addPost} isOwner={isOwner} posts={posts} />
  </div>
)

export default React.memo(Profile)
