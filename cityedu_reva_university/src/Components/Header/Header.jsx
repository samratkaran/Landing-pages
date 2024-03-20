import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div class="row main-heder-of-city-guidde ">
        <div class="col-12 heder-of-city-guidde">
          <img src={require("../../Assets/City edu.png")} alt="" />
          <h3 style={{ color: "white" }}>For Info : (+91) 9427 700 700</h3>
        </div>
      </div>
    </>
  );
};

export default Header;
