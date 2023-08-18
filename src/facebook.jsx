import React from "react";

export const FacebookButton = () => {
  const facebookImageURL =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png";

  const buttonStyle = {
    background: `url(${facebookImageURL}) no-repeat center`,
    backgroundSize: "cover",
    width: "2rem", // Set your preferred width
    height: "2rem", // Set your preferred height
    border: "none",
    cursor: "pointer",
    left: "1rem",
    position: "absolute",
    bottom: "1rem",
  };

  return <button style={buttonStyle}></button>;
};
