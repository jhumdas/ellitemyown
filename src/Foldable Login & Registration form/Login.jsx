import React from "react";
import "./style.css";
import frontImage from "./Images/frontImg.jpg";
import backImage from "./Images/backImg.jpg";
import { useAuthCtx } from "../context/AuthCtx";
import { useFormik } from "formik";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { clearLogin, loginSuccess } from "../redux/slices/loginSlice";

const initialValues = {
  password: "",
  email: "",
};
const Login = () => {
  const navigate = useNavigate();
  const { loginUser, loading, setLoading, setLogIn, logIn } = useAuthCtx();
  const dispatch = useDispatch();

  const { values, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues,
    onSubmit: (e) => {
      handleFormSubmit(e);
    },
  });

  const handleFormSubmit = async (e) => {
    if (loading) return;

    setLoading(true);
    const res = await loginUser(values);

    if (res?.status) {
      setLogIn(true);
      sessionStorage.setItem("login", true);

      localStorage.setItem("Authorization", res?.data?.data?.token);

      toast.success("Login Successfull");
      dispatch(loginSuccess());
      navigate("/");
    } else {
      localStorage.clear();
      dispatch(clearLogin());
      toast.error(res?.data?.response?.data?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res?.data?.response?.data?.message);
    }

    setLoading(false);
  };
  return (
    <div className="container-parent">
      <div className="containerLand">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={frontImage} alt="" />
            <div className="text">
              <span className="text-1">
                Every new friend is a <br /> new adventure
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
        </div>
        <div className="forms" style={{ width: "50rem" }}>
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#" onSubmit={handleSubmit}>
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      name="email"
                      onBlur={handleBlur}
                      value={values.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      name="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  {/* <div className="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
