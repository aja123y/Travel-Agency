import React, { useState } from "react";
import "./Navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNav = () => {
    setActive("navBar activeNavbar");
  }
  const removeNav = () => {
    setActive("navBar");
  }
  return (
    <div>
      <section className="navBarSection">
        <header className="header flex">
          <div className="logoDiv">
            <a href="#" className="logo">
              <h1>
                <MdTravelExplore className="icon" /> Travel
              </h1>
            </a>
          </div>

          <div className={active}>
            <ul className="navLIsts flex">
              <li className="navItems">
                <a href="" className="navLink">
                  Home
                </a>
              </li>

              <li className="navItems">
                <a href="" className="navLink">
                  Packages
                </a>
              </li>

              <li className="navItems">
                <a href="" className="navLink">
                  Shop
                </a>
              </li>

              <li className="navItems">
                <a href="" className="navLink">
                  About
                </a>
              </li>

              <li className="navItems">
                <a href="" className="navLink">
                  Pages
                </a>
              </li>

              <li className="navItems">
                <a href="" className="navLink">
                  News
                </a>
              </li>

              <li className="navItems">
                <a href="" className="navLink">
                  Contact
                </a>
              </li>

              <button className="btn">
                <a href="#">BOOK NOW</a>
              </button>
            </ul>
            <div onClick={removeNav} className="closeNavBar">
              <AiFillCloseCircle className="icon" />
            </div>
          </div>

          <div onClick={showNav} className="toggleNavbar">
            <TbGridDots className="icon" />
          </div>
        </header>
      </section>
    </div>
  );
};

export default Navbar;