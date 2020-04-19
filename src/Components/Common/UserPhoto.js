import classes from "../Profile/Information/Information.module.css";
import anon from "../../Images/anon.png";
import React from "react";

export const UserPhoto = ({photo}) => {
    return (
        <>
            {photo ?
                <img src={photo}
                     className={classes.avatar}
                     alt="profile"/> : /*Вынести в отдельную компоненту*/
                <img src={anon}
                     className={classes.avatar}
                     alt="profile"/>}
        </>
    )
};