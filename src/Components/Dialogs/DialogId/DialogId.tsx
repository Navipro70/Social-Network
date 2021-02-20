import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../Dialogs.module.css'

type PropsType = {
  id: number
  name: string
}

const DialogId: FC<PropsType> = ({ id, name }) => (
  <NavLink to={`/dialogs/${id}`} activeClassName={classes.active} className={classes.name}>
    {name}
  </NavLink>
)

export default DialogId
