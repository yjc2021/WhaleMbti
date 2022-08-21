import React from "react";
import { whaleIndex } from "../../data";
const WhaleName = ({ id, name }) => {
  //console.log(id);
  //console.log(name);
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm">내가 고래라면</div>
      {id ? (
        <div>
          <div>{whaleIndex[id - 1].whaleTitle}</div>
          <div>{whaleIndex[id - 1].whaleName}</div>
        </div>
      ) : (
        <div className="text-center">
          <div>고래 한줄설명</div>
          <div className="text-2xl">고래 이름</div>
        </div>
      )}
    </div>
  );
};

export default WhaleName;
