import React from "react";
import { useNavigate } from "react-router-dom";
const LAST_PAGE = 12;
const StoryBtn = ({ id, decision }) => {
  const navigate = useNavigate();
  const activate = () => {
    // TODO: 점수 가산하기
    parseInt(id) === LAST_PAGE
      ? navigate("/test/result")
      : navigate(`/test/story/${parseInt(id) + 1}`);
  };
  return (
    <button onClick={activate} className="w-full h-16 bg-gray-200 rounded-full">
      {parseInt(id) !== LAST_PAGE ? decision : "나의 정체 확인하러 가기"}
    </button>
  );
};

export default StoryBtn;
