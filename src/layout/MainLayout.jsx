import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/Home/Shared/Navbar";
import Footer from "../pages/Home/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
