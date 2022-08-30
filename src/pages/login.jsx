import React from "react";
import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = (props) => {
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
      .post("http://localhost:8080/api/v4/login", {
        account: loginAccount,
        password: loginPassword,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          const auth = res.data.accessToken;
          console.log(auth);
          localStorage.setItem("auth-token", auth);
          alert("로그인에 성공했습니다.");
          navigate("/");
        }
      })
      .catch((e) => {
        console.log(e);
        alert("예상하지 못한 에러가 발생했습니다!");
        navigate("/");
      });
  };
  return (
    <>
      <LoginWrapper>
        <Input
          name="account"
          type="text"
          placeholder="아이디"
          onChange={onLoginChange}
        />
        <Input
          name="password"
          type="text"
          placeholder="비밀번호"
          onChange={onLoginChange}
        />
        <LoginButton onClick={onLogin}>로그인</LoginButton>
      </LoginWrapper>
    </>
  );
};

export default Login;

const ScreenWrapper = styled.div`
  width: 100%;
  height: 10)%;
`;

const Input = styled.input`
  border-radius: 0.5rem;
  padding: 0.3rem;
`;
const LoginButton = styled.button`
  background-color: skyblue;
  color: white;
  border-radius: 0.5rem;
  width: 5rem;
  height: 2rem;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`;
