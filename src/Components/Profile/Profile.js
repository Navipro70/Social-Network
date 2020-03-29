import React from "react";
import classes from "./Profile.module.css";
import ground from "../../Images/bgimage.jpg";
import Information from "./Information/Information";
import Posts from "./Posts/Posts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <img src={ground} alt="hello" className={classes.image} />
      <Information />
      <Posts />
    </div>
  );
};

export default Profile;
