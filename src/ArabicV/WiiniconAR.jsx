import React from "react";
import yourImage from "../images/wiin logo 1.png"; // Update the path and filename
import { useHistory } from "react-router-dom";

export function WiinLogoAR() {
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
  const history = useHistory();
  return (
    <div style={containerStyles} className="logo-container">
      <img
        onClick={() => history.push("/postingAR")}
        style={styles}
        src={yourImage}
        alt="none"
      />
    </div>
  );
}
