import React from "react";

const StoryBlock = ({ story }) => {
  return (
    <div className="h-64 flex flex-col justify-between">
      <img src="" className="w-full h-52 border-2 border-gray-700" />
      <div className="text-center">{story}</div>
    </div>
  );
};

export default StoryBlock;
