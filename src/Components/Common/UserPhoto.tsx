import classes from '../Profile/Information/Information.module.css'
import anon from '../../Images/anon.png'
import React, { FC } from 'react'
import { Nullable } from '../../Types/types'

type PropsType = {
  photo: Nullable<string>
}

export const UserPhoto: FC<PropsType> = ({ photo }) => (
  <>
    {photo ? (
      <img
        src={photo}
        className={classes.avatar}
        alt="profile"
      /> /*Вынести в отдельную компоненту*/
    ) : (
      <img src={anon} className={classes.avatar} alt="profile" />
    )}
  </>
)
