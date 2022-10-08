import React from "react";
import footerLogo from "../img/logo/footerLogo.png";
const FooterLogo = () => {
  return (
    <div className="flex items-center justify-center md:justify-end h-full">
      <img src={footerLogo} alt="footerLogo" className="h-[60px] w-auto" />
    </div>
  );
};

export default FooterLogo;
