import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import HistoryPill from "../components/history/historyPill";
import Header from "../components/home/header";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { historyPopUpAtom, loginAtom } from "../atoms";
import HistoryPopUp from "../components/history/historyPopUp";
import axios from "axios";
import useAsync from "../useAsync";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const History = (props) => {
  const navigate = useNavigate();
  const [historyPopUp, setHistoryPopUp] = useRecoilState(historyPopUpAtom);
  const isLogin = useRecoilValue(loginAtom);
  const getHistory = async () => {
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
        auth = res.data.accessToken;
      })
      .catch((error) => console.log(error));

    const response = await axios.post(
      "http://43.200.94.144:8080/api/history/result",
      {},
      {
        headers: {
          "X-AUTH-TOKEN": auth,
        },
      }
    );
    return response.data;
  };
  const popHistoryEntry = (id) => {
    setHistoryPopUp({ isPopUpOpen: true, id });
  };
  useEffect(() => {
    if (!isLogin) {
      alert("로그인이 필요합니다. 로그인 창으로 이동합니다.");
      navigate("/login");
    }
  }, []);
  const [state, refetch] = useAsync(getHistory, []);

  const { loading, data: history, error } = state;

  if (loading) return <LoadingDivBig>로딩중...</LoadingDivBig>;
  if (error) {
    alert("예상치 못한 에러가 발생했습니다");
    navigate("/");
  }
  if (history) {
    return (
      <div className="w-full h-full">
        <Header />
        <div className="h-full w-full flex flex-col items-center mt-[50px]">
          <div className="text-center text-[3rem] text-white">테스트 기록</div>
          <HistoryPopUp />
          <div className="flex flex-wrap items-center justify-center gap-x-[90px] gap-y-[50px] mt-[120px] w-full px-[250px]">
            {history.map((val) => (
              <FontDiv
                className="flex flex-col gap-[8px] hover:scale-[1.1] transition duration-300 ease-out cursor-pointer"
                onClick={() => popHistoryEntry(val.whaleCountDto.whaleId)}
              >
                <HistoryPill
                  date={val.resultTestTime}
                  info={val.whaleCountDto}
                />
                <div className="w-full text-right px-[1rem] ">
                  결과지 보기 <FontAwesomeIcon icon={solid("chevron-right")} />
                </div>
              </FontDiv>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default History;

const FontDiv = styled.div`
  font-family: "Poor Story", cursive;
`;
export const LoadingDivBig = styled.div`
  font-size: 5rem;
  text-align: center;
`;
export const LoadingDivSmall = styled.div`
  font-size: 2rem;
  text-align: center;
`;
