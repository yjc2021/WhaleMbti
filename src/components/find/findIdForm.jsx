import React from "react";
import styled from "styled-components";
import { Input } from "../../pages/join";
import { LoginButton } from "../../pages/login";

const FindIdForm = ({ email, onEmailChange, findId }) => {
  return (
    <div>
      <InputContainer>
        <Input
          type="email"
          value={email}
          onChange={onEmailChange}
          placeholder="이메일"
        />
        <FindButton onClick={findId}>아이디 찾기</FindButton>
      </InputContainer>
    </div>
  );
};

export default FindIdForm;
export const InputWrapper = styled.input`
  border-color: rgba(1, 1, 1, 0.2);
  padding: 0.3rem;
  border-radius: 7px;
`;
export const FindButton = styled(LoginButton)`
  background-color: white;
  margin-top: 70px;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
