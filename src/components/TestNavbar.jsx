import React from "react";
import logo from "../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineSearch } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
const TestNavbar = () => {
  return (
    <>
      <div className="flex flex-nowrap justify-between p-3 shadow-md items-center md:hidden ">
        <div>
          <RxHamburgerMenu className="text-3xl" />
        </div>
        <div>
          <img src={logo} alt="" className="w-20" />
        </div>
        <div className="flex">
          <div className="pr-2">
          <MdOutlineSearch className="text-3xl" />
          </div>
          <div className="pl-2">
            <BsCart3 className="text-3xl"/>
          </div>

        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-12 p-5 ">
        <div className="md:col-span-3">
          <img src={logo} alt="" className="w-20" />
        </div>
        <div className="md:col-span-6 md:flex md:justify-center md:items-center ">
          <input
            type="text"
            placeholder="Search for Courses"
            className="w-full p-2 border-2 border-gray-300 rounded-md"
          />
        </div>
        <div className="md:col-span-3 flex justify-end items-center">
          <BsCart3 className="text-3xl"/>
        </div>
      </div>
    </>
  );
};

export default TestNavbar;
