import React from "react";
import { Link } from "react-router-dom";

export const LanguageButtons = ({ onLanguageChange }) => {
  const handleChangeToEN = () => {
    onLanguageChange("EN");
  };

  const handleChangeToAR = () => {
    onLanguageChange("AR");
  };

  return (
    <div className="language-buttons">
      <button onClick={handleChangeToEN}>EN</button>
      <button onClick={handleChangeToAR}>AR</button>
    </div>
  );
};
