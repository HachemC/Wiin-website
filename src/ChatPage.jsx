import React, { Component } from "react";
import SideBar from "./ChatUi/SideBar";
import Chat from "./ChatUi/Chat";
import Header from "./header";
import Footer from "./footer";
import "./ChatPage.css";
import { useState } from "react";

const ChatStart = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  return (
    <>
      <Header
        onLanguageChange={handleLanguageChange}
        selectedLanguage={selectedLanguage}
      ></Header>
      <div className="home">
        <div className="container3">
          <SideBar></SideBar>
          <Chat></Chat>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
export default ChatStart;
