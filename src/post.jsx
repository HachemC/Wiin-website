import React from "react";
import ReadMoreText from "./readmore";
import ProfilPic from "./images/male.jpeg";
import { useState } from "react";
import closeIcon from "./images/fa_close.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Post = ({ userProfilePic, username, timestamp, text }) => {
  const [messageContent, setMessageContent] = useState("");

  const handleSendMessage = () => {
    if (messageContent.trim() !== "") {
      const queryParams = new URLSearchParams();
      queryParams.append("content", messageContent);
      queryParams.append("timestamp", new Date().toString());

      history.push(`/ChatPage?${queryParams.toString()}`);
    }
  };
  const getTimeAgo = (time) => {
    const currentTime = new Date();
    const postTime = new Date(time);
    const elapsedSeconds = Math.floor((currentTime - postTime) / 1000);

    if (elapsedSeconds < 60) {
      return "Just now";
    } else if (elapsedSeconds < 3600) {
      const elapsedMinutes = Math.floor(elapsedSeconds / 60);
      return `${elapsedMinutes} ${
        elapsedMinutes === 1 ? "minute" : "minutes"
      } ago`;
    } else if (elapsedSeconds < 86400) {
      const elapsedHours = Math.floor(elapsedSeconds / 3600);
      return `${elapsedHours} ${elapsedHours === 1 ? "hour" : "hours"} ago`;
    } else {
      return postTime.toLocaleString();
    }
  };
  const history = useHistory();
  const handleViewJobs = (props) => {
    props.onFormSwitch("jobspage"); // Call the function passed via props to switch forms
  };
  /*poop up control*/
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div className="post-grid">
      <div className="post-container">
        <div className="up">
          <img
            className="post-profile-pic"
            src={userProfilePic || ProfilPic}
            alt="User Profile"
          />

          <div className="UsernameAndTime">
            <span className="username">{username}</span>
            <span className="timestamp">{getTimeAgo(timestamp)}</span>
          </div>
        </div>

        <div className="post-details">
          <ReadMoreText text={text} />
        </div>
        <div className="Observ">
          <Link to="/JobsPage" className="view-old">
            See provider's previous posts
          </Link>
          <button onClick={togglePopup} className="Contact-provider">
            Contact provider
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <div className="SendM">Send Message</div>
            <button className="close-popup" onClick={togglePopup}>
              <img src={closeIcon} alt="Close" />
            </button>
            <textarea
              className="txt"
              rows="4"
              placeholder="Type your message"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
            ></textarea>
            <button className="send-message" onClick={handleSendMessage}>
              Send Message
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
