import React from "react";
import { useState } from "react";
import "./SearchBarAr.css";

export const SearchBarAr = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const performSearch = () => {
    // Your search logic here
  };

  return (
    <div className="search-containerAR">
      <div className="select-containerAR">
        <select
          id="locationSelect"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="location1">قابس</option>
          <option value="location2">قابس</option>
          <option value="location3">قابس</option>
          {/* Add more locations as needed */}
        </select>
      </div>

      <input
        className="searchbarreAR"
        type="text"
        placeholder="البحث عن..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <button className="search-buttonAR" type="submit" onClick={performSearch}>
        ابحث
      </button>
    </div>
  );
};
