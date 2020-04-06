import React, {useState} from "react";
import classes from "./User.module.css";
import brave from "./../../../Images/brave.png";

const User = props => {
    const [butText, setButText] = useState(props.followed ? "Follow" : "unFollow");

    const handleClick = () => {
        props.following(props.id);
        if (props.followed) setButText("unFollow");
        else setButText("Follow")
    };

    return (
        <div className={classes.user}>
            <div>
                <img src={props.photoSrc != null ? props.photoSrc : brave}
                     alt="nom"/>
                <button onClick={handleClick}>{butText}</button>
            </div>
            <div>
                <h2>{props.status}</h2>
            </div>
        </div>
    )
};

export default User;