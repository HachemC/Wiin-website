import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={require("../images/male.jpeg")} alt=""></img>
        <div className="userChatInfo">
          <span>jane</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={require("../images/male.jpeg")} alt=""></img>
        <div className="userChatInfo">
          <span>jane</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={require("../images/male.jpeg")} alt=""></img>
        <div className="userChatInfo">
          <span>jane</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
