import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import TestHome from "../pages/testHome";
import TestStory from "../pages/testStory";
import TestResult from "../pages/testResult";
import LoginTest from "../pages/loginTest";
import ApiTest from "../pages/apiTest";
import Login from "../pages/login";
import Join from "../pages/join";
import WhaleEncyclopedia from "../pages/whaleEncyclopedia";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/home" element={<TestHome />} />
        <Route path="/test/story/:storyId" element={<TestStory />} />
        <Route path="/test/result" element={<TestResult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />

        <Route path="/login-test" element={<LoginTest />} />
        <Route path="/api-test" element={<ApiTest />} />
        <Route path="/whales" element={<WhaleEncyclopedia />} />
      </Routes>
    </>
  );
};

export default Router;
