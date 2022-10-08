import React from "react";
import Footer from "../components/home/footer";

import SaveWhales from "../components/result/saveWhales";
import WhaleStats from "../components/result/whaleStats";
import RetryBtn from "../components/result/retryBtn";
import Header from "../components/home/header";

import { useLocation, useNavigate } from "react-router-dom";
import useAsync from "../useAsync";
import axios from "axios";
import DownloadBtn from "../components/result/downloadBtn";
import { useRecoilState } from "recoil";
import { loginAtom } from "../atoms";
import {
  DesDiv,
  DesLi,
  DesTitle,
  HistorySub,
  ImgShadow,
} from "../components/history/historyPopUp";
import { whaleDescription, whaleIndex } from "../data";
import styled from "styled-components";
import { Background } from "./testStory";
import { LoadingDivBig } from "./history";
import Share from "../components/home/share";
const postMbti = async (mbtiD) => {
  const response = await axios.post(
    "http://43.200.94.144:8080/api/algorithm/result",
    {
      icount: mbtiD.current.iCnt,
      ecount: mbtiD.current.eCnt,
      scount: mbtiD.current.sCnt,
      ncount: mbtiD.current.nCnt,
      tcount: mbtiD.current.tCnt,
      fcount: mbtiD.current.fCnt,
      pcount: mbtiD.current.pCnt,
      jcount: mbtiD.current.jCnt,
    }
  );
  console.log(response);
  return response.data;
};

const TestResult = (props) => {
  const [isLogin, setLogin] = useRecoilState(loginAtom);

  const navigate = useNavigate();
  const location = useLocation();
  const mbtiD = location.state;

  const saveUserResult = async (whaleId, whaleName, whaleShare) => {
    let auth = localStorage.getItem("auth-token");
    const account = localStorage.getItem("account");
    await axios
      .get("http://43.200.94.144:8080/api/access/expired", {
        params: {
          account,
        },
        headers: {
          "access-Token": auth,
        },
      })
      .then((res) => {
        localStorage.setItem("auth-token", res.data.accessToken);
        auth = localStorage.getItem("auth-token");
        axios.post(
          "http://43.200.94.144:8080/api/create/user/result",
          {
            whaleId,
            whaleName,
            whaleShare,
          },
          {
            headers: {
              "X-AUTH-TOKEN": auth,
            },
          }
        );
      })
      .catch((e) => console.log(e));
  };
  const saveNonUserResult = async (whaleId, whaleName, whaleShare) => {
    await axios
      .post("http://43.200.94.144:8080/api/create/non-user/result", {
        whaleId,
        whaleName,
        whaleShare,
      })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  const [state, refetch] = useAsync(() => postMbti(mbtiD), []);

  const { loading, data: whale, error } = state;

  if (loading) return <LoadingDivBig>로딩중...</LoadingDivBig>;
  if (error) {
    alert("예상치 못한 에러가 발생했습니다");
    navigate("/");
  }
  if (whale) {
    const { whaleId, whaleName, whaleShare } = whale[0];
    isLogin
      ? saveUserResult(whaleId, whaleName, whaleShare)
      : saveNonUserResult(whaleId, whaleName, whaleShare);
    return (
      <Background className="w-full h-full overflow-y-auto overflow-x-hidden bg-cover">
        <Header />
        <div className="w-full h-full flex flex-col items-center relative py-[50px] px-[1rem] md:px-[15%]">
          <div className="mb-[50px] text-[1.3rem]">
            <div className="text-center">내가 고래라면</div>
            <div className="text-center">
              {whaleDescription[whaleId - 1].whaleTitle}
            </div>
            <HistorySub className="text-center">
              {whaleDescription[whaleId - 1].whaleName}
            </HistorySub>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full md:w-[50%] flex flex-wrap justify-center items-end gap-[8px]">
              <ImgShadow
                src={whaleIndex[whaleId - 1].resultImg}
                alt={whaleIndex[whaleId - 1].whaleName}
                className="w-[340px] md:w-[75%] h-auto"
              />
              <DownloadBtn id={whaleId}>이미지 다운로드</DownloadBtn>
            </div>
            <div className="w-full md:w-[50%] flex flex-col lg:flex-row items-center gap-[1rem]">
              <DesDiv className="mt-[2rem] lg:mt-0">
                <DesTitle>
                  {whaleIndex[whaleId - 1].whaleName}가 나온 당신은
                </DesTitle>
                <ResultUl className="w-[340px] h-[340px] md:w-[300px] md:h-[300px]">
                  {whaleDescription[whaleId - 1].whaleDesTop.map((val) => (
                    <DesLi className="">{val}</DesLi>
                  ))}
                </ResultUl>
              </DesDiv>
              <DesDiv className="">
                <DesTitle>{whaleIndex[whaleId - 1].whaleName}는</DesTitle>
                <ResultUl className="w-[340px] h-[340px] md:w-[300px] md:h-[300px]">
                  {whaleDescription[whaleId - 1].whaleDesLow.map((val) => (
                    <DesLi className="">{val}</DesLi>
                  ))}
                </ResultUl>
              </DesDiv>
            </div>
          </div>
          <SaveWhales />
          <div className="mt-[50px] block md:hidden">
            <Share />
          </div>
          <WhaleStats whale={whaleIndex[whaleId - 1]} />
          <RetryBtn />
          <div className="hidden md:block">
            <Share />
          </div>
          <Footer />
        </div>
      </Background>
    );
  }
};

export default TestResult;

const ResultUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: solid white 1px;
  border-radius: 1rem;
  padding: 0.5rem;
`;
