import React from "react";
import { useNavigate } from "react-router-dom";
import { FindButton } from "../find/findIdForm";

const JoinResult = ({ error, setJoinResult }) => {
  const navigate = useNavigate();

  return (
    <div className="mt-[50px] text-[1.5rem] flex flex-col items-center">
      {!error ? (
        <>
          <div className="text-[#ffe27e]">회원가입이 완료되었습니다.</div>
          <FindButton onClick={() => navigate("/login")}>로그인하기</FindButton>
        </>
      ) : (
        <>
          <div>회원가입에 실패했습니다.</div>
          <FindButton
            onClick={() =>
              setJoinResult({
                isResult: false,
                error: false,
              })
            }
          >
            다시 입력하기
          </FindButton>
        </>
      )}
    </div>
  );
};

export default JoinResult;
