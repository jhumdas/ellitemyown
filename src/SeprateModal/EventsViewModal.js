import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Eventimg1 from "../Images/eventimg1.png";
import Eventimg2 from "../Images/No-Image-Placeholder.png";
// import CreateModal from "./Modal/CreateModal";
import { useDispatch, useSelector } from "react-redux";
import { getBillBoardData } from "../redux/slices/billBoardSlice";
import moment from "moment";
import { useAuthCtx } from "../context/AuthCtx";
// Constants
import { BASE_URL, API_ENDPOINT_PATH } from "../constants/config";
import { toast } from "react-toastify";
import { ApiHelperFunction } from "../services/api/apiHelpers";
import { getEventData } from "../redux/slices/eventSlice";
import EventsModal from "../SeprateModal/EventsModal";
import EditEventModal from "../SeprateModal/EditEventModal";
const initialValues = {
  eventName: "",
  hostedBy: "",
  eventDate: "",
  name: "",
  trainingDate: "",
  editTrainingName: "",
  editTraininDate: "",
};

export default function EventsViewModal({eventsForSelectedDate}) {
  // console.log(eventsForSelectedDate,"eventsForSelectedDate")
  // const [modala, setModala] = useState(false);
  const [modalA, setModalA] = useState(false);
  // const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");

  const [top, setTop] = useState(null);
  const [left, setLeft] = useState(null);
  const dispatch = useDispatch();
  const { userData , modalF, setModalF ,  BulletinBoardSingleData1,
    setBulletinBoardSingleData1 , modalG, setModalG, } = useAuthCtx();


  const billBoardData = useSelector((state) => state.eventSlice?.event);

  const createModal = () => {
    setModalF(true);
  };

  
  const handleClick = (e, ele, index) => {
    setModalId(ele._id);
    // console.log("EVENT", e, index);
    setBulletinBoardSingleData1(ele);
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

  // const handleDelete = async () => {
  //   const res = await ApiHelperFunction({
  //     urlPath: `/delete-event/${modalId}`,
  //     method: "DELETE",
  //   });
  //   if ( res && res?.status) {
  //     toast.success("Event deleted successfully");

  //     dispatch(getEventData());
  //     setModalA(false);
  //   } else {
  //     toast.error(res?.message || "Something went wrong");
  //     console.log("ERROR CREATING USER3", res);
  //   }
  // };
  return (
    <>
      <div
        className="bulletin_board"
        // style={{ overflow: modalA ? "hidden" : "" }}
        onClick={(e) => stopModal(e)}
        id="eventsBulle"
      >
        {/* <div className="top">
          <div className="head">
            <h4>Events</h4>
          </div>
          <div>
            <Link to="/eventsDeails" className="seeAllAn">
              See All
            </Link>
          </div>

        </div> */}
        <div className="bottom">
          {/* {userData?.userType === "Admin" && (
            <div className="tyEvMainDiv" onClick={createModal}>
              <span className="tyEvIcon">
                <i class="fa-solid fa-plus"></i>
              </span>
              <p className="tyEvText">Event Name</p>
            </div>
          )} */}
          {/* {billBoardData.length > 0 ? (
            billBoardData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card_area"
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
                      <img src={Eventimg2} className="img-fluid" alt="event" />
                    )}
                  </div>
                  <div className="event_details">
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginBottom: "9px" }}
                    >
                      <div className="head">
                        <h2>{item.eventName}</h2>
                      </div>
                     
                    </div>
                    <div className="hosted">
                      <p>Hosted by {item.hostedBy}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="date">
                        <p>
                          Date: {moment(item.eventDate).format("YYYY-MM-DD")}
                        </p>
                      </div>
                     
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No data to show!</p>
          )} */}


{eventsForSelectedDate.length > 0 ? (
            eventsForSelectedDate?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card_area"
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
                      <img src={Eventimg2} className="img-fluid" alt="event" />
                    )}
                  </div>
                  <div className="event_details">
                    <div
                      className="d-flex justify-content-between"
                      style={{ marginBottom: "9px" }}
                    >
                      <div className="head">
                        <h2>{item.eventName}</h2>
                      </div>
                     
                    </div>
                    <div className="hosted">
                      <p>Hosted by {item.hostedBy}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="date">
                        <p>
                          Date: {moment(item.eventDate).format("YYYY-MM-DD")}
                        </p>
                      </div>
                     
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No events on the selected date</p>
          )}
        </div>
      </div>

    </>
  );
}
