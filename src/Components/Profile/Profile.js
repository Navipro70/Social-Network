import React from "react";
import classes from "./Profile.module.css";
import Information from "./Information/Information";
import Posts from "./Posts/Posts";

const Profile = () => {
  return (
    <div>
      <Information />
      <Posts />
    </div>
  );
};

export default Profile;
