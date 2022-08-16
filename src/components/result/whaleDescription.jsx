import React from "react";

const WhaleDescription = (props) => {
  return (
    <div className="border w-full flex flex-col">
      <div className="border w-full lg:w-3/4 h-[300px]">
        <span>흑동고래가 나온 당신은</span>
        <p>본문</p>
      </div>
      <div className="border w-full flex flex-col lg:flex-row ">
        <div className="border w-full lg:w-3/4 h-[300px]">
          <span>흑동고래는</span>
          <p>본문</p>
        </div>
        <img className=" w-[300px] h-[300px] border" alt="WhaleDescription" />
      </div>
    </div>
  );
};

export default WhaleDescription;
