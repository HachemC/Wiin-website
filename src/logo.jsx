import React from "react";
import yourImage from "../src/images/wiin logo white 1.png"; // Update the path and filename

export function MyLogo() {
  const styles = {
    height: "44px",
    width: "135px",
    gridColumn: "2",
    gridRow: "1/3",
    margin: "44px 42px 50px 0",
  };
  const containerStyles = {
    display: "contents ",
  };

  return (
    <div style={containerStyles} className="logo-container">
      <img style={styles} src={yourImage} alt="none" />
    </div>
  );
}
