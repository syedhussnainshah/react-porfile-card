import React from "react";
import "./style.css";
import dummyImg from "../Assets/Images/dummy.jpg";

const ProfileImage = ({ profileImage }) => {
  return (
    <div className="profileImg">
      <img src={profileImage} alt="Dummy Image" />
    </div>
  );
};

export default ProfileImage;
