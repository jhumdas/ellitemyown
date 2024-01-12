import React, { useEffect, useState } from "react";
import AffinityGroups from "../../Component/AffinityGroups";

import BulletinBoard from "../../Component/BulletinBoard";
import HallofFame from "../../Component/HallofFame";
import Initiative from "../../Component/Initiative";
import JobsReferred from "../../Component/JobsReferred";
import EventCard from "../../Component/EventCard";
import ShareThoughtsAffinity from "../../Component/Modal/ShareThoughtsAffinity";
import SaraTylor from "../../Component/SaraTylor";
import TrainingCard from "../../Component/TrainingCard";
import MyConnections from "../../Component/MyConnections";
import MyGalary from "../../Component/MyGalary";
import Employees from "../../Component/Employees";
import GoalAchiver from "../../Component/GoalAchiver";
import { useAuthCtx } from "../../context/AuthCtx";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/slices/postSlice";
import moment from "moment";
import HubAffinityGrp from "../Hub/HubAffinityGrp";
import BillBoardModal from "../../SeprateModal/BillBoardModal";
import KababMenu from "../../SeprateModal/KababMenu";
import GoalAchiverModal from "../../SeprateModal/GoalAchiverModal";
import CreateModal from "../../Component/Modal/CreateModal";
import EventsModal from "../../SeprateModal/EventsModal";
import EditEventModal from "../../SeprateModal/EditEventModal";
import TrainingModal from "../../SeprateModal/TrainingModal";
import EditTrainingModal from "../../SeprateModal/EditTrainingModal";
import JobRefferedModal from "../../SeprateModal/JobRefferedModal";
import EmployeeModal from "../../SeprateModal/EmployeeModal";
import eliteCard from "../../Images/eliteCard.png";
import HallOfFrameModal from "../../Component/Modal/HallOfFrameModal";
import MyAffinityGroupModal from "../../Component/Modal/MyAffinityGroupModal";
import InitiativeModal from "../../Component/Modal/InitiativeModal";
import goldIcon from "../../Images/Icons/PNG/Reward - Gold.png";
import ShareThoughts from "../../Component/ShareThoughts";
import SaraTylorAffinity from "../../Component/SaraTylorAffinity";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import markImg from "../../Images/markImg.png";
import profile1 from "../../Images/profile1.png";
import profile2 from "../../Images/profile2.png";
import profile3 from "../../Images/profile3.png";
import profile4 from "../../Images/profile4.png";
import eliteExp from "../../Images/Icons/PNG/Elite employee experience logo.png";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export default function SingleAffinityGroup() {
  const { setLoading } = useAuthCtx();
  const postDataReducer = useSelector((state) => state?.postGetSlice);
  // const postDataReducer = useSelector((state) => state?.affinitypostGetSlice)
  const dispatch = useDispatch();
  const [postData, setPostData] = useState([]);

  const params = useParams();

  // console.log("paramsddss", params)

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
  const [dropa, setDropa] = useState(false)
  // console.log("singleAffGroupssa", singleAffGroup);

  // const [showDropdown, setShowDropdown] = useState(false);

  //reload posts on addition

  // const getPosts = () => {
  //   dispatch(getAllPosts());
  //
  //   console.log("posts123",postData);

  // }

  // console.log("postDataert", postData);

  const handlemoreClick = () => {
    setDropa(!dropa)
    // alert("working")
  }

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

  const handleOptionClick = (index) => {
    setChangeShow(index === modalId);
  };

  // const toggleDropdown = () => {
  //     setShowDropdown(!showDropdown);
  // };

  const getAffinityPosts = async () => {
    const data = {
      affinityGroupId: params?.id,
      postType: "private",
    };

    // const data = {
    //     description: "",
    //     image: "image",
    //     "postType": "private",
    //     "affinityGroupId": "657c580aeda16942bbccb104"
    // }
    setLoading(true);
    const response = await ApiHelperFunction({
      urlPath: `/view-all-post`,
      method: "POST",
      data,
    });
    console.log("responseddfftt", response);
    if (response.status === 200) {
      // toast.success(response?.data?.data?.message);
      // console.log(response?.data, "response?.data");
      setPostData(response?.data?.data.reverse());
    } else {
      // toast.error(response?.message);
    }
    setLoading(false);
  };

  // const getAffinityGroup = async () => {
  //     const response = await ApiHelperFunction({
  //         urlPath: `/view-affinity-group`,
  //         method: "GET",
  //     });
  //     console.log("RESPONSEFy", response?.data?.data);
  //     if (response && response.status) {
  //         setGrpData(response?.data?.data);
  //     } else {
  //         toast.error(response?.message);
  //     }
  // }


  const getAffinityMyGroupData = async () => {
    const response = await ApiHelperFunction({
      urlPath: `/view-my-affinity-group`,
      method: "GET",
    });
    console.log("RESPONSEFSDFu", response?.data?.data);
    if (response && response.status) {
      setMyGroup(response?.data?.data.reverse());
    } else {
      toast.error(response.response?.data?.message);
    }
  };

  const getAffinityGroup = async () => {
    const response = await ApiHelperFunction({
      urlPath: `/view-affinity-group`,
      method: "GET",
    });

    if (response && response.status) {
      const groupWithId = response?.data?.data?.find(
        (group) => group?._id === params?.id
      );
      if (groupWithId) {
        setSingleGroup(groupWithId);
      } else {
        // console.error("Group not found with id:", params?.id);
      }
    } else {
      // toast.error(response?.message);
    }
  };


  const getSingleAffinityGroup = async () => {
    const data = {
      affinityGroupID: params?.id,
    };
    setLoading(true);
    const response = await ApiHelperFunction({
      urlPath: `/view-single-affinity-group`,
      method: "POST",
      data,
    });
    console.log("responseddfftt", response);
    if (response.status === 200) {
      // toast.success(response?.data?.data?.message);
      // console.log(response?.data, "response?.data");
      setSingleAffGroup(response?.data?.data[0]);
    } else {
      // toast.error(response?.message);
    }
    setLoading(false);
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

  useEffect(() => {
    getAffinityPosts();
    getAffinityGroup();
    getSingleAffinityGroup();
    // dispatch(getAllPosts());
    // dispatch(getAllAffinityPosts());
  }, [params?.id]);

  useEffect(() => {
    getGoldCard();
  }, []);

  // useEffect(() => {
  //     setPostData(postDataReducer?.posts);
  // }, [postDataReducer?.posts]);

  // useEffect(() => {
  //     fetchData();
  // }, [params?.id])
  // console.log(singleAffGroup?.data, "oprtweqn")
  return (
    <>
      {/* Sidebar */}
      <section className="mainpagediv">
                <div className='mainpagecontainer'>
      <div className="thought_area_mxh-left">
        <div className="singleAffiDiv">
          <div className="groupNameArea">
            <figure className="grpAreFig">
              <img src={markImg} alt="..." />
            </figure>
            <p className="grpAreHead">{singleAffGroup?.groupName}</p>
          </div>
          <div className="grpBtmArea">
            <div className="admNmDiv">
              <span className="admNmHead">Admin Name:</span>
              <span className="admNmName">
                {singleAffGroup?.gpAdminFirstName} {singleAffGroup?.gpAdminLastName}
              </span>
            </div>
            <div className="noAllDivsMainDiv">
              <div>
                <span className="noOfMemHead">No of Members:</span>
                <span className="noOfMemNum">{singleAffGroup?.totalMember}</span>
              </div>
              {/* <div className="noMemPicDiv">
                <figure className="proFig1">
                  <img src={profile1} alt="..." />
                </figure>
                <figure className="proFig2">
                  <img src={profile2} alt="..." />
                </figure>
                <figure className="proFig3">
                  <img src={profile3} alt="..." />
                </figure>
                <figure className="proFig4">
                  <img src={profile4} alt="..." />
                </figure>
              </div> */}
            </div>
            <div className="nameGrpMemDiv">
              <div className="grpmembrs">
                <p className="nameGrpMemText">Group Members:</p>

                <div className="">
                  {/* <select className="nameGrpSelect">
                    {singleAffGroup?.groupMember?.map((member, index) => (
                      <option>{`${member?.name}`}</option>
                    ))}
                  </select> */}
                  <button className="vwbtn" onClick={handlemoreClick}>
                    View All
                  </button>
                  {dropa && <div className="grpslct">
                    {singleAffGroup?.groupMember?.map((member, index) => (
                      <p>{`${member?.name}`}</p>
                    ))}
                  </div>}
                </div>
              </div>
              {/* <select className="nameGrpSelect">
                {singleAffGroup?.groupMember?.map((member, index) => (
                  <option>{`${member?.name}`}</option>
                ))}
              </select> */}
            </div>
            <div className="pusrpseflex">
              <span className="noOfMemHead">Purpose</span>
              <p className="grpShortDescrip">{singleAffGroup?.purpose}</p>
            </div>

          </div>
        </div>
        <HallofFame />
        <Employees />
        <EventCard />
        <JobsReferred />
        {/* <Initiative /> */}
      </div >

      {/* body */}
      <div className="thought_area_mxh-mid" >
        {/* input post form */}
        < ShareThoughts
          getAffinityPosts={getAffinityPosts}
        />

        <div className="postthoughts_area">
          {postData?.length > 0 ? (
            postData?.map((item, index) => {
              console.log("erty", item);
              return (
                <SaraTylorAffinity
                  userID={item?.userID}
                  key={item?._id}
                  handleOptionClick={handleOptionClick}
                  setModalA={setModalA}
                  modalA={modalA}
                  modalB={modalB}
                  modalId={modalId}
                  isUserReacted={item?.isUserReacted}
                  postId={item?._id}
                  name={item?.firstName + " " + item?.lastName}
                  imagesArray={item}
                  createdOn={moment(item?.createdOn).format("YYYY-MM-DD")}
                  reaction={item?.totalReaction}
                  description={item?.description}
                  optionShow={userData?._id === item?.userID}
                  setModalB={setModalB}
                  setModalId={setModalId}
                  modalK={modalK}
                  setModalK={setModalK}
                  changeShow={modalId === item?._id}
                  showComment={modalId === item?._id}
                  type={item?.type}
                  affinityGroupId={item?.affinityGroupId}
                  singleGroup={singleGroup}
                  getAffinityPosts={getAffinityPosts}
                />
              );
            })
          ) : (
            <p>No post Found!</p>
          )}
        </div>
      </div>

      <div className="thought_area_mxh_right">
        {/* <div className="eliteFigDiv" style={{ marginBottom: "1rem" }}>
          <div className="goldClubDiv">
            <div className="goldInnerDiv">
              <div>
                <p className="eliteSubHead">Status</p>
                <p className="goldClHead">Gold</p>
              </div>
              <figure className="goldIconFig">
                <img src={eliteExp} alt="..." />
              </figure>
            </div>
            <div className="cardNameDiv">
              <div>
                <p className="cardNumbText">3713 3783 3783 3783</p>
                <p className="sanjNameText">Sanjana T.</p>
              </div>
              <figure className="goldIcoFigDiv">
                <img src={goldIcon} alt="..." />
              </figure>
            </div>
          </div>
        </div> */}

        <div className="eliteFigDiv" style={{ marginBottom: "1rem" }}>
          {/* <figure className="eliteFig">
            <img src={eliteCard} alt="..." />
          </figure>
          <span className="goldCardText">GOLD CLUB</span> */}
          <div className="goldClubDiv">
            <div className="goldInnerDiv">
              <div>
                <p className="eliteSubHead">Status</p>
                <p className="goldClHead">Gold</p>
              </div>
              <figure className="goldIconFig">
                <img src={eliteExp} alt="..." />
              </figure>
            </div>
            <div className="cardNameDiv">
              <div>
                <p className="cardNumbText">{goldCard?.goldClubNo}</p>
                <p className="sanjNameText">
                  {goldCard?.firstName} {goldCard?.lastName}
                </p>
              </div>
              {/* <p className="goldSmClub">Gold Club</p> */}
              <figure className="goldIcoFigDiv">
                <img src={goldIcon} alt="..." />
              </figure>
            </div>
          </div>
        </div>

        <div className="iniSusTabDiv">
          <Tabs>
            <TabList>
              <Tab>Initiative</Tab>
              <Tab>Sustainable</Tab>
            </TabList>

            <TabPanel>
              <Initiative />
            </TabPanel>
            <TabPanel>
              <GoalAchiver />
            </TabPanel>
          </Tabs>
        </div>
        <TrainingCard />
        <div className="myAffitiDiv">
          <HubAffinityGrp />
        </div>

        {/* <GoalAchiver />
        <EventCard />
        <TrainingCard />
        <JobsReferred />
        <div className="myAffitiDiv">
          <HubAffinityGrp getAffinityPosts={getAffinityPosts} />
        </div> */}
      </div>
      </div>
      </section>

      {/*  ************************ All MODALS * ********************/}
      {
        modalK && (
          <HallOfFrameModal
            closemodal={setModalK}
            activity={"halloffame"}
            initialValues={initialValues5}
          />
        )
      }

      {
        modalL && (
          <MyAffinityGroupModal
            closemodal={setModalL}
            activity={"affinity"}
            initialValues={initialValues7}
          />
        )
      }

      {
        modalM && (
          <InitiativeModal
            closemodal={setModalM}
            activity={"initiative"}
            initialValues={initialValues6}
          />
        )
      }

      {
        modala && (
          <BillBoardModal
            closemodal={setModala}
            activity={"billBoard"}
            initialValues={initialValues}
          />
        )
      }
      {
        modalC && (
          <KababMenu
            closemodal={setModalC}
            activity={"kababMenu"}
            BulletinBoardSingleData={BulletinBoardSingleData}
            id={modalId}
            initialValues={BulletinBoardSingleData}
          />
        )
      }

      {
        modalD && (
          <GoalAchiverModal
            closemodal={setModalD}
            activity={"goalAchiver"}
            initialValues={initialValues4}
          />
        )
      }

      {
        modalE && (
          <CreateModal
            closemodal={setModalE}
            activity={"editGoalAchiver"}
            BulletinBoardSingleData={BulletinBoardSingleData}
            id={modalId}
            initialValues={BulletinBoardSingleData}
          />
        )
      }

      {
        modalF && (
          <EventsModal
            closemodal={setModalF}
            activity={"events"}
            initialValues={initialValues}
          />
        )
      }

      {
        modalG && (
          <EditEventModal
            closemodal={setModalG}
            activity={"editEvent"}
            initialValues={BulletinBoardSingleData1}
          />
        )
      }

      {
        modalH && (
          <TrainingModal
            closemodal={setModalH}
            activity={"training"}
            initialValues={initialValues2}
          />
        )
      }

      {
        modalI && (
          <EditTrainingModal
            closemodal={setModalI}
            activity={"editTraining"}
            initialValues={trainingData}
          />
        )
      }

      {
        modalJ && (
          <JobRefferedModal
            closemodal={setModalJ}
            activity={"jobReffered"}
            initialValues={initialValues3}
          />
        )
      }

      {
        employeeModal && (
          <EmployeeModal
            closemodal={setEmployeeModal}
            activity={"events"}
            initialValues={initialValues}
          />
        )
      }
    </>
  );
}
