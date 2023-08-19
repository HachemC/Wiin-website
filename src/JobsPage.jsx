import React, { useState, useEffect } from "react"; // Import useEffect
import { useHistory, Link } from "react-router-dom";
import Job from "./Job";
import Header from "./header";
import { ProfilePicture } from "./profilepic";
import JobForm from "./JobForm";
import "./jobspage.css";

export const JobsPage = ({ jobs, onAddJob }) => {
  const history = useHistory();

  const [userData] = useState({
    name: "XXXX XXXX",
    address: "Gabes, Tunisia",
    job: "Software Developer",
  });
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const jobList = jobs.map((job, index) => (
    <Link
      style={{ textDecoration: "none" }}
      key={index}
      to={`/job/${encodeURIComponent(job.title)}`}
    >
      <Job
        title={job.title}
        description={job.description}
        imageSrc={URL.createObjectURL(new Blob([job.image]))}
      />
    </Link>
  ));

  useEffect(() => {
    // Create an array of URLs and revoke them on component unmount
    const imageURLs = jobs.map((job) =>
      URL.createObjectURL(new Blob([job.image]))
    );
    return () => {
      imageURLs.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [jobs]); // Run the effect whenever the jobs array changes

  return (
    <>
      <Header
        onLanguageChange={handleLanguageChange}
        selectedLanguage={selectedLanguage}
      ></Header>
      <div className="page3">
        <div className="pic">
          <ProfilePicture></ProfilePicture>
          <div className="cont2">
            <div className="gen">
              <p className="one">{userData.name}</p>
              <p className="two">{userData.job}</p>
              <p className="three">{userData.address}</p>
            </div>
          </div>
        </div>

        <div className="jobs-page">{jobList}</div>
        <JobForm onAddJob={onAddJob} />
      </div>
    </>
  );
};
