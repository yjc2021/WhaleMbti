import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import TestHome from "../pages/testHome";
import TestStory from "../pages/testStory";
import TestResult from "../pages/testResult";
import Login from "../pages/login";
import Join from "../pages/join";
import WhaleEncyclopedia from "../pages/whaleEncyclopedia";
import FindId from "../pages/findId";
import FindPw from "../pages/findPw";
import UserEdit from "../pages/userEdit";

import mainLg from "../img/home/mainLg.jpg";
import mainSm from "../img/home/mainSm.jpg";
import styled from "styled-components";

import History from "../pages/history";
import WhaleShare from "../pages/whaleShare";
const Router = () => {
  return (
    <Wrapper className="overflow-x-hidden overflow-y-auto w-[100vw] h-[100vh] bg-blue-950 text-white bg-cover">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/home" element={<TestHome />} />
        <Route path="/test/story/:storyId" element={<TestStory />} />
        <Route path="/test/result" element={<TestResult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/user/edit" element={<UserEdit />} />
        <Route path="/user/history" element={<History />} />

        <Route path="/whales" element={<WhaleEncyclopedia />} />
        <Route path="/whales/share/:whaleId" element={<WhaleShare />} />

        <Route path="/find/id" element={<FindId />} />
        <Route path="/find/pw" element={<FindPw />} />
      </Routes>
    </Wrapper>
  );
};

export default Router;

const Wrapper = styled.div`
  font-family: "Do Hyeon", sans-serif;
  background-image: url(${mainSm});
  background-position: top;
  @media screen and (min-width: 640px) {
    background-image: url(${mainLg});
    background-position: center;
  }
  background-repeat: no-repeat;
`;
