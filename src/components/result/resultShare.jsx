import React from "react";
import styled from "styled-components";

const ResultShare = ({ color }) => {
  return (
    <div className="flex flex-col lg:hidden items-center lg:pb-0 block lg:hidden">
      <div>테스트 공유하기</div>
      <BtnContainer>
        <ButtonWrapper color={color}></ButtonWrapper>
        <ButtonWrapper color={color}></ButtonWrapper>
        <ButtonWrapper color={color}></ButtonWrapper>
        <ButtonWrapper color={color}></ButtonWrapper>
        <ButtonWrapper color={color}></ButtonWrapper>
      </BtnContainer>
    </div>
  );
};

export default ResultShare;

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
