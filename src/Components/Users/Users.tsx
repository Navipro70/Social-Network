import React, { FC } from "react";
import User from "./User/User";
import classes from "./Users.module.css";
import Paginator from "./Paginator/Paginator";
import {userType} from "../../Types/types";

type PropsType = {
    users: Array<userType>
    isFollowingBlocker: Array<number>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    thunkUserFollowing: (isFollowed: boolean, id: number) => void
    setCurrentPage: (page: number) => void
}

const Users: FC<PropsType> = ({users, setCurrentPage,
                                  isFollowingBlocker,
                                  thunkUserFollowing,
                                  totalUsersCount,
                                  pageSize,
                                  currentPage}) => {
    return (
        <div className={classes.user}>
            {users.map(user => <User
                key={user.id}
                photoSrcSmall={user.photos.small}
                id={user.id}
                status={user.name}
                followed={user.followed}
                isFollowingBlocker={isFollowingBlocker}
                thunkUserFollowing={thunkUserFollowing}
            />)}
            <Paginator setCurrentPage={setCurrentPage}
                       pageSize={pageSize}
                       currentPage={currentPage}
                       totalUsersCount={totalUsersCount} />
        </div>
    )
};

export default React.memo(Users);