import React from "react";
import styled from "styled-components";
import { whaleIndex } from "../../data";

const HistoryPill = ({ date, info }) => {
  const { whaleId, whaleName } = info;
  date.splice(3);
  const useDate = date.join(".");
  return (
    <PillWrapper className="w-[360px] h-[90px] rounded-[20px] flex items-center overflow-hidden">
      <ImageDiv className="">
        <img src={whaleIndex[whaleId - 1].whaleImg} alt={whaleName} />
      </ImageDiv>
      <TextDiv className="flex flex-col text-[#002FAC] text-[1rem] px-[7px]">
        <div>테스트 날짜 : {useDate}</div>
        <div>테스트 결과 : {whaleName}</div>
      </TextDiv>
    </PillWrapper>
  );
};

export default HistoryPill;
const TextDiv = styled.div``;
const PillWrapper = styled.div`
  border: solid white 6px;
  background-color: white;
`;
const ImageDiv = styled.div`
  width: 50%;
  background-color: #ffe27e;
  padding: 5px;
`;
