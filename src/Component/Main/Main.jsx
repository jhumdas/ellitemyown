import React from "react";
import Index from "../../View/Home/Index";
import Engagement from "../../View/Admin/Engagement";
import Organization from "../../View/Admin/Organization";
import Footer from "../../Layout/Footer";
import Header from "../../Layout/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-component">
      <Header />

      <Outlet />
      {/* <Engagement/> */}
      {/* <Organization/> */}
      <Footer />
    </div>
  );
};

export default Main;
