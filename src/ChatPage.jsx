import React, { Component } from "react";
import SideBar from "./ChatUi/SideBar";
import Chat from "./ChatUi/Chat";
import Header from "./header";
import Footer from "./footer";

const ChatStart = () => {
  return (
    <>
      <Header></Header>
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
