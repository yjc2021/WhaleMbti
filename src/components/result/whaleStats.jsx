import React from "react";
import axios from "axios";
import useAsync from "../../useAsync";
import { whaleIndex } from "../../data";
const getMaxWhale = async () => {
  const response = await axios.get("http://localhost:8080/api/list/max-whale");
  return response.data;
};
const getMinWhale = async () => {
  const response = await axios.get("http://localhost:8080/api/list/min-whale");
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
    "http://localhost:8080/api/whale-compatibility",
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
  const { whaleId, whaleName, whaleShare } = whale[0];
  console.log(whaleId, whaleName, whaleShare);
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
  if (compatData) {
    console.log(compatData);
    const bestCompat = compatData[0];
    const worstCompat = compatData[1];
    return (
      <div className="mt-10 w-full flex flex-col lg:flex-row  justify-evenly">
        <div className="mb-10 border-2 border-gray-700 flex flex-col w-[343px] h-[350px] p-2">
          <div className="w-full border text-center">유형별 궁합</div>
          {compatLoading ? (
            <span>로딩중...</span>
          ) : (
            <div className="flex gap-3 justify-between w-full h-full border p-3">
              <div className="w-full h-full border flex-col items-center text-center">
                잘 맞는 궁합
                <div className="mt-3">{bestCompat.whaleName}</div>
                <img
                  src={whaleIndex[bestCompat.whaleId - 1].whaleImg}
                  alt={bestCompat.whaleName}
                />
              </div>
              <div className="w-full h-full border flex-col items-center text-center">
                잘 안 맞는 궁합
                <div className="mt-3">{worstCompat.whaleName}</div>
                <img
                  src={whaleIndex[worstCompat.whaleId - 1].whaleImg}
                  alt={worstCompat.whaleName}
                />
              </div>
            </div>
          )}
        </div>
        <div className="mb-8 border-2 border-gray-700 flex flex-col w-[343px] h-[350px] p-2">
          <div className="w-full border text-center">가장 많은 유형</div>
          <div className="flex gap-3 justify-between w-full h-full border p-3">
            {maxLoading ? (
              <div>로딩중...</div>
            ) : (
              <div className="w-full h-full border flex-col items-center text-center">
                가장 많이 선택한 고래
                <div className="mt-3">{maxData[0].whaleName}</div>
                <img
                  src={whaleIndex[maxData[0].whaleId - 1].whaleImg}
                  alt={maxData[0].whaleName}
                />
              </div>
            )}
            {minLoading ? (
              <div>로딩중...</div>
            ) : (
              <div className="w-full h-full border flex-col items-center text-center">
                가장 적게 선택한 고래
                <div className="mt-3">{minData[0].whaleName}</div>
                <img
                  src={whaleIndex[minData[0].whaleId - 1].whaleImg}
                  alt={minData[0].whaleName}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default WhaleStats;
