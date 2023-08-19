import React, { useState, useRef, useEffect } from "react";
import "./readmoretxt.css";

const ReadMoreText = ({ text }) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const [isOverflowed, setIsOverflowed] = useState(false);
  const contentRef = useRef(null);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  useEffect(() => {
    if (contentRef.current) {
      const hasOverflow =
        contentRef.current.scrollHeight > contentRef.current.clientHeight;
      setIsOverflowed(hasOverflow);
    }
  }, []);

  return (
    <div className="read-more-text">
      <div
        className={`text-content ${isTruncated ? "truncated" : ""}`}
        style={{
          maxHeight: isTruncated ? "70px" : "none",
          overflow: isTruncated ? "hidden" : "visible",
        }}
        ref={contentRef}
      >
        {text}
      </div>
      {isOverflowed && (
        <span className="read-more-button" onClick={toggleTruncate}>
          {isTruncated ? "Read more" : "Read less"}
        </span>
      )}
    </div>
  );
};

export default ReadMoreText;
