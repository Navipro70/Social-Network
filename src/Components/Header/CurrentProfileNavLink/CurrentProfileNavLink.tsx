import React, { FC } from 'react'
import classes from '../Header.module.css'
import { NavLink } from 'react-router-dom'

type PropsType = {
  login: string
  logoutHandler: () => void
}

export const CurrentProfileNavLink: FC<PropsType> = ({ login, logoutHandler }) => (
  <div className={classes.auth}>
    <NavLink to={`/profile`}>{login}</NavLink>
    <button onClick={logoutHandler}>Logout</button>
  </div>
)
