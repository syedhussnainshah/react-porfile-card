import React from "react";
import ProfileDetail from "../ProfileDetail";
import ProfileImage from "../ProfileImage";
import "./style.css";

const ProfileCard = () => {
  return (
    <div className="cardContainer">
      <section className="profileCard">
        <ProfileImage />
        <ProfileDetail />
      </section>
    </div>
  );
};

export default ProfileCard;
