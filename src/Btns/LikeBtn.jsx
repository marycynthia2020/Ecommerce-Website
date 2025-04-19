import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";

const LikeBtn = ({className}) => {
  const [styles, setStyles] = useState({
    color: "black",
  });

  const toggleLike = () => {
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
    <div className= {className}>
      <FaRegHeart style={styles} onClick={toggleLike} />
    </div>
  );
};

export default LikeBtn;
