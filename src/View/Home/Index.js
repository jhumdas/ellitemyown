import React, { useEffect, useState } from "react";
import AffinityGroups from "../../Component/AffinityGroups";
import BulletinBoard from "../../Component/BulletinBoard";
import HallofFame from "../../Component/HallofFame";
import Initiative from "../../Component/Initiative";
import JobsReferred from "../../Component/JobsReferred";
import EventCard from "../../Component/EventCard";
import ShareThoughts from "../../Component/ShareThoughts";
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
import eliteExp from "../../Images/Icons/PNG/Elite employee experience logo.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import EditHallOfFame from "../../SeprateModal/EditHallOfFame";
import charbot from "../../Images/charbot.png"
import Chatbot from "../../Component/Chatbot/Chatbot";
export default function Index() {
  const { setLoading } = useAuthCtx();
  const postDataReducer = useSelector((state) => state.postGetSlice);
  const dispatch = useDispatch();
  const [postData, setPostData] = useState([]);
  const {
    userData,
    BulletinBoardSingleData1,
    HallfameSingleData1,
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
    modalO,
    setModalO,
    BulletinBoardSingleData,
  } = useAuthCtx();
  const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");
  const [modalA, setModalA] = useState(false);
  const [goldCard, setGoldCard] = useState([]);

  const [changeShow, setChangeShow] = useState(false);
  const params = useParams();

  //reload posts on addition

  // const getPosts = () => {
  //   dispatch(getAllPosts());
  //
  //   console.log("posts123",postData);

  // }

  console.log("postData", postData);

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
    isHighLighted: ""

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
    // addEmp: []
  };

  const handleOptionClick = (index) => {
    setChangeShow(index === modalId);
  };


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
      setPostData(response?.data?.data);
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
      // toast.error(response.message);
    }
    setLoading(false);
  };

  console.log(goldCard, "tyuiop");

  useEffect(() => {
    dispatch(getAllPosts());
    getGoldCard();
  }, []);

  useEffect(() => {
    getAffinityPosts();
    // dispatch(getAllPosts());
    // dispatch(getAllAffinityPosts());
  }, [params?.id]);

  useEffect(() => {
    setPostData(postDataReducer?.posts);
  }, [postDataReducer?.posts]);

  return (
    <>
      {/* <section id="homepage_area">
        
      </section> */}
      {/* <div className="thought_area_mxh_main">
        
      </div> */}
      <section className="mainpagediv">
        <div className="mainpagecontainer">
          <div className="thought_area_mxh-left">
            <BulletinBoard />
            <HallofFame />
            <Employees />
            <EventCard />
            <JobsReferred />
          </div>
          <div className="thought_area_mxh-mid">
            <ShareThoughts getAffinityPosts={getAffinityPosts} />
            <div className="postthoughts_area">
              {postData?.length > 0 ? (
                postData?.map((item, index) => {
                  console.log("erty", item);
                  return (
                    <SaraTylor
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
                      createdOn={moment(item.createdOn).format("YYYY-MM-DD")}
                      reaction={item?.totalReaction}
                      description={item?.description}
                      optionShow={userData?._id === item?.userID}
                      setModalB={setModalB}
                      setModalId={setModalId}
                      modalK={modalK}
                      setModalK={setModalK}
                      changeShow={modalId === item?._id}
                      showComment={modalId === item?._id}
                    />
                  );
                })
              ) : (
                <p>No post Found!</p>
              )}
            </div>
          </div>
          <div className="thought_area_mxh_right">
            <div className="eliteFigDiv" style={{ marginBottom: "8px" }}>
              {/* <figure className="eliteFig">
            <img src={eliteCard} alt="..." />
          </figure>
          <span className="goldCardText">GOLD CLUB</span> */}
              <div className="goldClubDiv">
                <div className="goldInnerDiv">
                  <div>
                    {/* <p className="eliteSubHead">Status</p> */}
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
          </div>
        </div>
     
     
      </section>
      <Chatbot />

      {/*  ************************ All MODALS * ********************/}
      {modalK && (
        <HallOfFrameModal
          closemodal={setModalK}
          activity={"halloffame"}
          initialValues={initialValues5}
        />
      )}

      {
        modalO && <EditHallOfFame closemodal={setModalO}
          activity={"editHallFame"}
          initialValues={HallfameSingleData1} />
      }

      {modalL && (
        <MyAffinityGroupModal
          closemodal={setModalL}
          activity={"affinity"}
          initialValues={initialValues7}
        />
      )}

      {modalM && (
        <InitiativeModal
          closemodal={setModalM}
          activity={"initiative"}
          initialValues={initialValues6}
        />
      )}

      {modala && (
        <BillBoardModal
          closemodal={setModala}
          activity={"billBoard"}
          initialValues={initialValues}
        />
      )}
      {modalC && (
        <KababMenu
          closemodal={setModalC}
          activity={"kababMenu"}
          BulletinBoardSingleData={BulletinBoardSingleData}
          id={modalId}
          initialValues={BulletinBoardSingleData}
        />
      )}

      {modalD && (
        <GoalAchiverModal
          closemodal={setModalD}
          activity={"goalAchiver"}
          initialValues={initialValues4}
        />
      )}

      {modalE && (
        <CreateModal
          closemodal={setModalE}
          activity={"editGoalAchiver"}
          BulletinBoardSingleData={BulletinBoardSingleData}
          id={modalId}
          initialValues={BulletinBoardSingleData}
        />
      )}

      {modalF && (
        <EventsModal
          closemodal={setModalF}
          activity={"events"}
          initialValues={initialValues}
        />
      )}

      {modalG && (
        <EditEventModal
          closemodal={setModalG}
          activity={"editEvent"}
          initialValues={BulletinBoardSingleData1}
        />
      )}

      {modalH && (
        <TrainingModal
          closemodal={setModalH}
          activity={"training"}
          initialValues={initialValues2}
        />
      )}

      {modalI && (
        <EditTrainingModal
          closemodal={setModalI}
          activity={"editTraining"}
          initialValues={trainingData}
        />
      )}

      {modalJ && (
        <JobRefferedModal
          closemodal={setModalJ}
          activity={"jobReffered"}
          initialValues={initialValues3}
        />
      )}

      {employeeModal && (
        <EmployeeModal
          closemodal={setEmployeeModal}
          activity={"events"}
          initialValues={initialValues}
        />
      )}
    </>
  );
}
