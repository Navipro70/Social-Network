import React from "react";
import classes from "./Profile.module.css";
import Information from "./Information/Information";
import Posts from "./Posts/Posts";

const Profile = props => {
  return (
    <div className={classes.profile}>
      <Information />
      <Posts posts={props.profilePage.posts} newPost={props.newPost} newPostText={props.profilePage.newPostText} onKeyDown={props.onKeyDown} />
    </div>
  );
};

export default Profile;
