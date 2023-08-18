import React from "react";
import { useParams } from "react-router-dom";
import Header from "./header";
import "./selectedjob.css";
import BasicRating from "./ratingComp";
import FullWidthTextField from "./feedback";
import IconLabelButtons from "./sendingbutton";
import Footer from "./footer";
const SelectedJobPage = ({ jobs }) => {
  const { title } = useParams();

  const selectedJob = jobs.find(
    (job) => job.title === decodeURIComponent(title)
  );

  if (!selectedJob) {
    return <div>Job not found.</div>;
  }

  return (
    <>
      <Header></Header>
      <div className="selected-job">
        <div className="d">
          {" "}
          <h2>{selectedJob.title}</h2>
          <p className="descr">{selectedJob.description}</p>
          <p className="re"> Reviews:</p>
          <BasicRating></BasicRating>
          <p className="re">Send feedbacks:</p>
          <FullWidthTextField></FullWidthTextField>
          <IconLabelButtons></IconLabelButtons>
        </div>

        <img
          src={URL.createObjectURL(new Blob([selectedJob.image]))}
          alt={selectedJob.title}
        />
      </div>
      <Footer></Footer>
    </>
  );
};

export default SelectedJobPage;
