import React, { useState } from "react";

import { ProfilePicture } from "../profilepic";
import Footer from "../footer";
import "./profileDetailsStyleAR.css";
import HeaderAr from "./HeaderAr";

export const UserProfileAR = (props) => {
  const [userData, setUserData] = useState({
    name: "Mohamed Alaya",
    address: "قابس ، تونس",
    job: "مطور برامج",
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
      <HeaderAr></HeaderAr>

      <div className="pageAR">
        <ProfilePicture></ProfilePicture>
        <div className="cont2AR">
          <div className="genAR">
            <p className="oneAR">{userData.name}</p>
            <p className="twoAR">{userData.job}</p>
            <p className="threeAR">{userData.address}</p>
          </div>
        </div>

        <div className="FulldetailsAR">
          <p className="fourAR">
            تفاصيل شخصية <div class="loaderAR"></div>
          </p>

          <label>الاسم:</label>
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
          <label>البريد الإلكتروني :</label>
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
          <label>العمل</label>
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
          <label>الجنس:</label>
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
          <label>تاريخ الولادة :</label>
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
          <label>رقم الهاتف :</label>
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

        <div className="SkillsAR">
          <label>مهارات:</label>
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
            <button className="editAR" onClick={() => setEditMode(false)}>
              حفظ
            </button>
          ) : (
            <button className="saveAR" onClick={() => setEditMode(true)}>
              تغيير
            </button>
          )}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};
