import React from "react";
import "./style.css";

const SocialLink = ({ link }) => {
  return (
    <>
      {link && (
        <a
          href={link.url}
          target={"_blank"}
          className={
            link.name == "github"
              ? "github socialLink"
              : link.name == "twitter"
              ? "twitter socialLink"
              : link.name == "facebook"
              ? "facebook socialLink"
              : link.name == "instagram"
              ? "instagram socialLink"
              : ""
          }
        ></a>
      )}
    </>
  );
};

export default SocialLink;
