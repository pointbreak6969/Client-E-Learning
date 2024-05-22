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
            <BsCart3 className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="hidden md:grid md:grid-cols-12 p-5 ">
        <div className="md:col-span-3 md:grid md:grid-cols-3 items-center">
          <div>
            <img src={logo} alt="" className="w-20" />
          </div>
          <div>
            <p className = "text-lg">About Us</p>
          </div>
          <div>
            <p className = "text-lg">Categories</p>
          </div>
        </div>
        <div className="md:col-span-6 md:flex md:justify-center md:items-center ">
          <input
            type="text"
            placeholder="Search for Courses"
            className="w-full p-2 border-2 border-gray-300 rounded-lg"
          />
        </div>
        <div className="md:col-span-3 md:grid md:grid-cols-4 items-center pl-10 ">
          <div><p className = "text-lg">Business</p></div>
          <div><p className = "text-lg">Teacher</p></div>
          <div><p className = "text-lg">Log in</p></div>
          <div><p className = "text-lg">Sign up</p></div>
          
        </div>
      </div>
    </>
  );
};

export default TestNavbar;
