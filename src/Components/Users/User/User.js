import React, {useState} from "react";
import classes from "./User.module.css";
import anon from "./../../../Images/anon.png";
import Button from "@material-ui/core/Button";
import {NavLinkWrapper} from "./NavLinkWrapper";

const User = ({followed, thunkUserFollowing, id, photoSrc, isFollowingBlocker, status}) => {
    const [butText, setButText] = useState(followed ? "Unfollow" : "Follow");

    const handleClick = () => {
        setButText(followed ? "Follow" : "Unfollow");
        thunkUserFollowing(followed, id);
    };

    const disabler = isFollowingBlocker.some(currentId => currentId === id)

    return (
        <div className={classes.user}>
            <div>
                <NavLinkWrapper id={id}>
                    <img src={photoSrc != null ? photoSrc : anon} alt="Profile img"/>
                </NavLinkWrapper>
                <Button variant="contained" color="primary"
                        disabled={disabler}
                        onClick={handleClick}>
                    {butText}
                </Button>
            </div>
            <div>
                <NavLinkWrapper id={id}>
                    <h2>{status}</h2>
                </NavLinkWrapper>
            </div>
        </div>
    )
};

export default React.memo(User);