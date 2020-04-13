import React from "react";
import classes from "./Profile.module.css";
import Information from "./Information/Information";
import PostsContainer from "./Posts/PostsContainer";
import {thunkPutUserInformation} from "../../redux/profile-reducer";

const Profile = (props) => {
    return (
    <div className={classes.profile}>
      <Information
          profile={props.profilePage.profile}
          statusText={props.profilePage.statusText}
          setStatus={props.thunkSetStatus}
          thunkPutUserInformation={props.thunkPutUserInformation}
      />
      <PostsContainer />
    </div>
  );
};

export default Profile;
