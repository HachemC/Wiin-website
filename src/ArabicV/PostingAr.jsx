import React, { useState, useEffect } from "react";
import PostAR from "./PostAR";
import HeaderAr from "./HeaderAr.jsx";
import "./PostingAr.css";

export const PostingComponentAr = ({ userProfilePic, onFormSwitch }) => {
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useState([]);

  const handlePost = () => {
    if (postText.trim() === "") {
      return; // Don't post empty text
    }

    const newPost = {
      id: new Date().getTime(),
      text: postText,
      userProfilePic: userProfilePic,
      username: "Hachem Chammem", // Replace with the user's actual name
      timestamp: new Date(), // Use a Date object
    };

    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    setPostText("");

    // Save the updated posts to localStorage
    localStorage.setItem("posts", JSON.stringify(updatedPosts));
  };

  useEffect(() => {
    // Load posts from localStorage when the component mounts
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }

    const interval = setInterval(() => {
      setPosts((prevPosts) =>
        prevPosts.map((postAR) => ({
          ...postAR,
          timestamp: getTimeAgo(postAR.timestamp), // Update timestamp with relative time
        }))
      );
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const getTimeAgo = (time) => {
    const currentTime = new Date();
    const postTime = new Date(time);
    const elapsedSeconds = Math.floor((currentTime - postTime) / 1000);

    if (elapsedSeconds < 60) {
      return "Just now";
    } else if (elapsedSeconds < 3600) {
      const elapsedMinutes = Math.floor(elapsedSeconds / 60);
      return `${elapsedMinutes}min ago`;
    } else {
      return postTime.toLocaleString();
    }
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
      </style>
      <HeaderAr onFormSwitch={onFormSwitch} />
      <div className="posting-gridAR">
        <div className="posting-containerAR">
          <div className="user-profile-picAR">
            <img src={require("../images/male.jpeg")} alt="User Profile" />
          </div>
          <div className="post-inputAR">
            <textarea
              rows="4"
              placeholder="انشر طلبك"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            ></textarea>
          </div>
          <button className="ButtonPostAR" onClick={handlePost}>
            نشر
          </button>
        </div>
      </div>
      <div className="postsAR">
        {posts.map((post) => (
          <PostAR
            key={post.id}
            userProfilePic={post.userProfilePic}
            username={post.username}
            timestamp={post.timestamp}
            text={post.text}
            onFormSwitch={onFormSwitch}
          />
        ))}
      </div>
    </>
  );
};
