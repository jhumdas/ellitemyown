import React, { useEffect, useState } from "react";

import { ApiHelperFunction } from "../services/api/apiHelpers";
import { toast } from "react-hot-toast";
import { useAuthCtx } from "../context/AuthCtx";
import CreateModal from "./Modal/CreateModal";
import { useDispatch, useSelector } from "react-redux";
import { getRefferedJobs } from "../redux/slices/jobRefferedSlice";
import circum_share1 from "../../src/Images/circum_share1.png";
import phdot_three_vertical from "../../src/Images/phdot_three_vertical.png";
import profilephoto2 from "../../src/Images/profilephoto2.png";
import profilephoto3 from "../../src/Images/profilephoto3.png";
import profilephoto4 from "../../src/Images/profilephoto4.png";
import { Link } from "react-router-dom";
import JobRefferedModal from "../SeprateModal/JobRefferedModal";
import { RWebShare } from "react-web-share";
import table_icon from "../Images/Icons/PNG/share-icon-elite-web.svg"

const initialValues = {
  name: "",
  location: "",
  salary: "",
  opening: "",
  description: "",
};
export default function JobsReferred() {
  const { setLoading } = useAuthCtx();
  const [modala, setModala] = useState(false);
  const [modalA, setModalA] = useState(false);
  const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");
  const [top, setTop] = useState(null);
  const [left, setLeft] = useState(null);
  const [jobrefferedData, setJobrefferedData] = useState({});
  const jobs = useSelector((state) => state.jobSlice.jobs);
  const { userData, getUserDetails, modalJ, setModalJ, } = useAuthCtx();

  const dispatch = useDispatch();

  const createModal = () => {
    setModalJ(true);
  };

  const stopModal = (e) => {
    modalA && setModalA(false);
    // setModalId("");
    e.stopPropagation();
  };

  const handleClick = (e, ele, index) => {
    setModalId(ele._id);
    // console.log("EVENT", e, index);
    setJobrefferedData(ele);
    // console.log("s", e, ele);
    setTop(e.clientY);
    setLeft(e.clientX);
    setModalA(!modalA);
  };

  console.log(modalId, "modalIdop")

  const handleDelete = async () => {
    const res = await ApiHelperFunction({
      urlPath: `/delete-job-reffered/${modalId}`,
      method: "DELETE",
    });
    if (res?.status) {
      toast.success("Job is deleted successfully");

      dispatch(getRefferedJobs());
      setModalA(false);
    } else {
      toast.error(res?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res);
    }
  };


  useEffect(() => {
    dispatch(getRefferedJobs());
    getUserDetails();
  }, []);
  return (
    <>
      <section id="jobs_referred">
        <div className="top_area">
          <div className="head">
            <h4>Hiring</h4>
          </div>
          <div className="">
            {userData?.userType === "Admin" || userData?.userType === "Manager" ? (
              <div className="tyEvMainDiv" onClick={createModal}>
                <span className="tyEvIcon">
                  <i class="fa-solid fa-plus"></i>
                </span>
                {/* <p className="tyEvText">Add Job</p> */}
              </div>
            ) : (<></>)}
          </div>
          <div>
            <Link to="/jobsReferDetail" className="seeAllAn">
              See All
            </Link>
          </div>
          {/* {userData?.userType === "Admin" && (
            <div
              className="sejbs"
              style={{ cursor: "pointer" }}
              onClick={createModal}
            >
              See all jobs
            </div>
          )} */}
        </div>

        <div className="bottom_area">
          {/* {userData?.userType === "Admin" || userData?.userType === "Manager" ? (
            <div className="tyEvMainDiv" onClick={createModal}>
              <span className="tyEvIcon">
                <i class="fa-solid fa-plus"></i>
              </span>
              <p className="tyEvText">Add Job</p>
            </div>
          ):(<></>)} */}
          {jobs?.length > 0 ? (
            jobs.map((item, index) => {
              return (
                <div className="main">
                  <div
                    style={{
                      padding: "6px 10px 9px",
                      borderBottom: "1px solid #B5FFD2",
                    }}
                  >
                    <div className="top">
                      <div className="head">
                        <h4>{item.name}</h4>
                      </div>
                      {/* <div className="icons">
                        <Link to="/" className="btn">
                          <img
                            src={circum_share1}
                            className="img-fluid"
                            alt="icon"
                          />
                        </Link>
                        <button className="btn">
                          <img
                            src={phdot_three_vertical}
                            className="img-fluid"
                            alt="icon"
                          />

                          {modalId === item?._id && modalA && (
                            <div
                              style={{
                                position: "absolute",

                                backgroundColor: "#fff",
                                padding: "3px",
                                border: "none",

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
                        </button>
                      </div> */}
                      {/* <div
                       
                        onClick={(e) => handleClick(e, item, index)}
                        style={{
                        
                          zIndex: "2",
                          left: "54px",
                          bottom: "-5px",
                        }}
                      >
                        <a className="btn">
                          <i className="fa-solid fa-ellipsis-vertical"></i>
                        </a>
                        {modalId === item?._id && modalA && (
                          <div
                            style={{
                            
                              overflow: "hidden",
                              backgroundColor: "#fff",
                              padding: "3px",
                              border: "none",
                              top: "123px",
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

                    </div>
                    <div className="details">
                      <p>
                        Location: <span>{item.location}</span>
                      </p>
                      <p>
                        Salary: <span>{item.salary}</span>
                      </p>
                      <p>
                        Opening: <span>{item.opening}</span>
                      </p>
                      <p>
                        Description: <span>{item.description}</span>
                      </p>
                    </div>
                    <div>
                      <RWebShare
                        data={{
                          text: `${item?.name}`,
                          // url: "https://google.com",
                          title: "Share job",
                        }}
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
                        <div className="share">
                          <img src={table_icon} alt="..." className="shareIconImg" />
                          <span></span>
                        </div>
                      </RWebShare>
                    </div>

                  </div>

                  {/* <div style={{ padding: "10px 10px" }}>
                    <div className="allPeoples">
                      <div className="d-flex align-items-center">
                        <div className="social_profile">
                          <img
                            src={profilephoto2}
                            className="img-fluid"
                            alt="profile"
                          />
                        </div>
                        <div
                          className="social_profile"
                          style={{ marginLeft: "-8px" }}
                        >
                          <img
                            src={profilephoto3}
                            className="img-fluid"
                            alt="profile"
                          />
                        </div>
                        <div
                          className="social_profile"
                          style={{ marginLeft: "-8px" }}
                        >
                          <img
                            src={profilephoto4}
                            className="img-fluid"
                            alt="profile"
                          />
                        </div>
                        <div
                          className="social_profile"
                          style={{ marginLeft: "-8px" }}
                        >
                          <img
                            src={profilephoto3}
                            className="img-fluid"
                            alt="profile"
                          />
                        </div>
                        <div
                          className="blank_profile"
                          style={{ marginLeft: "-8px" }}
                        >
                          <Link to="/" className="btn">
                            4+
                          </Link>
                        </div>
                      </div>

                      <div className="Peoplesrefer">
                        <p>
                          <span>8</span> Peoples refer this job
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              );
            })
          ) : (
            <p>No jobs to show! </p>
          )}
        </div>

      </section>
      {/* {modala && (
        <CreateModal
          closemodal={setModala}
          activity={"jobReffered"}
          initialValues={initialValues}
        />
      )} */}
      {modala && (
        <JobRefferedModal
          closemodal={setModala}
          activity={"jobReffered"}
          initialValues={initialValues}
        />
      )}
    </>
  );
}
