import React, { useState } from "react";
import "./Job.css";
import { Link } from "react-router-dom";
import Header from "./header";

const Job = ({ title, description, imageSrc }) => {
  const maxDescriptionLength = 250; // Maximum length of the truncated description
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncatedDescription = showFullDescription
    ? description
    : description.slice(0, maxDescriptionLength).trim();

  return (
    <>
      <div className="jobs-list">
        <div className="job-card">
          <Link
            style={{ textDecoration: "none" }}
            to={`/job/${encodeURIComponent(title)}`}
            className="job-link"
          >
            <img src={imageSrc} alt={title} className="job-image" />
            <h2 className="job-title">{title}</h2>
            <p className="job-description">{truncatedDescription}</p>
            {!showFullDescription && (
              <div className="read-more" onClick={toggleDescription}></div>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Job;
