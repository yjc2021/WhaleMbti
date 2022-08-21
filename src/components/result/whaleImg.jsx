import React from "react";
import { whaleIndex } from "../../data";

const WhaleImg = ({ id }) => {
  //console.log(id);
  console.log(whaleIndex[id - 1]);
  return (
    <div className="border w-[350px] h-[400px]">
      <img alt="WhaleImage" src={whaleIndex[id - 1].whaleImg} />
    </div>
  );
};
export default WhaleImg;
