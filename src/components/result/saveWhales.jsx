import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import saveImg from "../../img/story/15.jpg";
import { StatImg, StatTitle, SubTitle } from "./whaleStats";
const SaveWhales = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row mt-[60px] md:mt-[150px]">
      <StatImg
        src={saveImg}
        alt="saveWhales"
        className="w-full md:w-[50%] h-auto"
      />
      <div className="w-full md:w-[50%] h-72 items-center justify-evenly flex flex-col h-[100%] mt-[1rem] md:mt-0">
        <div className="flex flex-col gap-[0.5rem]">
          <SaveText className="text-[1rem] md:text-[1.2rem] w-full text-center">
            수십년 동안 이뤄진 상업적인 고래잡이와
          </SaveText>
          <SaveText className="text-[1rem] md:text-[1.2rem] w-full text-center">
            파괴적인 어업으로 고래가 안전하게 살아갈 수
          </SaveText>
          <SaveText className="text-[1rem] md:text-[1.2rem] w-full text-center">
            있는 해양 생태계가 무너지고 있습니다
          </SaveText>
        </div>

        <StatTitle className="my-5 w-full text-center font-bold">
          더 많은 고래 가족을 구하러 가요!
        </StatTitle>
        <a
          href="https://cloud.greensk.greenpeace.org/petitions-ocean-sanctuaries2?_ga=2.163973751.934786916.1660375344-1322382692.1658895074"
          rel=" noopener noreferrer"
          target="_blank"
        >
          <button className="text-[1.5rem] bg-[#ffe27e] text-[#002fac] rounded-full w-[200px] h-[70px] px-[2.3rem] ">
            <ButtonText className="text-center ">
              고래를 위한 서명하러 가기
            </ButtonText>
          </button>
        </a>
      </div>
    </div>
  );
};

export default SaveWhales;

const SaveText = styled.div``;

const ButtonText = styled.div`
  line-height: 1.5rem;
`;
