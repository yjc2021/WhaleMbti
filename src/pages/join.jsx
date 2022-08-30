import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Join = (props) => {
  const navigate = useNavigate();
  const [joinInputs, setJoinInputs] = useState({
    name: "",
    account: "",
    password: "",
    email: "",
  });

  const {
    name,
    account: joinAccount,
    password: joinPassword,
    email,
  } = joinInputs;

  const onJoinChange = (e) => {
    const { name, value } = e.target;
    setJoinInputs((cur) => ({ ...cur, [name]: value }));
  };
  const onJoin = async () => {
    await axios
      .post("http://localhost:8080/api/v3/join", {
        name,
        account: joinAccount,
        pwd: joinPassword,
        email,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("회원가입을 완료했습니다. 로그인 페이지로 이동합니다");
          navigate("/login");
        }
        console.log(res);
      })
      .then(() => {
        // TEST: 전체 회원 정보 조회
        axios.get("http://localhost:8080/api/v2/members").then((res) => {
          console.log(res.data);
        });
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <LoginWrapper>
        <Input
          name="name"
          type="text"
          placeholder="name"
          onChange={onJoinChange}
        />
        <Input
          name="account"
          type="text"
          placeholder="account"
          onChange={onJoinChange}
        />
        <Input
          name="password"
          type="text"
          placeholder="password"
          onChange={onJoinChange}
        />
        <Input
          name="email"
          type="text"
          placeholder="email"
          onChange={onJoinChange}
        />

        <LoginButton onClick={onJoin}>회원가입</LoginButton>
      </LoginWrapper>
    </>
  );
};

export default Join;

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
