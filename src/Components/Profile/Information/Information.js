import React, {useState} from "react";
import classes from "./Information.module.css";
import Preloader from "../../Common/Preloader";
import StatusHook from "./StatusHook";
import anon from "../../../Images/anon.png"
import ContactInformation from "./ContactInformation";
import InformationForm from "./InformationForm";
import {Input} from "@material-ui/icons";

const Information = React.memo(({profile, statusText, setStatus, thunkPutUserInformation, isOwner}) => {
    const [editMode, setEditMode] = useState(false);
    if (!profile) return <Preloader/>;
    return (
        <div className={classes.profile_information}>
            <div>
                {profile.photos.small ?
                    <img src={profile.photos.small} className={classes.avatar} alt="profile"/> :
                    <img src={anon} className={classes.avatar} alt="profile"/>}
                {isOwner && <Input value={"Upload photo"} type={"file"} />}
            </div>
            <div>
                <div className={classes.profileStatus}>
                    <h4>{profile.fullName}</h4>
                    <StatusHook statusText={statusText} setStatus={setStatus}/>
                    {profile.lookingForAJob && <h4>{profile.lookingForAJobDescription}</h4>}
                </div>
                {!editMode && <div>
                    <ul className={classes.contact_information}>
                        <li>About me: {profile.aboutMe}</li>
                    </ul>
                    <ContactInformation isOwner={isOwner} setEditMode={setEditMode} contacts={profile.contacts}/>
                </div>}

                {editMode && <InformationForm setEditMode={setEditMode} profile={profile}
                              thunkPutUserInformation={thunkPutUserInformation} isOwner={isOwner} />}
            </div>
        </div>
    );
});

export default Information;
