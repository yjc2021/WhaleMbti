import React from "react";
import styled from "styled-components";
import { introImg } from "../../data";
import { introData } from "../../data";
const IntroBlock = ({ id, story }) => {
  return (
    <BlockWrapper className="h-[55%] flex flex-col justify-between items-center">
      <img
        src={introImg[id].url}
        className="w-[333px] h-[225px] md:h-full md:w-auto shadow-xl shadow-[rgba(1,1,1,0.2)]"
        alt="story"
      />
      <div className="text-center text-white w-[3300px]">
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
  gap: 2rem;
  font-family: "Poor Story", cursive;
`;
