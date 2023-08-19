import React, { useState } from "react";
import Header from "./header";
import { ProfilePicture } from "./profilepic";
import Footer from "./footer";
import "./profileDetailsStyle.css";

export const UserProfile = (props) => {
  const [userData, setUserData] = useState({
    name: "XXXX XXXX",
    address: "Gabes,Tunisia",
    job: "Software Developer",
    gender: "",
    birthday: "",
    contact: "",
    skills: ["", "", "", ""],
  });
  const handleContactUsClick = () => {
    props.onFormSwitch("contactus"); // Call the function passed via props to switch forms
  };
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillChange = (index, value) => {
    setUserData((prevData) => {
      const newSkills = [...prevData.skills];
      newSkills[index] = value;
      return {
        ...prevData,
        skills: newSkills,
      };
    });
  };

  return (
    <>
      <Header
        onLanguageChange={handleLanguageChange}
        selectedLanguage={selectedLanguage}
      ></Header>

      <div className="page">
        <ProfilePicture></ProfilePicture>
        <div className="cont2">
          <div className="gen">
            <p className="one">{userData.name}</p>
            <p className="two">{userData.job}</p>
            <p className="three">{userData.address}</p>
          </div>
        </div>

        <div className="Fulldetails">
          <p className="four">
            Personal Details <div class="loader"></div>
          </p>

          <label>Name:</label>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userData.name}</span>
          )}
          <label>Address:</label>
          {editMode ? (
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userData.address}</span>
          )}
          <label>Job:</label>
          {editMode ? (
            <input
              type="text"
              name="job"
              value={userData.job}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userData.job}</span>
          )}
          <label>Gender:</label>
          {editMode ? (
            <input
              type="text"
              name="gender"
              value={userData.gender}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userData.gender}</span>
          )}
          <label>Birthday:</label>
          {editMode ? (
            <input
              type="text"
              name="birthday"
              value={userData.birthday}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userData.birthday}</span>
          )}
          <label>Contact:</label>
          {editMode ? (
            <input
              type="text"
              name="contact"
              value={userData.contact}
              onChange={handleInputChange}
            />
          ) : (
            <span>{userData.contact}</span>
          )}
        </div>

        <div className="Skills">
          <label>Skills:</label>
          {userData.skills.map((skill, index) => (
            <div key={index}>
              {editMode ? (
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                />
              ) : (
                <span>{skill}</span>
              )}
            </div>
          ))}
          {editMode ? (
            <button className="edit" onClick={() => setEditMode(false)}>
              Save
            </button>
          ) : (
            <button className="save" onClick={() => setEditMode(true)}>
              Edit
            </button>
          )}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
