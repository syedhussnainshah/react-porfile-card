import React from "react";
import ProfileDetail from "../ProfileDetail";
import ProfileFooter from "../ProfileFooter";
import ProfileImage from "../ProfileImage";
import "./style.css";

const ProfileCard = () => {
  return (
    <div className="cardContainer">
      <section className="profileCard">
        <ProfileImage />
        <ProfileDetail />
        <ProfileFooter />
      </section>
    </div>
  );
};

export default ProfileCard;
