import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Form = () => {
  const navigate = useNavigate();
  onsubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <form>
      <input type="submit" value="Submit Form" />
    </form>
  );
};

export default Form;
