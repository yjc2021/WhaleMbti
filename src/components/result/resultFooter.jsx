import React from "react";
import FooterLogo from "../footerLogo";
import Share from "../home/share";
const ResultFooter = (props) => {
  return (
    <>
      <footer className=" hidden lg:flex flex-col items-center justify-evenly bg-gray-300 w-full py-3 bg-blue-950 lg:bg-gray-300">
        <FooterLogo />
        <Share />
      </footer>
    </>
  );
};

export default ResultFooter;
