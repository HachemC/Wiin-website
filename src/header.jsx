import React from "react";
import "./headerstyle.css"; // Import your CSS file for styling
import { WiinLogo } from "./Winicon.jsx";
import { SearchBar } from "./search-barre";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = (props) => {
  const handleContactUsClick = () => {
    props.onFormSwitch("contactus"); // Call the function passed via props to switch forms
  };
  const handleProfilClick = () => {
    props.onFormSwitch("profiledetails"); // Call the function passed via props to switch forms
  };
  const history = useHistory();
  return (
    <>
      <header className="header">
        <div className="language-switch">
          <button className="language-button">EN</button>

          <button className="language-button">AR</button>
        </div>
        <div className="icon-wrapper">
          <WiinLogo></WiinLogo>
        </div>

        <div className="center-content">
          <SearchBar></SearchBar>
        </div>

        <div className="contact-links">
          <Link to="/contactus">Contact us</Link>
          <a href="#">
            <span>Help</span>
          </a>
          <a href="#">
            <span>FAQs</span>
          </a>
        </div>
        <div className="profile-button">
          <Link to="/profiledetails">
            <img
              src={require("./images/ant-design_user-outlined.png")}
              alt="Profile Icon"
              className="profile-icon"
            />
            <span className="profile-text">Profile</span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
