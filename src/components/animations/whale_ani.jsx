import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import whaleGif from "../../animations/whale.gif";
import { swimAtom } from "../../atoms";
const WhaleAni = () => {
  const swim = useRecoilValue(swimAtom);

  return (
    <div
      swim={swim}
      className={`absolute rotate-12 transition-translate duration-[4000ms] ease-linear ${
        swim && "translate-x-[800px] translate-y-[200px]"
      } left-[-400px] top-[350px] lg:left-[250px] lg:top-[300px]  w-[350px] h-auto z-1 `}
    >
      {swim && <img src={whaleGif} alt="whale" />}
    </div>
  );
};

export default WhaleAni;
