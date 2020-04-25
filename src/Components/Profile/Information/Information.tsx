import React, {useState, FC} from "react"
import classes from "./Information.module.css"
import Preloader from "../../Common/Preloader"
import StatusHook from "./Status/StatusHook"
import InformationFormContainer from "./InformationForm/InformationFormContainer"
import FileInput from "./InformationComponents/FileInput"
import ContactInformation from "./InformationComponents/ContactInformation"
import {UserPhoto} from "../../Common/UserPhoto"
import {ProfileInformationType, profileType, Nullable} from "../../../Types/types"

type PropsType = {
    profile: Nullable<profileType>
    statusText: string
    setStatus: (statusText: string) => void
    thunkPutUserInformation: (data: ProfileInformationType, userIf: number) => void
    isOwner: boolean
    thunkSavePhoto: (file: any) => void
}

const Information: FC<PropsType> = ({profile, statusText, setStatus, thunkPutUserInformation, isOwner, thunkSavePhoto}) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const photoHandler = (e: any) => {
        const files = new FormData();
        files.append("image", e.target.files[0]);
        thunkSavePhoto(files);
    };

    if (!profile) return <Preloader/>;
    return (
        <div className={classes.profile_information}>
            <div>
                <UserPhoto photo={profile.photos.small}/>
                {isOwner && <FileInput photoHandler={photoHandler}/>}
            </div>
            <div>
                <div className={classes.profileStatus}>
                    <h4>{profile.fullName}</h4>
                    <StatusHook statusText={statusText} setStatus={setStatus} isOwner={isOwner}/>
                    {profile.lookingForAJob && <h4>{profile.lookingForAJobDescription}</h4>}
                    {profile.aboutMe && <h4>About me: {profile.aboutMe}</h4>}
                </div>
                {!editMode && <ContactInformation
                    isOwner={isOwner}
                    setEditMode={setEditMode}
                    contacts={profile.contacts}/>}

                {editMode && <InformationFormContainer
                    setEditMode={setEditMode}
                    profile={profile}
                    thunkPutUserInformation={thunkPutUserInformation}/>}
            </div>
        </div>
    );
};

export default React.memo(Information)