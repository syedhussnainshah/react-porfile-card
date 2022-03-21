import React from "react";
import "./style.css";
import emailIcon from "../Assets/Images/Icons/Mail.svg";
import linkdinIcon from "../Assets/Images/Icons/Linkedin.svg";

const CustomButton = () => {
  return (
    <button type="button" className="blueBtn">
      <span className="imgIcon">
        <img src={linkdinIcon} alt="Email Icon" />
      </span>
      <span>Button</span>
    </button>
  );
};

export default CustomButton;
