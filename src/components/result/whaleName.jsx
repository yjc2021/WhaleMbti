import React from "react";

const WhaleName = ({ whaleName }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm">내가 고래라면</div>
      {whaleName ? (
        <div>
          <div>{whaleName.description}</div>
          <div>{whaleName.name}</div>
        </div>
      ) : (
        <div className="text-center">
          <div>낭만 넘치는 바닷 속의 음악가</div>
          <div className="text-2xl">흑동고래</div>
        </div>
      )}
    </div>
  );
};

export default WhaleName;
