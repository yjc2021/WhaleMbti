import axios from "axios";
import React from "react";
import { whaleIndex } from "../../data";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../atoms";
const DownloadBtn = ({ id }) => {
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);
  const downloadFile = () => {
    if (!isLogin) {
      alert("로그인되어 있지 않습니다. 먼저 로그인을 진행하세요");
      return;
    }
    axios({
      url: whaleIndex[id - 1].whaleImg,
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
  return (
    <button
      className="rounded-md bg-blue-500 p-[1rem] w-[6rem] h-[5rem] text-white"
      onClick={downloadFile}
    >
      이미지 다운로드
    </button>
  );
};

export default DownloadBtn;
