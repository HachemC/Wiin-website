import React, { useState } from "react";
import "./App.css";

import "./radiostyle.css";

export const Radio = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="radio">
      <div className="choice-container">
        <ChoiceOption
          option="Service Provider"
          selected={selectedOption === "Service Provider"}
          onSelect={handleOptionSelect}
        />
        <ChoiceOption
          option="Service Searcher"
          selected={selectedOption === "Service Searcher"}
          onSelect={handleOptionSelect}
        />
      </div>
    </div>
  );
};

const ChoiceOption = ({ option, selected, onSelect }) => {
  return (
    <div
      className={`choice-option ${selected ? "selected" : ""}`}
      onClick={() => onSelect(option)}
    >
      {option}
      {selected && <span className="check-mark">&#10004;</span>}
    </div>
  );
};

/////////////////might have some errors.
//////////////////////to recheck
