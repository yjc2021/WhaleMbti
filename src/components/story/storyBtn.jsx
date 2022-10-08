import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { counterAtom } from "../../atoms";
const LAST_PAGE = 13;
const StoryBtn = ({ cntD, id, type, decision }) => {
  const navigate = useNavigate();
  const [counter, setCounter] = useRecoilState(counterAtom);
  const mbtiD = useRef({
    eCnt: 0,
    iCnt: 0,
    nCnt: 0,
    sCnt: 0,
    tCnt: 0,
    fCnt: 0,
    pCnt: 0,
    jCnt: 0,
  });
  const resetMbtiD = () => {
    return {
      eCnt: 0,
      iCnt: 0,
      nCnt: 0,
      sCnt: 0,
      tCnt: 0,
      fCnt: 0,
      pCnt: 0,
      jCnt: 0,
    };
  };

  const getMbtiD = (data) => {
    mbtiD.current = resetMbtiD();
    for (let a = 0; a < 4; a++) {
      switch (a) {
        case 0:
          for (let i = 0; i < 3; i++) {
            if (data[0].data[i] === "a") {
              mbtiD.current.iCnt++;
            } else if (data[0].data[i] === "b") {
              mbtiD.current.eCnt++;
            }
          }
          break;
        case 1:
          for (let i = 0; i < 3; i++) {
            if (data[1].data[i] === "a") {
              mbtiD.current.sCnt++;
            } else if (data[1].data[i] === "b") {
              mbtiD.current.nCnt++;
            }
          }
          break;
        case 2:
          for (let i = 0; i < 3; i++) {
            if (data[2].data[i] === "a") {
              mbtiD.current.tCnt++;
            } else if (data[2].data[i] === "b") {
              mbtiD.current.fCnt++;
            }
          }
          break;
        case 3:
          for (let i = 0; i < 3; i++) {
            if (data[3].data[i] === "a") {
              mbtiD.current.pCnt++;
            } else if (data[3].data[i] === "b") {
              mbtiD.current.jCnt++;
            }
          }
          break;
        default:
      }
    }
  };

  const activate = () => {
    console.log(counter);
    counter === LAST_PAGE && getMbtiD(cntD.current);

    counter === LAST_PAGE
      ? navigate("/test/result", { state: mbtiD })
      : navigate(`/test/story/${id + 1}`);
    type === "a"
      ? (cntD.current[Math.floor((counter - 1) / 3)].data[(counter - 1) % 3] =
          "a")
      : (cntD.current[Math.floor((counter - 1) / 3)].data[(counter - 1) % 3] =
          "b");

    if (counter < LAST_PAGE) setCounter((cur) => cur + 1);
  };

  return (
    <button
      onClick={activate}
      className="w-[320px] h-[70px] md:w-[373.54px] md:h-[80px] bg-white rounded-[22px] md:rounded-full text-black hover:bg-[#FFE27E] shadow-inner shadow-[rgba(0,0,0,0.5)]"
    >
      <div className="px-[30px] md:px-[55px] text-[17px] md:text-[19px]">
        {counter !== LAST_PAGE ? decision : "나의 정체 확인하러 가기"}
      </div>
    </button>
  );
};

export default StoryBtn;
