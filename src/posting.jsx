import React, { useState, useEffect } from "react";
import Post from "./post";
import Header from "./header";

export const PostingComponent = ({ userProfilePic, onFormSwitch }) => {
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
        prevPosts.map((post) => ({
          ...post,
          timestamp: getTimeAgo(post.timestamp), // Update timestamp with relative time
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
      <Header onFormSwitch={onFormSwitch}></Header>
      <div className="posting-grid">
        <div className="posting-container">
          <div className="user-profile-pic">
            <img src={require("./images/male.jpeg")} alt="User Profile" />
          </div>
          <div className="post-input">
            <textarea
              rows="4"
              placeholder="What's on your mind?"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            ></textarea>
          </div>
          <button className="ButtonPost" onClick={handlePost}>
            Post
          </button>
        </div>
      </div>
      <div className="posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            userProfilePic={post.userProfilePic}
            username={post.username}
            timestamp={post.timestamp}
            text={post.text}
          />
        ))}
      </div>
    </>
  );
};
