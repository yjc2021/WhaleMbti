import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
const StoryHeader = ({ id }) => {
  const navigate = useNavigate();
  const goBack = () => {
    if (id <= 1) {
      alert("테스트 첫 페이지입니다");
    } else {
      navigate(`/test/story/${id - 1}`);
    }
  };
  return (
    <div className="flex lg:hidden items-center justify-between text-md px-6 py-3 border-2 border-gray-500">
      <div className="flex items-center gap-1">
        <FontAwesomeIcon className="" icon={solid("chevron-left")} />
        <div className="cursor-pointer" onClick={goBack}>
          이전
        </div>
      </div>
      <div className="text-xl text-center font-bold">고래 테스트</div>
      {parseInt(id) !== 13 ? <div>{id}/12</div> : <div></div>}
    </div>
  );
};

export default StoryHeader;
