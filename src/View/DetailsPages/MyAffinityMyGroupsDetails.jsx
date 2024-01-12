import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Hub/Hub.css";
import afiPic1 from "../../Images/afiPic1.png";
import afiPic2 from "../../Images/afiPic2.png";
import afiPic3 from "../../Images/afiPic3.png";
import afiPic4 from "../../Images/afiPic4.png";
import { useDispatch, useSelector } from "react-redux";
import { getAffinityGroups } from "../../redux/slices/affinitySlice";
import chatIcon from "../../Images/Icons/PNG/Comment.png";
import chatSend from "../../Images/Icons/PNG/Post.png";
import profilePic from "../../Images/profile_img1.png";
import { RWebShare } from "react-web-share";
import table_icon from "../../Images/Icons/PNG/share-icon-elite-web.svg";
import { useAuthCtx } from "../../context/AuthCtx";
import { toast } from "react-hot-toast";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import HallofFame from "../../Component/HallofFame";
import Employees from "../../Component/Employees";
import Initiative from "../../Component/Initiative";
import markImg from "../../Images/markImg.png";
import BulletinBoard from "../../Component/BulletinBoard";
import JobRefferedModal from "../../SeprateModal/JobRefferedModal";
import EmployeeModal from "../../SeprateModal/EmployeeModal";
import EditTrainingModal from "../../SeprateModal/EditTrainingModal";
import TrainingModal from "../../SeprateModal/TrainingModal";
import EditEventModal from "../../SeprateModal/EditEventModal";
import EventsModal from "../../SeprateModal/EventsModal";
import CreateModal from "../../Component/Modal/CreateModal";
import GoalAchiverModal from "../../SeprateModal/GoalAchiverModal";
import KababMenu from "../../SeprateModal/KababMenu";
import BillBoardModal from "../../SeprateModal/BillBoardModal";
import InitiativeModal from "../../Component/Modal/InitiativeModal";
import MyAffinityGroupModal from "../../Component/Modal/MyAffinityGroupModal";
import HallOfFrameModal from "../../Component/Modal/HallOfFrameModal";
import HubAffinityGrp from "../Hub/HubAffinityGrp";
import JobsReferred from "../../Component/JobsReferred";
import TrainingCard from "../../Component/TrainingCard";
import EventCard from "../../Component/EventCard";
import GoalAchiver from "../../Component/GoalAchiver";
import eliteExp from "../../Images/Icons/PNG/Elite employee experience logo.png";
import goldIcon from "../../Images/Icons/PNG/Reward - Gold.png";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

function MyAffinityMyGroupsDetails() {
  const {
    userData,
    BulletinBoardSingleData1,
    modala,
    modalD,
    setModalD,
    modalE,
    setModalE,
    modalK,
    setModalK,
    modalL,
    setModalL,
    modalM,
    setModalM,
    modalF,
    setModalF,
    modalG,
    setModalG,
    modalH,
    setModalH,
    modalI,
    employeeModal,
    setEmployeeModal,
    setModalI,
    modalJ,
    setModalJ,
    setModala,
    trainingData,
    setTrainingData,
    modalC,
    setModalC,
    BulletinBoardSingleData,
    setLoading,
  } = useAuthCtx();
  const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");
  const [modalA, setModalA] = useState(false);
  const [changeShow, setChangeShow] = useState(false);
  const [groupid, setGroupId] = useState("");
  const navigate = useNavigate();
  const [grpData, setGrpData] = useState([]);
  const [singleGroup, setSingleGroup] = useState({});
  const [singleAffGroup, setSingleAffGroup] = useState({});
  const [goldCard, setGoldCard] = useState([]);
  const [myGroup, setMyGroup] = useState([]);
  const dispatch = useDispatch();
  const affinityData = useSelector((state) => state?.affinitySlice?.myGroups);

  const initialValues = {
    eventName: "",
    hostedBy: "",
    eventDate: "",
    eventstarttime: "",
    eventendtime: "",
    lattitude: "",
    longitude: "",
    addinvites: "",
    name: "",
    notes: "",
    image: "",
    editTrainingName: "",
    editTraininDate: "",

    // nameofInitiative: "",
    // duration: "",
    // desc: "",
    // contact: "",
    // rewardPoints: ""
  };
  const initialValues1 = {
    eventName: "",
    hostedBy: "",
    eventDate: "",
    name: "",
    trainingDate: "",
    editTrainingName: "",
    editTraininDate: "",

    // nameofInitiative: "",
    // duration: "",
    // desc: "",
    // contact: "",
    // rewardPoints: ""
  };
  const initialValues2 = {
    eventName: "",
    hostedBy: "",
    eventDate: "",

    name: "",
    trainingDate: "",
    link: "",
    editTrainingName: "",
    editTraininDate: "",
  };

  const initialValues3 = {
    name: "",
    location: "",
    salary: "",
    opening: "",
    description: "",
  };

  const initialValues4 = {
    nameofInitiative: "",
    duration: "",
    desc: "",
    contact: "",
    rewardPoints: "",
  };

  const initialValues5 = {
    name: "",
    userId: "",
    reason: "",
  };

  const initialValues6 = {
    nameOfInitaitive: "",
    description: "",
    duration: "",
    contact: "",
    rewardPoints: "",
  };

  const initialValues7 = {
    groupName: "",
    grouptype: "",
    charter: "",
    purpose: "",
  };

  const handleClick = (item) => {
    navigate(`/affinity/${item?._id}`);
  };

  const getGoldCard = async () => {
    setLoading(true);

    const response = await ApiHelperFunction({
      urlPath: "/get-profile",
      method: "GET",
    });

    console.log("responseeeee", response?.data);

    if (response.status === 200) {
      setGoldCard(response?.data?.data);
      // console.log("data get successfully");
    } else {
      // toast.error(response?.message);
    }
    setLoading(false);
  };

  //   const handleJoinClick = async (item) => {
  //     const data = {
  //       // name: groupName,
  //       groupId: item?._id,
  //     };
  //     const response = await ApiHelperFunction({
  //       urlPath: `/join-group`,
  //       method: "POST",
  //       data,
  //     });

  //     if (response.status === 200) {
  //       toast.success(response?.data?.message);
  //       // dispatch(getAffinityGroups());
  //       // setGroupName("");
  //     } else {
  //       toast.error(response?.response?.data?.message);
  //     }
  //   };

  useEffect(() => {
    dispatch(getAffinityGroups());
    getGoldCard();
  }, []);
  return (
    <>
      {/* Sidebar */}

      {/* body */}
      <section className="bulleDetail">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="myafinitydtls">
                <div className="hubAffityDiv">
                  <div className="myAffSeeAllBtnDiv">
                    <p className="myAffityHead">My Affinity Groups</p>
                    <div>
                      <Link to="/" className="backHomeBtn">
                        Back
                      </Link>
                    </div>
                  </div>
                  <div
                    className=" myevetCresParentDiv"
                  // style={{ overflow: "auto", height: "647px" }}
                  >
                    {affinityData?.length > 0 ? (
                      affinityData?.map((item, ind) => {
                        return (
                          <div
                            className="evetCreMainDivdtls"
                            // style={{
                            //   backgroundColor: "#F1E5DD",
                            //   cursor: "pointer",
                            // }}
                            onClick={() => handleClick(item)}
                          >
                            <div className="myallgrpdtlsv">
                              <div className="myimgdiv">
                                {item?.image === "image" ? (
                                  <img src={profilePic} alt="" />
                                ) : (
                                  <img
                                    className="img-fluid"
                                    src={item?.image}
                                    alt="..."
                                  // style={{
                                  //   width: "100px",
                                  //   height: "100px",
                                  //   borderRadius: "50%",
                                  // }}
                                  />
                                )}
                              </div>
                              {/* <img
                              className="img-fluid"
                              src={item?.image}
                              alt="..."
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "50%",
                              }}
                            /> */}
                              <p className="hubEvCrePara">{item?.groupName}</p>
                              {/* <div className="hubMyAfFigsDiv">
                              <figure className="hubMyAfFig hubMyAfFig1">
                                <img src={afiPic1} alt="..." />
                              </figure>
                              <figure className="hubMyAfFig hubMyAfFig2">
                                <img src={afiPic2} alt="..." />
                              </figure>
                              <figure className="hubMyAfFig hubMyAfFig3">
                                <img src={afiPic3} alt="..." />
                              </figure>
                              <figure className="hubMyAfFig hubMyAfFig4">
                                <img src={afiPic4} alt="..." />
                              </figure>
                            </div> */}

                              <div className="nameGrpMemDiv">
                                {/* <p className="nameGrpMemText">
                                  Name of Group Members:
                                </p>
                                <select className="nameGrpSelect">
                                  {item?.groupMember?.map((member, index) => (
                                    <option>{`${member?.name}`}</option>
                                  ))}
                                </select> */}
                              </div>
                            </div>
                            <div className="divctrtparadiv">
                              <div className="divparacrema">
                                {/* <div className="eveCreAfisDiv"> */}
                                {/* <img src={item?.image} /> */}
                                <p className="myAffCrePara">
                                  Created by {item?.userType}
                                </p>
                                {/* </div> */}

                                {/* <button className="myAffCreChatBtn">
                              <i class="fa-regular fa-comment-dots"></i>
                            </button> */}

                                {/* <figure className="chatIconFig">
                              <img src={chatIcon} alt="..." />
                            </figure> */}

                                {/* {userData?.userType === "Admin" ||
                            userData?.userType === "Manager" ? (
                              <RWebShare
                                data={{
                                  text: `${item?.groupName}`,
                                  // url: "",
                                  title: "Share group",
                                }}
                                onClick={() =>
                                  console.log("shared successfully!")
                                }
                              >
                                <div className="share">
                                  <img
                                    src={table_icon}
                                    alt="..."
                                    className="shareIconImg"
                                  />
                                  <span></span>
                                </div>
                              </RWebShare>
                            ) : (
                              <button
                                className="jnbtn d-none"
                                onClick={() => handleJoinClick(item)}
                              >
                                Join
                              </button>
                            )} */}
                              </div>

                              <div className="divparacrema">
                                <p className="myAffCrePara">
                                  Type : {item?.grouptype}
                                </p>
                              </div>
                              <div className="divparacrema">
                                <p className="myAffCrePara">
                                  Charter : {item?.charter}
                                </p>
                              </div>
                              <div className="divparacrema">
                                <p className="myAffCrePara">
                                  Purpose : {item?.purpose}
                                </p>
                              </div>
                            </div>
                            {/* <div className="myAffTypeBtnInpDiv">
                            <input
                              type="text"
                              placeholder="Type your message"
                              className="myAffChatTypeInp"
                            />
                            <div className="myAffChatTypeBtn">
                              <img src={chatSend} alt="..." />
                            </div>
                          </div> */}
                          </div>
                        );
                      })
                    ) : (
                      <p>No Groups to show!</p>
                    )}

                    {/* <div
                    className="evetCreMainDiv"
                    style={{ backgroundColor: "#F1E5DD" }}
                  >
                    <div className="eveCreAfisDiv">
                      <p className="hubEvCrePara">Event Creator</p>
                      <div className="hubMyAfFigsDiv">
                        <figure className="hubMyAfFig hubMyAfFig1">
                          <img src={afiPic1} alt="..." />
                        </figure>
                        <figure className="hubMyAfFig hubMyAfFig2">
                          <img src={afiPic2} alt="..." />
                        </figure>
                        <figure className="hubMyAfFig hubMyAfFig3">
                          <img src={afiPic3} alt="..." />
                        </figure>
                        <figure className="hubMyAfFig hubMyAfFig4">
                          <img src={afiPic4} alt="..." />
                        </figure>
                      </div>
                    </div>
                    <div className="myAffCreBtnsDiv">
                      <p className="myAffCrePara">Created by Admin</p>
                      <button className="myAffCreChatBtn">
                        <i class="fa-regular fa-comment-dots"></i>
                      </button>
                    </div>
                    <div className="myAffTypeBtnInpDiv">
                      <input
                        type="text"
                        placeholder="Type your message"
                        className="myAffChatTypeInp"
                      />
                      <button className="myAffChatTypeBtn">
                        <i class="fa-solid fa-paper-plane"></i>
                      </button>
                    </div>
                  </div> */}
                    {/* <div
                    className="evetCreMainDiv"
                    style={{ backgroundColor: "#F1F1D4" }}
                  >
                    <div className="eveCreAfisDiv">
                      <p className="hubEvCrePara">Marketing & Sales</p>
                      <div className="hubMyAfFigsDiv">
                        <figure className="hubMyAfFig hubMyAfFig1">
                          <img src={afiPic1} alt="..." />
                        </figure>
                        <figure className="hubMyAfFig hubMyAfFig2">
                          <img src={afiPic2} alt="..." />
                        </figure>
                        <figure className="hubMyAfFig hubMyAfFig3">
                          <img src={afiPic3} alt="..." />
                        </figure>
                        <figure className="hubMyAfFig hubMyAfFig4">
                          <img src={afiPic4} alt="..." />
                        </figure>
                      </div>
                    </div>
                    <div className="myAffCreBtnsDiv">
                      <p className="myAffCrePara">Created by Admin</p>
                      <button className="myAffCreChatBtn">
                        <i class="fa-regular fa-comment-dots"></i>
                      </button>
                    </div>
                  </div>
                  <div
                    className="evetCreMainDiv"
                    style={{ backgroundColor: "#E8E9FF" }}
                  >
                    <div className="eveCreAfisDiv">
                      <p className="hubEvCrePara">Leaders Group</p>
                      <div className="hubMyAfFigsDiv">
                        <figure className="hubMyAfFig hubMyAfFig1">
                          <img src={afiPic1} alt="..." />
                        </figure>
                        <figure className="hubMyAfFig hubMyAfFig2">
                          <img src={afiPic2} alt="..." />
                        </figure>
                        <figure className="hubMyAfFig hubMyAfFig3">
                          <img src={afiPic3} alt="..." />
                        </figure>
                        <figure className="hubMyAfFig hubMyAfFig4">
                          <img src={afiPic4} alt="..." />
                        </figure>
                      </div>
                    </div>
                    <div className="myAffCreBtnsDiv">
                      <p className="myAffCrePara">Created by Admin</p>
                      <button className="myAffCreChatBtn">
                        <i class="fa-regular fa-comment-dots"></i>
                      </button>
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MyAffinityMyGroupsDetails;
