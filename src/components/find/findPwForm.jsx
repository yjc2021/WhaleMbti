import React from "react";
import styled from "styled-components";
import { Input } from "../../pages/join";
import { FindButton, InputContainer } from "./findIdForm";

const FindPwForm = ({
  account,
  password,
  checkPassword,
  onAccountChange,
  onPwChange,
  onCheckPwChange,
  findPw,
}) => {
  return (
    <div>
      <InputContainer>
        <Input
          type="text"
          value={account}
          onChange={onAccountChange}
          placeholder="아이디"
        />
        <Input
          type="password"
          value={password}
          onChange={onPwChange}
          placeholder="비밀번호"
        />
        <Input
          type="password"
          value={checkPassword}
          onChange={onCheckPwChange}
          placeholder="비밀번호 확인"
        />
      </InputContainer>
      <FindButton onClick={findPw}>비밀번호 재설정</FindButton>
    </div>
  );
};

export default FindPwForm;
