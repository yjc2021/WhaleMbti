import React from "react";
import { useRecoilState } from "recoil";
import styled, { css, keyframes } from "styled-components";
import { popUpAtom } from "../../atoms";
import { whaleIndex } from "../../data";

const WhalePopup = () => {
  const [popUp, setPopup] = useRecoilState(popUpAtom);
  const onDelClick = () => {
    // recoil state 변경 하여 popup 사라지도록
    setPopup((cur) => ({ ...cur, isPopUpOpen: false }));
  };
  return (
    <DivWrapper className="fixed flex justify-center w-full h-full">
      <PopUpBackground
        visible={popUp.isPopUpOpen}
        onClick={onDelClick}
      ></PopUpBackground>
      <PopUpWrapper
        visible={popUp.isPopUpOpen}
        className="overflow-y-auto transition-all ease-in duration-200 w-[300px] h-[450px] md:w-[500px] md:h-[500px]"
      >
        <DelBtnWrapper>
          <DelBtn onClick={onDelClick}>❌</DelBtn>
        </DelBtnWrapper>
        {popUp.isPopUpOpen && (
          <div className="flex-col items-center ">
            <NameWrapper>{whaleIndex[popUp.id - 1].whaleName}</NameWrapper>
            <ImgWrapper
              src={whaleIndex[popUp.id - 1].whaleImg}
              alt={whaleIndex[popUp.id - 1].whaleName}
            />
          </div>
        )}
      </PopUpWrapper>
    </DivWrapper>
  );
};

export default WhalePopup;

const NameWrapper = styled.div`
  font-size: 2rem;
  text-align: center;
`;
const ImgWrapper = styled.img`
  border: solid rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  width: 500px;
  height: auto;
  margin-top: 2rem;
`;
const DivWrapper = styled.div`
  z-index: -1;
  ${(props) => modalSettings(props.visible)}
`;
const PopUpWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  position: relative;
  padding: 1rem;
  padding-bottom: 5rem;
  z-index: 99;
  ${(props) => modalSettings(props.visible)}
`;

const modalSettings = (visible) => css`
  visibility: ${visible ? "visible" : "hidden"};
  animation: ${visible ? fadeIn : fadeOut} 0.3s ease-out;
  transition: visibility 0.3s ease-out;
  z-index: 15;
`;
const PopUpBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  ${(props) => modalSettings(props.visible)}
`;

const DelBtnWrapper = styled.div`
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
`;

const DelBtn = styled.span`
  display: inline-block;
  cursor: pointer;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const fadeOut = keyframes`
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`;
