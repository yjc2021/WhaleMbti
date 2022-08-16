import React from "react";
import axios from "axios";
import useAsync from "../../useAsync";

const getMaxWhale = async () => {
  const response = await axios.get("http://localhost:8080/api/list/max-whale");
  return response.data;
};
const getMinWhale = async () => {
  const response = await axios.get("http://localhost:8080/api/list/min-whale");
  return response.data;
};
const getWhaleStats = () => {
  const maxWhaleD = getMaxWhale();
  const minWhaleD = getMinWhale();
  return { maxWhaleD, minWhaleD };
};
const WhaleStats = (props) => {
  const [state] = useAsync(getWhaleStats, []);
  const { maxWhaleD, minWhaleD } = state;
  return (
    <div className="mt-10 w-full flex flex-col lg:flex-row  justify-evenly">
      <div className="mb-10 border-2 border-gray-700 flex flex-col w-[343px] h-[350px] p-2">
        <div className="w-full border text-center">유형별 궁합</div>
        <div className="flex gap-3 justify-between w-full h-full border p-3">
          <div className="w-full h-full border">잘 맞는 궁합</div>
          <div className="w-full h-full border">잘 안 맞는 궁합</div>
        </div>
      </div>
      <div className="mb-8 border-2 border-gray-700 flex flex-col w-[343px] h-[350px] p-2">
        <div className="w-full border text-center">가장 많은 유형</div>
        <div className="flex gap-3 justify-between w-full h-full border p-3">
          <div className="w-full h-full border">
            가장 많이 선택한 고래 {maxWhaleD}
          </div>
          <div className="w-full h-full border">
            가장 적게 선택한 고래 {minWhaleD}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhaleStats;
