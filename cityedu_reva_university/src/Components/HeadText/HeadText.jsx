import React from "react";
import "./HeadText.css";

const HeadText = ({ value }) => {
  return (
    <div className="row">
      <div className="col-md-12 main-text">
        <h1>{value}</h1>
      </div>
    </div>
  );
};

export default HeadText;
