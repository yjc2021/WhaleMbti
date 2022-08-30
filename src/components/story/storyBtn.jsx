import React, { useRef, useState } from "react";
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
  //const [mbtiState, setMbtiState] = useRecoilState(mbtiAtom);
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
  /* const resetMbtiState = () => {
    setMbtiState({
      eCnt: 0,
      iCnt: 0,
      nCnt: 0,
      sCnt: 0,
      tCnt: 0,
      fCnt: 0,
      pCnt: 0,
      jCnt: 0,
    });
  };*/
  const getMbtiD = (data) => {
    console.log("data");
    console.log(data);
    console.log("before reset");
    console.log(mbtiD);
    mbtiD.current = resetMbtiD();
    console.log("after reset");
    console.log(mbtiD);
    for (let a = 0; a < 4; a++) {
      switch (a) {
        case 0:
          for (let i = 0; i < 3; i++) {
            if (data[0].data[i] === "a") {
              mbtiD.current.iCnt++;

              //setMbtiState((cur) => ({ ...cur, iCnt: mbtiState.iCnt + 1 }));
            } else if (data[0].data[i] === "b") {
              mbtiD.current.eCnt++;
              //setMbtiState((cur) => ({ ...cur, eCnt: mbtiState.eCnt + 1 }));
            }
          }
          break;
        case 1:
          for (let i = 0; i < 3; i++) {
            if (data[1].data[i] === "a") {
              mbtiD.current.sCnt++;
              //setMbtiState((cur) => ({...cur,sCnt: mbtiState.sCnt + 1,}));
            } else if (data[1].data[i] === "b") {
              mbtiD.current.nCnt++;
              //setMbtiState((cur) => ({...cur,nCnt: mbtiState.nCnt + 1,}));
            }
          }
          break;
        case 2:
          for (let i = 0; i < 3; i++) {
            if (data[2].data[i] === "a") {
              mbtiD.current.tCnt++;
              //setMbtiState((cur) => ({...cur,fCnt: mbtiState.fCnt + 1,}));
            } else if (data[2].data[i] === "b") {
              mbtiD.current.fCnt++;
              //setMbtiState((cur) => ({...cur,tCnt: mbtiState.tCnt + 1,}));
            }
          }
          break;
        case 3:
          for (let i = 0; i < 3; i++) {
            if (data[3].data[i] === "a") {
              mbtiD.current.pCnt++;
              //setMbtiState((cur) => ({...cur,pCnt: mbtiState.pCnt + 1,}));
            } else if (data[3].data[i] === "b") {
              mbtiD.current.jCnt++;
              //setMbtiState((cur) => ({..cur,jCnt: mbtiState.jCnt + 1,}));
            }
          }
          break;
        default:
      }
    }
    console.log("after calculation");
    console.log(mbtiD);
  };

  const activate = () => {
    console.log(counter);
    counter === LAST_PAGE && getMbtiD(cntD.current);

    counter === LAST_PAGE
      ? navigate("/test/result", { state: mbtiD })
      : //navigate("/test/result")
        navigate(`/test/story/${counter + 1}`);
    type === "a"
      ? (cntD.current[Math.floor((counter - 1) / 3)].data[(counter - 1) % 3] =
          "a")
      : (cntD.current[Math.floor((counter - 1) / 3)].data[(counter - 1) % 3] =
          "b");

    console.log(cntD.current[Math.floor((counter - 1) / 3)].data);
    console.log(counter, LAST_PAGE);
    if (counter < LAST_PAGE) setCounter((cur) => cur + 1);
  };
  /*
  const activate = (id) => {
    // TODO: 점수 가산하기
    console.log(id);
    id === LAST_PAGE && getMbtiD(cntD.current);
    id === LAST_PAGE
      ? navigate("/test/result", { state: mbtiD })
      : //navigate("/test/result")
        navigate(`/test/story/${parseInt(id) + 1}`);
    type === "a"
      ? (cntD.current[Math.floor((id - 1) / 3)].data[(id - 1) % 3] = "a")
      : (cntD.current[Math.floor((id - 1) / 3)].data[(id - 1) % 3] = "b");

    console.log(cntD.current[Math.floor((id - 1) / 3)].data);
  };
  */
  return (
    <button onClick={activate} className="w-full h-16 bg-gray-300 rounded-full">
      {counter !== LAST_PAGE ? decision : "나의 정체 확인하러 가기"}
    </button>
  );
};

export default StoryBtn;
