import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import TestHome from "../pages/testHome";
import TestStory from "../pages/testStory";
import TestResult from "../pages/testResult";
import LoginTest from "../pages/loginTest";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test/home" element={<TestHome />} />
        <Route path="/test/story/:storyId" element={<TestStory />} />
        <Route path="/test/result" element={<TestResult />} />
        <Route path="/login-test" element={<LoginTest />} />
      </Routes>
    </>
  );
};

export default Router;
