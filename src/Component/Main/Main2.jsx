import React from "react";
import Header2 from "../../Layout/Header2";
import { Outlet } from "react-router-dom";
import Footer from "../../Layout/Footer";

const Main2 = () => {
  return (
    <>
      <div className="main-component">
        <Header2 />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Main2;
