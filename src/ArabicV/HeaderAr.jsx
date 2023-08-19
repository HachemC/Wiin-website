import React from "react";
import { WiinLogo } from "../Winicon";
import { SearchBarAr } from "../ArabicV/SearchBarAr";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../ArabicV/HeaderAr.css";

const HeaderAr = (props) => {
  const handleContactUsClick = () => {
    props.onFormSwitch("contactus"); // Call the function passed via props to switch forms
  };
  const handleProfilClick = () => {
    props.onFormSwitch("profiledetails"); // Call the function passed via props to switch forms
  };
  const history = useHistory();
  return (
    <>
      <header className="headerAR">
        {" "}
        {/* Modified class name */}
        <div className="language-switchAR">
          {" "}
          {/* Modified class name */}
          <button className="language-buttonAR">EN</button>{" "}
          {/* Modified class name */}
          <button className="language-buttonAR">AR</button>{" "}
          {/* Modified class name */}
        </div>
        <div className="icon-wrapperAR">
          {" "}
          {/* Modified class name */}
          <WiinLogo></WiinLogo>
        </div>
        <div className="center-contentAR">
          {" "}
          {/* Modified class name */}
          <SearchBarAr></SearchBarAr>
        </div>
        <div className="contact-linksAR">
          {" "}
          {/* Modified class name */}
          <Link to="/contactus">اتصل بنا</Link>
          <a href="#">
            <span>مساعدة</span>
          </a>
          <a href="#">
            <span>أسئلة وأجوبة</span>
          </a>
        </div>
        <div className="profile-buttonAR">
          {" "}
          {/* Modified class name */}
          <Link to="/profiledetails">
            <img
              src={require("../images/ant-design_user-outlined.png")}
              alt="Profile Icon"
              className="profile-iconAR"
            />
            <span className="profile-textAR">الملف الشخصي</span>{" "}
            {/* Modified class name */}
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderAr;
