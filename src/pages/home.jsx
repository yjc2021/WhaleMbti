import React from "react";
import Header from "../components/home/header";
import ImgCard from "../components/home/imgCard";
import HomeIntro from "../components/home/homeIntro";
import HomeBtn from "../components/home/homeBtn";
import Stat from "../components/home/stat";
import Footer from "../components/home/footer";
import styled from "styled-components";
import mainLg from "../img/home/mainLg.jpg";
import mainSm from "../img/home/mainSm.jpg";
import "../components/home/home.css";
import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { loginAtom } from "../atoms";
import Share from "../components/home/share";
const Home = (props) => {
  return (
    <Wrapper className="overflow-x-hidden overflow-y-auto relative w-full h-auto md:w-full md:h-full flex flex-col items-center pb-5 md:pb-0 text-white bg-cover bg-local">
      {/*<img
        src="/bg-3.png"
        alt="bg-3"
        className="absolute -bottom-[100px] right-0 h-full w-auto md:w-auto md:h-[140%] z-40"
      />
      <img
        src="/bg-5.png"
        alt="bg-5"
        className="absolute -bottom-[100px] left-0 h-full w-auto md:h-[140%] md:w-auto z-20"
      />
      <img
        src="/bg-7.png"
        alt="bg-3"
        className="absolute -bottom-[100px] h-full w-auto md:h-[140%] md:w-auto z-10"
  />*/}
      {/*
      <img
        src="/bg-1.gif"
        alt="bg-1"
        className="absolute -bottom-[100px] -left-10 w-auto h-[200px] lg:h-1/3 lg:w-auto"
      />
  
      <img
        src="/bg-4.gif"
        alt="bg-4"
        className="z-20 absolute bottom-[430px] left-0 w-full h-auto lg:h-1/3 lg:w-auto"
      />
      <img
        src="/bg-6.gif"
        alt="bg-6"
        className="z-10 absolute left-[37px] bottom-[200px] w-full h-auto lg:h-1/3 lg:w-auto"
        style={{ transform: "rotate(45deg)" }}
      />
      <img
        src="/bg-8.gif"
        alt="bg-8"
        className="z-10 absolute bottom-0 h-full w-auto lg:h-1/3 lg:w-auto"
      />
  */}
      <Header isSticky={false} />
      <ImgCard />
      <HomeIntro />
      <HomeBtn />
      <div className="block md:hidden">
        <Share />
      </div>
    </Wrapper>
  );
};

export default Home;

/*
<img src="/bg-7.png" alt="bg-7" className="absolute bottom-0" />
      <img src="/bg-5.png" alt="bg-5" className="absolute bottom-0" />
      <img src="/bg-3.png" alt="bg-3" className="absolute bottom-0" />
*/

const Wrapper = styled.div``;
