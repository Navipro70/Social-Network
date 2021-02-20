import { FC } from 'react'

import anon from '../Images/anon.png'
import { Nullable } from '../Types/types'

type PropsType = {
  photo: Nullable<string>
}

export const UserPhoto: FC<PropsType> = ({ photo }) => (
  <img
    alt="profile"
    src={photo ? photo : anon}
    style={{
      width: '150px',
      height: '150px',
      marginLeft: '40px',
      marginTop: '35px',
    }}
  />
)
