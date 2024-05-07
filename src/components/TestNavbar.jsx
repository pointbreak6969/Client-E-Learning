import React from "react";
import logo from "../assets/Logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
const TestNavbar = () => {
  return (
    <>
      <div className="flex flex-nowrap justify-between p-3 shadow-md items-center sm:hidden ">
        <div>
          <RxHamburgerMenu className="text-3xl" />
        </div>
        <div>
          <img src={logo} alt="" className="w-20" />
        </div>
        <div className="flex">
          <div className="pr-2">
            <FaSearch className="text-3xl"/>
          </div>
          <div className="pl-2">
            <MdShoppingCart className="text-3xl"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestNavbar;
