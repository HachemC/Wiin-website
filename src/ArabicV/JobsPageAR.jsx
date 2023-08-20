import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import JobAR from "./JobAR";
import HeaderAr from "./HeaderAr";
import { ProfilePicture } from "../profilepic";
import JobForm from "../JobForm";
import "./jobspageAR.css";
import JobFormAR from "./jobformAR";
import Footer from "../footer";

export const JobsPageAR = ({ jobs, onAddJob }) => {
  const history = useHistory();

  const [userData] = useState({
    name: "XXXX XXXX",
    address: "قابس، تونس",
    job: "مطور برامج",
  });

  const jobList = jobs.map((job, index) => (
    <Link
      style={{ textDecoration: "none" }}
      key={index}
      to={`/job/${encodeURIComponent(job.title)}`}
    >
      <JobAR
        title={job.title}
        description={job.description}
        imageSrc={URL.createObjectURL(new Blob([job.image]))}
      />
    </Link>
  ));

  useEffect(() => {
    const imageURLs = jobs.map((job) =>
      URL.createObjectURL(new Blob([job.image]))
    );
    return () => {
      imageURLs.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [jobs]);

  return (
    <>
      <HeaderAr></HeaderAr>
      <div className="page3AR">
        <div className="picAR">
          <ProfilePicture></ProfilePicture>
          <div className="cont2AR">
            <div className="genAR">
              <p className="oneAR">{userData.name}</p>
              <p className="twoAR">{userData.job}</p>
              <p className="threeAR">{userData.address}</p>
            </div>
          </div>
        </div>

        <div className="jobs-pageAR">{jobList}</div>
        <JobFormAR onAddJob={onAddJob} />
      </div>
    </>
  );
};
