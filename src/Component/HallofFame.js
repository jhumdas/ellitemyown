import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HalloofImg from "../Images/halloof1.png";
import AlartIcon1 from "../Images/awyaicon1.png";
import ChatIcon from "../Images/chaticon.png";
import HalloofImg2 from "../Images/halloof2.png";
import AlartIcon2 from "../Images/awyaicon2.png";
import { useDispatch, useSelector } from "react-redux";
import {
  clearHallOfFame,
  getHallOfFame,
} from "../redux/slices/hallOffameSlice";
import { useAuthCtx } from "../context/AuthCtx";
import { BASE_URL, API_ENDPOINT_PATH } from "../constants/config";
import Eventimg2 from "../Images/No-Image-Placeholder.png";
import CreateModal from "./Modal/CreateModal";
import HallOfFrameModal from "./Modal/HallOfFrameModal";
import { getEmployeeData } from "../redux/slices/employeeSlice";
import moment from "moment";
import hallOfFrame from "../Images/Icons/PNG/Hall_of_fame.png"
import { ApiHelperFunction } from "../services/api/apiHelpers";

export default function HallofFame() {
  const [modalA, setModalA] = useState(false);


  const { userData, setModalK } = useAuthCtx();
  const hallFame = useSelector((state) => state?.hallOfFameSlice?.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(hallFame, "hallFameee")

  useEffect(() => {
    dispatch(getHallOfFame());
    dispatch(getEmployeeData());
  }, []);

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
    <>
      <section id="halloof_fame">
        <div className="top_area">
          <div className="head bulleBoardHead">
            <figure className="bulleBoardFig">
              <img src={hallOfFrame} alt="..." />
            </figure>
            <h4>Hall of Fame</h4>
          </div>
          <div className="">
            {userData?.userType === "Admin" || userData?.userType === "Manager" ? (
              <div className="tyEvMainDiv" onClick={() => setModalK(true)}>
                <span className="tyEvIcon">
                  <i class="fa-solid fa-plus"></i>
                </span>
                {/* <p className="tyEvText">Add Hall of Fame</p> */}
              </div>
            ) : (
              ""
            )}
          </div>
          <div>
            <Link to="/hallOfDetails" className="seeAllAn">
              See All
            </Link>
          </div>
          {/* {userData?.userType === 'Admin' && <div className='add_employee'>
                        
                        <button type=''  className='btn'><a href='/employees'>Add Employee</a></button>
                    </div>} */}
        </div>
        <div className="bottom_area">
          {/* {userData?.userType === "Admin" && (
            <div className="main">
              <button type="" className="add_img_btn">
                <i className="fa-solid fa-plus"></i>
                <input
                  type="file"
                  className="form-control"
                  id=""
                  aria-describedby=""
                  placeholder=""
                />
              </button>

              <div className="typename form-group m-0">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  aria-describedby="textHelp"
                  placeholder="Type name"
                />
              </div>
            </div>
          )} */}
          {/* {userData?.userType === "Admin" || userData?.userType === "Manager" ? (
            <div className="tyEvMainDiv" onClick={() => setModalK(true)}>
              <span className="tyEvIcon">
                <i class="fa-solid fa-plus"></i>
              </span>
              <p className="tyEvText">Add Hall of Fame</p>
            </div>
          ) : (
            ""
          )} */}


          {/* <div className="tyEvMainDiv" onClick={() => setModalK(true)}>
            <span className="tyEvIcon">
              <i class="fa-solid fa-plus"></i>
            </span>
            <p className="tyEvText">Type Hall of Fame</p>
          </div> */}
          {/* {
            employeeData?.map((item, ind) => {
              return (
                <div className="profile_img">
                  {item?.image ? (
                    <img
                      src={BASE_URL + "/" + item?.image}
                      className="img-fluid"
                      alt="event"
                    />
                  ) : (
                    <img src={Eventimg2} className="img-fluid" alt="" />
                  )}
                </div>
              )
            })
          } */}

          {hallFame?.map((item, index) => {
            return (
              <div className="main" key={index} >
                <div className="profile_img" onClick={() => AnotherProfile(item?.userId)}>
                  {item?.userImage ? (
                    <img
                      src={item?.userImage}
                      className="img-fluid"
                      alt="profile"
                    />
                  ) : (
                    <img src={Eventimg2} className="img-fluid" alt="profile" />
                  )}
                </div>

                <div className="details_area">
                  <div className="name">
                    <div className="d-flex justify-content-between" onClick={() => AnotherProfile(item?.userId)}>
                      <h4>{item?.name}</h4>
                      {/* <div className="icon">
                        <img
                          src={AlartIcon1}
                          className="img-fluid"
                          alt="icon"
                        />
                      </div> */}
                      {/* <span className="halOfDateText">Dec - 2023</span> */}
                      <span className="halOfDateText">{moment(item?.createdOn).format("MMM-YYYY")}</span>
                    </div>
                    {/* <div>
                      <p>{moment(item?.createdOn).format("YYYY-MM-DD")}</p>
                    </div> */}
                    {/* <p>{item?.userType}</p> */}
                  </div>
                  {/* <div className="chat_icon">
                    <Link to="/" className="btn">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </Link>
                  </div> */}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
