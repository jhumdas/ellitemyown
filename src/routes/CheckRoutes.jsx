import React, { useEffect } from "react";
import { useAuthCtx } from "../context/AuthCtx";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Login from "../Foldable Login & Registration form/Login";
import { loginSuccess } from "../redux/slices/loginSlice";
import Landingpage from "../View/Landingpage/Index";

const CheckRoutes = () => {
  const loginStatus = useSelector(
    (state) => state.loginSliceReducer.isAuthenticated
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginSuccess());
  }, []);

  return loginStatus ? <Outlet /> : <Landingpage />;
};

export default CheckRoutes;
