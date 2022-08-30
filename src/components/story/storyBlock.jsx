import React from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { storyImg } from "../../data";
import s2 from "../../img/story/2.jpg";
const StoryBlock = ({ id, story }) => {
  let scriptTimerId;
  let imgTimerId;
  const { storyId } = useParams();
  //const scriptTmp = useRef(story.split("|"));
  //const [scriptTmp, setTmp] = useState(story.split("|"));
  const scriptTmp = story.split("|");
  const imgTmp = storyImg[storyId - 1];
  console.log(scriptTmp);
  console.log(imgTmp);
  const idx = useRef(0);
  const posterIdx = useRef(0);
  const [script, setScript] = useState([]);
  const [poster, setPoster] = useState([]);

  const makeScript = () => {
    if (scriptTmp.length > idx.current) {
      setScript((cur) => [...cur, scriptTmp[idx.current++]]);
      scriptTimerId = setTimeout(makeScript, 2000);
    }
  };
  const makePoster = () => {
    console.log("makePoster");
    console.log(`imgTmp: ${imgTmp.length}`);
    console.log(`posterIdx: ${posterIdx.current}`);
    if (imgTmp.length > posterIdx.current) {
      console.log(`inside if`);
      setPoster(imgTmp[posterIdx.current++]);
      imgTimerId = setTimeout(makePoster, 2000);
    }
  };
  useEffect(() => {
    idx.current = 0;
    setScript([]);
    let cnt = scriptTmp.length;
    if (cnt <= 1) {
      setScript((cur) => [...cur, scriptTmp]);
      return;
    }
    //setTimeout(makeScript, 2000);
    makeScript();
    return () => {
      clearTimeout(scriptTimerId);
    };
  }, [storyId]);
  useEffect(() => {
    posterIdx.current = 0;
    console.log("setPoster()");
    setPoster("");
    let posterCnt = imgTmp.length;
    if (posterCnt <= 1) {
      setPoster(imgTmp);
      return;
    }
    makePoster();
    if (imgTimerId)
      return () => {
        clearTimeout(imgTimerId);
      };
  }, [storyId]);
  return (
    <div className="h-64 flex flex-col justify-between">
      <img
        src={poster ? poster : s2}
        className="w-[333px] h-[225px] border-2 border-gray-700"
        alt="story"
      />
      <div className="text-center text-white">
        {script.map((val) => (
          <div>{val}</div>
        ))}
      </div>
    </div>
  );
};

export default StoryBlock;
