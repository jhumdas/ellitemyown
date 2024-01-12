import React, { useEffect, useState } from "react";
import "./Notifications.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BulletinBoard from "../../Component/BulletinBoard";
import HallofFame from "../../Component/HallofFame";
import Employees from "../../Component/Employees";
import Initiative from "../../Component/Initiative";
import GoalAchiver from "../../Component/GoalAchiver";
import EventCard from "../../Component/EventCard";
import TrainingCard from "../../Component/TrainingCard";
import JobsReferred from "../../Component/JobsReferred";
import HubAffinityGrp from "../Hub/HubAffinityGrp";
import BillBoardModal from "../../SeprateModal/BillBoardModal";
import { useAuthCtx } from "../../context/AuthCtx";
import KababMenu from "../../SeprateModal/KababMenu";
import GoalAchiverModal from "../../SeprateModal/GoalAchiverModal";
import EventsModal from "../../SeprateModal/EventsModal";
import TrainingModal from "../../SeprateModal/TrainingModal";
import JobRefferedModal from "../../SeprateModal/JobRefferedModal";
import ShareThoughts from "../../Component/ShareThoughts";
import SaraTylor from "../../Component/SaraTylor";
import moment from "moment";
import { useSelector } from "react-redux";
import NotificationActual from "./NotificationActual";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
function NotiHome() {
  const {
    userData,
    BulletinBoardSingleData1,
    modala,
    modalD,
    setModalD,
    modalE,
    setModalE,
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
  const [modalA, setModalA] = useState(false);
  const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");

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
  };

  const initialValues1 = {
    eventName: "",
    hostedBy: "",
    eventDate: "",
    name: "",
    trainingDate: "",
    editTrainingName: "",
    editTraininDate: "",
  };

  const initialValues2 = {
    eventName: "",
    hostedBy: "",
    eventDate: "",
    name: "",
    trainingDate: "",
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

  const handleOptionClick = (index) => {
    setChangeShow(index === modalId);
  };

  const postDataReducer = useSelector((state) => state.postGetSlice);
  const [postData, setPostData] = useState([]);
  const [changeShow, setChangeShow] = useState(false);
  const [notiData, setNotiData] = useState([]);

  const viewAllNotification = async () => {
    let res = await ApiHelperFunction({
      urlPath: "/view-notification",
      method: "GET",
    });

    if (res && res?.status) {
      setNotiData(res?.data?.data);
    } else {
      toast.error(res?.message);
    }
  };

  useEffect(() => {
    viewAllNotification();
  }, []);

  const notiArray = [
    {
      icon: <i class="fa-regular fa-bell"></i>,
      bgColor: false,
    },
    {
      icon: <i class="fa-regular fa-bell"></i>,
      bgColor: true,
    },
    {
      icon: <i class="fa-regular fa-comment-dots"></i>,
      bgColor: false,
    },
    {
      icon: <i class="fa-regular fa-comment-dots"></i>,
      bgColor: false,
    },
    {
      icon: <i class="fa-regular fa-comment-dots"></i>,
      bgColor: false,
    },
  ];

  const todayNotiArr = [
    {
      icon: <i class="fa-regular fa-comment-dots"></i>,
      bgColor: true,
    },
    {
      icon: <i class="fa-regular fa-bell"></i>,
      bgColor: true,
    },
    {
      icon: <i class="fa-regular fa-comment-dots"></i>,
      bgColor: false,
    },
    {
      icon: <i class="fa-regular fa-comment-dots"></i>,
      bgColor: true,
    },
  ];

  const unreadArr = [
    {
      icon: <i class="fa-regular fa-comment-dots"></i>,
      bgColor: true,
    },
    {
      icon: <i class="fa-regular fa-comment-dots"></i>,
      bgColor: true,
    },
    {
      icon: <i class="fa-regular fa-comment-dots"></i>,
      bgColor: true,
    },
    {
      icon: <i class="fa-regular fa-bell"></i>,
      bgColor: true,
    },
    {
      icon: <i class="fa-regular fa-bell"></i>,
      bgColor: true,
    },
    {
      icon: <i class="fa-regular fa-bell"></i>,
      bgColor: true,
    },
    {
      icon: <i class="fa-regular fa-comment-dots"></i>,
      bgColor: true,
    },
    {
      icon: <i class="fa-regular fa-bell"></i>,
      bgColor: true,
    },
  ];
  return (
    <>
     <section className="mainpagediv">
        <div className="mainpagecontainer">
      <div className="thought_area_mxh-left">
        <BulletinBoard />
        <HallofFame />
        <Employees />
        <EventCard />
        <JobsReferred />
      </div>
      <div className="thought_area_mxh-mid notiMidThgtDiv">
        <div className="notifiInnerDiv">
          <p className="notifiHead">Notifications</p>
          <div className="allNotiTabDiv">
            <Tabs>
              <TabList>
                <Tab>All</Tab>
                <Tab>Unread</Tab>
              </TabList>

              <TabPanel>
                <div className="newNotifiDiv">
                  <p className="allNotiSubHeads">New</p>
                  <div>
                    {notiData?.map((value) => (
                      <NotificationActual
                        // activeY={value.bgColor}
                        // icon={value.icon}
                        id={value?._id}
                        advocacyPostId={value?.advocacyPostId}
                        title={value?.title}
                        description={value?.description}
                        image={value?.image}
                        advocacyPostedBy={value?.advocacyPostedBy}
                        userFirstName={value?.userFirstName}
                        userLastName={value?.userLastName}
                        isAdminApproved={value?.isAdminApproved}
                        groupId={value?.groupId}
                        requestId={value?.requestId}
                        userID={value?.userID}
                        createdOn={value?.createdOn}
                        value={value}
                      />
                    ))}
                  </div>
                </div>
                {/* <div>
                  <p className="allNotiSubHeads">Today</p>
                  {todayNotiArr.map((value) => (
                    <NotificationActual
                      activeY={value.bgColor}
                      icon={value.icon}
                    />
                  ))}
                </div> */}
              </TabPanel>
              <TabPanel>
                <div className="newNotifiDiv">
                  <p className="allNotiSubHeads">New</p>
                  <div>
                    {unreadArr.map((value) => (
                      <NotificationActual
                        activeY={value.bgColor}
                        icon={value.icon}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="allNotiSubHeads">Today</p>
                  {unreadArr.map((value) => (
                    <NotificationActual
                      activeY={value.bgColor}
                      icon={value.icon}
                    />
                  ))}
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="thought_area_mxh_right">
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

      {/* *************************************** */}
      {modala && (
        <BillBoardModal
          closemodal={setModala}
          activity={"billBoard"}
          initialValues={initialValues}
        />
      )}

      {modalD && (
        <GoalAchiverModal
          closemodal={setModalD}
          activity={"goalAchiver"}
          initialValues={initialValues1}
        />
      )}

      {modalF && (
        <EventsModal
          closemodal={setModalF}
          activity={"events"}
          initialValues={initialValues}
        />
      )}

      {modalH && (
        <TrainingModal
          closemodal={setModalH}
          activity={"training"}
          initialValues={initialValues2}
        />
      )}

      {modalJ && (
        <JobRefferedModal
          closemodal={setModalJ}
          activity={"jobReffered"}
          initialValues={initialValues3}
        />
      )}
    </>
  );
}

export default NotiHome;
