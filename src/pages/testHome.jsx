import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/home/header";
import IntroBlock from "../components/story/introBlock";
import StartBtn from "../components/story/startBtn";
import { introData } from "../data";
import { useSetRecoilState } from "recoil";
import { counterAtom } from "../atoms";
import { Background } from "./testStory";

const TestHome = () => {
  const setCounter = useSetRecoilState(counterAtom);
  const introId = useRef(0);
  const [id, setId] = useState(0);
  const addId = () => {
    if (introId.current < 2) {
      setId((cur) => cur + 1);
      introId.current += 1;
      setTimeout(addId, 1500);
    }
  };
  useEffect(() => {
    setTimeout(() => addId(), 1500);
  }, []);
  useEffect(() => {
    setCounter(1);
  });
  return (
    <Background className="text-white h-full w-full relative bg-cover overflow-y-auto lg:overflow-hidden">
      <Header />
      <div className="h-full flex-col justify-between px-5 pt-5 font-[100]">
        <IntroBlock id={id} story={introData[id]} />
        <StartBtn />
      </div>
    </Background>
  );
};

export default TestHome;
