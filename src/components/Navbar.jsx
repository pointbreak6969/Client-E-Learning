import React, { useRef, useState, useEffect } from "react";
import logo from "../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  BsCart3,
  MdOutlineSearch,
  MdOutlineArrowDropDown,
  IoMdClose,
} from "../utlis/reactIcons.js";

import useClickAway from "../utlis/useClickAway";
import "../styles/navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";
import { Button } from "./Buttons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { SidebarTrigger, SidebarProvider } from "./ui/sidebar";
import { MobileSidebar } from "./MobileSidebar";
const categories = [
  { name: "Development", link: "/development" },
  { name: "Business", link: "/business" },
  { name: "Finance", link: "/finance" },
  { name: "Software and IT", link: "/software" },
  { name: "Design", link: "/design" },
  { name: "Marketing", link: "/marketing" },
];
const Navbar = ({ className }) => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const handelSearchIcon = () => {
    inputRef.current.focus();
  };
  const searchQuery = useSelector((state) => state.search.searchQuery);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-nowrap justify-between p-3 shadow-md items-center md:hidden">
        <SidebarProvider>
          <MobileSidebar />
          <SidebarTrigger/>
        </SidebarProvider>
        <div>
              <img
                src={logo}
                alt=""
                className="w-20"
                onClick={() => {
                  navigate("/");
                }}
              />
            </div>
            <div className="flex">
              <div className="pr-2">
                <MdOutlineSearch className="text-3xl" />
              </div>
              <div className="pl-2">
                <BsCart3 className="text-3xl" />
              </div>
            </div>
      </div>
      <div
        className={`hidden md:grid md:grid-cols-12 px-5 py-3 items-center ${className}`}
      >
        <div className="md:col-span-3 md:grid md:grid-cols-2 md:items-center md:justify-items-center xl:grid-cols-3">
          <Link to={"/"}>
            <img src={logo} alt="" className="w-20 c    ursor-pointer" />
          </Link>
          <div className="hidden xl:block">
            <Link to={"/about"} className="text-lg cursor-pointer">
              About Us
            </Link>
          </div>
          <div className="category w-full h-full inline-flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-lg cursor-pointer inline-flex items-center justify-center">
                  Categories <MdOutlineArrowDropDown />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.map((category, index) => {
                  return (
                    <DropdownMenuItem key={index}>
                      <Link to={category.link} className="item">
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div
          className="md:col-span-6 md:flex md:justify-center md:items-center md:gap-5 md:border-2 md:rounded-3xl "
          onClick={() => {
            navigate("/search");
          }}
        >
          <MdOutlineSearch
            className="text-3xl  ml-5 opacity-50 cursor-pointer"
            onClick={handelSearchIcon}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              dispatch(setSearchQuery(e.target.value));
            }}
            ref={inputRef}
            placeholder="Search for Courses"
            className=" w-full border-gray-300 rounded-lg border-0 focus:outline-none focus:border-none placeholder:text-lg"
          />
        </div>
        <div className="md:col-span-3 md:grid md:grid-cols-2   md:items-center md:justify-items-center lg:grid-cols-3 xl:grid-cols-4 ">
          <div
            className="hidden lg:block cursor-pointer"
            onClick={() => {
              navigate("/becomeInstructor");
            }}
          >
            <Link to={"/becomeInstructor"} className="text-lg">
              Teacher
            </Link>
          </div>
          <div>
            <Button
              className="text-lg border-2 border-slate-500 hover:bg-gray-200"
              onClick={() => {
                navigate("/authentication/login");
              }}
            >
              Login
            </Button>
          </div>
          <div>
            <Button
              className="text-lg bg-black py-1.5 text-white"
              onClick={() => {
                navigate("/authentication/register");
              }}
            >
              Signup
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
