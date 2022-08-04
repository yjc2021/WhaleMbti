import React from "react";
import styled from "styled-components";

const Share = (props) => {
  return (
    <ShareWrapper>
      <div>테스트 공유하기</div>
      <BtnContainer>
        <ButtonWrapper></ButtonWrapper>
        <ButtonWrapper></ButtonWrapper>
        <ButtonWrapper></ButtonWrapper>
        <ButtonWrapper></ButtonWrapper>
        <ButtonWrapper></ButtonWrapper>
      </BtnContainer>
    </ShareWrapper>
  );
};

export default Share;

const ShareWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
`;
const ButtonWrapper = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: whitesmoke;
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
