import React from "react";
import AboutInfo from "../AboutInfo";
import CustomButton from "../CustomButton";
import PersonalInfo from "../PersonalInfo";
import "./style.css";

const ProfileDetail = ({ profileDetail }) => {
  return (
    <div className="profileDetail">
      <PersonalInfo profileInfo={profileDetail} />
      <div className="btn-group">
        <a href="#" target={"_blank"}>
          <CustomButton />
        </a>
        <a href="#" target={"_blank"}>
          <CustomButton />
        </a>
      </div>
      <AboutInfo />
    </div>
  );
};

export default ProfileDetail;
