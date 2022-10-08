import React from "react";
import styled from "styled-components";

const ProgressBar = ({ id }) => {
  return (
    <>
      <div className="px-[0] lg:px-[100px] lg:pr-[140px] flex w-full h-[20px] items-center rounded-full mb-[20px] lg:my-0 static lg:fixed lg:bottom-[30px]">
        <div className="w-full flex items-center rounded-full h-[10px] md:h-[20px] bg-white shadow-inner shadow-[rgba(0,0,0,0.5)]">
          <HighLight
            className="h-[10px] md:h-[20px] shadow-inner shadow-[rgba(0,0,0,0.5)]"
            width={(id / 19) * 100 + "%"}
          ></HighLight>
          <Dot className="w-[20px] h-[20px] md:w-[40px] md:h-[40px]" />
        </div>
        <div className="hidden lg:block text-[25px] ml-[20px] text-[#ffe27e] ">
          {id}/19
        </div>
      </div>
    </>
  );
};

export default ProgressBar;

const HighLight = styled.div`
  background: #ffe27e;
  width: ${(props) => props.width};
  transition: width 1s;
  border-radius: 10px;
`;

const Dot = styled.div`
  background: #fff;
  border: 5px solid #ffe27e;
  box-sizing: border-box;
  border-radius: 20px;
  margin: 0px 0px 0px -10px;
`;
