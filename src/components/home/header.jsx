import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./header.css";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Share from "./share";
import logo from "../../img/logo/logo.png";
import { useRecoilState } from "recoil";
import { loginAtom } from "../../atoms";
const Header = ({ isSticky = true }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => setIsOpen(!isOpen);
  const sideBarRef = useRef();
  const [isLogin, setIsLogin] = useRecoilState(loginAtom);

  const logOut = () => {
    setIsLogin(false);
    if (localStorage.getItem("auth-token"))
      localStorage.removeItem("auth-token");
    if (localStorage.getItem("refresh-token"))
      localStorage.removeItem("refresh-token");
    if (localStorage.getItem("account")) localStorage.removeItem("account");
    // TODO: localStorage에서 refresh token 제거
    alert("로그아웃 되었습니다.");
    // home으로 navigate ?
  };
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isOpen &&
        sideBarRef.current &&
        !sideBarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);
  useEffect(() => {
    // TODO: auth-token 유효성 검사
    // 유효하면 로그인 상태 표시 (isLoginAtom = true), 유효하지 않으면 로그아웃 상태 표시 (isLoginAtom = false)
  });

  const buttonStyle =
    "hover:bg-[#FFE27E] shadow-inner shadow-[rgba(0,0,0,0.5)] mb-3 w-[210px] h-[50px] bg-white flex items-center justify-center text-black rounded-full cursor-pointer mx-2";
  return (
    <NavHeader
      isSticky={isSticky}
      className="sticky z-50 top-0 w-full h-[60px] md:h-[80px] m-0 px-[20px] md:px-[90px] leading-[60px] md:leading-[80px] bg-[rgba(177,220,250,0.2)]"
    >
      <nav className="flex items-center justify-between">
        <div
          className="text-white text-[30px] md:text-[40px]"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={solid("house")} />
        </div>
        <div onClick={() => navigate("/")} className="w-32 cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <SideBarWrapper
          isOpen={isOpen}
          ref={sideBarRef}
          className="z-50 rounded-md flex flex-col fixed top-0 bottom-0 right-0 right-[-290px] px-2 w-[290px] overflow-y-auto transition-all linear py-4"
        >
          <header className="flex flex-col items-center justify-center">
            {!isLogin && (
              <>
                <div
                  className="mt-[20px] flex flex-col items-center cursor-pointer text-white hover:text-[#FFE27E]"
                  onClick={() => navigate("/login")}
                >
                  <FontAwesomeIcon
                    icon={solid("circle-user")}
                    className="w-[80px] h-auto "
                  />
                  <UnderBarDiv className="text-[1.2rem] underline underline-offset-2">
                    로그인이 필요합니다
                  </UnderBarDiv>
                </div>
              </>
            )}
            {isLogin && (
              <>
                <div className="mt-[20px] flex flex-col items-center text-white hover:text-[#FFE27E]">
                  <FontAwesomeIcon
                    icon={solid("circle-user")}
                    className="w-[80px] h-auto "
                  />
                  <UnderBarDiv
                    className="text-[1.2rem] underline underline-offset-2 cursor-pointer"
                    onClick={() => setIsLogin(false)}
                  >
                    로그아웃
                  </UnderBarDiv>
                </div>
              </>
            )}
          </header>
          <div className="my-[3rem] w-full h-50 flex flex-col items-center gap-[1.5rem] text-[1.2rem]">
            <button
              className={buttonStyle}
              onClick={() => {
                navigate("/user/history");
              }}
            >
              테스트 기록 보기
            </button>

            <button
              className={buttonStyle}
              onClick={() => alert("준비중인 기능입니다.")}
            >
              회원정보 수정
            </button>
            {!isLogin && (
              <button className={buttonStyle} onClick={() => navigate("/join")}>
                회원가입
              </button>
            )}
            <button className={buttonStyle} onClick={() => navigate("/whales")}>
              고래 도감
            </button>
            {/*<Share /> */}
          </div>
        </SideBarWrapper>

        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={toggleSideBar}
        >
          <FontAwesomeIcon
            icon={solid("bars")}
            className="text-[30px] md:text-[40px]"
          />
        </div>
      </nav>
    </NavHeader>
  );
};

export default Header;
const UnderBarDiv = styled.div``;
const SideBarWrapper = styled.div`
  background-color: rgba(1, 1, 1, 0.4);
  ${(props) =>
    props.isOpen &&
    css`
      right: 0;
    `}
`;

const NavHeader = styled.header`
  ${(props) =>
    !props.isSticky &&
    css`
      position: fixed;
    `}
`;
