import React from "react";
import Im from "../images/img.png";
import Attach from "../images/attach.png";
import { useState } from "react";

const Input = ({ onMessageSend }) => {
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "" || selectedImage) {
      const messageData = {
        text: message,
        image: selectedImage,
      };

      onMessageSend(messageData);
      setMessage("");
      setSelectedImage(null);
    }
  };

  return (
    <div className="Inputt">
      <input
        type="text"
        placeholder="type something..."
        value={message}
        onChange={handleMessageChange}
      />
      <div className="tex">
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <label htmlFor="file">
          <img src={Attach} alt="Attach" />
        </label>
        <button className="ss1" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
