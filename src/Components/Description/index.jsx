import React from "react";
import "./style.css";

const Description = ({ data }) => {
  return (
    <>
      {data && (
        <div className="description">
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
        </div>
      )}
    </>
  );
};

export default Description;
