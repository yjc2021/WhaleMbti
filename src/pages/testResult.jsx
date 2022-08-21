import React, { useEffect } from "react";
import Footer from "../components/home/footer";
import WhaleName from "../components/result/whaleName";
import WhaleImg from "../components/result/whaleImg";
import WhaleDescription from "../components/result/whaleDescription";
import SaveWhales from "../components/result/saveWhales";
import WhaleStats from "../components/result/whaleStats";
import RetryBtn from "../components/result/retryBtn";
import Header from "../components/home/header";
import Share from "../components/home/share";
import ResultFooter from "../components/result/resultFooter";
import ResultShare from "../components/result/resultShare";
import { useLocation } from "react-router-dom";
import useAsync from "../useAsync";
import axios from "axios";

const postMbti = async (mbtiD) => {
  console.log(mbtiD);
  const response = await axios.post(
    "/api/algorithm/result",
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
    /* 
    .then(res => {
      const whaleD = res.data;
      axios.post("http://localhost:8080/api/create/result", {
        createMemberDto: {
          id: 17,
          name: "윤광오",
          email: "swager253@naver.com",
          address: {
            city: "인천시",
            street: "문화로",
            zipcode: "계원1동",
          },
          account: "qkfks1234",
          pwd: "1234",
          memberStatus: "USER",
          createDateTime: "2022-08-07 22:04",
          updateDateTime: "2022-08-07 22:04",
        },
        createWhaleCountDto: {
          whaleId: whaleD.whaleId,
          whaleName: whaleD.whaleName,
          whaleShare: whaleD.whaleShare,
        },
      });
    })
    */
  );
  //console.log(mbtiD.current);
  return response.data;
  // 고래 정보(whaleId,whaleName,whaleShare) mbti cnt post 요청 return으로 가져와서
  // 고래의 궁합 조회
};
const resetMbtiD = (mbtiD) => {
  mbtiD.current = {
    eCnt: 0,
    iCnt: 0,
    nCnt: 0,
    sCnt: 0,
    tCnt: 0,
    fCnt: 0,
    pCnt: 0,
    jCnt: 0,
  };
};
const TestResult = (props) => {
  const location = useLocation();
  const mbtiD = location.state;

  const [state, refetch] = useAsync(() => postMbti(mbtiD), []);

  const { loading, data: whale, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) console.log(error);

  if (whale) {
    const { whaleId, whaleName, whaleShare } = whale[0];
    //console.log(whaleId);
    return (
      <div className="w-full h-screen overflow-y-auto">
        <Header />
        <div className="flex lg:hidden items-center justify-center text-md px-6 py-3 border-2 border-gray-500">
          <div className="text-xl text-center font-bold">고래 테스트</div>
        </div>
        <div className="w-full px-4 flex flex-col items-center">
          <WhaleName id={whaleId} name={whaleName} />
          <WhaleImg id={whaleId} />
          <WhaleDescription id={whaleId} />
          <SaveWhales />
          <ResultShare />
          <WhaleStats whale={whale} />
          <RetryBtn />
        </div>
        <ResultFooter />
      </div>
    );
  }
};

export default TestResult;
