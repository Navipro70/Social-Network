import React, {useState} from "react";
import classes from "./User.module.css";
import anon from "./../../../Images/anon.png";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";

const User = ({followed, thunkUserFollowing, id, photoSrc, isFollowingBlocker, status}) => {
    const [butText, setButText] = useState(followed ? "Unfollow" : "Follow");

    const handleClick = () => {
        setButText(followed ? "Follow" : "Unfollow");
        thunkUserFollowing(followed, id);
    };

    return (
        <div className={classes.user}>
            <div>
                <NavLink to={`/profile/${id}`}>
                    <img src={photoSrc != null ? photoSrc : anon} alt="Profile img"/>
                </NavLink>
                <Button variant="contained" color="primary"
                        disabled={isFollowingBlocker.some(currentId => currentId === id)}
                        onClick={handleClick}
                >
                    {butText}
                </Button>
            </div>
            <div>
                <NavLink to={`/profile/${id}`}>
                    <h2>{status}</h2>
                </NavLink>
            </div>
        </div>
    )
};

export default User;