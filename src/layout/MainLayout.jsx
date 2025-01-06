import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Home/Shared/Navbar";
import Footer from "../pages/Home/Shared/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div className="min-h-screen">
      {noHeaderFooter || <Navbar></Navbar>}
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default MainLayout;
