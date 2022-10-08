import React from "react";
import FooterLogo from "../footerLogo";
const Footer = (props) => {
  return (
    <>
      <footer className="w-[100vw] h-[60px] md:h-[80px]  bg-[rgba(177,220,250,0.2)]">
        <FooterLogo />
      </footer>
    </>
  );
};

export default Footer;
