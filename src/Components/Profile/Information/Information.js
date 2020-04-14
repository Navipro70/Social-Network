import React, {useState} from "react";
import classes from "./Information.module.css";
import Preloader from "../../Common/Preloader";
import StatusHook from "./StatusHook";
import anon from "../../../Images/anon.png"
import ContactInformation from "./ContactInformation";
import InformationForm from "./InformationForm";
import FileInput from "./ImagesComponents/FileInput";

const Information = React.memo(({profile, statusText, setStatus, thunkPutUserInformation, isOwner, thunkSavePhoto}) => {
    const [editMode, setEditMode] = useState(false);
    const onMainPhotoSelected = e => {
        const files = new FormData();
        files.append("image", e.target.files[0]);
        thunkSavePhoto(files);
    };

    if (!profile) return <Preloader/>;
    return (
        <div className={classes.profile_information}>
            <div>
                {profile.photos.small ?
                    <img src={profile.photos.small} className={classes.avatar} alt="profile"/> : /*Вынести в отдельную компоненту*/
                    <img src={anon} className={classes.avatar} alt="profile"/>}
                   {isOwner && <FileInput onChanger={onMainPhotoSelected} />}
            </div>
            <div>
                <div className={classes.profileStatus}>
                    <h4>{profile.fullName}</h4>
                    <StatusHook statusText={statusText} setStatus={setStatus} isOwner={isOwner}/>
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
