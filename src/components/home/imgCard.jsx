import React from "react";
import WhaleSlider from "./slider";

const ImgCard = (props) => {
  return (
    <div className=" z-10 w-full flex flex-col items-center my-2 text-white">
      <WhaleSlider />
      <img
        src="/whoAmI.png"
        alt="나는 어떤 고래일까?"
        className="w-96 h-auto"
      />
    </div>
  );
};

export default ImgCard;
