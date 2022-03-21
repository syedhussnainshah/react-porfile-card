import React from "react";
import Description from "../Description";
import "./style.css";

const AboutInfo = ({ about }) => {
  return (
    <>
      {about && (
        <div className="aboutInfo">
          {about.map((aboutData, index) => {
            return <Description data={aboutData} key={index} />;
          })}
        </div>
      )}
    </>
  );
};

export default AboutInfo;
