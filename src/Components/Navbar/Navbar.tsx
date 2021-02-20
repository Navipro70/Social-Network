import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Navbar.module.css'

const Navbar: FC = () => (
  <nav className={classes.nav}>
    <NavLink activeClassName={classes.activeColor} to="/profile">
      Profile
    </NavLink>
    <NavLink activeClassName={classes.activeColor} to="/dialogs">
      Messages
    </NavLink>
    <NavLink activeClassName={classes.activeColor} to="/users">
      Users
    </NavLink>
    <NavLink activeClassName={classes.activeColor} to="/news">
      News
    </NavLink>
    <NavLink activeClassName={classes.activeColor} to="/settings">
      Settings
    </NavLink>
  </nav>
)

export default React.memo(Navbar)
