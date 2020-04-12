import React, {useState} from "react";
import classes from "./Information.module.css";
import Preloader from "../../Common/Preloader";
import StatusHook from "./StatusHook";
import anon from "../../../Images/anon.png"
import Button from "@material-ui/core/Button";
import ContactInformation from "./ContactInformation";
import InformationForm from "./InformationForm";

const Information = React.memo(({profile, statusText, setStatus}) => {
    const [editMode, setEditMode] = useState(false);

    if (!profile) return <Preloader/>;
    return (
        <div className={classes.profile_information}>
            <div>
                {profile.photos.small ?
                    <img src={profile.photos.small} className={classes.avatar} alt="profile"/> :
                    <img src={anon} className={classes.avatar}alt="profile"/>}
            </div>
            <div>
                <div className={classes.profileStatus}>
                    <h4>{profile.fullName}</h4>
                    <StatusHook statusText={statusText} setStatus={setStatus}/>
                </div>
                {!editMode && <div>
                    <ul className={classes.contact_information}>
                        <li>About me: {profile.aboutMe}</li>
                    </ul>
                    <ContactInformation setEditMode={setEditMode} contacts={profile.contacts}/>
                </div>
                }
                {editMode &&
                <InformationForm setEditMode={setEditMode} />
                }
            </div>
        </div>
    );
});

export default Information;
