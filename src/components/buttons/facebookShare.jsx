import React from "react";
import styled from "styled-components";

const FacebookShare = (props) => {
  // 현재 localhost 도메인이라 facebook 공유 오류 발생
  const url = encodeURI(window.location.href);
  const shareFacebook = () => {
    window.open("http://www.facebook.com/sharer/sharer.php?u=" + url);
  };
  return (
    <div className="flex items-center justify-center">
      <ButtonWrapper onClick={shareFacebook}>
        <ImgWrapper src="/icons/facebook.png" alt="facebook-share-icon" />
      </ButtonWrapper>
    </div>
  );
};

export default FacebookShare;
const ButtonWrapper = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  margin: 0 0.2rem;
  cursor: pointer;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.2);
  }
`;

const ImgWrapper = styled.img`
  width: 2rem;
  height: 2rem;
`;
