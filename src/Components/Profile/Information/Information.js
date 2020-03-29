import React from "react";
import classes from "./Information.module.css";
import avatar from "../../../Images/avatar-photo.jpg";

const Information = () => {
  return (
    <div className={classes.profile_information}>
      <div>
        <img src={avatar} alt="" className={classes.avatar} />
      </div>
      <div>
        <ul className={classes.contact_information}>
          <li className={classes.name}>Dmitry M.</li>
          <li>Date of year</li>
          <li>City</li>
          <li>Place of education</li>
        </ul>
      </div>
    </div>
  );
};

export default Information;
