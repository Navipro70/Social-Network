import * as React from 'react';

import classes from '../../Users.module.css'

type PropsType = {
  i: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const PageNumber: React.FC<PropsType> = ({ i, currentPage, setCurrentPage }) => {
  const spanHandler = () => setCurrentPage(i)
  return (
    <span
      className={i === currentPage ? undefined : classes.selected}
      key={i}
      onClick={spanHandler}
    >
      {i}
    </span>
  )
}
