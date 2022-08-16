import React from "react";
import FooterLogo from "../footerLogo";
import Share from "./share";
const Footer = (props) => {
  return (
    <>
      <footer className=" lg:flex flex-col items-center justify-evenly w-full py-3 ">
        <FooterLogo />
        <Share />
      </footer>
    </>
  );
};

export default Footer;
