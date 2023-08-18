import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
const SideBar = () => {
  return (
    <div className="SideBar">
      <Navbar></Navbar>
      <Search></Search>
      <Chats></Chats>
    </div>
  );
};

export default SideBar;
