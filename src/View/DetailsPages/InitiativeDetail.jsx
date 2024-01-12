import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ThreeDot from "../../Images/dots.png";
import ProfileImg1 from "../../Images/profile1.png";
import ProfileImg2 from "../../Images/profile2.png";
import ProfileImg3 from "../../Images/profile3.png";
import ProfileImg4 from "../../Images/profile4.png";
// import AttachedImg from "../../Images/attached.png";
import AttachedImg from "../../Images/Icons/PNG/Attach.png";
// import CommentsImg from "../../Images/chaticon.png";
import CommentsImg from "../../Images/Icons/PNG/Comment.png";
import { useAuthCtx } from "../../context/AuthCtx";
import { useDispatch, useSelector } from "react-redux";
import { getInitiative } from "../../redux/slices/initiativeSlice";

export default function InitiativeDetail() {
  const { setLoading, userData } = useAuthCtx();
  const dispatch = useDispatch();
  const initiative = useSelector((state) => state?.initiativeSlice?.data);
  const { setModalM } = useAuthCtx();

  useEffect(() => {
    dispatch(getInitiative());
  }, []);

  return (
    <section className="bulleDetail initiativeDetail">
      <div className="container">
        <div className="row">
          <div className="col">
            <section id="initiative_sec">
              <div className="top_area">
                <div className="head" style={{display:"flex", alignItems:"center"}}>
                  <h4>Initiative</h4>
                  <div className="" style={{ marginLeft: "15px" }}>
                    {userData?.userType === "Admin" ? (
                      <div className="tyEvMainDiv" onClick={() => setModalM(true)}>
                        <span className="tyEvIcon">
                          <i class="fa-solid fa-plus"></i>
                        </span>
                        {/* <p className="tyEvText">Add Initiative</p> */}
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

              <div className="bottom_ara bottomdiv_ara">


                {initiative?.length > 0 ? (
                  initiative?.map((item, ind) => {
                    return (
                      <div
                        className="card_area card_area_indtls"
                        style={{ background: "#E9FDFD" }}
                      >
                        <div className="top">
                          <div className="name">
                            <h4>{item?.nameOfInitaitive} </h4>
                          </div>
                          <div className="dot_btn">
                            {/* <Link to="/" className="btn">
                              <img
                                src={ThreeDot}
                                className="img-fluid"
                                alt="dot"
                              />
                            </Link> */}
                          </div>
                        </div>
                        <div className="content_area">
                          <p>Contact-{item?.contact}</p>
                          <p>Reward Points-{item?.rewardPoints}</p>
                          <p>Duration - {item?.duration}</p>
                        </div>
                        {/* <div
                          className="all_profile d-flex align-items-center"
                          style={{ marginBottom: "20px" }}
                        >
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
                        </div> */}
                        <div className="bottom">
                          <div className="attached">
                            <div className="d-flex align-items-center">
                              {/* <Link to="/" className="attached_icon">
                                <img
                                  src={AttachedImg}
                                  className="img-fluid"
                                  alt="attached"
                                />
                              </Link> */}
                              {/* <div className="text">
                                <p>
                                  <span>2</span> file Attached
                                </p>
                              </div> */}
                            </div>
                          </div>
                          {/* <div className="comments">
                            <div className="d-flex align-items-center">
                              <Link to="/" className="comments_icon">
                                <img
                                  src={CommentsImg}
                                  className="img-fluid"
                                  alt="comments"
                                />
                              </Link>
                              <div className="text">
                                <p>
                                  <span>10</span> comments
                                </p>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>No initiative to show!</p>
                )}
                {/* <div className="card_area" style={{ background: "#E9FDFD" }}>
                  <div className="top">
                    <div className="name">
                      <h4>Fashion Store E -commerce </h4>
                    </div>
                    <div className="dot_btn">
                      <Link to="/" className="btn">
                        <img src={ThreeDot} className="img-fluid" alt="dot" />
                      </Link>
                    </div>
                  </div>
                  <div className="content_area">
                    <p>Application Concept</p>
                    <p>Website Concept</p>
                    <p>Project Duration - 2 Months</p>
                  </div>
                  <div
                    className="all_profile d-flex align-items-center"
                    style={{ marginBottom: "20px" }}
                  >
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
                  </div>
                  <div className="bottom">
                    <div className="attached">
                      <div className="d-flex align-items-center">
                        <Link to="/" className="attached_icon">
                          <img
                            src={AttachedImg}
                            className="img-fluid"
                            alt="attached"
                          />
                        </Link>
                        <div className="text">
                          <p>
                            <span>2</span> file Attached
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="comments">
                      <div className="d-flex align-items-center">
                        <Link to="/" className="comments_icon">
                          <img
                            src={CommentsImg}
                            className="img-fluid"
                            alt="comments"
                          />
                        </Link>
                        <div className="text">
                          <p>
                            <span>10</span> comments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card_area" style={{ background: "#F3E9FD" }}>
                  <div className="top">
                    <div className="name">
                      <h4>Social Media App</h4>
                    </div>
                    <div className="dot_btn">
                      <Link to="/" className="btn">
                        <img src={ThreeDot} className="img-fluid" alt="dot" />
                      </Link>
                    </div>
                  </div>
                  <div className="content_area">
                    <p>Application Design</p>
                    <p>Application Development</p>
                    <p>Project Members - 6 Months</p>
                  </div>
                  <div
                    className="all_profile d-flex align-items-center"
                    style={{ marginBottom: "20px" }}
                  >
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
                  </div>
                  <div className="bottom">
                    <div className="attached">
                      <div className="d-flex align-items-center">
                        <Link to="/" className="attached_icon">
                          <img
                            src={AttachedImg}
                            className="img-fluid"
                            alt="attached"
                          />
                        </Link>
                        <div className="text">
                          <p>
                            <span>2</span> file Attached
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="comments">
                      <div className="d-flex align-items-center">
                        <Link to="/" className="comments_icon">
                          <img
                            src={CommentsImg}
                            className="img-fluid"
                            alt="comments"
                          />
                        </Link>
                        <div className="text">
                          <p>
                            <span>10</span> comments
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
