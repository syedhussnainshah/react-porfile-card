import React from "react";
import "./style.css";

const PersonalInfo = ({ profileInfo }) => {
  return (
    <div className="personalInfo">
      {profileInfo.name && <h1>{profileInfo.name}</h1>}
      {profileInfo.designation && <p>{profileInfo.designation}</p>}
      {profileInfo.website && (
        <a href={profileInfo.website} target={"_blank"} rel="noreferrer">
          {profileInfo.website}
        </a>
      )}
    </div>
  );
};

export default PersonalInfo;
