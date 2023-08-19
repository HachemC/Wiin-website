import React from "react";
import ReadMoreText from "../readmore";
import ProfilPic from "../images/male.jpeg";
import { useState } from "react";
import closeIcon from "../images/fa_close.png";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./postAR.css"; // Make sure to import the appropriate AR CSS file

const PostAR = ({
  userProfilePic,
  username,
  timestamp,
  text,
  onFormSwitch,
}) => {
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
  /*popup control*/
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="post-gridAR">
      <div className="post-containerAR">
        <div className="upAR">
          <img
            className="post-profile-picAR"
            src={userProfilePic || ProfilPic}
            alt="User Profile"
          />

          <div className="UsernameAndTimeAR">
            <span className="usernameAR">{username}</span>
            <span className="timestampAR">{getTimeAgo(timestamp)}</span>
          </div>
        </div>

        <div className="post-detailsAR">
          <ReadMoreText text={text} />
        </div>
        <div className="ObservAR">
          <Link
            style={{ alignContent: "center" }}
            to="/JobsPage"
            className="view-oldAR"
          >
            انظر الأعمال السابقة للموفر
          </Link>
          <button onClick={togglePopup} className="Contact-providerAR">
            اتصل بمقدم الخدمة
          </button>
        </div>
      </div>
      {showPopup && (
        <div className="popupAR">
          <div className="popup-innerAR">
            <div className="SendM">اتصل بمقدم الخدمة</div>
            <button className="close-popupAR" onClick={togglePopup}>
              <img src={closeIcon} alt="Close" />
            </button>
            <textarea
              className="txtAR"
              rows="4"
              placeholder="Type your message"
              value={messageContent}
              onChange={(e) => setMessageContent(e.target.value)}
            ></textarea>
            <button className="send-messageAR" onClick={handleSendMessage}>
              أرسل رسالة
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostAR;
