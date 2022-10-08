import React from "react";
import { useNavigate } from "react-router-dom";
import { FindButton } from "./findIdForm";

const FindPwResult = ({ error, setPwResult }) => {
  const navigate = useNavigate();
  return (
    <div className="text-[1.5rem] flex flex-col items-center">
      {!error ? (
        <>
          <div>비밀번호가 재설정되었습니다.</div>
          <FindButton onClick={() => navigate("/login")}>로그인하기</FindButton>
        </>
      ) : (
        <>
          <div>존재하지 않는 계정입니다.</div>
          <FindButton
            onClick={() =>
              setPwResult({
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

export default FindPwResult;
