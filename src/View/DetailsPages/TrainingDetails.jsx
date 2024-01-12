import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProfileImg1 from "../../Images/profile1.png";
import ProfileImg2 from "../../Images/profile2.png";
import ProfileImg3 from "../../Images/profile3.png";
import ProfileImg4 from "../../Images/profile4.png";
import Eventimg2 from "../../Images/No-Image-Placeholder.png";
import CreateModal from "../../Component/Modal/CreateModal";
import { useDispatch, useSelector } from "react-redux";
import { getTrainingData } from "../../redux/slices/trainingSlice";
import moment from "moment";
import { useAuthCtx } from "../../context/AuthCtx";
import { toast } from "react-hot-toast";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import EditTrainingModal from "../../SeprateModal/EditTrainingModal";
import { RWebShare } from "react-web-share";
// import table_icon from "../../Images/table_icon.png";
import table_icon from "../../Images/Icons/PNG/share-icon-elite-web.svg";

const initialValues = {
  eventName: "",
  hostedBy: "",
  eventDate: "",

  link: "",
  name: "",
  trainingDate: "",
  editTrainingName: "",
  editTraininDate: "",
};

export default function TrainingDetails() {
  const [modala, setModala] = useState(false);
  const { userData } = useAuthCtx();
  const [modalA, setModalA] = useState(false);
  const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");
  const [trainingData, setTrainingData] = useState({});

  const handleClick = (e, item, index) => {
    setModalId(item?._id);
    setModalA(true);
    setTrainingData(item);
  };

  const stopModal = (e) => {
    modalA && setModalA(false);
    e.stopPropagation();
  };

  const dispatch = useDispatch();
  const traningData = useSelector((state) => state.traningData.trainings);

  const createModal = () => {
    setModala(true);
  };

  useEffect(() => {
    dispatch(getTrainingData());
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
    <section className="bulleDetail">
      <div className="container">
        <div className="row">
          <div className="col">
            <section id="training_card" onClick={(e) => stopModal(e)}>
              <div className="top">
                <div className="head" style={{ display: "flex", alignItems: "center" }}>
                  <h4>Request</h4>
                  <div className="" style={{ marginLeft: "10px" }}>
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


                </div>

                <div>
                  <Link to="/" className="backHomeBtn">
                    {/* <i class="fa-solid fa-house-chimney"></i> */}
                    Back
                  </Link>
                </div>
              </div>

              <div className="bottomtrainin">
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
                      className="card_area card_area_dtlstraing"
                      style={{
                        marginBottom: "7px",
                        position: "relative",
                        marginTop: "7px",
                      }}
                    >
                      <div className="image_area">
                        {item?.image ? (
                          <img
                            src={item?.image}
                            className="img-fluid"
                            alt="event"
                          />
                        ) : (
                          <img
                            src={Eventimg2}
                            className="img-fluid"
                            alt="event"
                          />
                        )}
                        <div className="view_dotsabs">
                          <div className="">
                            {userData?._id === item?.addedBy && (
                              <div
                                className="dot_btn"
                                onClick={(e) => handleClick(e, item, index)}
                                style={{
                                  position: "absolute",
                                  zIndex: "2",
                                  right: "0",
                                  top: "0",
                                }}
                              >
                                <a to="/" className="btn" style={{ color: "#fff" }}>
                                  <i className="fa-solid fa-ellipsis-vertical"></i>
                                </a>
                                {modalId === item?._id && modalA && (
                                  <div
                                    style={{
                                      position: "absolute",
                                      // overflow: "hidden",
                                      backgroundColor: "#fff",
                                      right: "4px",
                                      padding: "3px",
                                      border: "none",
                                      // top: "123px",
                                      padding: "3px 10px 4px 10px",
                                      // marginLeft: "-27px",
                                      borderRadius: "4px",
                                      cursor: "pointer",
                                      display: "flex",
                                      alignItems: "center",

                                      boxShadow: "0 0 5px 0 #ccc",
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                    }}
                                  >
                                    <i
                                      style={{
                                        marginRight: "7px",
                                        fontSize: "14px",
                                      }}
                                      class="fas fa-edit"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setModalA(false);
                                        setModalB(true);
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

                                    {userData?.userType === "Admin" ? (
                                      <RWebShare
                                        data={{
                                          text: `${item?.name}`,
                                          url: `${item?.link}`,
                                          title: "Share Training",
                                        }}
                                        onClick={() =>
                                          console.log("shared successfully!")
                                        }
                                      >
                                        <div className="shareimg" style={{ width: "24px", height: "24px", color: "#fff" }}>
                                          <img
                                            src={table_icon}
                                            alt="..."
                                            className="shareIconImg"

                                          />
                                          <span></span>
                                        </div>
                                      </RWebShare>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="details">
                        <div className="up">
                          <div className="name">
                            <h3>{item.name}</h3>
                          </div>
                          {/* {userData?._id === item?.addedBy && (
                            <div
                              className="dot_btn"
                              onClick={(e) => handleClick(e, item, index)}
                              style={{
                                position: "absolute",
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
                                    position: "relative",
                                    // overflow: "hidden",
                                    backgroundColor: "#fff",
                                    padding: "3px",
                                    border: "none",
                                    // top: "123px",
                                    padding: "3px 8px",
                                    marginLeft: "-27px",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",

                                    boxShadow: "0 0 0.1rem 0",
                                  }}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                  }}
                                >
                                  <i
                                    style={{
                                      marginRight: "7px",
                                      fontSize: "14px",
                                    }}
                                    class="fas fa-edit"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setModalA(false);
                                      setModalB(true);
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

                                  {userData?.userType === "Admin" ? (
                                    <RWebShare
                                      data={{
                                        text: `${item?.name}`,
                                        url: `${item?.link}`,
                                        title: "Share Training",
                                      }}
                                      onClick={() =>
                                        console.log("shared successfully!")
                                      }
                                    >
                                      <div className="shareimg">
                                        <img
                                          src={table_icon}
                                          alt="..."
                                          className="shareIconImg"
                                        />
                                        <span></span>
                                      </div>
                                    </RWebShare>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              )}
                            </div>
                          )} */}
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
                          <p>
                            Date: {moment(item?.endDate).format("YYYY-MM-DD")}
                          </p>
                        </div>

                        <div className="time">
                          <p>Time: 12:00 PM</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
            {modala && (
              <CreateModal
                closemodal={setModala}
                activity={"training"}
                initialValues={initialValues}
              />
            )}
            {/* {modalB && (
              <CreateModal
                closemodal={() => setModalB(false)}
                activity={"editTraining"}
                id={modalId}
                initialValues={trainingData}
              />
            )} */}
            {modalB && (
              <EditTrainingModal
                closemodal={() => setModalB(false)}
                activity={"editTraining"}
                id={modalId}
                initialValues={trainingData}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
