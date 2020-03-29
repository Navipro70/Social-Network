import React from "react";
import ground from "../Images/bgimage.jpg";
import avatar from "../Images/avatar-photo.jpg";

const Profile = () => {
  return (
    <div className="app-content">
      <img src={ground} alt="hello" className="ground-image" />
      <div className="profile-information">
        <div>
          <img src={avatar} alt="" className="avatar" />
        </div>
        <div>
          <ul className="contact-information">
            <li>Name</li>
            <li>About me</li>
            <li>About me</li>
            <li>About me</li>
          </ul>
        </div>
      </div>
      <div>
        <h4>My post</h4>
      </div>
      <div>
        <div>Information in post</div>
      </div>
      <div>
        <div>something</div>
      </div>
    </div>
  );
};

export default Profile;
