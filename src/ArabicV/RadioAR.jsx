import React, { useState } from "react";
import "../App.css";

import "./RadioAR.css";

export const RadioAR = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="radioAR">
      <div className="choice-containerAR">
        <ChoiceOptionAR
          option="مقدم الخدمة"
          selected={selectedOption === "مقدم الخدمة"}
          onSelect={handleOptionSelect}
        />
        <ChoiceOptionAR
          option="باحث عن خدمة"
          selected={selectedOption === "باحث عن خدمة"}
          onSelect={handleOptionSelect}
        />
      </div>
    </div>
  );
};

const ChoiceOptionAR = ({ option, selected, onSelect }) => {
  return (
    <div
      className={`choice-optionAR ${selected ? "selectedAR" : ""}`}
      onClick={() => onSelect(option)}
    >
      {option}
      {selected && <span className="check-markAR">&#10004;</span>}
    </div>
  );
};
