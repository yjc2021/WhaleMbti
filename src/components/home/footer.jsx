import React from "react";
import FooterLogo from "../footerLogo";
import Share from "./share";
const Footer = (props) => {
  return (
    <>
      <footer className=" lg:flex flex-col items-center justify-evenly bg-gray-300 w-full py-3 bg-blue-950 lg:bg-gray-300">
        <FooterLogo />
        <Share />
      </footer>
    </>
  );
};

export default Footer;
