import React from "react";

const Onemess = ({ message }) => {
  return (
    <div className={`mess ${message.image ? "with-image" : ""}`}>
      <div className="messInfo">
        <img src={require("../images/male.jpeg")} alt="" />
        <span>just now</span>
      </div>
      <div className="messContent">
        {message.text && <p>{message.text}</p>}
        {message.image && (
          <img src={URL.createObjectURL(message.image)} alt="" />
        )}
      </div>
    </div>
  );
};

export default Onemess;
