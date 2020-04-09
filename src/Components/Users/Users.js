import React from "react";
import User from "./User/User";
import classes from "./Users.module.css";

const Users = props => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(props.totalUsersCount/props.pageSize); i++) pages.push(i);

    return <div className={classes.user}>
        {props.users.map(user => <User
            key={user.id}
            photoSrc={user.photos.small}
            id={user.id}
            status={user.name}
            followed={user.followed}
            following={props.following}
            isFollowingBlocker={props.isFollowingBlocker}
            thunkUserFollowing={props.thunkUserFollowing}
        />)}
        <div className={classes.numbers}>
        {pages.map(i => <span
            key={i}
            className={i === props.currentPage ? null : classes.selected}
            onClick={() => props.setCurrentPage(i)}
        >
                        {i}
                    </span>)}
        </div>

    </div>
};

export default Users;