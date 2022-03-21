import React from "react";
import ProfileDetail from "../ProfileDetail";
import ProfileFooter from "../ProfileFooter";
import ProfileImage from "../ProfileImage";
import "./style.css";

const ProfileCard = ({ profile }) => {
  return (
    <div className="cardContainer">
      <section className="profileCard">
        <ProfileImage profileImage={profile.image} />
        <ProfileDetail ProfileDetail={profile} />
        <ProfileFooter />
      </section>
    </div>
  );
};

export default ProfileCard;
