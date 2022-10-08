import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import FindPwForm from "../components/find/findPwForm";
import styled from "styled-components";
import Header from "../components/home/header";
import { FindPageHeader, TabWrapper } from "./findId";
import { useEffect } from "react";
import FindPwResult from "../components/find/findPwResult";
const FindPw = (props) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    account: "",
    password: "",
    checkPassword: "",
  });
  const [pwResult, setPwResult] = useState({
    isResult: false,
    error: false,
  });
  const { account, password, checkPassword } = inputs;
  const { isResult, error } = pwResult;

  const onAccountChange = (e) => {
    const val = e.target.value;
    setInputs((cur) => ({ ...cur, account: val }));
  };
  const onPwChange = (e) => {
    const val = e.target.value;
    setInputs((cur) => ({ ...cur, password: val }));
  };
  const onCheckPwChange = (e) => {
    const val = e.target.value;
    setInputs((cur) => ({ ...cur, checkPassword: val }));
  };
  const onIdClick = () => {
    navigate("/find/id");
  };
  const onPwClick = () => {
    navigate("/find/pw");
  };
  const findPw = async () => {
    if (password !== checkPassword) {
      alert("비밀번호와 비밀번호 확인이 불일치합니다.\n다시 시도해주세요.");
      setInputs({
        account: "",
        password: "",
        checkPassword: "",
      });
      return;
    }
    await axios
      .post("http://43.200.94.144:8080/api/v1/findPassword", {
        account,
        password,
        checkPassword,
      })
      .then((res) => {
        if (res.status === 200) {
          setPwResult({
            isResult: true,
            error: false,
          });
        }
      })
      .catch((e) => {
        setPwResult({ isResult: true, error: true });
      });
    setInputs({
      account: "",
      password: "",
      checkPassword: "",
    });
  };
  useEffect(() => {
    return () => {
      setPwResult({
        isResult: false,
        error: false,
      });
    };
  }, []);
  return (
    <>
      <Header />
      <PageWrapper className="mt-[100px] flex flex-col items-center">
        <div className="text-[2.5rem]">ID 찾기/PW 재설정</div>
        <FindPageHeader className="w-full md:w-[50vw]">
          <TabWrapper className="ease-out duration-150" onClick={onIdClick}>
            아이디 찾기
          </TabWrapper>
          <TabWrapper
            active={true}
            className="ease-out duration-150"
            onClick={onPwClick}
          >
            비밀번호 재설정
          </TabWrapper>
        </FindPageHeader>

        {!isResult ? (
          <FindPwForm
            account={account}
            password={password}
            checkPassword={checkPassword}
            onAccountChange={onAccountChange}
            onPwChange={onPwChange}
            onCheckPwChange={onCheckPwChange}
            findPw={findPw}
          />
        ) : (
          <FindPwResult error={error} setPwResult={setPwResult} />
        )}
      </PageWrapper>
    </>
  );
};

export default FindPw;

export const PageWrapper = styled.div``;
