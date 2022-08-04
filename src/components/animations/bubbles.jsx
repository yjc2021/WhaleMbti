import React from "react";
import bubbleGif from "../../animations/bubbles.gif";
const Bubbles = (props) => {
  return (
    <div className="absolute z-0 border h-full w-auto">
      <img src={bubbleGif} alt="bubbles" className="h-full w-auto" />
    </div>
  );
};

export default Bubbles;
