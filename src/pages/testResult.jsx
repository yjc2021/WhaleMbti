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
import { useLocation, useNavigate } from "react-router-dom";
import useAsync from "../useAsync";
import axios from "axios";
import DownloadBtn from "../components/result/downloadBtn";

const postMbti = async (mbtiD) => {
  console.log(mbtiD);
  const response = await axios.post(
    "http://localhost:8080/api/algorithm/result",
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
  //console.log(mbtiD.current);
  console.log(response);
  return response.data;
  // 고래 정보(whaleId,whaleName,whaleShare) mbti cnt post 요청 return으로 가져와서
  // 고래의 궁합 조회
};
const postMbti2 = async (mbtiD) => {
  console.log(mbtiD.current);
  await axios
    .post("http://localhost:8080/api/algorithm/result", {
      icount: mbtiD.current.iCnt,
      ecount: mbtiD.current.eCnt,
      scount: mbtiD.current.sCnt,
      ncount: mbtiD.current.nCnt,
      tcount: mbtiD.current.tCnt,
      fcount: mbtiD.current.fCnt,
      pcount: mbtiD.current.pCnt,
      jcount: mbtiD.current.jCnt,
    })
    .then((res) => console.log(res))
    .catch((e) => console.log(e));
  //console.log(mbtiD.current);
  // 고래 정보(whaleId,whaleName,whaleShare) mbti cnt post 요청 return으로 가져와서
  // 고래의 궁합 조회
};
const TestResult = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const mbtiD = location.state;
  //const [mbtiState, setMbtiState] = useRecoilState(mbtiAtom);
  console.log("testresult");
  console.log(mbtiD);

  const [state, refetch] = useAsync(() => postMbti(mbtiD), []);

  const { loading, data: whale, error } = state;
  console.log(whale);
  if (loading) return <div>로딩중...</div>;
  if (error) {
    alert("예상치 못한 에러가 발생했습니다");
    navigate("/");
  }
  if (whale) {
    console.log(whale);
    const { whaleId, whaleName, whaleShare } = whale[0];
    console.log(whaleId);
    return (
      <div className="w-full h-screen overflow-y-auto">
        <Header />
        <div className="flex lg:hidden items-center justify-center text-md px-6 py-3 border-2 border-gray-500">
          <div className="text-xl text-center font-bold">고래 테스트</div>
        </div>
        <div className="w-full px-4 flex flex-col items-center">
          <WhaleName id={whaleId} name={whaleName} />
          <WhaleImg id={whaleId} />
          <DownloadBtn id={whaleId} />
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
