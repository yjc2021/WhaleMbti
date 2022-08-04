import React from "react";
import WhaleAni from "../animations/whale_ani";

const ImgCard = (props) => {
  return (
    <div className=" z-10 w-full flex flex-col items-center my-2 border text-white">
      <WhaleAni />
      <div className="text-3xl ">나는 어떤 고래일까?</div>
    </div>
  );
};

export default ImgCard;
