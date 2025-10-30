import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import React, { useState } from "react";
import { navItems } from "./../../constant/data";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
  return (
    <header className="w-full py-5" >
      <div className="container flex items-center justify-between border-b border-b-white-95 pb-5 ">
        {/* Logo */}
        <a href="">
          <img
            src="../../../public/images/logo.png"
            alt="logo"
            width={170}
            height={50}
          />
        </a>
        {/* Mobile Menu */}
        <nav className={`navbar ${isOpen ? "active" : ""} ` } >
          {/* Close Menu */}
          <button className="absolute top-8 right-8" onClick={handleClick} >
            <RiCloseLine size={30} />
          </button>

          {/* List */}
          <ul className="space-y-5 text-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="" className="font-medium text-lg hover:text-orange-50 transition-colors" >{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Login btn */}
          <button className="primary-btn mt-12 max-w-40 w-full">Login</button>
        </nav>

        {/* Menu btn */}
        <button className="lg:hidden" onClick={handleClick}>
          <RiMenuLine />
        </button>

            {/* Lg Menu */}
        <div className="max-lg:hidden flex items-center gap-10">
          {/* List */}
          <ul className="gap-10 flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="" className="text-lg font-medium hover:text-orange-50 transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
          {/* Lg Login btn */}
          <button className="primary-btn">Login</button>
          
        </div>
      </div>
    </header>
  );
};

export default Navbar;
