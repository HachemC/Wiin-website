import React, { Component } from "react";
import SideBar from "./ChatUi/SideBar";
import Chat from "./ChatUi/Chat";

const ChatStart = () => {
  return (
    <div className="home">
      <div className="container3">
        <SideBar></SideBar>
        <Chat></Chat>
      </div>
    </div>
  );
};
export default ChatStart;
