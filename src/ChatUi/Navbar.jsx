import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="l1"></span>
      <div className="user33">
        <img className="im" src={require("../images/male.jpeg")} alt=""></img>
        <div className="userChatInfo">
          <span>john</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
