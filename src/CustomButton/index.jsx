import React from "react";
import "./style.css";
import emailIcon from "../Assets/Images/Icons/Mail.svg";
import linkdinIcon from "../Assets/Images/Icons/Linkedin.svg";

const CustomButton = ({ title }) => {
  return (
    <>
      {title && (
        <button
          type="button"
          className={title === "email" ? "whiteBtn" : "blueBtn"}
        >
          <span className="imgIcon">
            <img
              src={title === "email" ? emailIcon : linkdinIcon}
              alt={`${title} Icon`}
            />
          </span>
          <span>{title}</span>
        </button>
      )}
    </>
  );
};

export default CustomButton;
