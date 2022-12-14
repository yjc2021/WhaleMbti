import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { counterAtom } from "../../atoms";
const StoryHeader = ({ id }) => {
  const setCounter = useSetRecoilState(counterAtom);
  const navigate = useNavigate();
  const goBack = () => {
    if (id <= 1) {
      alert("테스트 첫 페이지입니다");
    } else {
      setCounter((cur) => cur - 1);
      navigate(`/test/story/${id - 1}`);
    }
  };
  return (
    <div className="flex lg:hidden items-center justify-between text-md px-6 py-3">
      <div className="flex items-center gap-1">
        <FontAwesomeIcon className="" icon={solid("chevron-left")} />
        <div className="cursor-pointer" onClick={goBack}>
          이전
        </div>
      </div>
      {parseInt(id) !== 19 ? <div>{id}/19</div> : <div></div>}
    </div>
  );
};

export default StoryHeader;
