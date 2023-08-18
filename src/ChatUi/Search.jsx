import React from "react";

const Search = () => {
  return (
    <div className="Search">
      <div className="searchForm">
        <input type="text"></input>
      </div>
      <div className="userChat">
        <img src={require("../images/male.jpeg")} alt=""></img>
        <div className="userChatInfo">
          <span>jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
