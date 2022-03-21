import React from "react";
import SocialLink from "../SocialLink";
import "./style.css";

const ProfileFooter = ({ socialLink }) => {
  return (
    <>
      {socialLink && (
        <div className="profileFooter">
          {socialLink.map((link, index) => {
            return <SocialLink link={link} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default ProfileFooter;
