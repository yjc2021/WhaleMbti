import React from "react";
import { useNavigate } from "react-router-dom";

const FooterLogo = (props) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/")}
      className="h-10 w-40 border cursor-pointer hidden lg:block mb-2"
    >
      LOGO
    </div>
  );
};

export default FooterLogo;
