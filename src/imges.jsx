import React from "react";
import yourImage from "../src/images/pngwing.com (2).png"; // Update the path and filename

export function MyComponent() {
  const styles = {
    gridColumn: "8/13",
    gridRow: "2",
    height: "385px",
    width: "385px",
    marginLeft: '7rem',
  };
  const containerStyles = {
    display: "contents ",
  };

  return (
    <div style={containerStyles} className="Pic-container">
      <img style={styles} src={yourImage} alt="none" />
    </div>
  );
}
