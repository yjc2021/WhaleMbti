import React from "react";
import { useEffect } from "react";
import styled from "styled-components";

const KakaoShare = (props) => {
  useEffect(() => {
    createKakaoButton();
  }, []);

  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "타이틀",
          description: "#리액트 #카카오 #공유버튼",
          imageUrl: "IMAGE_URL", // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },

        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: "앱으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  return (
    <div className="kakao-share-button flex items-center justify-center">
      {/* Kakao share button */}
      <ButtonWrapper id="kakao-link-btn">
        <img src="/icons/kakao.png" alt="kakao-share-icon" />
      </ButtonWrapper>
    </div>
  );
};

export default KakaoShare;

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
