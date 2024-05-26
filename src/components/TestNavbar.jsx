import React from "react";
import logo from "../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineSearch } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
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
        <div className="md:col-span-3 md:grid md:grid-cols-2 md:items-center md:justify-items-center xl:grid-cols-3">
          <div>
            <img src={logo} alt="" className="w-20 cursor-pointer" />
          </div>
          <div className="hidden xl:block">
            <p className = "text-lg cursor-pointer">About Us</p>
          </div>
          <div>
            <p className = "text-lg cursor-pointer">Categories</p>
          </div>
        </div>
        <div className="md:col-span-6 md:flex md:justify-center md:items-center md:gap-5 md:border-2 md:rounded-3xl ">
        <IoIosSearch className="text-3xl  ml-5 opacity-50 cursor-pointer"/>
          <input
            type="text"
            placeholder="Search for Courses"
            className=" w-full   border-gray-300 rounded-lg border-0 focus:outline-none focus:border-none placeholder:text-lg"
          />
        </div>
        <div className="md:col-span-3 md:grid md:grid-cols-2   md:items-center md:justify-items-center lg:grid-cols-3 xl:grid-cols-4 ">
          <div className="hidden xl:block cursor-pointer"><p className = "text-lg">Business</p></div>
          <div className="hidden lg:block cursor-pointer"><p className = "text-lg">Teacher</p></div>
          <div className="border-2 px-4 py-2 border-slate-500 hover:bg-gray-200 cursor-pointer"><p className = "text-lg">Log in</p></div>
          <div className="bg-black px-4 py-2 text-white cursor-pointer"><p className = "text-lg">Sign up</p></div>
          
        </div>
      </div>
    </>
  );
};

export default TestNavbar;
