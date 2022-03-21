import React from "react";
import "./style.css";
import dummyImg from "../Assets/Images/dummy.jpg";

const ProfileImage = () => {
  return (
    <div className="profileImg">
      <img src={dummyImg} alt="Dummy Image" />
    </div>
  );
};

export default ProfileImage;
