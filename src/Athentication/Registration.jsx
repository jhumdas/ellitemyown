import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from 'yup'

import MainLoader from "../Component/Loaders/MainLoader";

import AlertScreen from "../Component/AlertScreens/AlertScreen";
import { useAuthCtx } from "../context/AuthCtx";
import { useFormik } from "formik";

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const mobileRegex = /^[0]?[6789]\d{9}$/;
const nameRegex =
  /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;

const INITIAL = {
  // Contact details
  email: "",
  phoneNo: "",
  firstName:'',
  lastName:'',
  password:'',
  cpassword:'',
  userType:'',
};

export default function Registration() {
  const navigate = useNavigate();
  const [regData, setRegData] = useState(JSON.parse(JSON.stringify(INITIAL)));

  const [subscriptions, setSubscriptions] = useState([]);
  const [subscriberTypes, setSubscriberTypes] = useState([]);
  const [formNum, setFormNum] = useState(0);
  const { registerUser, loading, setLoading } = useAuthCtx();

  const filteredSubscriptions =
    regData?.subscriberTypeName === "Financial Advisor"
      ? subscriptions?.filter((item) => item.name !== "Free Subscription")
      : subscriptions;

 //validation schema
 const signUpSchema=Yup.object({
  firstName: Yup.string().matches(/^[A-Za-z]+$/, 'First Name must not contain special characters').min(2).max(10).required("Please enter your first name"),
  lastName:Yup.string().matches(/^[a-zA-Z]+$/, 'Last Name must not contain special characters').min(2).max(10).required("Please enter your last name"),
  phoneNo:Yup.string().min(10,"Password Must be 10 Digits").required('Enter Valid Mobile Number'),
  email:Yup.string().email().required('Please enter valid email address'),
  password:Yup.string().min(8,"Password length must be atleast 8 characters").required('Password is Required'),
  cpassword:Yup.string().required('Password is Required').oneOf([Yup.ref('password'),null],"Password and Current Password Must Match")
 })

  //formik
    const {values,errors,handleBlur,handleChange,handleSubmit,resetForm}=useFormik({
      initialValues:INITIAL,
      onSubmit:(values)=>{
        submitHandler(values);
      },
      validationSchema:signUpSchema
    })

  

  //@ Submit Handler
  const submitHandler = async (e, selectedSubscription) => {
    
    if (loading) return;

    const data = {...values,userType:'User'}
    console.log("Validity", data);

    try {
      setLoading(true);
      const res = await registerUser(data);
      if (res && res?.status) {
        setRegData(JSON.parse(JSON.stringify(INITIAL)));
        setFormNum(2);
      } else {
        if (res?.error?.parent?.detail.includes("already exists")) {
          toast.error("Email Already Exists");
        } else {
          toast.error(res?.message || "Something went wrong");
          console.log("ERROR CREATING USER3", res);
        }
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
      console.log("ERROR CREATING USER2", error);
    }
    setLoading(false);
  };

  // ! Contact form
  const contactForm = (
    <div className="register-form">
      <div style={{ textAlign: "center" }}>
        <h1>Registration</h1>
      </div>

      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          value={values.firstName}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="First Name"
          className="form-control"
          id="firstName"
          autoComplete="off"
        />
        <p style={{color:"red"}}>{errors.firstName}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Last Name"
          className="form-control"
          id="lastName"
          autoComplete="off"
        />
        <p style={{color:"red"}}>{errors.lastName}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          autoComplete="off"
        />
        <p style={{color:"red"}}>{errors.email}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNo" className="form-label">
          Mobile Number
        </label>
        <input
          type="number"
          name="phoneNo"
          value={values.phoneNo}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="form-control"
          id="phoneNo"
          autoComplete="off"
        />
        <p style={{color:"red"}}>{errors.phoneNo}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Password"
          className="form-control"
          id="password"
          autoComplete="off"
        />
        <p style={{color:"red"}}>{errors.password}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="cpassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          name="cpassword"
          value={values.cpassword}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Confirm Password"
          className="form-control"
          id="cpassword"
          autoComplete="off"
        />
        <p style={{color:"red"}}>{errors.cpassword}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="userType" className="form-label">
          User Type
        </label>
        <select
          className="custom-select"
          id="userType"
          onChange={handleChange}
          value={values.userType}
          name="userType">
          <option value={''} disabled={true} key={0}>
            Select User type
          </option>
          <option value="User">User</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      <div>
        <p className="register-text">
          Already have an account !{" "}
          <span
            onClick={() => {
              navigate("/login");
            }}
          >
            {" "}
            Sign In{" "}
          </span>
        </p>
      </div>

      <div
        className="mb-3"
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <button
          type="submit"
          className="btn btn-primary"
          
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );

  return (
    <>
      {formNum === 2 && (
        <AlertScreen
          confirmationText="Registration Successfull"
          navigateLink={`/login`}
          btnText="Go to Login Page"
        />
      )}

      {formNum !== 2 && (
        <div className="register">
          <div>
            <div>
              {/* <img src={logo} alt="logo" height={'100px'} width={'90px'} /> */}

              <div />
              <div>
                <>
                  <div className="">
                    <div>
                      <form autoComplete="off" onSubmit={handleSubmit}>
                        {formNum === 0 && contactForm}
                      </form>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
