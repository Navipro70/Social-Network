import React from "react";
import User from "./User/User";


const Users = props => {
    if (props.users.length === 0) {
        props.setUsers( [
            {id: 1, photoSrc: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
                fullName: "Diana", status: "I'm boss", followed: true, location:{country: "Belarus", city:"Minsk"}},
            {id: 2, photoSrc: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
                fullName: "Alex", status: "Looking for job", followed: false, location:{country: "USA", city:"New-York"}},
            {id: 3, photoSrc: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
                fullName: "Andrew", status: "Create my app", followed: false, location:{country: "Russia", city:"Kiev"}},
            {id: 4, photoSrc: "https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg",
                fullName: "Bill", status: "Build my company", followed: true, location:{country: "USA", city:"Washington"}}
        ]);
    }

    return (
        <div>
            {props.users.map(user => <User
                key={user.id}
                id={user.id}
                status={user.status}
                location={user.location}
                followed={user.followed}
                following={props.following}
                photoSrc={user.photoSrc}
            />)}
        </div>
    );
};

export default Users;
