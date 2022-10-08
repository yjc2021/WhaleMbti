import React from "react";
import { useRecoilState } from "recoil";
import styled, { css, keyframes } from "styled-components";
import { popUpAtom } from "../../atoms";
import { whaleDescription, whaleIndex } from "../../data";
const WhalePopup = () => {
  const [popUp, setPopup] = useRecoilState(popUpAtom);
  const onDelClick = () => {
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
        className="overflow-y-auto transition-all ease-in duration-200 w-[300px] h-[450px] md:w-[700px] md:h-[700px]"
      >
        {popUp.isPopUpOpen && (
          <div className="w-full h-full flex flex-col items-center justify-center relative">
            <ImgWrapper
              src={whaleIndex[popUp.id - 1].whaleImg}
              alt={whaleIndex[popUp.id - 1].whaleName}
            />
            <NameWrapper className="w-full text-center absolute top-[240px]">
              {whaleIndex[popUp.id - 1].whaleName}
            </NameWrapper>
            <WhaleUl className="">
              {whaleDescription[popUp.id - 1].whaleDesLow.map((val) => (
                <li className="mb-[2rem]">{val}</li>
              ))}
            </WhaleUl>
          </div>
        )}
      </PopUpWrapper>
    </DivWrapper>
  );
};

export default WhalePopup;

const WhaleUl = styled.ul`
  color: black;
  width: 100%;
  height: 300px;
  padding: 0 3rem;
  line-height: 1.9rem;
  list-style-type: disc;
  font-family: "Poor Story", cursive;
  font-size: 1.4rem;
`;
const NameWrapper = styled.div`
  color: white;
  font-size: 2.5rem;
  text-align: center;
  text-shadow: 2px 3px 4px rgba(0, 0, 0, 0.3);
`;
const ImgWrapper = styled.img`
  width: auto;
  height: 250px;
`;
export const DivWrapper = styled.div`
  z-index: -1;
  ${(props) => modalSettings(props.visible)}
`;
export const PopUpWrapper = styled.div`
  background-color: #ffe27e;
  border-radius: 8px;
  border: solid white 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  position: relative;
  padding: 0 1rem;
  z-index: 99;
  ${(props) => modalSettings(props.visible)}
`;

export const modalSettings = (visible) => css`
  visibility: ${visible ? "visible" : "hidden"};
  animation: ${visible ? fadeIn : fadeOut} 0.3s ease-out;
  transition: visibility 0.3s ease-out;
  z-index: 15;
`;
export const PopUpBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
  ${(props) => modalSettings(props.visible)}
`;

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const fadeOut = keyframes`
  0% {
    opacity:1;
  }
  100% {
    opacity:0;
  }
`;
