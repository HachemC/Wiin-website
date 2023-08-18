import React from "react";

export const AppleButton = () => {
  const facebookImageURL = "https://img.icons8.com/sf-ultralight/25/mac-os.png";

  const buttonStyle = {
    background: `url(${facebookImageURL}) no-repeat center`,
    backgroundSize: "cover",
    width: "2.3rem", // Set your preferred width
    height: "2.3rem", // Set your preferred height
    border: "none",
    cursor: "pointer",
    left: "1rem",
    position: "absolute",
    bottom: "0.7rem",
  };

  return <button style={buttonStyle}></button>;
};
