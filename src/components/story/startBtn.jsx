import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StartBtn = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center text-black ">
      <ButtonWrapper
        onClick={() => navigate("/test/story/1")}
        className="w-1/3 h-16 bg-gray-200 rounded-full"
      >
        시작하기
      </ButtonWrapper>
    </div>
  );
};

export default StartBtn;

const ButtonWrapper = styled.button`
  width: 100%;
`;
