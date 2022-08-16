import React from "react";
import WhaleSlider from "./slider";

const ImgCard = (props) => {
  return (
    <div className=" z-10 w-full flex flex-col items-center my-2 text-white">
      <WhaleSlider />
      <div className="text-3xl ">나는 어떤 고래일까?</div>
    </div>
  );
};

export default ImgCard;
