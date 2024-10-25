import React, { useRef } from "react";
import logo from "../assets/Logo.png";
import {
  BsCart3,
  MdOutlineSearch,
  MdOutlineArrowDropDown,
} from "../utlis/reactIcons.js";
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
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "./ui/dropdown-menu";
import { SidebarTrigger, SidebarProvider } from "./ui/sidebar";
import { MobileSidebar } from "./MobileSidebar";
const categories = [
  {
    name: "Development",
    subItems: [
      "Web Development",
      "Mobile Development",
      "Web3 Development",
      "Game Development",
      "Software Development",
    ],
  },
  {
    name: "Business",
    subItems: [
      "Entrepreneurship",
      "Communication",
      "Management",
      "Sales",
      "Strategy",
    ],
  },
  {
    name: "Finance",
    subItems: [
      "Investing",
      "Trading",
      "Personal Finance",
      "Accounting",
      "Cryptocurrency",
    ],
  },
  {
    name: "Software and IT",
    subItems: [
      "Networking",
      "Security",
      "Cloud Computing",
      "DevOps",
      "Data Science",
    ],
  },
  {
    name: "Design",
    subItems: [
      "Graphic Design",
      "UX/UI Design",
      "Interior Design",
      "Fashion Design",
      "3D Design",
    ],
  },
  {
    name: "Marketing",
    subItems: [
      "Digital Marketing",
      "Content Marketing",
      "SEO",
      "Social Media Marketing",
      "Email Marketing",
    ],
  },
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
          <SidebarTrigger />
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
                {categories.map((category) => (
                  <DropdownMenuSub key={category.name}>
                    <DropdownMenuSubTrigger>
                      <span>{category.name}</span>
                    </DropdownMenuSubTrigger>

                    {/* DropdownMenuPortal to handle sub-menu positioning */}
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {category.subItems.map((item) => (
                          // Explicitly return the DropdownMenuItem here
                          <DropdownMenuItem key={item}>
                            <span>{item}</span>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ))}
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
