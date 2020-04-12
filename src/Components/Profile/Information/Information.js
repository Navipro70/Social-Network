import React from "react";
import classes from "./Information.module.css";
import Preloader from "../../Common/Preloader";
import StatusHook from "./StatusHook";

const Information = React.memo((props) => {
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
                    <StatusHook
                        statusText={props.statusText}
                        setStatus={props.setStatus}
                    />
                </ul>
            </div>
        </div>
    );
});

export default Information;
