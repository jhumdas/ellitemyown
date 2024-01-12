import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useAuthCtx } from "../../../context/AuthCtx";
import { ToastBar, toast } from "react-hot-toast";
import {
  ApiHelperFunction,
  fileUpload,
} from "../../../services/api/apiHelpers";
import { useDispatch } from "react-redux";

// Constants
import { BASE_URL } from "../../../constants/config";
import moment from "moment";
import Select from "react-select";
import { getEmployeeData } from "../../../redux/slices/employeeSlice";

const CreateModal = ({ closemodal, initialValues, getEmployeeDetails }) => {
  const { setLoading, loading } = useAuthCtx();
  const [imageURL, setImageURL] = useState("");
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState("");
  const { userData, getUserDetails } = useAuthCtx();
  const [managerData, setManagerData] = useState([]);
  // const [managerIds,setManagerIds]=useState([]);
  const [managerDetails, setManagerDetails] = useState([]);
  const { managerMessage, setManagerMessage } = useState("");

  // console.log("ImageURL", imageURL);

  const dispatch = useDispatch();

  const handleMangeerChange = (val) => {
    // console.log("Manager",val)
    let managerIds = val?.map((item, index) => item?.value);
    setManagerDetails(managerIds);
  };

  const getManagerDetails = async () => {
    const res = await ApiHelperFunction({
      urlPath: "/view-all-manager",
      method: "GET",
    });
    if (res?.status) {
      setManagerData(res?.data?.data);
    } else {
      toast.error(res?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res);
    }
  };

  const handleImageChange = async (e) => {
    let image = e.target.files[0];
    setUploading(true);

    const form = new FormData();
    form.append("image", image);

    let res = await fileUpload("/image-upload", "POST", form);

    if (res.status) {
      toast.success("Image uploaded successfully");
      setImageURL(res?.data);
    } else {
      toast.error("Error uploading image");
    }
    setUploading(false);
  };

  useEffect(() => {
    // setImageURL(userData?.image);
    window.scrollTo({ top: 0 });
    document.documentElement.style.overflowY = "hidden";
    getManagerDetails();
    getUserDetails();
    setManagerDetails([]);
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);
  const schemaCheck = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    cpassword: Yup.string()
      .required("Password is required")
      .oneOf([Yup.ref("password"), null]),
    userType: Yup.string().required("Select user type"),
    phoneNo: Yup.number().required("Enter phone number"),
  });
  console.log("ManagerLemgth", managerDetails);
  //@ Submit Handler
  const submitHandler = async (e, selectedSubscription) => {
    if (loading) return;

    setLoading(true);
    let data = { ...values, managedBy: managerDetails };
    data = { ...data, companyCode: userData?.companyCode };
    data = { ...data, image: imageURL };
    // console.log("data",data)

    const res = await ApiHelperFunction({
      urlPath: "/user-type-admin-add-epm",
      method: "POST",
      data,
    });
    if (res?.status) {
      toast.success("Employee added  successfully");
      resetForm();
      closemodal();
      getEmployeeDetails();
    } else {
      toast.error(res?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res);
    }

    setLoading(false);
  };

  const { values, errors, handleBlur, handleSubmit, resetForm, handleChange } =
    useFormik({
      initialValues,
      onSubmit: (e) => {
        submitHandler(e);
      },
      validationSchema: schemaCheck,
    });
  // console.log("values123",userData?.companyCode)
  return (
    <>
      <div className="createmodal_main">
        <div className="create_modal">
          <div className="Create_overlay"></div>

          <div className="create_modal_content">
            <div className="close_icon" onClick={() => closemodal()}>
              <i
                class="fa-solid fa-xmark"
                style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
              ></i>
            </div>

            <div
              className="frm_own"
              style={{
                width: "100%",
                height: "30rem",
                overflowY: "auto",
                padding: "2rem",
              }}
            >
              <h4 style={{ marginBottom: "1rem" }}>Add Employee</h4>
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <label for="manager">Manager Name</label>
                      <Select
                        id="managedBy"
                        name="managedBy"
                        isMulti
                        // value={{
                        //   label: managerDetails.managerName,
                        //   value: managerDetails.managedBy,
                        // }}
                        onChange={(val) => handleMangeerChange(val)}
                        options={managerData?.map((item, index) => {
                          return {
                            label: item?.firstName + " " + item?.lastName,
                            value: item?._id,
                          };
                        })}
                      />
                      {managerDetails?.length === 0 && (
                        <small id="emailHelp" style={{ color: "red" }}>
                          select a manager
                        </small>
                      )}
                    </div>
                    {/* <div className="col-md-6">
                      <label for="eventName">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="eventName"
                        aria-describedby="emailHelp"
                        placeholder="Last Name"
                        value={values.lastName}
                        name="lastName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.lastName}
                      </small>
                    </div> */}
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label for="eventName">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="eventName"
                        aria-describedby="emailHelp"
                        placeholder="First Name"
                        value={values.firstName}
                        name="firstName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.firstName}
                      </small>
                    </div>
                    <div className="col-md-6">
                      <label for="eventName">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="eventName"
                        aria-describedby="emailHelp"
                        placeholder="Last Name"
                        value={values.lastName}
                        name="lastName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.lastName}
                      </small>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label for="eventName">User Type</label>
                      <select
                        type="text"
                        class="form-control"
                        id="eventName"
                        aria-describedby="emailHelp"
                        // placeholder="First Name"
                        value={values.userType}
                        name="userType"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      >
                        <option value="">Select user type</option>
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                      </select>
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.userType}
                      </small>
                    </div>
                    <div className="col-md-6">
                      <label for="eventName">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="eventName"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.email}
                      </small>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label for="eventName">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="eventName"
                        aria-describedby="emailHelp"
                        placeholder="Password"
                        value={values.password}
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.password}
                      </small>
                    </div>
                    <div className="col-md-6">
                      <label for="eventName">Confirm Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="eventName"
                        aria-describedby="emailHelp"
                        placeholder="Password"
                        value={values.cpassword}
                        name="cpassword"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />

                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.cpassword}
                      </small>
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label for="eventName">Phone No.</label>
                    <input
                      type="number"
                      class="form-control"
                      id="eventName"
                      aria-describedby="emailHelp"
                      placeholder="Phone No."
                      value={values.phoneNo}
                      name="phoneNo"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />

                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.phoneNo}
                    </small>
                  </div>
                </div>
                <div class="form-group">
                  <label for="hostedBy">Image</label>
                  <input
                    type="file"
                    class="form-control"
                    id="hostedBy"
                    placeholder="Choose a photo"
                    value={image}
                    name="hostedBy"
                    onBlur={handleBlur}
                    onChange={handleImageChange}
                  />
                  <small id="emailHelp" style={{ color: "red" }}>
                    {errors.image}
                  </small>
                  {uploading ? <p>image uploading......</p> : null}
                  {imageURL !== "" && (
                    <div style={{ display: "flex" }}>
                      <img
                        style={{ marginTop: "1rem" }}
                        src={BASE_URL + "/" + imageURL}
                        alt=""
                        height="100rem"
                        width="100rem"
                      />
                      <div
                        onClick={() => {
                          setImageURL("");
                          setImage("");
                        }}
                      >
                        <i
                          class="fa-solid fa-xmark"
                          style={{
                            color: "red",
                            fontSize: "2rem",
                            cursor: "pointer",
                          }}
                        ></i>
                      </div>
                    </div>
                  )}
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateModal;
