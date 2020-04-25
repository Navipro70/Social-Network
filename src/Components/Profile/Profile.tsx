import React, {FC} from "react";
import classes from "./Profile.module.css";
import Information from "./Information/Information";
import Posts from "./Posts/Posts";
import {initialStateType} from "../../redux/profile-reducer";
import {photosType, postType, ProfileInformationType} from "../../Types/types";

export type PropsType = {
    isOwner: boolean
    profilePage: initialStateType
    thunkSavePhoto: (photoFile: photosType) => void
    thunkPutUserInformation: (data: ProfileInformationType, userId: number) => void
    thunkSetStatus: (statusText: string) => void
    addPost: (postText: string) => void
    posts: Array<postType>
}

const Profile: FC<PropsType> = ({isOwner, profilePage, thunkSavePhoto, thunkPutUserInformation, thunkSetStatus, addPost, posts}) => (
    <div className={classes.profile}>
        <Information
            profile={profilePage.profile}
            statusText={profilePage.statusText}
            setStatus={thunkSetStatus}
            thunkPutUserInformation={thunkPutUserInformation}
            thunkSavePhoto={thunkSavePhoto}
            isOwner={isOwner}/>
        <Posts
            isOwner={isOwner}
            addPost={addPost}
            posts={posts}/>
    </div>
);

export default React.memo(Profile);