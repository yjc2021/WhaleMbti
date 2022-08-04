import React from "react";
import Header from "../components/home/header";
import ImgCard from "../components/home/imgCard";
import HomeIntro from "../components/home/homeIntro";
import HomeBtn from "../components/home/homeBtn";
import Share from "../components/home/share";
import Stat from "../components/home/stat";
import Bubbles from "../components/animations/bubbles";

const Home = (props) => {
  return (
    <div className="relative h-screen flex flex-col items-center overflow-y-auto bg-blue-950 pb-5 text-white ">
      <Header />
      <ImgCard />
      <HomeIntro />
      <HomeBtn />
      <Stat />
      <Bubbles />
      <Share />
    </div>
  );
};

export default Home;
