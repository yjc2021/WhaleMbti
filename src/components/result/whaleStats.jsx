import React from "react";
import axios from "axios";
import useAsync from "../../useAsync";
import { whaleIndex } from "../../data";
import styled from "styled-components";
import { LoadingDivSmall } from "../../pages/history";
const getMaxWhale = async () => {
  const response = await axios.get(
    "http://43.200.94.144:8080/api/list/max-whale"
  );
  return response.data;
};
const getMinWhale = async () => {
  const response = await axios.get(
    "http://43.200.94.144:8080/api/list/min-whale"
  );
  return response.data;
};
const getWhaleStats = async () => {
  const maxWhaleD = getMaxWhale();
  const minWhaleD = getMinWhale();
  return { maxWhaleD, minWhaleD };
};

const getCompatibility = async (whaleId, whaleName, whaleShare) => {
  //console.log(`compat: ${whaleId}, ${whaleName}, ${whaleShare}`);
  const response = await axios.post(
    "http://43.200.94.144:8080/api/whale-compatibility",
    {
      whaleId,
      whaleName,
      whaleShare,
    }
  );
  //console.log(response.data);
  return response.data;
};
const WhaleStats = ({ whale }) => {
  //console.log(whale);
  const { whaleId, whaleName, whaleShare } = whale; /*whale[0]*/
  console.log(whaleId, whaleName);
  const [maxState, refetch] = useAsync(getMaxWhale, []);
  const { loading: maxLoading, data: maxData, error: maxError } = maxState;
  const [minState, refetch2] = useAsync(getMinWhale, []);
  const { loading: minLoading, data: minData, error: minError } = minState;

  const [compatState, refetch3] = useAsync(
    () => getCompatibility(whaleId, whaleName, whaleShare),
    []
  );
  //console.log(compatData);

  const {
    loading: compatLoading,
    data: compatData,
    error: compatError,
  } = compatState;
  if (minData) console.log(minData);
  if (maxData) console.log(maxData);
  if (maxError) console.log(maxError);
  if (minError) console.log(minError);
  if (compatError) console.log(compatError);

  /*const compatData = [
    {
      whaleName: "범고래",
      whaleId: 16,
    },
    {
      whaleName: "귀신고래",
      whaleId: 4,
    },
  ];
  const maxData = [
    {
      whaleName: "범고래",
      whaleId: 16,
    },
  ];
  const minData = [
    {
      whaleName: "귀신고래",
      whaleId: 4,
    },
  ];
  */
  if (compatData) {
    console.log(compatData);
    const bestCompat = compatData[0];
    const worstCompat = compatData[1];
    return (
      <div className="mt-[50px] md:mt-[100px] w-full flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[40%] mb-[30px] md:mb-[70px] flex flex-col p-2">
          <StatTitle className="w-full text-center mb-[30px] md:mb-[60px]">
            유형별 궁합
          </StatTitle>
          {compatLoading ? (
            <LoadingDivSmall>로딩중...</LoadingDivSmall>
          ) : (
            <div className="flex gap-[1rem] justify-between w-full h-full">
              <div className="w-full h-full  flex-col items-center text-center">
                <SubTitle className="mb-[1rem]">GOOD</SubTitle>
                <StatImg
                  src={whaleIndex[bestCompat.whaleId - 1].resultImg}
                  alt={bestCompat.whaleName}
                  className="w-full h-auto"
                />
                <SubTitle className="mt-[1rem]">
                  {bestCompat.whaleName}
                </SubTitle>
              </div>
              <div className="w-full h-full flex-col items-center text-center">
                <SubTitle className="mb-[1rem]">BAD</SubTitle>
                <StatImg
                  src={whaleIndex[worstCompat.whaleId - 1].resultImg}
                  alt={worstCompat.whaleName}
                  className="w-full h-auto"
                />
                <SubTitle className="mt-[1rem]">
                  {worstCompat.whaleName}
                </SubTitle>
              </div>
            </div>
          )}
        </div>
        <div className="w-full md:w-[40%] flex flex-col p-2">
          <StatTitle className="w-full text-center mb-[30px] md:mb-[60px]">
            순위별 유형
          </StatTitle>
          <div className="flex gap-[1rem] justify-between w-full h-full">
            {maxLoading ? (
              <LoadingDivSmall>로딩중...</LoadingDivSmall>
            ) : (
              <div className="w-full h-full flex-col items-center text-center">
                <SubTitle className="mb-[1rem]">가장 많은 유형</SubTitle>
                <StatImg
                  src={whaleIndex[maxData[0].whaleId - 1].resultImg}
                  alt={maxData[0].whaleName}
                  className="w-full h-auto"
                />
                <SubTitle className="mt-[1rem]">
                  {maxData[0].whaleName}
                </SubTitle>
              </div>
            )}
            {minLoading ? (
              <LoadingDivSmall>로딩중...</LoadingDivSmall>
            ) : (
              <div className="w-full h-full flex-col items-center text-center">
                <SubTitle className="mb-[1rem]">가장 적은 유형</SubTitle>
                <StatImg
                  src={whaleIndex[minData[0].whaleId - 1].resultImg}
                  alt={minData[0].whaleName}
                  className="w-full h-auto"
                />
                <SubTitle className="mt-[1rem]">
                  {minData[0].whaleName}
                </SubTitle>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default WhaleStats;

export const StatImg = styled.img`
  box-shadow: 2px 5px 1rem rgba(0, 0, 0, 0.4);
`;
export const StatTitle = styled.div`
  font-size: 1.8rem;
  color: #ffe27e;
  text-shadow: 2px 5px 7px rgba(0, 0, 0, 0.4);
`;

export const SubTitle = styled.div`
  font-size: 1.4rem;
  text-shadow: 2px 5px 7px rgba(0, 0, 0, 0.4);
`;
