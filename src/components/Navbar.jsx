import React, { useEffect, useState } from "react";
import "../styles/navbar.css"
import logo from "../assets/Logo.png"
import { IoCartSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from "../redux/searchSlice";
import { useClickAway } from "@uidotdev/usehooks";

const Navbar = () => {
    const navigate = useNavigate();
    const [activeSidebar, setActiveSidebar] = useState(false);
    const [activeSearchBar, setActiveSearchBar] = useState(false);
    const handleSidebar = () => {
      setActiveSidebar(!activeSidebar);
    };
    const dispatch = useDispatch();
    const searchQuery = useSelector((state) => state.search.searchQuery);
    const handelFormSubmit = (e) => {
      e.preventDefault();
    };
    const ref = useClickAway(() => {
      setActiveSearchBar(false);
    });
    useEffect(() => {
      if (activeSidebar) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    }, [activeSidebar]);
    const categories = [
      "Web Development",
      "Mobile Development",
      "Game Development",
      "Business Analytics",
      "Finance",
      "Graphics Design",
      "Digital Marketing",
      "Self Imporvement",
      "Music",
      "Dance",
    ];
    return (
      <>
        <div className="responsive-navbar">
          <div
            className={`${activeSidebar ? "sidebar" : "sidebar sidebar-none"}`}
          >
            <div className="sidebar-wrapper">
              <div
                className={`${
                  activeSidebar
                    ? "sidebar-close"
                    : "sidebar-close sidebar-close-none"
                }`}
              >
                <IoMdClose onClick={handleSidebar} />
              </div>
              <div className="sidebar-top">
                <div>
                  <Link to={"/login"}>Sign in</Link>
                </div>
                <div>
                  <Link to={"/register"}>Sign up</Link>
                </div>
              </div>
              <div className="sidebar-middle">
                <h3 style={{ marginTop: "5px" }}>Categories</h3>
                {categories.slice(0, 5).map((item, index) => {
                  return (
                    <div key={index} className="sidebar-items">
                      <div>{item}</div>
                      <div>
                        <CiCircleChevRight />
                      </div>
                    </div>
                  );
                })}
                <div className="sidebar-items">
                  <div>All Categories</div>
                  <div>
                    <CiCircleChevRight />
                  </div>
                </div>
              </div>
              <div className="sidebar-bottom">
                <h5 style={{ marginTop: "5px" }}>More from Himalayan Sikshya</h5>
                <div>Become a Instructor</div>
                <div>About Us</div>
                <div>Help</div>
              </div>
            </div>
          </div>
          <div className="responsive-navbar-container">
            <div className="responsive-navbar-wrapper">
              <div className="hamburger">
                <GiHamburgerMenu className="icon" onClick={handleSidebar} />
              </div>
              <div
                className={`${
                  activeSearchBar
                    ? "responsive-search-active"
                    : "responsive-navbar-logo"
                }`}
              >
                <img
                  src={logo}
                  alt=""
                  onClick={() => {
                    navigate("/");
                  }}
                />
              </div>
              <div className="navbar-responsive-icons">
                <div className="navbar-responsive-search">
                  <FaSearch
                    className={`${
                      activeSearchBar ? "responsive-search-active" : "icon"
                    }`}
                    onClick={() => {
                      setActiveSearchBar(!activeSearchBar);
                      navigate("/searchcourse");
                    }}
                  />
                  <form
                    ref={ref}
                    className={`${
                      activeSearchBar ? "" : "responsive-search-active"
                    }`}
                  >
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => {
                        dispatch(setSearchQuery(e.target.value));
                      }}
                      className="responsive-search-input"
                      placeholder="Search..."
                      required
                    />
                  </form>
                </div>
                <div>
                  <IoCartSharp className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="navbar-container">
          <div className="navbar-wrapper">
            <div className="nav-links">
              <div className="navbar-left">
                <div className="navbar-logo">
                  <img
                    src={logo}
                    alt=""
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                </div>
                <div className="navbar-categories">
                  <p>Categories</p>
                </div>
                <div className="navbar-about">
                  <Link to={"/about"}>About us</Link>
                </div>
              </div>
              <div className="navbar-search">
                <form onSubmit={handelFormSubmit}>
                  <input
                    value={searchQuery}
                    onChange={(e) => {
                      dispatch(setSearchQuery(e.target.value));
                    }}
                    type="text"
                    placeholder="Search..."
                    onClick={() => {
                      navigate("/searchCourse");
                    }}
                  />
                </form>
              </div>
              <div className="navbar-right">
                <div className="navbar-icons">
                  <span>
                    Your Cart <IoCartSharp />
                  </span>
                </div>
                <div className="navbar-auth">
                  <div>
                    <button
                      className="sign-in-btn"
                      onClick={() => {
                        navigate("/register");
                      }}
                    >
                      SignUp
                    </button>
                  </div>
                  <div>
                    <button
                      className="log-in-btn"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Navbar;
  