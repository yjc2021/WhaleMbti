import React from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/home/header";
import { useSetRecoilState } from "recoil";
import { loginAtom } from "../atoms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Login = (props) => {
  const setLogin = useSetRecoilState(loginAtom);
  const navigate = useNavigate();
  const [loginInputs, setLoginInputs] = useState({
    account: "",
    password: "",
  });
  const { account: loginAccount, password: loginPassword } = loginInputs;
  const onLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginInputs((cur) => ({ ...cur, [name]: value }));
  };

  useEffect(() => {
    // TODO: auth-token 유효성 검사 => 유효하면 로그인 페이지 생략
  }, []);
  const onLogin = async () => {
    console.log(loginInputs);
    await axios
      .post("http://43.200.94.144:8080/api/v5/login", {
        account: loginAccount,
        password: loginPassword,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const auth = res.data.accessToken;
          const refresh = res.data.refreshToken;
          localStorage.setItem("auth-token", auth);
          localStorage.setItem("refresh-token", refresh);
          localStorage.setItem("account", loginAccount);
          setLogin(true);
          alert("로그인에 성공했습니다.");
          navigate("/");
        }
      })
      .catch((e) => {
        switch (e.response.status) {
          case 500:
            alert("존재하지 않는 회원입니다.");
            break;
          default:
            alert("예상하지 못한 에러가 발생했습니다!");
            navigate("/");
        }
      });
  };
  return (
    <>
      <Header />
      <div className="mt-[150px] flex flex-col items-center">
        <div className="text-[2.5rem]">로그인</div>
        <LoginWrapper>
          <div className="relative">
            <Input
              name="account"
              type="text"
              placeholder="아이디"
              onChange={onLoginChange}
            />
            <FontAwesomeIcon
              icon={solid("user")}
              className="absolute left-[1.5rem] top-[20px] text-[1.2rem] text-gray-400"
            />
          </div>
          <div className="relative">
            <Input
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={onLoginChange}
            />
            <FontAwesomeIcon
              icon={solid("lock")}
              className="absolute left-[1.5rem] top-[20px] text-[1.2rem] text-gray-400"
            />
          </div>

          <LoginButton className="mt-[2rem]" onClick={onLogin}>
            로그인
          </LoginButton>
          <div className="flex gap-8 mt-[0.7rem] text-[1.2rem] text-[#FFE27E]">
            <button onClick={() => navigate("/find/id")}>
              ID 찾기/PW 재설정
            </button>
            <button onClick={() => navigate("/join")}>회원가입</button>
          </div>
        </LoginWrapper>
      </div>
    </>
  );
};

export default Login;

const Input = styled.input`
  padding: 0.3rem 3.5rem;
  font-size: 1.5rem;
  width: 250px;
  height: 60px;
  border-radius: 25px;
  &:focus {
    outline: none;
    border: solid #ffe27e 3px;
  }
  color: black;
`;
export const LoginButton = styled.button`
  background-color: #ffe27e;
  color: #002fac;
  border-radius: 25px;
  width: 250px;
  height: 60px;
  font-size: 1.7rem;
`;

const LoginWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;
