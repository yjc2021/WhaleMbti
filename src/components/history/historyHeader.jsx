import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo/logo.png";

const HistoryHeader = (props) => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[60px] md:h-[80px] flex justify-center bg-[rgba(177,220,250,0.2)] flex items-center">
      <img
        src={logo}
        alt="logo"
        className="h-[90%] w-auto"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default HistoryHeader;
