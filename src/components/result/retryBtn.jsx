import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
const RetryBtn = (props) => {
  const navigate = useNavigate();
  return (
    <div className="my-2 w-full h-20 flex items-center justify-center">
      <button
        onClick={() => navigate("/test/home")}
        className="rounded-full w-60 h-14 bg-gray-200 text-black text-xl "
      >
        테스트 다시 하기
        <FontAwesomeIcon icon={solid("arrow-rotate-left")} />
      </button>
    </div>
  );
};

export default RetryBtn;
