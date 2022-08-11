import React from "react";
import { useNavigate } from "react-router-dom";

const StartBtn = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <button
        onClick={() => navigate("/test/story/1")}
        className="w-1/3 h-16 bg-gray-200 rounded-full"
      >
        시작하기
      </button>
    </div>
  );
};

export default StartBtn;
