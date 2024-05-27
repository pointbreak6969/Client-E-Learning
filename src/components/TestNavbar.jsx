import React, { useRef, useState } from "react";
import logo from "../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineSearch } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import useClickAway from "../utlis/useClickAway";
import "../styles/testNavbar.css";
const categories = [
  "Development",
  "Business",
  "Finance",
  "Software and IT",
  "Design",
  "Marketing",
];
const TestNavbar = () => {
  const [search, setSearch] = useState("");
  const inputRef = useRef();
  const handelSearchIcon = () => {
    inputRef.current.focus();
  };
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const ref = useClickAway(() => {
    setToggleSidebar(false);
  }
  );

  return (
    <>
      <div
        className={
          toggleSidebar
            ? "flex flex-nowrap justify-between p-3 shadow-md items-center md:hidden bg-gray-200"
            : "flex flex-nowrap justify-between p-3 shadow-md items-center md:hidden"
        }
      >
        <div>
          <RxHamburgerMenu
            className="text-3xl cursor-pointer"
            onClick={() => setToggleSidebar(true)}
          />
          <div
          ref={ref}
            className={
              toggleSidebar
                ? "mobile-categories h-screen bg-white z-10 transition-all duration-500 ease-out"
                : "hidden"
            }
          >
            <div className="grid grid-rows-12 py-4 px-5 w-full">
              <div className="row-span-1  border-b-2 mobile-categories-top grid ">
                <div className="text-lg text-blue-800">Login</div>
                <div className="text-lg text-blue-800">Signup</div>
              </div>
              <div className="row-span-7 mt-5 mobile-categories-center border-b-2 ">
                <h3 className="text-xl opacity-80 font-sans">Most Popular</h3>
                <div className="grid gap-2 mt-2">
                  {categories.map((category, index) => {
                    return (
                      <div
                        key={index}
                        className="grid grid-cols-4 items-center  hover:cursor-pointer hover:text-blue-700"
                      >
                        <div className="col-span-3 text-xl font-sans">
                          {" "}
                          {category}
                        </div>
                        <div className="col-span-1 flex justify-end">
                          <p className="text-xl"> &gt; </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row-span-4 mobile-categories-end mt-5">
                <h3 className="text-xl font-sans opactiy-80">
                  More From Himalayan Sikshya
                </h3>
                <div className="grid gap-1 mt-1">
                  <div className="grid grid-cols-4 items-center">
                    <p className="text-lg col-span-3 hover:cursor-pointer hover:text-blue-700">About Us</p>
                    <div className="col-span-1 flex justify-end">
                      <p className="text-xl"> &gt; </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center">
                    <p className="text-lg col-span-3 hover:cursor-pointer hover:text-blue-700">Business</p>
                    <div className="col-span-1 flex justify-end">
                      <p className="text-xl"> &gt; </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 items-center">
                    <p className="text-lg col-span-3 hover:cursor-pointer hover:text-blue-700">Become A Instructor</p>
                    <div className="col-span-1 flex justify-end">
                      <p className="text-xl"> &gt; </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                toggleSidebar
                  ? "block z-20  text-2xl rounded-full p-2 close transition-all duration-500 ease-out"
                  : "hidden"
              }
            >
              <IoMdClose
                className="cursor-pointer"
                onClick={() => {
                  setToggleSidebar(false);
                }}
              />
            </div>
          </div>
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
      <div className="hidden md:grid md:grid-cols-12 p-5 items-center  shadow-xl">
        <div className="md:col-span-3 md:grid md:grid-cols-2 md:items-center md:justify-items-center xl:grid-cols-3">
          <div>
            <img src={logo} alt="" className="w-20 cursor-pointer" />
          </div>
          <div className="hidden xl:block">
            <p className="text-lg cursor-pointer">About Us</p>
          </div>
          <div className="category">
            <p className="text-lg cursor-pointer">Categories</p>
            <div className=" hidden shadow-xl dropdown">
              <div className="item">Development</div>
              <div className="item">Business</div>
              <div className="item">Finance</div>
              <div className="item">Software and IT</div>
              <div className="item">Design</div>
              <div className="item">Marketing</div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 md:flex md:justify-center md:items-center md:gap-5 md:border-2 md:rounded-3xl ">
          <IoIosSearch
            className="text-3xl  ml-5 opacity-50 cursor-pointer"
            onClick={handelSearchIcon}
          />
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            ref={inputRef}
            placeholder="Search for Courses"
            className=" w-full border-gray-300 rounded-lg border-0 focus:outline-none focus:border-none placeholder:text-lg"
          />
        </div>
        <div className="md:col-span-3 md:grid md:grid-cols-2   md:items-center md:justify-items-center lg:grid-cols-3 xl:grid-cols-4 ">
          <div className="hidden xl:block cursor-pointer">
            <p className="text-lg">Business</p>
          </div>
          <div className="hidden lg:block cursor-pointer">
            <p className="text-lg">Teacher</p>
          </div>
          <div className="border-2 px-3 py-1 border-slate-500 hover:bg-gray-200 cursor-pointer">
            <p className="text-lg">Login</p>
          </div>
          <div className="bg-black px-3 py-1 text-white cursor-pointer">
            <p className="text-lg">Signup</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestNavbar;
