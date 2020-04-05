import React from "react";
import User from "./User/User";


const Users = props => {
    return (
        <div>
            {props.users.map(user => <User key={user.ud} id={user.id} status={user.status} location={user.location}
                                           followed={user.followed} following = {props.following}/>)}
        </div>
    );
};

export default Users;
