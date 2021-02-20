import Button from '@material-ui/core/Button'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import anon from "../../../Images/anon.png"
import { Nullable } from '../../../Types/types'

import classes from './User.module.css'

type PropsType = {
  followed: boolean
  id: number
  photoSrcSmall: Nullable<string>
  isFollowingBlocker: number[]
  status: string
  thunkUserFollowing: (isFollowed: boolean, id: number) => void
}

const User: React.FC<PropsType> = ({
  followed,
  thunkUserFollowing,
  id,
  photoSrcSmall,
  isFollowingBlocker,
  status,
}) => {
  const [butText, setButText] = useState<string>(followed ? 'UnFollow' : 'Follow')

  const handleClick = () => {
    setButText(followed ? 'Follow' : 'UnFollow')
    thunkUserFollowing(followed, id)
  }

  const disabler = isFollowingBlocker.some((currentId) => currentId === id)

  return (
    <div className={classes.user}>
      <div>
        <NavLink to={`/profile/${id}`}>
          <img alt="Profile img" src={photoSrcSmall !== null ? photoSrcSmall : anon} />
        </NavLink>
        <Button color="primary" disabled={disabler} variant="contained" onClick={handleClick}>
          {butText}
        </Button>
      </div>
      <div>
        <NavLink to={`/profile/${id}`}>
          <h2>{status}</h2>
        </NavLink>
      </div>
    </div>
  )
}

export default React.memo(User)
