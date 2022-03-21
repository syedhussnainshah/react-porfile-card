import React from "react";
import "./style.css";

const InputField = ({ label, ...otherInputProps }) => {
  return (
    <div>
      {label && <label htmlFor={otherInputProps.id}>{label}</label>}
      <input type="text" {...otherInputProps} />
    </div>
  );
};

export default InputField;
