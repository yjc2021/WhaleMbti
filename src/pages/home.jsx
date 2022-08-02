import React from "react";
import Header from "../components/header";
import HomeBtn from "../components/home/homeBtn";
import HomeIntro from "../components/home/homeIntro";
import ImgCard from "../components/home/imgCard";
const Home = () => {
  return (
    <div style={{ height: "100vh", backgroundColor: "grey", color: "white" }}>
      <Header />
      <ImgCard />
      <HomeIntro />
      <HomeBtn />
    </div>
  );
};

export default Home;
