import React from "react";
import { useNavigate } from "react-router-dom";

const StartBtn = (props) => {
  const navigate = useNavigate();
  return (
    <div className="mt-[150px] w-full flex items-center justify-center">
      <button
        onClick={() => navigate("/test/story/1")}
        className="w-[373.54px] h-[80px] bg-white rounded-full text-black hover:bg-[#FFE27E] shadow-inner shadow-[rgba(0,0,0,0.5)]"
      >
        시작하기
      </button>
    </div>
  );
};

export default StartBtn;
