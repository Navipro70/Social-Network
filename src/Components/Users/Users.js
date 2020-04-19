import React from "react";
import User from "./User/User";
import classes from "./Users.module.css";
import Paginator from "./Paginator/Paginator";

const Users = ({users, setCurrentPage, following, isFollowingBlocker, thunkUserFollowing}) => {
    return <div className={classes.user}>
        {users.map(user => <User
            key={user.id}
            photoSrc={user.photos.small}
            id={user.id}
            status={user.name}
            followed={user.followed}
            following={following}
            isFollowingBlocker={isFollowingBlocker}
            thunkUserFollowing={thunkUserFollowing}
        />)}
        <Paginator setCurrentPage={setCurrentPage} />
    </div>
};

export default React.memo(Users);