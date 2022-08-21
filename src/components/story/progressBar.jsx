import React from "react";
import styled from "styled-components";

const ProgressBar = ({ id }) => {
  return (
    <>
      <div className="hidden lg:flex w-full h-[20px]  items-center rounded-full bg-[white] fixed bottom-3">
        <HighLight width={(id / 13) * 100 + "%"}></HighLight>
        <Dot />
      </div>
    </>
  );
};

export default ProgressBar;

const HighLight = styled.div`
  background: skyblue;
  height: 20px;
  width: ${(props) => props.width};
  transition: width 1s;
  border-radius: 10px;
`;

const Dot = styled.div`
  background: #fff;
  border: 5px solid skyblue;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 0px 0px 0px -10px;
`;
