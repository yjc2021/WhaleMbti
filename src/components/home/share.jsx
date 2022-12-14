import React from "react";
import styled from "styled-components";
import FacebookShare from "../buttons/facebookShare";
import KakaoShare from "../buttons/kakaoShare";
import TwitterShare from "../buttons/twitterShare";
import UrlShare from "../buttons/urlShare";

const Share = () => {
  return (
    <ShareWrapper className="flex flex-col items-center lg:pb-0">
      <div className="text-[1rem]">테스트 공유하기</div>
      <BtnContainer>
        <KakaoShare />
        <FacebookShare />
        <TwitterShare />
        <UrlShare />
      </BtnContainer>
    </ShareWrapper>
  );
};

export default Share;

const ShareWrapper = styled.div``;
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
`;
