import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import employeeexperiencehub from "../Images/employeeexperiencehub.png";
import resLogo from "../Images/resLogo.png";
// import Homeicon from "../Images/homeicon.png";
import Homeicon from "../Images/Icons/PNG/Home.png";
// import Employeeicon from "../Images/clarity_employee-line.png";
import Employeeicon from "../Images/Icons/PNG/Manager.png";
// import Taskicon from "../Images/octicon_project-24.png";
import Taskicon from "../Images/Icons/PNG/Task.png"
// import Messagingicon from "../Images/ph_chat-teardrop-dots-light.png";
import Messagingicon from "../Images/Icons/PNG/Messages.png"
// import homeActiveIcon from "../Images/homeActiveIcon.png";
import homeActiveIcon from "../Images/Icons/PNG/Home.png";
// import notificationActiveIcon from "../Images/notificationActiveIcon.png";
import notificationActiveIcon from "../Images/Icons/PNG/Notification.png"
// import performanceActiveIcon from "../Images/performanceActiveIcon.png";
import performanceActiveIcon from "../Images/Icons/PNG/Task.png"
// import chatActiveIcon from "../Images/chatActiveIcon.png";
import chatActiveIcon from "../Images/Icons/PNG/Messages.png"
// import employeeActiveIcon from "../Images/employeeActiveIcon.png";
import employeeActiveIcon from "../Images/Icons/PNG/Manager.png";
// import Notificationicon from "../Images/notification.png";
import Notificationicon from "../Images/Icons/PNG/Notification.png"
// import ProfileImg from "../Images/profile_img.png";
import profileImg from "../Images/Icons/PNG/Profile (2).png";
import { useAuthCtx } from "../context/AuthCtx";
import { useDispatch } from "react-redux";
import { clearLogin } from "../redux/slices/loginSlice";
import CreateModal from "./Modal/CreateModal";
import HubIcon from "../Images/Icons/PNG/Hub 1.png"
import hubActiveIcon from "../Images/Icons/PNG/Hub 1.png"
import onboardIcon from "../Images/Icons/PNG/Onboarding.png";
import engageMent from "../Images/Icons/PNG/Engagement.png";
import mrkInPic2 from "../Images/mrkInPic2.png";
import advocacyIcon from "../Images/Icons/PNG/Advocacy 1.png";
import surveyIcon from "../Images/Icons/PNG/Survey.png";


// Constants
import { BASE_URL } from "../constants/config";

export default function Header() {
  const { getUserDetails, userData } = useAuthCtx();
  const [modal, setModal] = useState(false);
  useEffect(() => {
    getUserDetails();
  }, []);
  const { setLogIn, setLoading } = useAuthCtx();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    setLoading(true);
    setTimeout(() => {
      localStorage.clear();
      setLogIn(false);
      setLoading(false);
      sessionStorage.clear();
      dispatch(clearLogin());
      navigate("/");
    }, 500);
  };

  const resSideOpen = () => {
    document.querySelector(".resNavHeader").style.cssText +=
      "transform: translate(0, 0)";
  };

  const resSideClose = () => {
    document.querySelector(".resNavHeader").style.cssText +=
      "transform: translate(-350px, 0)";
  };

  const searchInpOpen = () => {
    document
      .querySelector(".resSearchDiv")
      .classList.remove("resSearchDisplayDiv");
  };

  const searchInpClose = () => {
    document
      .querySelector(".resSearchDiv")
      .classList.add("resSearchDisplayDiv");
  };

  console.log(userData?.image, "proimge")
  // const handleClick = (event) => {
  //   switch (event.target.name) {
  //     case "bulletinBoard":
  //       document.getElementById("bullettBoad").classList.add("resBulleFixed");
  //       break;
  //     case "hallOfFame":
  //       document.getElementById("halloof_fame").classList.add("resBulleFixed");
  //       break;
  //     case "employees":
  //       document
  //         .getElementById("employees_card")
  //         .classList.add("resBulleFixed");
  //       break;
  //     case "sustainable":
  //       document
  //         .getElementById("initiative_sec")
  //         .classList.add("resBulleFixed");
  //       break;
  //     case "events":
  //         document
  //           .getElementById("eventsBulle")
  //           .classList.add("resBulleFixed");
  //         break;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <>
      <section id="main_header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-xl navbar-light">
            <NavLink to="/" className="navbar-brand">
              <img src={employeeexperiencehub} className="img-fluid" alt="logo" />
            </NavLink>
            {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button> */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <div className="search_area">
                <form>
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
                <div className="search_icon">
                  <button className="btn" type="submit">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>

              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    <div className="icon">
                      <img
                        src={Homeicon}
                        className="img-fluid normalHeadIcon"
                        alt="icon"
                      />
                      <img
                        src={homeActiveIcon}
                        className="img-fluid activeHeadIcon"
                        alt="icon"
                      />
                    </div>
                    <div className="name">Home</div>
                  </NavLink>
                </li>

                {
                  userData?.userType === "Admin" ? (<li className="nav-item">
                    <NavLink className="nav-link" to="/employees">
                      <div className="icon">
                        <img
                          src={Employeeicon}
                          className="img-fluid normalHeadIcon"
                          alt="icon"
                        />
                        <img
                          src={employeeActiveIcon}
                          className="img-fluid activeHeadIcon"
                          alt="icon"
                        />
                      </div>
                      <div className="name">Employee</div>
                    </NavLink>
                  </li>) : (<></>)
                }



                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/hubpage">
                    <div className="icon">
                      <img
                        src={HubIcon}
                        className="img-fluid normalHeadIcon"
                        alt="icon"
                      />
                      <img
                        src={hubActiveIcon}
                        className="img-fluid activeHeadIcon"
                        alt="icon"
                      />
                    </div>
                    <div className="name">Hub</div>
                  </NavLink>
                </li> */}

                <li className="nav-item">
                  <NavLink className="nav-link" to="/engagementcalender">
                    <div className="icon">
                      <img
                        src={engageMent}
                        className="img-fluid normalHeadIcon"
                        alt="icon"
                      />
                      <img
                        src={engageMent}
                        className="img-fluid activeHeadIcon"
                        alt="icon"
                      />
                    </div>
                    <div className="name">Events</div>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/netWorking">
                    <div className="icon">
                      <img
                        src={onboardIcon}
                        className="img-fluid normalHeadIcon"
                        alt="icon"
                      />
                      <img
                        src={onboardIcon}
                        className="img-fluid activeHeadIcon"
                        alt="icon"
                      />
                    </div>
                    <div className="name">Onboarding</div>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/advocacy">
                    <div className="icon">
                      <img
                        src={advocacyIcon}
                        className="img-fluid normalHeadIcon"
                        alt="icon"
                      />
                      <img
                        src={advocacyIcon}
                        className="img-fluid activeHeadIcon"
                        alt="icon"
                      />
                    </div>
                    <div className="name">Advocacy</div>
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/surveys">
                    <div className="icon">
                      <img
                        src={surveyIcon}
                        className="img-fluid normalHeadIcon"
                        alt="icon"
                      />
                      <img
                        src={surveyIcon}
                        className="img-fluid activeHeadIcon"
                        alt="icon"
                      />
                    </div>
                    <div className="name">Surveys</div>
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        <div className='icon'><img src={Taskicon} className="img-fluid" alt='icon' /></div>
                                        <div className='name'>Task Projects</div>
                                    </Link>
                                </li> */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/engagement">
                    <div className="icon">
                      <img
                        src={Taskicon}
                        className="img-fluid normalHeadIcon"
                        alt="icon"
                      />
                      <img
                        src={performanceActiveIcon}
                        className="img-fluid activeHeadIcon"
                        alt="icon"
                      />
                    </div>
                    <div className="name">Performence</div>
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/msg">
                    <div className="icon">
                      <img
                        src={Messagingicon}
                        className="img-fluid normalHeadIcon"
                        alt="icon"
                      />
                      <img
                        src={chatActiveIcon}
                        className="img-fluid activeHeadIcon"
                        alt="icon"
                      />
                      <div className="red_dot"></div>
                    </div>
                    <div className="name">Messaging</div>
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/notiHome">
                    <div className="icon">
                      <img
                        src={Notificationicon}
                        className="img-fluid normalHeadIcon"
                        alt="icon"
                      />
                      <img
                        src={notificationActiveIcon}
                        className="img-fluid activeHeadIcon"
                        alt="icon"
                      />
                      <div className="red_dot"></div>
                    </div>
                    <div className="name">Notification</div>
                  </NavLink>
                </li>
              </ul>

              <div className="admin_area">
                <div className="d-flex align-items-center dropdown">
                  <div className="profile_details">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="profile_img">
                        {(userData?.image === "image") ? (
                          <img src={profileImg} alt="..." />
                          // <img
                          //   src={userData?.image}
                          //   className="img-fluid"
                          //   alt="profile"
                          // />
                        ) : (
                          <img
                            src={userData?.image}
                            className="img-fluid"
                            alt="profile"
                          />
                          // <img
                          //   src={
                          //     BASE_URL +
                          //     "/" +
                          //     "uploads/imageUploads/530060.com-4811117"
                          //   }
                          //   className="img-fluid"
                          //   alt="profile"
                          // />
                        )}
                        {/* <img src={profileImg} alt="..." /> */}
                      </div>

                      <div className="name">
                        <h4>
                          {userData?.firstName + " " + userData?.lastName}
                        </h4>
                        <p>{userData?.userType}</p>
                      </div>
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {/* <Link
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        onClick={() => setModal(true)}
                      >
                        <i className="fa-solid fa-user mr-2"></i> Account
                      </Link> */}
                      {/* <Link to="/" className="dropdown-item">
                        <i className="fa-solid fa-gear mr-2"></i> Settings
                      </Link> */}
                      <Link to="/profile" className="dropdown-item">
                        <i className="fa-solid fa-user mr-2"></i> Profile
                      </Link>
                      <Link
                        to="/"
                        className="dropdown-item"
                        onClick={handleLogOut}
                      >
                        <i className="fa-solid fa-right-from-bracket mr-2"></i>{" "}
                        Log out
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="resBtnsDiv">
              <button className="resSearchBtn" onClick={searchInpOpen}>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
              <button className="resToggleBtn" onClick={resSideOpen}>
                <i class="fa-solid fa-bars-staggered"></i>
              </button>
            </div>
          </nav>
          <div className="resSearchDiv resSearchDisplayDiv">
            <button className="searInpIcon" onClick={searchInpClose}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input placeholder="Search" className="resSearchInp" />
            <button className="searInpBtn">Search</button>
          </div>
        </div>
      </section>
      <section className="resNavHeader">
        <div className="resHeaderDiv">
          <Link to="/">
            <figure className="resLogo">
              <img src={resLogo} alt="..." />
            </figure>
          </Link>
          <button className="resBtn" onClick={resSideClose}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="resMenuDiv">
          <ul className="resMenuUl">
            <li className="resMenuLi">
              {/* <Link to="/" className="resMenuLiAn">
                <i class="fa-solid fa-house-chimney"></i> Home
              </Link> */}
              <Link
                to="/bulletinDetails"
                name="bulletinBoard"
                className="resMenuLiAn"
              >
                Bulletin Board
              </Link>
            </li>
            <li className="resMenuLi">
              {/* <Link to="/employees" className="resMenuLiAn">
                <i class="fa-solid fa-chalkboard-user"></i> Employee
              </Link> */}
              <Link
                to="/hallOfDetails"
                name="hallOfFame"
                id="hallOfFame"
                className="resMenuLiAn"
              >
                Hall of Fame
              </Link>
            </li>
            <li className="resMenuLi">
              {/* <Link to="/hubpage" className="resMenuLiAn">
                <i class="fa-brands fa-hubspot"></i> Hub
              </Link> */}
              <Link
                to="/employeeDetail"
                className="resMenuLiAn"
                name="employees"
              >
                Employees
              </Link>
            </li>

            <li className="resMenuLi">
              {/* <Link to="/"Bulletin board className="resMenuLiAn">
                <i class="fa-regular fa-file-lines"></i> Performence
              </Link> */}
              <Link
                to="/sustInitiativeDetail"
                className="resMenuLiAn"
                name="sustainable"
              >
                Sustainable Initiative
              </Link>
            </li>
            <li className="resMenuLi">
              {/* <Link to="/" className="resMenuLiAn">
                <i class="fa-regular fa-comment-dots"></i> Messaging
              </Link> */}
              <Link to="/eventsDeails" className="resMenuLiAn" name="events">
                Events
              </Link>
            </li>
            <li className="resMenuLi">
              {/* <Link to="/" className="resMenuLiAn">
                <i class="fa-regular fa-bell"></i> Notification
              </Link> */}
              <Link
                to="/trainingDetails"
                className="resMenuLiAn"
                name="training"
              >
                Training
              </Link>
            </li>
            <li className="resMenuLi">
              <Link to="/jobsReferDetail" className="resMenuLiAn" name="jobs">
                Jobs referred
              </Link>
            </li>
            <li className="resMenuLi">
              <Link
                to="/myAffinityDetails"
                className="resMenuLiAn"
                name="affinity"
              >
                My Affinity Groups
              </Link>
            </li>
          </ul>
        </div>
      </section>
      {modal && <CreateModal closemodal={() => setModal(false)} />}
    </>
  );
}
