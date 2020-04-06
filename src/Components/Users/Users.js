import React from "react";
import User from "./User/User";
import classes from "./Users.module.css";
import * as axios from "axios";


const Users = props => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });
    }
    //     props.setUsers( [
    //         {id: 1, photoSrc: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
    //             fullName: "Diana", status: "I'm boss", followed: true

    return (
        <div className={classes.user}>
            {props.users.map(user => <User
                key={user.id}
                photoSrc={user.photos.small}
                id={user.id}
                status={user.name}
                followed={user.followed}
                following={props.following}
            />)}
        </div>
    );
};

export default Users;
