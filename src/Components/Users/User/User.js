import React from "react";
import classes from "./User.module.css";

const User = props => {
    const handleClick = (e) => {
        props.following(props.id)
    };

    return (
        <div className={classes.user}>
            <img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"
                 alt="nom"/>
            <button onClick={handleClick}>{props.followed = " hi"}</button>
            <p>{props.status}</p>
        </div>
    )
};

export default User;