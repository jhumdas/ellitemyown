import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TrainingImg1 from "../Images/trainingimg1.png";
import ProfileImg1 from "../Images/profile1.png";
import ProfileImg2 from "../Images/profile2.png";
import ProfileImg3 from "../Images/profile3.png";
import ProfileImg4 from "../Images/profile4.png";
import Eventimg2 from "../Images/No-Image-Placeholder.png";
import TrainingImg2 from "../Images/trainingimg2.png";
import CreateModal from "./Modal/CreateModal";
import { getBillBoardData } from "../redux/slices/billBoardSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTrainingData } from "../redux/slices/trainingSlice";
import moment from "moment";
import { useAuthCtx } from "../context/AuthCtx";
import { toast } from "react-hot-toast";
import { ApiHelperFunction } from "../services/api/apiHelpers";
import { BASE_URL, API_ENDPOINT_PATH } from "../constants/config";
import TrainingModal from "../SeprateModal/TrainingModal";
import EditTrainingModal from "../SeprateModal/EditTrainingModal";
import { RWebShare } from "react-web-share";
import table_icon from "../Images/Icons/PNG/share-icon-elite-web.svg";

// const initialValues = {
//   eventName: "",
//   hostedBy: "",
//   eventDate: "",
//   name: "",
//   trainingDate: "",
//   editTrainingName: "",
//   editTraininDate: "",
// };

export default function TrainingCard() {
  // const [modala, setModala] = useState(false);
  const { userData, modalH, setModalH, modalI, setModalI, trainingData, setTrainingData, } = useAuthCtx();
  const [modalA, setModalA] = useState(false);
  // const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");


  const handleClick = (e, item, index) => {
    setModalId(item?._id);
    setModalA(true);
    setTrainingData(item);
  };

  const stopModal = (e) => {
    modalA && setModalA(false);
    // setModalId("");
    e.stopPropagation();
  };

  const dispatch = useDispatch();
  const traningData = useSelector((state) => state.traningData.trainings);

  const createModal = () => {
    setModalH(true);
  };

  useEffect(() => {
    dispatch(getTrainingData());
    // console.log("training",traningData)
  }, []);

  const handleDelete = async () => {
    const res = await ApiHelperFunction({
      urlPath: `/delete-training/${modalId}`,
      method: "PUT",
    });
    if (res?.status) {
      toast.success("Traning event deleted successfully");

      dispatch(getTrainingData());
      setModalA(false);
    } else {
      toast.error(res?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res);
    }
  };
  return (
    <>
      <section id="training_card" onClick={(e) => stopModal(e)}>
        <div className="top">
          <div className="head">
            <h4>Request</h4>
          </div>
          <div className="">
            {(userData?.userType === "Admin" ||
              userData?.userType === "Manager") && (
                <div className="tyEvMainDiv" onClick={createModal}>
                  <span className="tyEvIcon">
                    <i class="fa-solid fa-plus"></i>
                  </span>
                  {/* <p className="tyEvText">Training Name</p> */}
                </div>
              )}
          </div>
          <div>
            <Link to="/trainingDetails" className="seeAllAn">See All</Link>
          </div>
          {/* {(userData?.userType === "Admin" ||
            userData?.userType === "Manager") && (
            <div
              style={{ cursor: "pointer" }}
              className="crtu"
              onClick={createModal}
            >
              create
            </div>
          )} */}
        </div>

        <div className="bottom">
          {/* {(userData?.userType === "Admin" ||
            userData?.userType === "Manager") && (
              <div className="tyEvMainDiv" onClick={createModal}>
                <span className="tyEvIcon">
                  <i class="fa-solid fa-plus"></i>
                </span>
                <p className="tyEvText">Training Name</p>
              </div>
            )} */}
          {traningData?.map((item, index) => {
            return (
              <div
                className="card_area"
                style={{
                  marginBottom: "10px",
                  position: "relative",
                  marginTop: "10px",
                }}
              >
                <div className="image_area">
                  {item?.image ? (
                    <img src={item?.image} className="img-fluid" alt="event" />
                  ) : (
                    <img src={Eventimg2} className="img-fluid" alt="event" />
                  )}
                </div>
                <div className="details">
                  <div className="up">
                    <div className="name">
                      <h3>{item.name}</h3>
                    </div>
                    {userData?._id === item?.addedBy && (
                      <div
                        className="dot_btn"
                        onClick={(e) => handleClick(e, item, index)}
                        style={{
                          position: "relative",
                          zIndex: "2",
                          right: "0",
                          top: "0",
                        }}
                      >
                        <a to="/" className="btn">
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </a>
                        {modalId === item?._id && modalA && (
                          <div
                            style={{
                              position: "absolute",
                              backgroundColor: "#fff",
                              border: "none",
                              padding: "1px 9px",
                              cursor: "pointer",
                              right: "12px",
                              boxShadow: "0 0 0.1rem 0",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              top: "37px",
                              borderRadius: "5px"
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                            }}
                          >
                            <i
                              style={{ marginRight: "7px", fontSize: "14px" }}
                              class="fas fa-edit"
                              onClick={(e) => {
                                e.stopPropagation();
                                setModalA(false);
                                setModalI(true);
                              }}
                            ></i>
                            <i
                              style={{
                                margin: "3px",
                                fontSize: "14px",
                                color: "red",
                              }}
                              class="fa fa-trash"
                              aria-hidden="true"
                              onClick={handleDelete}
                            ></i>
                            {
                              (userData?.userType === "Admin") ? (<RWebShare
                                data={{
                                  text: `${item?.name}`,
                                  url: `${item?.link}`,
                                  title: "Share Training",
                                }}
                                // onClick={() =>
                                //   console.log("shared successfully!")
                                // }
                                sites={[
                                  "linkedin",
                                  "facebook",
                                  "twitter",
                                  "whatsapp",
                                  "mail",
                                  "copy",
                                ]}

                                // onClick={() => console.log("shared successfully!")}
                                onClick={(platform) => {
                                  if (platform === "copy") {
                                    // Copy to clipboard logic
                                    const textToCopy = `${item?.name}`;
                                    navigator.clipboard.writeText(textToCopy).then(() => {
                                      console.log("Text copied to clipboard:", textToCopy);
                                      // You can also show a notification or toast here
                                      toast.success("Text copied to clipboard!");
                                    });
                                  } else {
                                    // Handle other platforms
                                    console.log("Shared successfully on", platform);
                                  }
                                }}
                              >
                                <div className="shareimg">
                                  <img
                                    src={table_icon}
                                    alt="..."
                                    className="shareIconImg"
                                  />
                                  <span></span>
                                </div>
                              </RWebShare>) : ("")
                            }
                            {/* // <RWebShare
                            //   data={{
                            //     text: `${item?.name}`,
                            //     url: `${item?.link}`,
                            //     title: "Share Training",
                            //   }}
                            //   onClick={() =>
                            //     console.log("shared successfully!")
                            //   }
                            // >
                            //   <div className="shareimg">
                            //     <img
                            //       src={table_icon}
                            //       alt="..."
                            //       className="shareIconImg"
                            //     />
                            //     <span></span>
                            //   </div>
                            // </RWebShare> */}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* <div className="allPeoples">
                    <div className="d-flex align-items-center">
                      <div className="social_profile">
                        <img
                          src={ProfileImg1}
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                      <div
                        className="social_profile"
                        style={{ marginLeft: "-8px" }}
                      >
                        <img
                          src={ProfileImg2}
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                      <div
                        className="social_profile"
                        style={{ marginLeft: "-8px" }}
                      >
                        <img
                          src={ProfileImg3}
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                      <div
                        className="social_profile"
                        style={{ marginLeft: "-8px" }}
                      >
                        <img
                          src={ProfileImg4}
                          className="img-fluid"
                          alt="profile"
                        />
                      </div>
                      <div
                        className="blank_profile"
                        style={{
                          marginLeft: "-8px",
                          backgroundColor: "#FF5858",
                        }}
                      >
                        <Link to="/" className="btn">
                          4+
                        </Link>
                      </div>
                    </div>
                  </div> */}

                  <div className="date">
                    <p>Date: {moment(item?.endDate).format("YYYY-MM-DD")}</p>
                  </div>

                  <div className="time">
                    <p>Time: 12:00 PM</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section >
      {/* {modala && (
        <CreateModal
          closemodal={setModala}
          activity={"training"}
          initialValues={initialValues}
        />
      )} */}
      {/* {modala && (
        <TrainingModal
          closemodal={setModala}
          activity={"training"}
          initialValues={initialValues}
        />
      )} */}
      {/* {modalB && (
        <CreateModal
          closemodal={() => setModalB(false)}
          activity={"editTraining"}
          id={modalId}
          initialValues={trainingData}
        />
      )} */}
      {/* {modalB && (
        <EditTrainingModal
          closemodal={() => setModalB(false)}
          activity={"editTraining"}
      
          initialValues={trainingData}
        />
      )} */}
    </>
  );
}
