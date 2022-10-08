import React from "react";
import footerLogo from "../../img/logo/footerLogo.png";
const HistoryFooter = (props) => {
  return (
    <div className="w-full h-[3rem] flex justify-center items-center md:justify-end">
      <img src={footerLogo} alt="logo" className="h-full w-auto" />
    </div>
  );
};

export default HistoryFooter;
