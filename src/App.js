import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/View/Employee/Onboarding.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Engagement from "./View/Admin/Engagement";
import Organization from "./View/Admin/Organization";
import Index from "./View/Home/Index";
import AppRoutes from "./routes/AppRoutes";
import MainLoader from "./Component/Loaders/MainLoader";
import { useAuthCtx } from "./context/AuthCtx";
import { RingLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";
import "../src/Component/Modal/Modal.css";
function App() {
  const { loading } = useAuthCtx();
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* <div className='loader-header' style={loading ? { pointerEvents: "none" } : { pointerEvents: "" }}>
          <div className="loader" style={{ filter: "brightness(2)" }}>
            <RingLoader color="#36d7b7" loading={loading} size={150} />
          </div>
          <div style={loading ? { filter: 'brightness(30%)' } : { filter: 'brightness(100%)' }}><AppRoutes /></div>


        </div> */}
        <AppRoutes />
      </BrowserRouter>
      <Toaster />
    </React.Fragment>
  );
}

export default App;
