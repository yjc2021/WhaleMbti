import axios from "axios";
import React from "react";
import { whaleIndex } from "../../data";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../atoms";
import styled from "styled-components";
const DownloadBtn = ({ id }) => {
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const downloadFile = () => {
    if (!isLogin) {
      alert("로그인되어 있지 않습니다. 먼저 로그인을 진행하세요");
      return;
    }
    axios({
      url: whaleIndex[id - 1].resultImg,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "고래MBTI.jpg");
      document.body.appendChild(link);
      link.click();
    });
  };
  return <ButtonWrapper onClick={downloadFile}>이미지 다운로드</ButtonWrapper>;
};

export default DownloadBtn;

const ButtonWrapper = styled.button`
  background-color: #ffe27e;
  color: #002fac;
  height: 2.5rem;
  border-radius: 3rem;
  padding: 5px;
  width: 9rem;
  font-size: 1rem;
`;
