import React, { FC } from 'react'

import { userType } from '../../Types/types'

import Paginator from './Paginator/Paginator'
import User from './User/User'
import classes from './Users.module.css'

type PropsType = {
  users: userType[]
  isFollowingBlocker: number[]
  totalUsersCount: number
  pageSize: number
  currentPage: number
  thunkUserFollowing: (isFollowed: boolean, id: number) => void
  setCurrentPage: (page: number) => void
}

const Users: FC<PropsType> = ({
  users,
  setCurrentPage,
  isFollowingBlocker,
  thunkUserFollowing,
  totalUsersCount,
  pageSize,
  currentPage,
}) => {
  return (
    <div className={classes.user}>
      {users.map((user) => (
        <User
          followed={user.followed}
          id={user.id}
          isFollowingBlocker={isFollowingBlocker}
          key={user.id}
          photoSrcSmall={user.photos.small}
          status={user.name}
          thunkUserFollowing={thunkUserFollowing}
        />
      ))}
      <Paginator
        currentPage={currentPage}
        pageSize={pageSize}
        setCurrentPage={setCurrentPage}
        totalUsersCount={totalUsersCount}
      />
    </div>
  )
}

export default React.memo(Users)
