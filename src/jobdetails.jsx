import React from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import { useState } from "react";

const JobDetails = ({ jobs }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  const { title } = useParams();
  const job = jobs.find((job) => job.title === title);
  console.log("Found Job:", job);

  if (!job) {
    return;
  }

  return (
    <>
      <Header
        onLanguageChange={handleLanguageChange}
        selectedLanguage={selectedLanguage}
      ></Header>
      <div className="job-details">
        <img
          src={URL.createObjectURL(new Blob([job.imageSrc]))}
          alt={job.title}
          className="job-details-image"
        />
        <h2 className="job-details-title">{job.title}</h2>
        <p className="job-details-description">{job.description}</p>
      </div>
    </>
  );
};

export default JobDetails;
