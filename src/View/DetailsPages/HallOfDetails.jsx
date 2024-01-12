import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AlartIcon1 from "../../Images/awyaicon1.png";
import { useDispatch, useSelector } from "react-redux";
import { getHallOfFame } from "../../redux/slices/hallOffameSlice";
import { useAuthCtx } from "../../context/AuthCtx";
import { BASE_URL } from "../../constants/config";
import Eventimg2 from "../../Images/No-Image-Placeholder.png";
import hallOfPic from "../../Images/Icons/PNG/Hall_of_fame.png";
import "./Details.css";
import moment from "moment";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
import EditHallOfFame from "../../SeprateModal/EditHallOfFame";
import CreateModal from "../../Component/Modal/CreateModal";
import HallOfFrameModal from "../../Component/Modal/HallOfFrameModal";

export default function HallOfDetails() {
  const initialValues = {
    name: "",
    userId: "",
    reason: "",
  };

  const { userData, setModalK, HallfameSingleData1 } = useAuthCtx();
  const [modala, setModala] = useState(false);
  const [modalA, setModalA] = useState(false);
  const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");
  const [hallOfFameData, setHallOfFameData] = useState({});
  const [top, setTop] = useState(null);
  const [left, setLeft] = useState(null);
  const [singleHallFameData, setSingleHallFame] = useState({});

  const hallFame = useSelector((state) => state?.hallOfFameSlice?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHallOfFame());
  }, []);

  // const createmodal = () => {
  //   setModalK(true);
  // };

  const createModal = () => {
    setModala(true);
  };

  const stopModal = (e) => {
    modalA && setModalA(false);
    // setModalId("");
    e.stopPropagation();
  };

  const handleClick = (e, ele, index) => {
    setModalId(ele._id);
    // console.log("EVENT", e, index);
    setHallOfFameData(ele);
    // console.log("s", e, ele);
    setTop(e.clientY);
    setLeft(e.clientX);
    setModalA(!modalA);
    setSingleHallFame(ele);
  };

  const handleDelete = async () => {
    const res = await ApiHelperFunction({
      urlPath: `/delete-hallfame/${modalId}`,
      method: "PUT",
    });
    if (res?.status) {
      toast.success("Hall of Fame is deleted successfully");

      dispatch(getHallOfFame());
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
            <section id="halloof_fame" onClick={(e) => stopModal(e)}>
              <div className="top_area">
                <div className="head bulleBoardHead">
                  <figure className="bulleBoardFig">
                    <img src={hallOfPic} alt="..." />
                  </figure>
                  <h4>Hall of Fame</h4>
                  <div className="" style={{marginLeft:"10px"}}>
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
                </div>
                <div>
                  <Link to="/" className="backHomeBtn">
                    {/* <i class="fa-solid fa-house-chimney"></i> */}
                    Back
                  </Link>
                </div>
              </div>
              <div className="bottom_area hallofdllsdiv">
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

                {/* {userData?.userType === "Admin" ? (
                  <div className="tyEvMainDiv" onClick={createmodal}>
                    <span className="tyEvIcon">
                      <i class="fa-solid fa-plus"></i>
                    </span>
                    <p className="tyEvText">Add Hall of Fame</p>
                  </div>
                ) : (
                  ""
                )} */}

                {hallFame?.map((item, index) => {
                  return (
                    <div className="hallofmain" key={index}>
                      {/* profile image */}
                      <div className="profile_img">
                        {item?.userImage ? (
                          <img
                            src={item?.userImage}
                            className="img-fluid"
                            alt="profile"
                          />
                        ) : (
                          <img
                            src={Eventimg2}
                            className="img-fluid"
                            alt="profile"
                          />
                        )}
                      </div>

                      {/* name */}
                      <div className="details_area">
                        <div className="name">
                          <div className="d-flex justify-content-between">
                            <h4>{item?.name}</h4>
                            {/* <div className="icon">
                              <img
                                src={AlartIcon1}
                                className="img-fluid"
                                alt="icon"
                              />
                            </div> */}

                            {/* <div
                              // className="dot_btn"
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
                            </div> */}

                            <span className="halOfDateText">
                              {moment(item?.createdOn).format("MMM-YYYY")}
                              <div
                                // className="dot_btn"
                                onClick={(e) => handleClick(e, item, index)}
                                style={{
                                  position: "absolute",
                                  zIndex: "2",
                                  left: "44px",
                                  bottom: "77px",
                                }}
                              >
                                <a className="btn">
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
                            </span>
                          </div>
                          <p>Reason : {item?.reason}</p>
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

            {modalB && (
              <EditHallOfFame
                closemodal={setModalB}
                activity={"editHallFame"}
                BulletinBoardSingleData={hallFame}
                id={modalId}
                initialValues={HallfameSingleData1}
                singleHallFameData={singleHallFameData}
              />
            )}

            {modala && (
              <HallOfFrameModal
                closemodal={setModala}
                activity={"editHallFame"}
                initialValues={initialValues}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
