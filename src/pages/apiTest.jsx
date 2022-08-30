import axios from "axios";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

const ApiTest = (props) => {
  const [users, setUsers] = useState([]);
  const [loginInputs, setLoginInputs] = useState({
    account: "",
    password: "",
  });
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
  const { account: loginAccount, password: loginPassword } = loginInputs;
  const onLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginInputs((cur) => ({ ...cur, [name]: value }));
  };
  const onJoinChange = (e) => {
    const { name, value } = e.target;
    setJoinInputs((cur) => ({ ...cur, [name]: value }));
  };
  const setStorage = (authToken, refreshToken) => {
    sessionStorage.setItem("auth-token", authToken);
    sessionStorage.setItem("refresh-token", refreshToken);
  };
  const checkLogin = async () => {};
  const onLogin = async () => {
    console.log(loginInputs);
    await axios
      .post("http://localhost:8080/api/v4/login", {
        account: loginAccount,
        password: loginPassword,
      })
      .then((res) => {
        console.log(res);
        const auth = res.data.accessToken;
        console.log(auth);
        sessionStorage.setItem("auth-token", auth);
      })
      .catch((e) => console.log(e));
  };
  const getMembers = async () => {
    const response = await axios.get("http://localhost:8080/api/v2/members");
    return response.data;
  };
  const onJoin = async () => {
    await axios
      .post("http://localhost:8080/api/v3/join", {
        name,
        account: joinAccount,
        pwd: joinPassword,
        email,
      })
      .then((res) => console.log(res))
      .then(() => {
        axios.get("http://localhost:8080/api/v2/members").then((res) => {
          console.log(res.data);
          setUsers(res.data);
        });
      })
      .catch((e) => console.log(e));
  };
  return (
    <ScreenWrapper>
      <InfoWrapper>
        <Info>로그인 상태</Info>
        <Info>jwt : {sessionStorage.getItem("auth-token") ? "yes" : "no"}</Info>
        <Info>
          refresh : {sessionStorage.getItem("refresh-token") ? "yes" : "no"}
        </Info>
        <ul>
          {users &&
            users.map((user, idx) => {
              return (
                <>
                  <div>account: {user.account}</div>
                  <div>name: {user.name}</div>
                  <div>email: {user.email}</div>
                  <div>status: {user.memberStatus}</div>
                </>
              );
            })}
        </ul>
      </InfoWrapper>
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
          name="city"
          type="text"
          placeholder="city"
          onChange={onJoinChange}
        />
        <Input
          name="street"
          type="text"
          placeholder="street"
          onChange={onJoinChange}
        />
        <Input
          name="zipcode"
          type="text"
          placeholder="zipcode"
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
    </ScreenWrapper>
  );
};

export default ApiTest;
const ScreenWrapper = styled.div`
  width: 100%;
  height: 10)%;
`;
const Info = styled.div`
  background-color: skyblue;
  padding: 2px;
  padding-left: 5px;
  color: white;
  width: 100%;
  border-radius: 5px;
`;
const InfoWrapper = styled.div`
  padding: 0.5rem;
  position: absolute;
  left: 1rem;
  top: 25%;
  background-color: white;
  border-radius: 0.5rem;
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 1rem;
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
