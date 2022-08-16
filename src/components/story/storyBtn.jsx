import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const LAST_PAGE = 12;
const StoryBtn = ({ cntD, id, type, decision }) => {
  const navigate = useNavigate();
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
  const getMbtiD = (data) => {
    for (let a = 0; a < 4; a++) {
      switch (a) {
        case 0:
          for (let i = 0; i < 3; i++) {
            if (data[0].data[i] === "a") {
              mbtiD.current.eCnt++;
            } else if (data[0].data[i] === "b") {
              mbtiD.current.iCnt++;
            }
          }
          break;
        case 1:
          for (let i = 0; i < 3; i++) {
            if (data[0].data[i] === "a") {
              mbtiD.current.sCnt++;
            } else if (data[0].data[i] === "b") {
              mbtiD.current.nCnt++;
            }
          }
          break;
        case 2:
          for (let i = 0; i < 3; i++) {
            if (data[0].data[i] === "a") {
              mbtiD.current.fCnt++;
            } else if (data[0].data[i] === "b") {
              mbtiD.current.tCnt++;
            }
          }
          break;
        case 3:
          for (let i = 0; i < 3; i++) {
            if (data[0].data[i] === "a") {
              mbtiD.current.pCnt++;
            } else if (data[0].data[i] === "b") {
              mbtiD.current.jCnt++;
            }
          }
          break;
        default:
      }
    }
  };

  const activate = (id) => {
    // TODO: 점수 가산하기
    console.log(id);
    type === "a"
      ? (cntD.current[Math.floor((id - 1) / 3)].data[(id - 1) % 3] = "a")
      : (cntD.current[Math.floor((id - 1) / 3)].data[(id - 1) % 3] = "b");

    console.log(cntD.current[Math.floor((id - 1) / 3)].data);
    id === LAST_PAGE && getMbtiD(cntD.current);
    id === LAST_PAGE
      ? navigate("/test/result", { state: mbtiD })
      : navigate(`/test/story/${parseInt(id) + 1}`);
  };
  return (
    <button
      onClick={() => activate(id)}
      className="w-full h-16 bg-gray-200 rounded-full"
    >
      {parseInt(id) !== LAST_PAGE ? decision : "나의 정체 확인하러 가기"}
    </button>
  );
};

export default StoryBtn;
