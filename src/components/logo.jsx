import React from "react";
import { useNavigate } from "react-router-dom";
const Logo = ({ sideBar }) => {
  const navigate = useNavigate();
  return !sideBar ? (
    <div
      onClick={() => navigate("/")}
      className="h-10 w-40 border cursor-pointer text-gray-400"
    >
      LOGO
    </div>
  ) : (
    <div
      onClick={() => navigate("/")}
      className="hidden lg:block h-10 w-40 border cursor-pointer text-gray-400"
    >
      LOGO
    </div>
  );
};

Logo.defaultProps = {
  sideBar: false,
};
export default Logo;
