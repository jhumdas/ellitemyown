import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Eventimg2 from "../../Images/No-Image-Placeholder.png";
import CreateModal from "../../Component/Modal/CreateModal";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useAuthCtx } from "../../context/AuthCtx";
// Constants
import { toast } from "react-toastify";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { getEventData } from "../../redux/slices/eventSlice";
import EditEventModal from "../../SeprateModal/EditEventModal";
import Event_View from "../../Images/Icons/PNG/Event_View.png";

const initialValues = {
  eventName: "",
  hostedBy: "",
  eventDate: "",
  name: "",
  trainingDate: "",
  editTrainingName: "",
  editTraininDate: "",
};

export default function EventsDeails() {
  const [modala, setModala] = useState(false);
  const [modalA, setModalA] = useState(false);
  const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");
  const [BulletinBoardSingleData, setBulletinBoardSingleData] = useState({});
  const [top, setTop] = useState(null);
  const [left, setLeft] = useState(null);
  const dispatch = useDispatch();
  const billBoardData = useSelector((state) => state.eventSlice?.event);
  const createModal = () => {
    setModala(true);
  };
  const { userData } = useAuthCtx();

  const handleClick = (e, ele, index) => {
    setModalId(ele._id);
    // console.log("EVENT", e, index);
    setBulletinBoardSingleData(ele);
    // console.log("s", e, ele);
    setTop(e.clientY);
    setLeft(e.clientX);
    setModalA(!modalA);
  };

  useEffect(() => {
    dispatch(getEventData());
    // console.log("bill", billBoardData);
  }, []);

  const stopModal = (e) => {
    modalA && setModalA(false);
    // setModalId("");
    e.stopPropagation();
  };

  const handleDelete = async () => {
    const res = await ApiHelperFunction({
      urlPath: `/delete-event/${modalId}`,
      method: "DELETE",
    });
    if (res?.status) {
      toast.success("Event deleted successfully");

      dispatch(getEventData());
      setModalA(false);
    } else {
      toast.error(res?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res);
    }
  };
  return (
    <section className="bulleDetail eventDetailsSection">
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              className="bulletin_board"
              // style={{ overflow: modalA ? "hidden" : "" }}
              onClick={(e) => stopModal(e)}
              id="eventsBulle"
            >
              <div className="top">
                <div className="head bulleBoardHead">
                  <figure className="bulleBoardFig">
                    <img src={Event_View} alt="..." />
                  </figure>

                  <h4>Events</h4>
                  <div className="" style={{ marginLeft: "15px" }}>
                    {(userData?.userType === "Admin" || userData?.userType === "Manager") ? (
                      <div className="tyEvMainDiv" onClick={createModal}>
                        <span className="tyEvIcon">
                          <i class="fa-solid fa-plus"></i>
                        </span>
                        {/* <p className="tyEvText">Add Event</p> */}
                      </div>
                    ) : (<></>)}
                  </div>
                </div>
                <div>
                  <Link to="/" className="backHomeBtn">
                    {/* <i class="fa-solid fa-house-chimney"></i> */}
                    Back
                  </Link>
                </div>
              </div>
              <div className="eventbottom">
                {/* {(userData?.userType === "Admin" || userData?.userType === "Manager")? (
                  <div className="tyEvMainDiv" onClick={createModal}>
                    <span className="tyEvIcon">
                      <i class="fa-solid fa-plus"></i>
                    </span>
                    <p className="tyEvText">Add Event</p>
                  </div>
                ):(<></>)} */}
                {billBoardData.length > 0 ? (
                  billBoardData?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="card_area card_area_event"
                        style={{
                          marginBottom: "15px",
                          background: "#EAEBFB",
                          position: "relative",
                          marginTop: "10px",
                        }}
                      >
                        <div className="event_img">
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
                            <div className="dotthree">
                              {userData?._id === item?.addedBy && (
                                <div
                                  className="dot_btn"
                                  onClick={(e) => handleClick(e, item, index)}
                                  style={{
                                    position: "relative",
                                    zIndex: "2",
                                    right: "0px",
                                    top: "0px",

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
                                        padding: "3px",
                                        border: "none",
                                        // top: "123px",
                                        padding: "3px 8px",
                                        marginLeft: "-27px",
                                        borderRadius: "4px",
                                        cursor: "pointer",
                                        boxShadow: "0 0 0.1rem 0",
                                        color: "#fff",
                                      }}
                                    >
                                      <i
                                        style={{
                                          marginRight: "7px",
                                          fontSize: "14px",
                                          color:"#000"
                                        }}
                                        class="fas fa-edit"
                                        onClick={() => setModalB(true)}
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
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                            <div className="dotbtnplus" style={{color:"#fff",cursor:"pointer"}}>
                              {item?.isHighLighted === "yes" ? "+" : ""}
                            </div>
                          </div>
                        </div>
                        <div className="event_details">
                          <div
                            className="d-flex justify-content-between"
                            // style={{ marginBottom: "9px" }}
                          >
                            <div className="head">
                              <h2>{item.eventName}</h2>
                            </div>
                            {/* {userData?._id === item?.addedBy && (
                              <div
                                className="dot_btn"
                                onClick={(e) => handleClick(e, item, index)}
                                style={{
                                  position: "absolute",
                                  zIndex: "2",
                                  right: "-4px",
                                  top: "9px",
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
                                      boxShadow: "0 0 0.1rem 0",
                                    }}
                                  >
                                    <i
                                      style={{
                                        marginRight: "7px",
                                        fontSize: "14px",
                                      }}
                                      class="fas fa-edit"
                                      onClick={() => setModalB(true)}
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
                                  </div>
                                )}
                              </div>
                            )} */}
                            {/* {item?.isHighLighted === "yes" ? "+" : ""} */}
                          </div>
                          <div className="hosted">
                            <p>Hosted by {item.hostedBy}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <div className="date">
                              <p>
                                Date:{" "}
                                {moment(item.eventDate).format("YYYY-MM-DD")}
                              </p>
                            </div>
                            {/* <div className="time">
                      <p>Time: 5:30 PM </p>
                    </div> */}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>No data to show!</p>
                )}
              </div>
            </div>
            {/* 
            {modalB && (
              <CreateModal
                closemodal={setModalB}
                activity={"editEvent"}
                BulletinBoardSingleData={BulletinBoardSingleData}
                id={modalId}
                initialValues={BulletinBoardSingleData}
              />
            )} */}

            {modalB && (
              <EditEventModal
                closemodal={setModalB}
                activity={"editEvent"}
                BulletinBoardSingleData={BulletinBoardSingleData}
                id={modalId}
                initialValues={BulletinBoardSingleData}
              />
            )}

            {modala && (
              <CreateModal
                closemodal={setModala}
                activity={"events"}
                initialValues={initialValues}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
