import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styled, { css } from "styled-components";
import Header from "../components/home/header";
import FindIdForm from "../components/find/findIdForm";
import FindIdResult from "../components/find/findIdResult";
import { useEffect } from "react";

const FindId = (props) => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
  });
  const [idResult, setIdResult] = useState({
    isResult: false,
    id: "",
    error: false,
  });

  const { email } = inputs;
  const { isResult, id, error } = idResult;
  const onEmailChange = (e) => {
    const val = e.target.value;
    setInputs((cur) => ({ ...cur, email: val }));
  };
  const onIdClick = () => {
    navigate("/find/id");
  };
  const onPwClick = () => {
    navigate("/find/pw");
  };

  const findId = async () => {
    await axios
      .post("http://43.200.94.144:8080/api/v1/findAccount", {
        email,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          //alert(`아이디: ${res.data}`);
          setIdResult({
            isResult: true,
            id: res.data,
          });
        }
      })
      .catch((e) => {
        //alert("계정이 존재하지 않습니다")
        setIdResult((cur) => ({ ...cur, isResult: true, error: true }));
      });
    setInputs({
      email: "",
    });
  };
  useEffect(() => {
    return () => {
      setIdResult({
        isResult: false,
        id: "",
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
          <TabWrapper
            active={true}
            className="ease-out duration-150"
            onClick={onIdClick}
          >
            아이디 찾기
          </TabWrapper>
          <TabWrapper className="ease-out duration-150" onClick={onPwClick}>
            비밀번호 재설정
          </TabWrapper>
        </FindPageHeader>

        {!isResult ? (
          <FindIdForm
            email={email}
            onEmailChange={onEmailChange}
            findId={findId}
          />
        ) : (
          <FindIdResult id={id} error={error} setIdResult={setIdResult} />
        )}
      </PageWrapper>
    </>
  );
};
export default FindId;

export const PageWrapper = styled.div``;

export const FindPageHeader = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
export const TabWrapper = styled.div`
  font-size: 1.5rem;
  text-align: center;
  width: 150px;
  border-bottom: solid white 4px;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      color: #ffe27e;
      border-bottom: solid #ffe27e 4px;
    `}
`;
