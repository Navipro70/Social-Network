import React from "react";
import classes from "./Information.module.css";
import Preloader from "../../Common/Preloader";
import StatusHook from "./StatusHook";
import anon from "../../../Images/anon.png"

const Information = React.memo(({profile, statusText, setStatus}) => {
    if (!profile) return <Preloader/>;
    return (
        <div className={classes.profile_information}>
            <div>
                {profile.photos.small ?
                    <img src={profile.photos.small} className={classes.avatar}
                         alt="profile photo"  /> :
                    <img src={anon} className={classes.avatar}
                        alt="profile photo"/>
                }
            </div>
            <div>
                <ul className={classes.contact_information}>
                    <li className={classes.name}>{profile.fullName}</li>
                    <li>About me: {profile.aboutMe}</li>
                    <StatusHook
                        statusText={statusText}
                        setStatus={setStatus}
                    />
                </ul>
            </div>
        </div>
    );
});

export default Information;
