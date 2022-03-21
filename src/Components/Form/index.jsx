import React from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../InputField";
import TextAreaField from "../TextAreaFiled";
import CustomButton from "../CustomButton";
import "./style.css";

const Form = () => {
  const navigate = useNavigate();
  onsubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <form>
      <section>
        <h1>Personal Info</h1>
        <InputField label="Full name" type="text" id="name" name="name" />
        <InputField
          label="profile image"
          type="file"
          id="profileimg"
          name="profileImg"
        />
        <InputField label="email" type="text" id="email" name="email" />
        <InputField
          label="profession"
          type="text"
          id="profession"
          name="profession"
        />
        <InputField
          label="website Link"
          type="text"
          id="website"
          name="website"
        />
      </section>
      <section>
        <h1>Description</h1>
        <TextAreaField label="about" type="text" id="about" name="about" />
        <TextAreaField
          label="intrest"
          type="text"
          id="intrest"
          name="intrest"
        />
      </section>
      <section>
        <h1>Social Links</h1>
        <InputField
          label="linkedin"
          type="text"
          id="linkedin"
          name="linkedin"
        />
        <InputField label="twitter" type="text" id="twitter" name="twitter" />
        <InputField
          label="facebook"
          type="text"
          id="facebook"
          name="facebook"
        />
        <InputField
          label="instagram"
          type="text"
          id="instagram"
          name="instagram"
        />
        <InputField label="github" type="text" id="github" name="github" />
      </section>
      <div>
        <CustomButton title="Submit Form" />
      </div>
    </form>
  );
};

export default Form;
