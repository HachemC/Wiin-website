import React, { useState } from "react";

import Header from "./header";
import { UserProfile } from "./profiledetails";

export const ProfilePicture = (onFormSwitch) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <div className="con">
        <div className="profile-picture2">
          {selectedImage ? (
            <img src={selectedImage} alt="Profile" />
          ) : (
            <div className="placeholder2">Select an image</div>
          )}
        </div>
        <div className="PicSelection">
          {" "}
          <label className="camera-button">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <span>Choose Image</span>
          </label>
        </div>
      </div>
    </>
  );
};
