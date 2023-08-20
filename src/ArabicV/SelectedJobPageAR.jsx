import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./selectedjobAR.css";
import BasicRating from "../ratingComp";
import FullWidthTextFieldAR from "./feedbackAR";
import IconLabelButtons from "../sendingbutton";
import Footer from "../footer";

import HeaderAr from "./HeaderAr";

const SelectedJobPageAR = ({ jobs }) => {
  const { title } = useParams();
  const selectedJob = jobs.find(
    (job) => job.title === decodeURIComponent(title)
  );

  if (!selectedJob) {
    return <div>الوظيفة غير موجودة.</div>; // Arabic message for job not found
  }

  return (
    <>
      <HeaderAr></HeaderAr>
      <div className="selected-jobAR">
        <div className="dAR">
          <h2>{selectedJob.title}</h2>
          <p className="descrAR">{selectedJob.description}</p>
          <p className="reAR">المراجعات:</p>
          <BasicRating></BasicRating>
          <p className="reAR">أرسل ملاحظات:</p>
          <FullWidthTextFieldAR></FullWidthTextFieldAR>
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

export default SelectedJobPageAR;
