import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { historyPopUpAtom } from "../../atoms";
import { whaleIndex } from "../../data";
import { whaleDescription } from "../../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import storyLg from "../../img/story/storyLg.jpg";
import mainSm from "../../img/home/mainSm.jpg";
import {
  DivWrapper,
  PopUpBackground,
  PopUpWrapper,
} from "../whaleEncyclopedia/whalePopup";
import WhaleStats, { SubTitle } from "../result/whaleStats";
import HistoryFooter from "./historyFooter";
import HistoryHeader from "./historyHeader";
import DownloadBtn from "../result/downloadBtn";
const HistoryPopUp = (props) => {
  const [historyPopUp, setHistoryPopUp] = useRecoilState(historyPopUpAtom);
  const onDelClick = () => {
    // recoil state 변경 하여 popup 사라지도록
    setHistoryPopUp((cur) => ({ ...cur, isPopUpOpen: false }));
  };
  const { isPopUpOpen, id } = historyPopUp;
  return (
    <DivWrapper className="fixed flex justify-center w-full h-full">
      <PopUpBackground
        visible={historyPopUp.isPopUpOpen}
        onClick={onDelClick}
      ></PopUpBackground>
      <HistoryPopUpWrapper
        visible={historyPopUp.isPopUpOpen}
        className="overflow-y-auto transition-all ease-in duration-200 absolute -top-[50px] bg-cover w-full md:w-[78%] h-[88%]"
      >
        {historyPopUp.isPopUpOpen && (
          <>
            <HistoryHeader />
            <button
              className="absolute right-[10px] top-[10px]"
              onClick={onDelClick}
            >
              <FontAwesomeIcon icon={solid("x")} className="text-[2.5rem]" />
            </button>
            <div className="w-full h-full flex flex-col items-center mt-[40px] relative">
              <div className="mb-[50px] text-[1.3rem] ">
                <div className="text-center">내가 고래라면</div>
                <div className="text-center">
                  {whaleDescription[id - 1].whaleTitle}
                </div>
                <HistorySub className="text-center">
                  {whaleDescription[id - 1].whaleName}
                </HistorySub>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full md:w-[50%] flex flex-wrap justify-center items-end gap-[8px]">
                  <ImgShadow
                    src={whaleIndex[id - 1].resultImg}
                    alt={whaleIndex[id - 1].whaleName}
                    className="w-[340px] md:w-[75%] h-auto"
                  />
                  <DownloadBtn id={id}>이미지 다운로드</DownloadBtn>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-[1rem]">
                  <DesDiv className="mt-[2rem] lg:mt-0">
                    <DesTitle>
                      {whaleIndex[id - 1].whaleName}가 나온 당신은
                    </DesTitle>
                    <UlWrapper className="w-[340px] h-[340px] md:w-[300px] md:h-[300px]">
                      {whaleDescription[id - 1].whaleDesTop.map((val) => (
                        <DesLi className="">{val}</DesLi>
                      ))}
                    </UlWrapper>
                  </DesDiv>
                  <DesDiv className="">
                    <DesTitle>{whaleIndex[id - 1].whaleName}는</DesTitle>
                    <UlWrapper className="w-[340px] h-[340px] md:w-[300px] md:h-[300px]">
                      {whaleDescription[historyPopUp.id - 1].whaleDesLow.map(
                        (val) => (
                          <DesLi className="">{val}</DesLi>
                        )
                      )}
                    </UlWrapper>
                  </DesDiv>
                </div>
              </div>
              <WhaleStats whale={whaleIndex[id - 1]} />
              <HistoryFooter />
            </div>
          </>
        )}
      </HistoryPopUpWrapper>
    </DivWrapper>
  );
};

export default HistoryPopUp;

export const HistorySub = styled.div`
  font-size: 2.5rem;
  text-shadow: 2px 5px 7px rgba(0, 0, 0, 0.4);
`;
export const DesDiv = styled.div`
  font-family: "Poor Story", cursive;
`;
export const DesLi = styled.li`
  margin-bottom: 0.5rem;
`;
export const DesTitle = styled.div`
  color: #ffe27e;
  text-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;
export const ImgShadow = styled.img`
  box-shadow: 2px 5px 1rem rgba(0, 0, 0, 0.4);
`;

export const HistoryPopUpWrapper = styled(PopUpWrapper)`
  background-image: url(${mainSm});
  background-position: top center;
  @media screen and (min-width: 640px) {
    background-image: url(${storyLg});
    background-position: top center;
  }
  background-repeat: no-repeat;
  padding: 4rem;
`;
export const UlWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: solid white 1px;
  border-radius: 1rem;
  width: 330px;
  height: 330px;
  padding: 0.5rem;
`;
