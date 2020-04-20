import React from "react";
import User from "./User/User";
import classes from "./Users.module.css";
import Paginator from "./Paginator/Paginator";
import {userType} from "../../Types/types";

type PropsType = {
    users: Array<userType>
    setCurrentPage: (page: number) => void
    isFollowingBlocker: Array<number>
    thunkUserFollowing: (isFollowed: boolean, id: number) => void
}

const Users: React.FC<PropsType> = ({users, setCurrentPage, isFollowingBlocker, thunkUserFollowing}) => {
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
            <Paginator setCurrentPage={setCurrentPage}/>
        </div>
    )
};

export default React.memo(Users);