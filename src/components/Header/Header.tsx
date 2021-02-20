import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import brave from '../../Images/brave.png'
import { currentUserProfileType } from '../../redux/auth-reducer'

import classes from './Header.module.css'

type PropsType = {
  currentUserProfile: currentUserProfileType | null
  logoutHandler: () => void
}

export const Header: FC<PropsType> = ({ currentUserProfile, logoutHandler }) => (
  <header className={classes.header}>
    <img alt="Logotype" src={brave} />
    <h4>Grid social</h4>
    {currentUserProfile && (
      <div className={classes.auth}>
        <NavLink to="/profile">{currentUserProfile.login}</NavLink>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    )}
  </header>
)
