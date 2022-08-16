import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import a1 from "../../animations/고양이고래(ENTJ).png";
import a2 from "../../animations/귀신고래(ISTP).png";
import a3 from "../../animations/남방참고래(ESFJ).png";
import a4 from "../../animations/남방큰돌고래(ENFJ).png";
import a5 from "../../animations/낫돌고래(ESTP).png";
import a6 from "../../animations/대왕고래(INFJ).png";
import a7 from "../../animations/민부리고래(ISTJ).png";
import a8 from "../../animations/밍크고래(ISFJ).png";
import a9 from "../../animations/범고래(ESTJ).png";
import a10 from "../../animations/벨루가(ENFP).png";
import a11 from "../../animations/병코돌고래(ENTP).png";
import a12 from "../../animations/북극고래(INFP).png";
import a13 from "../../animations/상괭이(INTP).png";
import a14 from "../../animations/일각고래(INTJ).png";
import a15 from "../../animations/향유고래(ISFP).png";
import a16 from "../../animations/혹등고래(ESFP).png";

const useInterval = (callback, delay) => {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};
const WhaleSlider = (props) => {
  //const items = ["#33a", "#8c9", "#f3e074"];
  const items = [
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    a7,
    a8,
    a9,
    a10,
    a11,
    a12,
    a13,
    a14,
    a15,
    a16,
  ];
  const itemSize = items.length;
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;
  const dummyNum = 2;
  const [index, setIndex] = useState(dummyNum);

  const [cIndex, setCIndex] = useState(0);

  const [slideTransition, setTransition] = useState(transitionStyle);
  const increaseIndex = () => setIndex((prev) => prev + 1);
  const increaseCIndex = () => setCIndex((prev) => prev + 1);
  let slides = setSlides();

  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    let index = 0;
    while (index < dummyNum) {
      addedLast.push(items[index % items.length]);
      addedFront.unshift(items[items.length - 1 - (index % items.length)]);
      index++;
    }
    return [...addedFront, ...items, ...addedLast];
  }
  useInterval(() => {
    handleSlide(index + 1);
    handleCIndex(cIndex + 1);
  }, 2000);
  const replaceSlide = (index) => {
    setTimeout(() => {
      setTransition("");
      setIndex(index);
    }, transitionTime);
  };
  const handleCIndex = (index) => {
    if (index >= itemSize) {
      setCIndex(0);
    } else if (index < 0) {
      setCIndex(itemSize - 1);
    } else {
      setCIndex(index);
    }
  };
  const handleSlide = (index) => {
    setIndex(index);
    if (index - dummyNum < 0) {
      index += itemSize;
      replaceSlide(index);
    } else if (index - dummyNum >= itemSize) {
      index -= itemSize;
      replaceSlide(index);
    }

    setTransition(transitionStyle);
  };
  const handleSwipe = (direction) => {
    handleCIndex(cIndex + direction);
    handleSlide(index + direction);
  };

  const getItemIndex = (index) => {
    index -= dummyNum;
    if (index < 0) {
      index += itemSize;
    } else if (index >= itemSize) {
      index -= itemSize;
    }
    return index;
  };
  return (
    <>
      <div className="slider-area relative overflow-hidden w-[800px] h-auto">
        <div className="slider relative block box-border select-none">
          {/*
          <button
            className="btn-slide-control btn-prev"
            direction="prev"
            onClick={() => handleSwipe(-1)}
          >
            <FontAwesomeIcon icon={solid("chevron-left")} />
          </button>
          <button
            className="btn-slide-control btn-next"
            direction="next"
            onClick={() => handleSwipe(1)}
          >
            <FontAwesomeIcon icon={solid("chevron-right")} />
          </button>
  */}
          <div className="slider-list relative overflow-hidden block m-0">
            <div
              className="slider-track relative gap-1 left-[50%] t-0 flex text-left w-fit h-[300px] flex items-center"
              style={{
                transition: slideTransition,
                transform: `translateX(${
                  (-100 / slides.length) * (0.5 + index)
                }%)`,
              }}
            >
              {slides.map((color, slideIndex) => {
                const itemIndex = getItemIndex(slideIndex);
                return (
                  <ItemWrapper
                    key={slideIndex}
                    isCenter={cIndex === itemIndex}
                    className="slider-item relative w-[270px] h-[180px] py-0 px-[12px] float:left inline-block"
                  >
                    {/*<span>
                      {slideIndex}({itemIndex}) [
                      {(cIndex === itemIndex).toString()}]
                      </span> */}
                    <img
                      src={items[itemIndex]}
                      alt="loading"
                      className="w-full h-full object-cover  select-none"
                    />

                    {/*<video
                      src={items[itemIndex]}
                      autoPlay={true}
                      muted={true}
                      loop={true}
                      controls={false}
                      className="w-full h-full object-cover  select-none"
                  ></video> */}
                    {/*
                    <div
                      className="flex flex-col items-center w-full h-full text-white justify-center "
                      style={{ background: items[itemIndex] }}
                    >
                      {itemIndex}({slideIndex})
                    </div>
                     */}
                  </ItemWrapper>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhaleSlider;

const ItemWrapper = styled.div`
  transition: transform 500ms ease 0s, opacity 500ms ease-in-out;
  ${(props) =>
    !props.isCenter &&
    css`
      transform: scale(0.6);
      opacity: 0.6;
    `}
`;
