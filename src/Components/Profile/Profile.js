import React from "react";
import classes from "./Profile.module.css";
import Information from "./Information/Information";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({isOwner, ...props}) => {
    return (
        <div className={classes.profile}>
            <Information
                profile={props.profilePage.profile}
                statusText={props.profilePage.statusText}
                setStatus={props.thunkSetStatus}
                thunkPutUserInformation={props.thunkPutUserInformation}
                thunkSavePhoto={props.thunkSavePhoto}
                isOwner={isOwner}/>
            <PostsContainer isOwner={isOwner}/>
        </div>
    );
};

export default Profile;
