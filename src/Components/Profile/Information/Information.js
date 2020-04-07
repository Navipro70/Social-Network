import React from "react";
import classes from "./Information.module.css";
import avatar from "../../../Images/avatar-photo.jpg";
import Preloader from "../../Common/Preloader";

const Information = (props) => {
    if (!props.profile) return <Preloader/>;
    return (
        <div className={classes.profile_information}>
            <div>
                <img src={props.profile.photos.small} alt="" className={classes.avatar}/>
            </div>
            <div>
                <ul className={classes.contact_information}>
                    <li className={classes.name}>{props.profile.fullName}</li>
                    <li>About me: {props.profile.aboutMe}</li>
                    <li>City</li>
                    <li>Place of education</li>
                </ul>
            </div>
        </div>
    );
};

export default Information;
