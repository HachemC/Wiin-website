import React from "react";

import { SearchBarAr } from "../ArabicV/SearchBarAr";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../ArabicV/HeaderAr.css";
import { WiinLogoAR } from "./WiiniconAR";

const HeaderAr = (props) => {
  const history = useHistory();
  return (
    <>
      <header className="headerAR">
        <div className="language-switchAR">
          <Link to="/posting" className="language-buttonEN">
            EN
          </Link>{" "}
          <Link to="/PostingAr" className="language-buttonAR">
            AR
          </Link>
        </div>
        <div className="icon-wrapperAR">
          <WiinLogoAR></WiinLogoAR>{" "}
        </div>
        <div className="center-contentAR">
          {" "}
          <SearchBarAr></SearchBarAr>
        </div>
        <div className="contact-linksAR">
          {" "}
          <Link to="/ContactUsAR">اتصل بنا</Link>
          <a href="#">
            <span>مساعدة</span>
          </a>
          <a href="#">
            <span>أسئلة وأجوبة</span>
          </a>
        </div>
        <div className="profile-buttonAR">
          {" "}
          <Link to="/ProfileDetailsAR">
            <img
              src={require("../images/ant-design_user-outlined.png")}
              alt="Profile Icon"
              className="profile-iconAR"
            />
            <span className="profile-textAR">الملف الشخصي</span>{" "}
          </Link>
        </div>
      </header>
    </>
  );
};

export default HeaderAr;
