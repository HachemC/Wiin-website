import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./JobAR.css"; // Updated CSS file name

const JobAR = ({ title, description, imageSrc }) => {
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
      <div className="jobs-listAR">
        <div className="job-cardAR">
          <Link // Use Link component to create a link
            style={{ textDecoration: "none" }}
            to={`/selectedjobAR/${encodeURIComponent(title)}`} // Use the correct route path to SelectedJobPageAR
            className="job-linkAR"
          >
            <img src={imageSrc} alt={title} className="job-imageAR" />
            <h2 className="job-titleAR">{title}</h2>
            <p className="job-descriptionAR">{truncatedDescription}</p>
            {!showFullDescription && (
              <div className="read-moreAR" onClick={toggleDescription}></div>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default JobAR;
