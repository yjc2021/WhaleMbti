import React from "react";
import WhaleSlider from "./slider";

const ImgCard = (props) => {
  return (
    <div className="mt-[40px] z-10 w-full flex flex-col items-center text-white">
      <WhaleSlider />
      <img
        src="/whoAmI.png"
        alt="나는 어떤 고래일까?"
        className="w-[350px] md:w-[400px] lg:w-[540px] h-auto"
      />
    </div>
  );
};

export default ImgCard;
