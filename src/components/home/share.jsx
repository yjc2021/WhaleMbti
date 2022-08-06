import React from "react";
import styled from "styled-components";

const Share = ({ color }) => {
  return (
    <ShareWrapper className="lg:pb-0">
      <div>테스트 공유하기</div>
      <BtnContainer>
        <ButtonWrapper color={color}></ButtonWrapper>
        <ButtonWrapper color={color}></ButtonWrapper>
        <ButtonWrapper color={color}></ButtonWrapper>
        <ButtonWrapper color={color}></ButtonWrapper>
        <ButtonWrapper color={color}></ButtonWrapper>
      </BtnContainer>
    </ShareWrapper>
  );
};

export default Share;

const ShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ButtonWrapper = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color || "whitesmoke"};
  border: none;
  margin: 0 0.2rem;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.2);
  }
`;
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;
