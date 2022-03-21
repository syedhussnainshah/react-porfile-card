import React from "react";
import AboutInfo from "../AboutInfo";
import PersonalInfo from "../PersonalInfo";
import "./style.css";

const ProfileDetail = () => {
  return (
    <div className="profileDetail">
      <PersonalInfo />
      <AboutInfo />
    </div>
  );
};

export default ProfileDetail;
