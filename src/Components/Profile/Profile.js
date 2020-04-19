import React from "react";
import classes from "./Profile.module.css";
import Information from "./Information/Information";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({isOwner, profilePage, thunkSavePhoto, thunkPutUserInformation, thunkSetStatus}) => {
    return (
        <div className={classes.profile}>
            <Information
                profile={profilePage.profile}
                statusText={profilePage.statusText}
                setStatus={thunkSetStatus}
                thunkPutUserInformation={thunkPutUserInformation}
                thunkSavePhoto={thunkSavePhoto}
                isOwner={isOwner}/>
            <PostsContainer isOwner={isOwner}/>
        </div>
    );
};

export default React.memo(Profile);
