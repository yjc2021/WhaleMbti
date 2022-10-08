import React from "react";
import Header from "../components/home/header";

const UserEdit = (props) => {
  return (
    <>
      <Header />
      <div>
        {/*
        TODO: 회원정보 중에 수정 가능하도록 설정할 항목 선택
      */}
        <div>회원정보 수정</div>
      </div>
    </>
  );
};

export default UserEdit;
