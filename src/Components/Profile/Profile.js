import React from "react";
import classes from "./Profile.module.css";
import Information from "./Information/Information";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
  return (
    <div className={classes.profile}>
      <Information profile={props.profilePage.profile} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
