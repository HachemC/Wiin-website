import React, { useState } from "react";
import "./App.css";

import "./radiostyle.css";

export const Radio = ({ selected, onSelect }) => {
  const options = ["Service Provider", "Service Searcher"];

  return (
    <div className="radio">
      <div className="choice-container">
        {options.map((option) => (
          <ChoiceOption
            key={option}
            option={option}
            selected={selected === option}
            onSelect={() => onSelect(option)}
          />
        ))}
      </div>
    </div>
  );
};

const ChoiceOption = ({ option, selected, onSelect }) => {
  return (
    <div
      className={`choice-option ${selected ? "selected" : ""}`}
      onClick={onSelect}
    >
      {option}
      {selected && <span className="check-mark">&#10004;</span>}
    </div>
  );
};

/////////////////might have some errors.
//////////////////////to recheck
