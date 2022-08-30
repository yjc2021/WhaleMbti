import React from "react";
import styled from "styled-components";

const TwitterShare = (props) => {
  const url = encodeURI(window.location.href);
  const shareTwitter = () => {
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        "나의 고래 MBTI는? " +
        "&url=" +
        url
    );
  };
  return (
    <div className="flex items-center justify-center">
      <ButtonWrapper onClick={shareTwitter}>
        <ImgWrapper src="/icons/twitter.png" alt="kakao-share-icon" />
      </ButtonWrapper>
    </div>
  );
};

export default TwitterShare;

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
const ImgWrapper = styled.img`
  width: 100%;
  height: 100%;
`;
