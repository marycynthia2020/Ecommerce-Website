import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const Love = () => {
  const [styles, setStyles] = useState({
    color: "black",
  });

  const toggleLove = () => {
    setStyles(prev => {
      if (prev.color === "black") {
        return {
          ...prev,
          color: "red",
        };
      } else {
        return {
          ...prev,
          color: "black",
        };
      }
    });
  };

  return (
    <div className="absolute right-5 ">
      <FaRegHeart style={styles} onClick={toggleLove} />
    </div>
  );
};

export default Love;
