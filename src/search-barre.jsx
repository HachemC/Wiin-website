import React from "react";
import { useState } from "react";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const performSearch = () => {
    /////
  };

  return (
    <div className="search-container">
      <div className="select-container">
        {" "}
        <select
          id="locationSelect"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="location1">Location 1</option>
          <option value="location2">Location 2</option>
          <option value="location3">Location 3</option>
          {/* Add more locations as needed */}
        </select>
      </div>

      <input
        className="searchbarre"
        type="text"
        placeholder="Type your search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button className="search-button" type="submit" onClick={performSearch}>
        Search
      </button>
    </div>
  );
};
