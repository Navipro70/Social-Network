import { FC } from 'react';
import { NavLink } from 'react-router-dom'

import classes from '../Dialogs.module.css'

type PropsType = {
  id: number
  name: string
}

const DialogId: FC<PropsType> = ({ id, name }) => (
  <NavLink activeClassName={classes.active} className={classes.name} to={`/dialogs/${id}`}>
    {name}
  </NavLink>
)

export default DialogId
