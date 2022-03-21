import React from "react";
import "./style.css";

const ProfileImage = ({ profileImage }) => {
  return (
    <div className="profileImg">
      <img src={profileImage} alt="Dummy" />
    </div>
  );
};

export default ProfileImage;
