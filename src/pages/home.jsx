import React from "react";
import Header from "../components/home/header";
import ImgCard from "../components/home/imgCard";
import HomeIntro from "../components/home/homeIntro";
import HomeBtn from "../components/home/homeBtn";
import Stat from "../components/home/stat";
import Footer from "../components/home/footer";
import WhaleAni from "../components/animations/whale_ani";
import styled from "styled-components";
import newHome from "../animations/newHome.jpg";

const Home = (props) => {
  return (
    <Wrapper className="relative h-screen flex flex-col items-center overflow-y-auto bg-blue-950 pb-5 lg:pb-0 text-white bg-no-repeat bg-center bg-cover">
      <Header />
      <ImgCard />
      <HomeIntro />
      <WhaleAni />
      <HomeBtn />
      <Stat />
      <Footer />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  background-image: url(${newHome});
`;
