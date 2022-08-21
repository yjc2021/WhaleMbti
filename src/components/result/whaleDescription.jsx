import React from "react";
import { whaleDescription } from "../../data";

const WhaleDescription = ({ id }) => {
  const { whaleName, whaleDesTop, whaleDesLow } = whaleDescription[id - 1];
  //console.log(whaleName);
  //console.log(whaleDesTop);
  //console.log(whaleDesLow);

  return (
    <div className="border w-full flex flex-col">
      <div className="border w-full lg:w-3/4 h-[300px]">
        <span>`${whaleName}가 나온 당신은`</span>
        <p>{whaleDesTop}</p>
      </div>
      <div className="border w-full flex flex-col lg:flex-row ">
        <div className="border w-full lg:w-3/4 h-[300px]">
          <span>`${whaleName}는`</span>
          <p>{whaleDesLow}</p>
        </div>
        <img className=" w-[300px] h-[300px] border" alt="WhaleDescription" />
      </div>
    </div>
  );
};

export default WhaleDescription;
