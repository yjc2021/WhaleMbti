import React from "react";
import Header from "../components/home/header";
import StoryBtn from "../components/story/storyBtn";
import StoryBlock from "../components/story/storyBlock";
import StoryHeader from "../components/story/storyHeader";
import ProgressBar from "../components/story/progressBar";
import { storyData, decisionAData, decisionBData } from "../data";
import { useParams, useNavigate } from "react-router-dom";
import { useRef } from "react";
import styled, { css } from "styled-components";

import mainSm from "../img/home/mainSm.jpg";
import storyLg from "../img/story/storyLg.jpg";

const LAST_PAGE = 19;

const TestStory = () => {
  const navigate = useNavigate();
  const cntD = useRef([
    { id: 0, data: { 0: "z", 1: "z", 2: "z" } },
    { id: 1, data: { 0: "z", 1: "z", 2: "z" } },
    { id: 2, data: { 0: "z", 1: "z", 2: "z" } },
    { id: 3, data: { 0: "z", 1: "z", 2: "z" } },
  ]);
  const { storyId } = useParams();

  const story = storyData[storyId - 1];
  const decisionA = decisionAData[storyId - 1];
  const decisionB = decisionBData[storyId - 1];

  if (storyId > LAST_PAGE || !storyId) {
    return <div>존재하지 않는 페이지입니다</div>;
  }

  const onClick = () => {
    switch (parseInt(storyId)) {
      case 5:
      case 7:
      case 9:
      case 10:
      case 14:
      case 18:
        navigate(`/test/story/${parseInt(storyId) + 1}`);
        break;
      default:
    }
  };
  return (
    <Background className="w-full h-full bg-cover overflow-y-auto lg:overflow-hidden">
      <Header />
      <StoryHeader id={storyId} />
      <div className="px-0 md:px-5 w-[100vw] h-full pt-0 md:pt-5 flex flex-col items-center relative font-[100]">
        <StoryBlock id={parseInt(storyId)} story={story} />
        {parseInt(storyId) !== LAST_PAGE ? (
          <ButtonWrapper
            id={parseInt(storyId)}
            className="rounded-[3.5rem] mt-[80px] md:mt-[150px] w-full md:w-[70%] h-[150px] md:h-[92.08px] flex flex-col md:flex-row items-center justify-center gap-[1rem] md:gap-[3rem]"
            onClick={onClick}
          >
            {decisionA[parseInt(storyId)] && (
              <StoryBtn
                id={parseInt(storyId)}
                type="a"
                decision={decisionA}
                cntD={cntD}
              />
            )}
            {decisionB[parseInt(storyId)] && (
              <StoryBtn
                id={parseInt(storyId)}
                type="b"
                decision={decisionB}
                cntD={cntD}
              />
            )}
          </ButtonWrapper>
        ) : (
          <div className="mt-[150px] w-full h-[92.08px] flex items-center justify-center gap-[3rem]">
            <StoryBtn id={parseInt(storyId)} cntD={cntD} />
          </div>
        )}
      </div>
      <ProgressBar id={parseInt(storyId)} />
    </Background>
  );
};

export default TestStory;

const ButtonWrapper = styled.div`
  ${(props) =>
    props.id === 4 &&
    css`
      margin-top: 9rem;
    `}
  box-shadow: inset 0px 0px 30px white;
`;
export const Background = styled.div`
  background-image: url(${mainSm});
  background-position: top center;
  @media screen and (min-width: 640px) {
    background-image: url(${storyLg});
    background-position: top center;
  }
  background-repeat: no-repeat;
`;
