import React, { useState } from "react";
import Cam from "../images/cam.png";
import More from "../images/more.png";
import Add from "../images/add.png";
import Mes from "./Mes";
import Input from "./Input";
import Navbar from "./Navbar";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessageData) => {
    setMessages([...messages, newMessageData]);
  };

  return (
    <div className="Chat">
      <div className="chatinfo">
        <Navbar></Navbar>
        <span></span>
        <div className="chatIcons">
          <img src={Cam} alt=""></img>
          <img src={Add} alt=""></img>
          <img src={More} alt=""></img>
        </div>
      </div>
      <Mes messages={messages}></Mes>
      <Input onMessageSend={handleSendMessage}></Input>
    </div>
  );
};

export default Chat;
