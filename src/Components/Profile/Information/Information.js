import React, {useState} from "react";
import classes from "./Information.module.css";
import Preloader from "../../Common/Preloader";
import StatusHook from "./Status/StatusHook";
import InformationFormContainer from "./InformationForm/InformationFormContainer";
import FileInput from "./ImagesComponents/FileInput";
import {StaticInfo} from "./InformationComponents/StaticInfo/StaticInfo";
import {UserPhoto} from "../../Common/UserPhoto";

const Information = ({profile, statusText, setStatus, thunkPutUserInformation, isOwner, thunkSavePhoto}) => {
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
                <UserPhoto photo={profile.photos.small}/>
                {isOwner && <FileInput onChanger={onMainPhotoSelected}/>}
            </div>
            <div>
                <div className={classes.profileStatus}>
                    <h4>{profile.fullName}</h4>
                    <StatusHook statusText={statusText} setStatus={setStatus} isOwner={isOwner}/>
                    {profile.lookingForAJob && <h4>{profile.lookingForAJobDescription}</h4>}
                </div>
                {!editMode && <StaticInfo isOwner={isOwner} setEditMode={setEditMode} profile={profile}/>}

                {editMode && <InformationFormContainer
                    setEditMode={setEditMode}
                    profile={profile}
                    thunkPutUserInformation={thunkPutUserInformation}
                    isOwner={isOwner}/>}
            </div>
        </div>
    );
};

export default React.memo(Information)
