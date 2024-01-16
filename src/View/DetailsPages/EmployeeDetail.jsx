import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useAuthCtx } from "../../context/AuthCtx";
import { getEmployeeData } from "../../redux/slices/employeeSlice";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import toast from "react-hot-toast";
import { getHallOfFame } from "../../redux/slices/hallOffameSlice";
import { BASE_URL, API_ENDPOINT_PATH } from "../../constants/config";
import ProfileImg1 from "../../Images/No-Image-Placeholder.png";
import AlartIcon1 from "../../Images/awyaicon1.png";
import AlartIcon2 from "../../Images/awyaicon2.png";
import askhr from "../../Images/Icons/PNG/Ask_HR.png"
import { Link, useNavigate } from "react-router-dom";

function EmployeeDetail() {
  const navigate = useNavigate();
  const loadingStatus = useSelector((state) => state.employeeSlice.isLoading);
  const { setLoading, userData, getUserDetails } = useAuthCtx();
  const [employeeName, setEmployeeName] = useState("");
  const [message, setMessage] = useState("");
  const [searching, setSearching] = useState(false);

  // const [employeeData, setEmployeeData] = useState([]);
  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.employeeSlice.employee);

  console.log("employeeData", employeeData);

  useEffect(() => {
    dispatch(getEmployeeData());
    getUserDetails();
  }, []);
  // useEffect(() => {
  //   setLoading(loadingStatus);
  // }, [loadingStatus]);

  // useEffect(() => {
  //   let debounce = setTimeout(() => {
  //     searchEmployee();
  //   }, 400)

  //   return (() => clearTimeout(debounce))
  // }, [employeeName])

  const searchEmployee = async () => {
    // setSearching(true);
    // let response = await ApiHelperFunction({
    //   urlPath: "/search-employees", method: 'POST', data: {
    //     searchName: employeeName
    //   }
    // })
    // if (response?.status) {
    //   setEmployeeData(response?.data?.data);
    //   if (employeeData.length === 0) {
    //     setMessage('No employee found!');
    //   }
    // } else {
    //   toast.error('Something went wrong')
    // }
    // setSearching(false);
  };

  const addHallOfFame = async (id) => {
    const response = await ApiHelperFunction({
      urlPath: `/set-in-hallfame-employees/${id}`,
      method: "PUT",
    });

    if (response.status === 200) {
      dispatch(getHallOfFame());
      dispatch(getEmployeeData());
    } else {
      toast.error(response?.response?.data?.message);
    }
  };

  const AnotherProfile = async (userID) => {

    if (userID == userData?._id) {
      // console.log(userID,userData,"uikodc")
      navigate("/profile");
    } else {
      let response = await ApiHelperFunction({ urlPath: `/get-others-profile/${userID}`, method: "GET" })
      if (response && response?.status) {
        console.log("RESPONSE", response?.data?.data);
        let data = response?.data?.data;
        response && navigate("/Profile_rating", {
          state: {
            data
          }
        })
      } else {
        // toast.error('Error to fetching another profile data')
      }
    }
  }

  return (
    <section className="bulleDetail">
      <div className="container">
        <div className="row">
          <div className="col">
            <section id="employees_card">
              <div className="top">
                <div className="head bulleBoardHead">
                  <figure className="bulleBoardFig">
                    <img src={askhr} alt="..." />
                  </figure>
                  <h4>Employees</h4>
                  <div className="tyEvMainDiv" style={{ marginLeft: "10px" }}>
                    <span className="tyEvIcon">
                      <i class="fa-solid fa-plus"></i>
                    </span>
                    {/* <p className="tyEvText">Add Employee</p> */}
                  </div>
                </div>
                <div>
                  <Link to="/" className="backHomeBtn">
                    {/* <i class="fa-solid fa-house-chimney"></i> */}
                    Back
                  </Link>
                </div>
              </div>
              <div className="bottom employebootom">
                {/* <div className="tyEvMainDiv">
                  <span className="tyEvIcon">
                    <i class="fa-solid fa-plus"></i>
                  </span>
                  <p className="tyEvText">Add Employee</p>
                </div> */}
                {employeeData?.length > 0 ? (
                  searching ? (
                    <p>Searching.....</p>
                  ) : (
                    employeeData?.map((item, index) => {
                      return (
                        <div className="left_hallofarea" style={{ marginBottom: "25px" }}>
                          <div className="">
                            <div className="profile_img" onClick={() => AnotherProfile(item?._id)}>
                              {item?.image ? (
                                <img
                                  src={item?.image}
                                  className="img-fluid"
                                  alt="profile"
                                />
                              ) : (
                                <img
                                  src={ProfileImg1}
                                  className="img-fluid"
                                  alt="profile"
                                />
                              )}
                            </div>
                            <div className="details" style={{ marginTop: "10px" }} onClick={() => AnotherProfile(item?._id)}>
                              <h4>{`${item?.firstName} ${item?.lastName}`}</h4>
                              <p style={{ textAlign: "center" }}>{item.userType}</p>
                            </div>
                          </div>
                          {/* <div className="right_area">
                            {userData?.userType === "Admin" ? (
                              item?.isHallFame ? (
                                <img
                                  src={AlartIcon1}
                                  className="img-fluid"
                                  alt="icon"
                                  onClick={() => addHallOfFame(item?._id)}
                                />
                              ) : (
                                <img
                                  src={AlartIcon2}
                                  className="img-fluid"
                                  alt="icon"
                                  onClick={() => addHallOfFame(item?._id)}
                                />
                              )
                            ) : (
                              ""
                            )}

                            <div className="chat_btn">
                              <button type="" className="btn">
                                <i className="fa-regular fa-comment-dots"></i>
                              </button>
                            </div>
                            <div className="show active"></div>
                          </div> */}
                        </div>
                      );
                    })
                  )
                ) : (
                  <p style={{ color: "red" }}>{message}</p>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmployeeDetail;
