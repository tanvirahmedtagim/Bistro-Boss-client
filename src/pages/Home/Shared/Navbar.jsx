import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/contactUs">CONTACT US</NavLink>
      <NavLink to="/dashboard">DASHBOARD</NavLink>
      <NavLink to="/menu">OUR MENU</NavLink>
      <NavLink to="/cart">CART</NavLink>
    </>
  );
  return (
    <div className="navbar top-0 z-10 fixed bg-opacity-80 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <Link className="text-xl text-white">
          BISTRO BOSS <br />
          RESTAURANT
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-5 justify-end text-lg font-semibold text-white px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
