import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { storyImg } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useRecoilState } from "recoil";
import { counterAtom } from "../../atoms";

const StoryBlock = ({ id, story }) => {
  const navigate = useNavigate();
  let scriptTimerId;
  let imgTimerId;
  const { storyId } = useParams();

  const scriptTmp = story.split("|");
  const imgTmp = storyImg[storyId - 1];

  const idx = useRef(0);
  const posterIdx = useRef(0);
  const [script, setScript] = useState([]);
  const [poster, setPoster] = useState([]);
  const [counter, setCounter] = useRecoilState(counterAtom);

  const makeScript = () => {
    if (scriptTmp.length > idx.current) {
      setScript((cur) => [...cur, scriptTmp[idx.current++]]);
      scriptTimerId = setTimeout(makeScript, 1500);
    }
  };
  const makePoster = () => {
    if (imgTmp.length > posterIdx.current) {
      setPoster(imgTmp[posterIdx.current++]);
      imgTimerId = setTimeout(makePoster, 1500);
    }
  };

  useEffect(() => {
    posterIdx.current = 0;
    setPoster("");
    let posterCnt = imgTmp.length;
    if (posterCnt <= 1) {
      setPoster(imgTmp);
      return;
    }
    makePoster();
    if (imgTimerId)
      return () => {
        clearTimeout(imgTimerId);
      };
  }, [storyId]);
  useEffect(() => {
    idx.current = 0;
    setScript([]);
    let cnt = scriptTmp.length;
    if (cnt <= 1) {
      setScript((cur) => [...cur, scriptTmp]);
      return;
    }
    makeScript();
    return () => {
      clearTimeout(scriptTimerId);
    };
  }, [storyId]);
  const goBack = () => {
    if (id <= 1) {
      alert("테스트 첫 페이지입니다");
    } else {
      switch (parseInt(storyId)) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 7:
        case 9:
        case 12:
        case 13:
        case 14:
        case 16:
        case 17:
        case 18:
          setCounter((cur) => cur - 1);
          break;
        default:
      }
      navigate(`/test/story/${id - 1}`);
    }
  };

  return (
    <DivWrapper className="h-[50%] flex flex-col justify-between items-center relative">
      <img
        src={poster}
        className="w-full h-auto md:h-full md:w-auto shadow-xl shadow-[rgba(1,1,1,0.2)]"
        alt="story"
      />
      <FontAwesomeIcon
        icon={solid("chevron-left")}
        className="hidden lg:block text-[5rem] text-[700] absolute left-[30%] top-[40%] cursor-pointer transition ease-out duration-200 hover:scale-[1.3]"
        onClick={goBack}
      />
      <FontDiv className="text-center text-white text-[1.2rem] md:text-[1.3rem] mt-[0.5rem] md:mt-[2.2rem] w-[350px] md:w-[3300px]">
        {script.map((val) => (
          <div>{val}</div>
        ))}
      </FontDiv>
    </DivWrapper>
  );
};

export default StoryBlock;

const DivWrapper = styled.div`
  font-size: 23px;
`;
const FontDiv = styled.div`
  font-family: "Poor Story", cursive;
`;
