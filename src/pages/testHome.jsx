import React, { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "../components/home/header";
import IntroBlock from "../components/story/introBlock";
import StartBtn from "../components/story/startBtn";
import { introData } from "../data";
import { useSetRecoilState } from "recoil";
import { counterAtom } from "../atoms";

const TestHome = () => {
  const setCounter = useSetRecoilState(counterAtom);
  const introId = useRef(0);
  const [id, setId] = useState(0);
  const addId = () => {
    console.log(introId.current, id);

    if (introId.current < 2) {
      setId((cur) => cur + 1);
      introId.current += 1;
      setTimeout(addId, 2000);
    }
  };
  useEffect(() => {
    setTimeout(() => addId(), 2000);
  }, []);
  useEffect(() => {
    setCounter(1);
  });
  return (
    <div className="text-white h-full ">
      <Header />
      <div className="font-semibold px-5 pt-5 bg-black h-full">
        <IntroBlock id={id} story={introData[id]} />
        <StartBtn />
      </div>
    </div>
  );
};

export default TestHome;
