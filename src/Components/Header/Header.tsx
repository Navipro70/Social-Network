import React, { FC } from 'react'

import { currentUserProfileType } from '../../redux/auth-reducer'
import { HeaderPerformance } from '../Common/HeaderPerfomance'

import { CurrentProfileNavLink } from './CurrentProfileNavLink/CurrentProfileNavLink'
import classes from './Header.module.css'


type PropsType = {
  currentUserProfile: currentUserProfileType | null
  logoutHandler: () => void
}

const Header: FC<PropsType> = ({ currentUserProfile, logoutHandler }) => (
  <header className={classes.header}>
    <HeaderPerformance />
    {currentUserProfile && (
      <CurrentProfileNavLink login={currentUserProfile.login} logoutHandler={logoutHandler} />
    )}
  </header>
)

export default React.memo(Header)
