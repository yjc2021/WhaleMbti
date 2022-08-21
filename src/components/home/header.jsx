import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import "./header.css";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import Share from "./share";
import Logo from "../logo";
const Header = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleSideBar = () => setIsOpen(!isOpen);
  const sideBarRef = useRef();
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

  return (
    <header className="sticky z-50 top-0 w-full h-16  m-0 px-10 py-2">
      <nav className="flex items-center justify-center lg:justify-between">
        <div
          onClick={() => navigate("/")}
          className="h-10 w-40 border cursor-pointer"
        >
          LOGO
        </div>
        <SideBarWrapper
          isOpen={isOpen}
          ref={sideBarRef}
          className="z-50 rounded-md flex flex-col fixed top-0 bottom-0 right-0 right-[-250px] px-2 w-[250px]  overflow-y-auto  bg-white transition-all linear py-4"
        >
          <header className="flex flex-col items-center justify-center">
            {/*
            <button
              onClick={toggleSideBar}
              className="rounded w-10 h-8 bg-blue-200 text-white"
            >
              닫기
            </button>
            */}
            <Logo sideBar={true} />
            <div
              className="w-16 h-16 mt-16 rounded-full bg-gray-400 text-white flex justify-center items-center"
              onClick={() => navigate("/login")}
            >
              <FontAwesomeIcon icon={solid("user")} className="w-1/2 h-1/2" />
            </div>
            <div className="border-b-2 border-b-gray-300 text-sm text-center text-gray-400">
              로그인이 필요합니다
            </div>
          </header>
          <div className=" my-5 w-full h-50 flex flex-col items-center">
            <button
              className="mb-3 w-40 h-10 bg-blue-200 text-white rounded-full cursor-pointer mx-2"
              onClick={() => navigate("/")}
            >
              테스트 기록 보기
            </button>
            <button
              className="mb-3 w-40 h-10 bg-blue-200 text-white rounded-full cursor-pointer mx-2"
              onClick={() => navigate("/")}
            >
              공지사항
            </button>
            <button
              className="mb-3 w-40 h-10 bg-blue-200 text-white rounded-full cursor-pointer mx-2"
              onClick={() => navigate("/")}
            >
              설정
            </button>
            <button
              className="w-40 h-10 bg-blue-200 text-white rounded-full cursor-pointer mx-2"
              onClick={() => navigate("/")}
            ></button>
          </div>
          <Share color={"gray"} />
        </SideBarWrapper>
        {/*
        <div className="hidden lg:flex justify-center w-1/2 ">
          <span className="mx-2 cursor-pointer" onClick={() => navigate("/")}>
            테스트 기록 보기
          </span>
          <span className="mx-2 cursor-pointer" onClick={() => navigate("/")}>
            공지사항
          </span>
          <span className="mx-2 cursor-pointer" onClick={() => navigate("/")}>
            설정
          </span>
        </div>
        <span className="hidden lg:block">1,234,567</span>
          */}
        {!isOpen && (
          <button
            onClick={toggleSideBar}
            className="absolute right-5 lg:hidden rounded-full w-10 h-10 bg-blue-200"
          >
            <FontAwesomeIcon className="text-white" icon={solid("user")} />
          </button>
        )}
        <div
          className="hidden lg:flex flex-col items-center cursor-pointer"
          onClick={toggleSideBar}
        >
          <FontAwesomeIcon icon={solid("bars")} className="text-2xl" />
          {/*<button className="rounded-full w-10 h-10 bg-blue-200">
            <FontAwesomeIcon className="text-white" icon={solid("user")} />
          </button>
        <span className="inline-block text-xs">로그인</span> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;

const SideBarWrapper = styled.div`
  ${(props) =>
    props.isOpen &&
    css`
      right: 0;
    `}
`;
