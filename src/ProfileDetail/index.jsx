import React from "react";
import AboutInfo from "../AboutInfo";
import CustomButton from "../CustomButton";
import PersonalInfo from "../PersonalInfo";
import "./style.css";

const ProfileDetail = ({ profileDetail }) => {
  return (
    <div className="profileDetail">
      <PersonalInfo profileInfo={profileDetail.info} />
      {profileDetail.professoanlLink && (
        <div className="btn-group">
          {profileDetail.professoanlLink.map((btn, index) => {
            return (
              <a
                href={btn.title === "email" ? `mailto:${btn.url}` : btn.url}
                target={btn.title === "email" ? "_self" : "_blank"}
                rel="noreferrer"
                key={index}
              >
                <CustomButton title={btn.title} />
              </a>
            );
          })}
        </div>
      )}
      <AboutInfo about={profileDetail.description} />
    </div>
  );
};

export default ProfileDetail;
