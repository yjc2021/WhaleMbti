import React from "react";
import whaleGif from "../../animations/whale.gif";
const WhaleAni = (props) => {
  return (
    <>
      <img src={whaleGif} alt="whale" className="border h-64 w-auto" />
    </>
  );
};

export default WhaleAni;
