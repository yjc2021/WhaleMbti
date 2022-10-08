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
          title: "고래 MBTI 테스트",
          description: "#나는 어떤 고래일까?",
          imageUrl: "https://ifh.cc/g/sS6bx5.png", // i.e. process.env.FETCH_URL + '/logo.png'
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
      <ButtonWrapper id="kakao-link-btn" className="hidden md:block">
        <img src="/icons/kakao.png" alt="kakao-share-icon" />
      </ButtonWrapper>
      <AWrapper
        className="block md:hidden"
        id="kakao-link-btn"
        href="kakaolink://send?appkey=a4fe3ac3c69d0f1e136958827be0f2bd&appver=1.0&linkver=4.0&extras=%7B%22KA%22%3A%22sdk%2F1.43.0%20os%2Fjavascript%20sdk_type%2Fjavascript%20lang%2Fko-KR%20device%2FWin32%20origin%2Fhttp%253A%252F%252Flocalhost%253A3000%22%7D&template_json=%7B%22P%22%3A%7B%22TP%22%3A%22Feed%22%2C%22ME%22%3A%22%24%7BME%7D%22%2C%22SID%22%3A%22capri_791010%22%2C%22DID%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22SNM%22%3A%22whale-mbti%22%2C%22SIC%22%3A%22https%3A%2F%2Fk.kakaocdn.net%2F14%2Fdn%2FbtqvX1CL6kz%2FsSBw1mbWkyZTkk1Mpt9nw1%2Fo.jpg%22%2C%22L%22%3A%7B%22LPC%22%3A%22http%3A%2F%2Flocalhost%3A3000%22%2C%22LMO%22%3A%22http%3A%2F%2Flocalhost%3A3000%22%2C%22LCP%22%3A%22kakao8e8fc50de6096d056fb95faabee75efa%3A%2F%2Fkakaolink%22%2C%22LCM%22%3A%22kakao8e8fc50de6096d056fb95faabee75efa%3A%2F%2Fkakaolink%22%7D%2C%22SL%22%3A%7B%22LPC%22%3A%22http%3A%2F%2Flocalhost%3A3000%22%2C%22LMO%22%3A%22http%3A%2F%2Flocalhost%3A3000%22%2C%22LCP%22%3A%22kakao8e8fc50de6096d056fb95faabee75efa%3A%2F%2Fkakaolink%22%2C%22LCM%22%3A%22kakao8e8fc50de6096d056fb95faabee75efa%3A%2F%2Fkakaolink%22%7D%2C%22VA%22%3A%226.0.0%22%2C%22VI%22%3A%225.9.8%22%2C%22VW%22%3A%222.5.1%22%2C%22VM%22%3A%222.2.0%22%2C%22FW%22%3Atrue%2C%22RF%22%3A%22out-client%22%7D%2C%22C%22%3A%7B%22THC%22%3A1%2C%22THL%22%3A%5B%7B%22TH%22%3A%7B%22W%22%3A400%2C%22H%22%3A400%7D%2C%22L%22%3A%7B%22LPC%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22LMO%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%7D%7D%5D%2C%22PR%22%3A%7B%22L%22%3A%7B%22LPC%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22LMO%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%7D%7D%2C%22HD%22%3A%7B%22L%22%3A%7B%22LPC%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22LMO%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%7D%7D%2C%22TI%22%3A%7B%22TD%22%3A%7B%22T%22%3A%22%ED%83%80%EC%9D%B4%ED%8B%80%22%2C%22D%22%3A%22%23%EB%A6%AC%EC%95%A1%ED%8A%B8%20%23%EC%B9%B4%EC%B9%B4%EC%98%A4%20%23%EA%B3%B5%EC%9C%A0%EB%B2%84%ED%8A%BC%22%7D%2C%22L%22%3A%7B%22LPC%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22LMO%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%7D%7D%2C%22BUL%22%3A%5B%7B%22BU%22%3A%7B%22T%22%3A%22%EC%9B%B9%EC%9C%BC%EB%A1%9C%20%EB%B3%B4%EA%B8%B0%22%7D%2C%22L%22%3A%7B%22LPC%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22LMO%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%7D%7D%2C%7B%22BU%22%3A%7B%22T%22%3A%22%EC%95%B1%EC%9C%BC%EB%A1%9C%20%EB%B3%B4%EA%B8%B0%22%7D%2C%22L%22%3A%7B%22LPC%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22LMO%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%7D%7D%5D%2C%22TAM%22%3A%5B%7B%22TP%22%3A%22ITL%22%7D%5D%7D%7D&template_args=%7B%22%24%7BIMAGE_WIDTH%7D%22%3A%22400%22%2C%22%24%7BSECOND_BUTTON_WEB_URL%7D%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22%24%7BITEM3_OP%7D%22%3A%22%22%2C%22%24%7BPROFILE_TEXT2%7D%22%3A%22%22%2C%22%24%7BFIRST_BUTTON_TITLE%7D%22%3A%22%EC%9B%B9%EC%9C%BC%EB%A1%9C%20%EB%B3%B4%EA%B8%B0%22%2C%22%24%7BDESCRIPTION%7D%22%3A%22%23%EB%A6%AC%EC%95%A1%ED%8A%B8%20%23%EC%B9%B4%EC%B9%B4%EC%98%A4%20%23%EA%B3%B5%EC%9C%A0%EB%B2%84%ED%8A%BC%22%2C%22%24%7BITEM5%7D%22%3A%22%22%2C%22%24%7BANDROID_EXECUTION_URL%7D%22%3A%22%22%2C%22%24%7BITEM1%7D%22%3A%22%22%2C%22%24%7BITEM3%7D%22%3A%22%22%2C%22%24%7BFIRST_BUTTON_IOS_EXECUTION_URL%7D%22%3A%22%22%2C%22%24%7BITEM4_OP%7D%22%3A%22%22%2C%22%24%7BSUM%7D%22%3A%22%22%2C%22%24%7BITL_AL%7D%22%3A%22%22%2C%22%24%7BFIRST_BUTTON_MOBILE_WEB_URL%7D%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22%24%7BSUBSCRIBER_COUNT%7D%22%3A%22%22%2C%22%24%7BTITLE%7D%22%3A%22%ED%83%80%EC%9D%B4%ED%8B%80%22%2C%22%24%7BSECOND_BUTTON_TITLE%7D%22%3A%22%EC%95%B1%EC%9C%BC%EB%A1%9C%20%EB%B3%B4%EA%B8%B0%22%2C%22%24%7BSUM_OP%7D%22%3A%22%22%2C%22%24%7BWEB_URL%7D%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22%24%7BVIEW_COUNT%7D%22%3A%22%22%2C%22%24%7BFIRST_BUTTON_WEB_URL%7D%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22%24%7BSECOND_BUTTON_ANDROID_EXECUTION_URL%7D%22%3A%22%22%2C%22%24%7BSECOND_BUTTON_MOBILE_WEB_URL%7D%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22%24%7BIOS_EXECUTION_URL%7D%22%3A%22%22%2C%22%24%7BIMAGE_URL%7D%22%3A%22%22%2C%22%24%7BIMAGE_COUNT%7D%22%3A%221%22%2C%22%24%7BPROFILE_TEXT1%7D%22%3A%22%22%2C%22%24%7BITEM4%7D%22%3A%22%22%2C%22%24%7BTITLE_IMAGE_CATEGORY%7D%22%3A%22%22%2C%22%24%7BSHARED_COUNT%7D%22%3A%22%22%2C%22%24%7BPROFILE_IMAGE_URL%7D%22%3A%22%22%2C%22%24%7BITEM5_OP%7D%22%3A%22%22%2C%22%24%7BTITLE_IMAGE_TEXT%7D%22%3A%22%22%2C%22%24%7BITEM1_OP%7D%22%3A%22%22%2C%22%24%7BITEM2%7D%22%3A%22%22%2C%22%24%7BSECOND_BUTTON_IOS_EXECUTION_URL%7D%22%3A%22%22%2C%22%24%7BCOMMENT_COUNT%7D%22%3A%22%22%2C%22%24%7BIMAGE_HEIGHT%7D%22%3A%22400%22%2C%22%24%7BTITLE_IMAGE_URL%7D%22%3A%22%22%2C%22%24%7BMOBILE_WEB_URL%7D%22%3A%22http%3A%2F%2Flocalhost%3A3000%2F%22%2C%22%24%7BFIRST_BUTTON_ANDROID_EXECUTION_URL%7D%22%3A%22%22%2C%22%24%7BITEM2_OP%7D%22%3A%22%22%2C%22%24%7BLIKE_COUNT%7D%22%3A%22%22%7D&template_id=3140#Intent;launchFlags=0x14008000;end;"
      >
        <img src="/icons/kakao.png" alt="kakao-share-icon" />
      </AWrapper>
    </div>
  );
};

export default KakaoShare;

const AWrapper = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color || "whitesmoke"};
  border: none;
  margin: 0 0.2rem;
  cursor: pointer;
  transition: all 0.2s linear;
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
