import React from "react";
import { useNavigate } from "react-router-dom";
import { swimAtom } from "../../atoms";
import { useRecoilState } from "recoil";
const HomeBtn = (props) => {
  const [swim, setSwim] = useRecoilState(swimAtom);
  const navigate = useNavigate();
  const handleClick = () => {
    //setSwim(true);
    //setTimeout(() => navigate("/test/home"), 4000);
    navigate("test/home");
  };

  return (
    <div className=" z-40 mt-5 mb-4 w-full h-32 flex items-center justify-center">
      <button
        onClick={handleClick}
        //className="rounded-full w-60 h-14 bg-gray-300 text-black text-xl "
      >
        <img src="/homeBtn.png" alt="button" className="w-80 h-auto" />
      </button>
    </div>
  );
};

export default HomeBtn;
