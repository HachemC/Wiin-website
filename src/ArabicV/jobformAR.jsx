import React, { useState } from "react";
import "./jobformAR.css";

const JobFormAR = ({ onAddJob }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if title or description is empty before adding the job
    if (!title.trim() || !description.trim()) {
      return; // Exit the function if title or description is empty
    }

    const newJob = { title, description, image };
    onAddJob(newJob);
    setTitle("");
    setDescription("");
    setImage("");
  };

  return (
    <form className="jobformAR" onSubmit={handleSubmit}>
      <div>إضافة وظائف:</div>
      <input
        className="titleeAR"
        type="text"
        placeholder="العنوان"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="الوصف"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="filleAR"
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">إضافة الوظيفة</button>
    </form>
  );
};

export default JobFormAR;
