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

const TestResult = (props) => {
  useEffect(() => {
    // TODO: Axios로 서버에서 고래 종류 Get
  }, []);
  return (
    <div className="w-full h-screen overflow-y-auto">
      <Header />
      <div className="flex items-center justify-center text-md px-6 py-3 border-2 border-gray-500">
        <div className="text-xl text-center font-bold">고래 테스트</div>
      </div>
      <div className="w-full px-4">
        <WhaleName />
        <WhaleImg />
        <WhaleDescription />
        <SaveWhales />
        <Share />
        <WhaleStats />
        <RetryBtn />
      </div>
      <Footer />
    </div>
  );
};

export default TestResult;
