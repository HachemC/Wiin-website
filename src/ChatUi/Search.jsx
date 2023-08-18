import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <div className="Search">
      <div className="searchForm">
        <SearchIcon></SearchIcon>
        <input
          className="k2"
          placeholder="search something"
          type="text"
        ></input>
      </div>
    </div>
  );
};

export default Search;
