import React from "react";
import classes from "./Profile.module.css";
import Information from "./Information/Information";
import Posts from "./Posts/Posts";

const Profile = ({isOwner, profilePage, thunkSavePhoto, thunkPutUserInformation, thunkSetStatus, addPost, posts}) => (
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