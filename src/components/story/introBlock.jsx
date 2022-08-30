import React from "react";
import styled from "styled-components";
import { introImg } from "../../data";
import { introData } from "../../data";
const IntroBlock = ({ id, story }) => {
  console.log(id, story);
  return (
    <BlockWrapper className="h-64 flex flex-col justify-between">
      <img
        src={introImg[id].url}
        className="w-[333px] h-[225px] border-2 border-gray-700"
        alt="story"
      />
      <div className="text-center">
        {introData.map((val, idx) => {
          if (idx <= id) {
            return <div className="mb-3">{val}</div>;
          }
        })}
      </div>
    </BlockWrapper>
  );
};

export default IntroBlock;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 11rem;
`;
