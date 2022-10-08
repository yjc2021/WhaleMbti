import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
const RetryBtn = (props) => {
  const navigate = useNavigate();
  return (
    <div className="mb-[60px] w-full h-20 flex items-center justify-center">
      <button
        onClick={() => navigate("/test/home")}
        className="rounded-full w-60 h-14 bg-[#ffe27e] text-[#002fac] text-[1.4rem] "
      >
        <span>테스트 다시 하기 </span>
        <FontAwesomeIcon icon={solid("arrow-rotate-left")} />
      </button>
    </div>
  );
};

export default RetryBtn;
