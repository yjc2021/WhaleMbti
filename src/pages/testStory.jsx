import React from "react";
import Header from "../components/home/header";
import StoryBtn from "../components/story/storyBtn";
import StoryBlock from "../components/story/storyBlock";
import StoryHeader from "../components/story/storyHeader";
import { storyData, decisionAData, decisionBData } from "../data";
import { useParams } from "react-router-dom";
const LAST_PAGE = 12;

const TestStory = () => {
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
            <StoryBtn id={storyId} decision={decisionA} />
            <StoryBtn id={storyId} decision={decisionB} />
          </div>
        ) : (
          <div className="border-2 border-gray-700 h-36 my-8 flex items-end">
            <StoryBtn id={storyId} />
          </div>
        )}
      </div>
    </>
  );
};

export default TestStory;
