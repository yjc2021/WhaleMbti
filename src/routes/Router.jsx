import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import TestHome from "../pages/testHome";
const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestHome />} />
      </Routes>
    </>
  );
};

export default Router;
