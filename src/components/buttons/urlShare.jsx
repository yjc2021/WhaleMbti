import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const UrlShare = (props) => {
  const clip = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("링크가 복사됐습니다.");
  };
  return (
    <div className="flex items-center justify-center">
      <ButtonWrapper
        className="flex items-center justify-center bg-purple-600"
        onClick={clip}
      >
        <FontAwesomeIcon
          icon={solid("link")}
          className="text-white w-[1.3rem] h-[1.3rem]"
        />
      </ButtonWrapper>
    </div>
  );
};

export default UrlShare;
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
