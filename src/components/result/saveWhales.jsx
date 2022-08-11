import React from "react";

const SaveWhales = (props) => {
  return (
    <div>
      <div className="w-full h-48 border"></div>
      <div className="my-7 border w-full h-72 items-center flex flex-col justify-between">
        <div className="w-full text-center">
          수십년 동안 이뤄진 상업적인 고래잡이와
        </div>
        <div className="w-full text-center">
          파괴적인 어업으로 고래가 안전하게 살아갈 수
        </div>
        <div className="w-full text-center">
          있는 해양 생태계가 무너지고 있습니다
        </div>
        <div className="my-5 w-full text-center font-bold text-xl">
          더 많은 고래 가족을 구하러 가요!
        </div>
        <button onClick className="text-xl bg-gray-200 rounded-full w-3/4 h-24">
          <span className="text-center w-full">고래를 위한 </span>
          <br></br>
          <span className="text-center w-full">서명하러 가기</span>
        </button>
      </div>
    </div>
  );
};

export default SaveWhales;
