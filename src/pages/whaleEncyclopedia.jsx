import React from "react";
import axios from "axios";
import useAsync from "../useAsync";
import { useNavigate } from "react-router";
import { whaleIndex } from "../data";
import { useRecoilState } from "recoil";
import { popUpAtom } from "../atoms";
import Header from "../components/home/header";
import WhalePopup from "../components/whaleEncyclopedia/whalePopup";
import { LoadingDivBig } from "./history";
const WhaleEncyclopedia = (props) => {
  const [popUp, setPopUp] = useRecoilState(popUpAtom);
  const navigate = useNavigate();
  const getWhales = async () => {
    const response = await axios.get(
      "http://43.200.94.144:8080/api/v2/whale-lists"
    );
    return response.data;
  };

  const popModal = (id) => {
    setPopUp({ isPopUpOpen: true, id });
  };

  const [state, refetch] = useAsync(getWhales, []);

  const { loading, data, error } = state;

  if (loading) return <LoadingDivBig>로딩중...</LoadingDivBig>;
  if (error) {
    alert("예상하지 못한 에러가 발생했습니다.");
    navigate("/");
  }
  if (data) {
    return (
      data && (
        <div className="">
          <Header />
          <div className="h-full w-full flex flex-col items-center">
            <div className="text-center text-[3rem] text-white">고래 도감</div>
            <WhalePopup />
            <div className="grid grid-cols-4 gap-x-[50px] w-[1100px] h-[800px] mb-[4rem]">
              {data.map((whale) => (
                <div
                  key={whale.whaleId}
                  onClick={() => popModal(whale.whaleId)}
                  className="rounded-xl cursor-pointer ease-in duration-200 hover:scale-125 w-[200px] h-[200px]"
                >
                  <img
                    src={whaleIndex[whale.whaleId - 1].whaleImg}
                    alt={whale.whaleName}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    );
  }
};

export default WhaleEncyclopedia;
