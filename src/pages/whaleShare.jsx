import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import HistoryFooter from "../components/history/historyFooter";
import HistoryHeader from "../components/history/historyHeader";
import {
  DesDiv,
  DesLi,
  DesTitle,
  HistorySub,
  ImgShadow,
  UlWrapper,
} from "../components/history/historyPopUp";
import WhaleStats from "../components/result/whaleStats";
import { DivWrapper } from "../components/whaleEncyclopedia/whalePopup";
import { whaleDescription, whaleIndex } from "../data";
import { LoginButton } from "./login";

const WhaleShare = (props) => {
  const { whaleId } = useParams();
  const navigate = useNavigate();
  return (
    <ShareBackground>
      <HistoryHeader />
      <div className="w-full h-full flex flex-col items-center mt-[40px] relative px-[1rem]">
        <div className="mb-[50px] text-[1.3rem] ">
          <div className="text-center">내가 고래라면</div>
          <div className="text-center">
            {whaleDescription[whaleId - 1].whaleTitle}
          </div>
          <HistorySub className="text-center">
            {whaleDescription[whaleId - 1].whaleName}
          </HistorySub>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full md:w-[50%] flex flex-wrap justify-center">
            <ImgShadow
              src={whaleIndex[whaleId - 1].resultImg}
              alt={whaleIndex[whaleId - 1].whaleName}
              className="w-[340px] md:w-[75%] h-auto"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-[1rem]">
            <DesDiv className="mt-[2rem] lg:mt-0">
              <DesTitle>
                {whaleIndex[whaleId - 1].whaleName}가 나온 당신은
              </DesTitle>
              <UlWrapper className="w-[340px] h-[340px] md:w-[300px] md:h-[300px]">
                {whaleDescription[whaleId - 1].whaleDesTop.map((val) => (
                  <DesLi className="">{val}</DesLi>
                ))}
              </UlWrapper>
            </DesDiv>
            <DesDiv className="">
              <DesTitle>{whaleIndex[whaleId - 1].whaleName}는</DesTitle>
              <UlWrapper className="w-[340px] h-[340px] md:w-[300px] md:h-[300px]">
                {whaleDescription[whaleId - 1].whaleDesLow.map((val) => (
                  <DesLi className="">{val}</DesLi>
                ))}
              </UlWrapper>
            </DesDiv>
          </div>
        </div>
        <LoginButton className="mt-[50px]" onClick={() => navigate("/")}>
          홈페이지 방문하기
        </LoginButton>
        <WhaleStats whale={whaleIndex[whaleId - 1]} />
        <HistoryFooter />
      </div>
    </ShareBackground>
  );
};

export default WhaleShare;

const ShareBackground = styled.div``;
