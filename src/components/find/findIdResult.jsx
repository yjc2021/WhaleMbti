import React from "react";
import { useNavigate } from "react-router-dom";
import { FindButton } from "./findIdForm";

const FindIdResult = ({ id, error, setIdResult }) => {
  const navigate = useNavigate();
  return (
    <div className="text-[1.5rem] flex flex-col items-center">
      {!error ? (
        <>
          <div>아이디를 찾았습니다!</div>
          <div>
            회원님의 아이디는{" "}
            <span className="text-[2rem] text-[#ffe27e]">{id} </span>입니다
          </div>
          <FindButton onClick={() => navigate("/login")}>로그인하기</FindButton>
        </>
      ) : (
        <>
          <div>존재하지 않는 계정입니다.</div>
          <FindButton
            onClick={() =>
              setIdResult({
                isResult: false,
                id: "",
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

export default FindIdResult;
