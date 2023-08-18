import React from "react";
import Onemess from "./onemess";

const Mes = ({ messages }) => {
  return (
    <div className="mes">
      {messages.map((message, index) => (
        <Onemess key={index} message={message} />
      ))}
    </div>
  );
};

export default Mes;
