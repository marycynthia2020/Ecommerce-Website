import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const ScrollBtn = (props ) => {
  return (
    <div className="flex gap-2 items-center ">
      <FaArrowLeft onClick={props.handleLeftClick}  className="text-sm md:text-2xl"/>
      <FaArrowRight onClick={props.handleRightClick}  className="text-sm md:text-2xl" />
    </div>
  );
};
 
export default ScrollBtn;
