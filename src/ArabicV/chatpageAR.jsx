import React, { useState } from "react";
import SideBar from "../ChatUi/SideBar";
import Chat from "../ChatUi/Chat";
import HeaderAR from "./HeaderAr";
import Footer from "../footer";
import "./chatpageAR.css";

const ChatStartAR = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <>
      <HeaderAR
        onLanguageChange={handleLanguageChange}
        selectedLanguage={selectedLanguage}
      ></HeaderAR>
      <div className="homeAR">
        <div className="container3AR">
          <SideBar></SideBar>
          <Chat></Chat>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ChatStartAR;
