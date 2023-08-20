import React from "react";
import { Link } from "react-router-dom";
import { WiinLogo } from "./Winicon.jsx";
import { useHistory } from "react-router-dom";
import classNames from "classnames";
import "./headerstyle.css";
import { SearchBarAr } from "./ArabicV/SearchBarAr.jsx";
import { SearchBar } from "./search-barre.jsx";

import "./headerstyle.css";
import { LanguageButtons } from "./LanguageButtons"; // Import the LanguageButtons component
import "./headerstyle.css";

const Header = (props) => {
  const { selectedLanguage } = props;
  const handleContactUsClick = () => {
    props.onFormSwitch("contactus");
  };
  const handleProfilClick = () => {
    props.onFormSwitch("profiledetails");
  };
  const history = useHistory();

  const headerClasses = classNames("header", {
    "direction-rtl": selectedLanguage === "AR",
  });

  return (
    <>
      <header className={headerClasses}>
        <div className="language-switch">
          <Link
            to="/posting"
            className="language-buttonEN"
            onClick={() => props.onLanguageChange("EN")}
          >
            EN
          </Link>
          <Link
            to="/PostingAr"
            className="language-buttonAR"
            onClick={() => props.onLanguageChange("AR")}
          >
            AR
          </Link>
        </div>

        <div className="icon-wrapper">
          <WiinLogo />
        </div>
        <div className="center-content">
          {/* Render SearchBar based on selected language */}
          {selectedLanguage === "AR" ? <SearchBarAr /> : <SearchBar />}
        </div>
        <div className="contact-links">
          {/* Render contact links based on selected language */}
          {selectedLanguage === "AR" ? (
            <>
              <span>اتصل بنا</span>
              <span>مساعدة</span>
              <span>أسئلة وأجوبة</span>
            </>
          ) : (
            <>
              <Link to="/contactus">Contact us</Link>
              <a href="#">
                <span>Help</span>
              </a>
              <a href="#">
                <span>FAQs</span>
              </a>
            </>
          )}
        </div>
        <div className="profile-button">
          <Link to="/profiledetails">
            <img
              src={require("./images/ant-design_user-outlined.png")}
              alt="Profile Icon"
              className="profile-icon"
            />
            {/* Render profile text based on selected language */}
            <span className="profile-text">
              {selectedLanguage === "AR" ? "الملف الشخصي" : "Profile"}
            </span>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
