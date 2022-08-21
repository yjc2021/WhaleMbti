import React from "react";
import Header from "../components/home/header";
import StoryBtn from "../components/story/storyBtn";
import StoryBlock from "../components/story/storyBlock";
import StoryHeader from "../components/story/storyHeader";
import ProgressBar from "../components/story/progressBar";
import { storyData, decisionAData, decisionBData } from "../data";
import { useParams } from "react-router-dom";
import { useRef } from "react";
const LAST_PAGE = 13;

const TestStory = () => {
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
  return (
    <>
      <Header />
      <StoryHeader id={storyId} />
      <div className="px-5">
        <StoryBlock story={story} />
        {parseInt(storyId) !== LAST_PAGE ? (
          <div className="border-2 border-gray-700 h-36 my-8 flex flex-col justify-between">
            <StoryBtn
              id={parseInt(storyId)}
              type="a"
              decision={decisionA}
              cntD={cntD}
            />
            <StoryBtn
              id={parseInt(storyId)}
              type="b"
              decision={decisionB}
              cntD={cntD}
            />
          </div>
        ) : (
          <div className="border-2 border-gray-700 h-36 my-8 flex items-end">
            <StoryBtn id={parseInt(storyId)} cntD={cntD} />
          </div>
        )}
      </div>
      <ProgressBar id={parseInt(storyId)} />
    </>
  );
};

export default TestStory;
