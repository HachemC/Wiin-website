import React, { useState } from "react";
import "./jobform.css";

const JobForm = ({ onAddJob }) => {
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
    <form className="jobform" onSubmit={handleSubmit}>
      <div>add jobs:</div>
      <input
        className="titlee"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="fille"
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
