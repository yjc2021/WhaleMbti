import React from "react";

const WhaleStats = (props) => {
  return (
    <div className="mt-10">
      <div className="mb-10 border-2 border-gray-700 flex flex-col w-[343px] h-[350px] p-2">
        <div className="w-full border text-center">유형별 궁합</div>
        <div className="flex gap-3 justify-between w-full h-full border p-3">
          <div className="w-full h-full border"></div>
          <div className="w-full h-full border"></div>
        </div>
      </div>
      <div className="mb-8 border-2 border-gray-700 flex flex-col w-[343px] h-[350px] p-2">
        <div className="w-full border text-center">가장 많은 유형</div>
        <div className="flex gap-3 justify-between w-full h-full border p-3">
          <div className="w-full h-full border"></div>
          <div className="w-full h-full border"></div>
        </div>
      </div>
    </div>
  );
};

export default WhaleStats;
