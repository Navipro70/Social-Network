import { FC } from 'react';

import anon from '../../Images/anon.png'
import { Nullable } from '../../Types/types'
import classes from '../Profile/Information/Information.module.css'

type PropsType = {
  photo: Nullable<string>
}

export const UserPhoto: FC<PropsType> = ({ photo }) => (
  <>
    {photo ? (
      <img
        alt="profile"
        className={classes.avatar}
        src={photo}
      /> /*Вынести в отдельную компоненту*/
    ) : (
      <img alt="profile" className={classes.avatar} src={anon} />
    )}
  </>
)
