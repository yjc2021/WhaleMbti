import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/home/header";
import { useEffect } from "react";
import JoinResult from "../components/join/joinResult";
const Join = (props) => {
  const navigate = useNavigate();
  const [joinInputs, setJoinInputs] = useState({
    name: "",
    account: "",
    password: "",
    email: "",
  });

  const [joinResult, setJoinResult] = useState({
    isResult: false,
    error: false,
  });

  const {
    name,
    account: joinAccount,
    password: joinPassword,
    email,
  } = joinInputs;
  const { isResult, error } = joinResult;

  const onJoinChange = (e) => {
    const { name, value } = e.target;
    setJoinInputs((cur) => ({ ...cur, [name]: value }));
  };
  const onJoin = async () => {
    await axios
      .post("http://43.200.94.144:8080/api/v3/join", {
        name,
        account: joinAccount,
        pwd: joinPassword,
        email,
      })
      .then((res) => {
        if (res.status === 200) {
          setJoinResult({
            isResult: true,
            error: false,
          });
        }
      })
      .catch((e) => {
        setJoinResult({
          isResult: true,
          error: true,
        });
      });
  };
  useEffect(() => {
    return () => {
      setJoinResult({
        isResult: false,
        error: false,
      });
    };
  }, []);
  return (
    <>
      <Header />
      <div className="mt-[150px] flex flex-col items-center">
        <div className="text-[2.5rem]">회원가입</div>
        {!isResult ? (
          <LoginWrapper>
            <Input
              name="name"
              type="text"
              placeholder="이름을 입력하세요."
              onChange={onJoinChange}
            />
            <Input
              name="account"
              type="text"
              placeholder="아이디를 입력하세요."
              onChange={onJoinChange}
            />
            <Input
              name="password"
              type="text"
              placeholder="비밀번호를 입력하세요."
              onChange={onJoinChange}
            />
            <Input
              name="email"
              type="text"
              placeholder="이메일을 입력하세요."
              onChange={onJoinChange}
            />

            <LoginButton className="mt-[2rem]" onClick={onJoin}>
              회원가입
            </LoginButton>
          </LoginWrapper>
        ) : (
          <JoinResult error={error} setJoinResult={setJoinResult} />
        )}
      </div>
    </>
  );
};

export default Join;

const ScreenWrapper = styled.div`
  width: 100%;
  height: 10)%;
`;

export const Input = styled.input`
  padding: 0.3rem 1rem;
  font-size: 1.5rem;
  width: 250px;
  height: 60px;
  border-radius: 25px;
  background: none;
  border: solid white 2px;
  &:focus {
    outline: none;
    border: solid #ffe27e 3px;
  }
`;

const LoginButton = styled.button`
  background-color: #ffe27e;
  color: #002fac;
  border-radius: 25px;
  width: 250px;
  height: 60px;
  font-size: 1.7rem;
`;

const LoginWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;
