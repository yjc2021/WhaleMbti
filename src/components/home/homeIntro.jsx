import React from "react";
import styled from "styled-components";
const HomeIntro = (props) => {
  return (
    /*TODO: 시간에 따라 text display */
    <DivWrapper className=" z-10 text-white text-[1.2rem] md:text-[1.4rem] lg:text-[1.6rem]">
      <div className="text-center">바닷속에서 우연히 만난</div>
      <div className="text-center">아기 고래가 도움을 청해오는데...</div>
      <br />
      <div className="text-center">나는 어떻게 해야 할까?</div>
    </DivWrapper>
  );
};

export default HomeIntro;

const DivWrapper = styled.div`
  font-family: "Poor Story", cursive;
`;
