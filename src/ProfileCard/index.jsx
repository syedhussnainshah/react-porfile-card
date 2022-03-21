import React from "react";
import ProfileDetail from "../ProfileDetail";
import ProfileFooter from "../ProfileFooter";
import ProfileImage from "../ProfileImage";
import "./style.css";

const ProfileCard = ({ profile }) => {
  return (
    <div className="cardContainer">
      <section className="profileCard">
        {profile.info.image && (
          <ProfileImage profileImage={profile.info.image} />
        )}

        <ProfileDetail profileDetail={profile} />
        {profile.socialLink && (
          <ProfileFooter socialLink={profile.socialLink} />
        )}
      </section>
    </div>
  );
};

export default ProfileCard;
