import React from "react";
import axios from "axios";
import useAsync from "../useAsync";
import { useNavigate } from "react-router";
import { whaleIndex } from "../data";
import { useRecoilState } from "recoil";
import { popUpAtom } from "../atoms";
import Header from "../components/home/header";
import WhalePopup from "../components/whaleEncyclopedia/whalePopup";
const WhaleEncyclopedia = (props) => {
  const [popUp, setPopUp] = useRecoilState(popUpAtom);
  const navigate = useNavigate();
  const getWhales = async () => {
    const response = await axios.get(
      "http://localhost:8080/api/v2/whale-lists"
    );
    return response.data;
  };

  const popModal = (id) => {
    // TODO: 각 고래 MODAL POPUP
    setPopUp({ isPopUpOpen: true, id });
  };
  const [state, refetch] = useAsync(getWhales, []);
  const { loading, data, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) {
    console.log(error);
    alert("예상하지 못한 에러가 발생했습니다.");
    navigate("/whales");
  }
  return (
    data && (
      <>
        <Header />
        <div className="bg-blue-950 h-full">
          <div className="text-center text-xl py-5 text-white font-semibold">
            고래 도감
          </div>
          {<WhalePopup />}
          <div className="grid grid-cols-4 gap-4 p-5">
            {data.map((whale) => (
              <div
                key={whale.whaleId}
                onClick={() => popModal(whale.whaleId)}
                className="border-2 border-white rounded-xl cursor-pointer ease-in duration-200 hover:scale-125"
              >
                <img
                  src={whaleIndex[whale.whaleId - 1].whaleImg}
                  alt={whale.whaleName}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    )
  );
};

export default WhaleEncyclopedia;
