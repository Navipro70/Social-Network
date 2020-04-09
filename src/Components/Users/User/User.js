import React, {useState} from "react";
import classes from "./User.module.css";
import brave from "./../../../Images/brave.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {userApi} from "../../../API/usersAPI";

const User = props => {
    const [butText, setButText] = useState(props.followed ? "Unfollow" : "Follow");

    const handleClick = () => {
        setButText(props.followed ? "Follow" : "Unfollow");
        props.thunkUserFollowing(props.followed, props.id);
    };

    return (
        <div className={classes.user}>
            <div>
                <NavLink to={`/profile/${props.id}`}>
                    <img src={props.photoSrc != null ? props.photoSrc : brave}/>
                </NavLink>
                <button disabled={props.isFollowingBlocker} onClick={handleClick}>{butText}</button>
            </div>
            <div>
                <h2>{props.status}</h2>
            </div>
        </div>
    )
};

export default User;