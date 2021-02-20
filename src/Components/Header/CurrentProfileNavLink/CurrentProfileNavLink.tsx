import { FC } from 'react';
import { NavLink } from 'react-router-dom'

import classes from '../Header.module.css'

type PropsType = {
  login: string
  logoutHandler: () => void
}

export const CurrentProfileNavLink: FC<PropsType> = ({ login, logoutHandler }) => (
  <div className={classes.auth}>
    <NavLink to="/profile">{login}</NavLink>
    <button onClick={logoutHandler}>Logout</button>
  </div>
)
