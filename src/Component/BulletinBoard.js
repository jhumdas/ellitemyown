import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Eventimg1 from "../Images/eventimg1.png";
import Eventimg2 from "../Images/No-Image-Placeholder.png";
import CreateModal from "./Modal/CreateModal";
import { useDispatch, useSelector } from "react-redux";
import { getBillBoardData } from "../redux/slices/billBoardSlice";
import moment from "moment";
import { useAuthCtx } from "../context/AuthCtx";
// Constants
import { BASE_URL, API_ENDPOINT_PATH } from "../constants/config";
import { toast } from "react-hot-toast";
import { ApiHelperFunction } from "../services/api/apiHelpers";
import BillBoardModal from "../SeprateModal/BillBoardModal";
import KababMenu from "../SeprateModal/KababMenu";
import Bulletin_Board from "../Images/Icons/PNG/Bulletin_Board.png"
import BulletinView from "../SeprateModal/BulletinView";


export default function BulletinBoard() {
  const [indx, setindx] = useState('')
  const [modalA, setModalA] = useState(false);
  // const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");
  // const [BulletinBoardSingleData, setBulletinBoardSingleData] = useState({});
  const [viewDetails, setViewDetails] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [top, setTop] = useState(null);
  const [left, setLeft] = useState(null);
  const dispatch = useDispatch();
  const billBoardData = useSelector(
    (state) => state?.billBoardData?.billBoardData
  );

  const createModal = () => {
    setModala(true);
  };



  const openDetails = (item, id, index) => {
    console.log("index", index);
    setBulletinBoardSingleData(item);
    setindx(index)
    setViewDetails(!viewDetails);

    setSelectedDescription(item.addNotes || "");
  };

  const { userData, setModala, setModalC, BulletinBoardSingleData, setBulletinBoardSingleData } = useAuthCtx();

  const handleClick = (e, ele, index) => {
    setModalId(ele._id);
    console.log("EVENT", e, index);
    setBulletinBoardSingleData(ele);
    console.log("s", e, ele);
    setTop(e.clientY);
    setLeft(e.clientX);
    setModalA(!modalA);
  };

  useEffect(() => {
    dispatch(getBillBoardData());
    console.log("bill", billBoardData);
  }, []);

  const stopModal = (e) => {
    modalA && setModalA(false);
    // setModalId("");
    e.stopPropagation();
  };

  const handleDelete = async () => {
    const res = await ApiHelperFunction({
      urlPath: `/delete-bulletin-board/${modalId}`,
      method: "PUT",
    });
    if (res?.status) {
      toast.success("Bulletin event deleted successfully");

      dispatch(getBillBoardData());
      setModalA(false);
    } else {
      toast.error(res?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res);
    }
  };
  return (
    <>
      <div
        className="bulletin_board"
        // style={{ overflow: modalA ? "hidden" : "" }}
        // onClick={(e) => stopModal(e)}
        id="bullettBoad"
      >
        <div className="top">
          <div className="head bulleBoardHead">
            <figure className="bulleBoardFig">
              <img src={Bulletin_Board} alt="..." />
            </figure>
            <h4>Bulletin Board</h4>
          </div>
          <div className="">
            {(userData?.userType === "Admin" || userData?.userType === "Manager") ? (
              <div className="tyEvMainDiv" onClick={createModal}>
                <span className="tyEvIcon">
                  <i class="fa-solid fa-plus"></i>
                </span>
                {/* <p className="tyEvText">Add Bulletin Board</p> */}
              </div>
            ) : (<></>)}
          </div>
          <div>
            <Link to="/bulletinDetails" className="seeAllAn">
              See All
            </Link>
          </div>
          {/* {userData?.userType === "Admin" && (
            <div className="crtu" onClick={createModal}>
              Create
            </div>
          )} */}
        </div>
        <div className="bottom">
          {/* {(userData?.userType === "Admin" || userData?.userType === "Manager") ? (
            <div className="tyEvMainDiv" onClick={createModal}>
              <span className="tyEvIcon">
                <i class="fa-solid fa-plus"></i>
              </span>
              <p className="tyEvText">Add Bulletin Board</p>
            </div>
          ):(<></>)} */}
          {billBoardData?.length > 0 ? (
            billBoardData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="card_area"
                  style={{
                    marginBottom: "8px",
                    background: "#EAEBFB",
                    position: "relative",
                    marginTop: "13px",
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
                      className="d-flex justify-content-between "
                      style={{ marginBottom: "9px" }}
                    >
                      <div className="head">
                        <h2>{item.eventName}</h2>
                      </div>
                      {userData?._id === item?.addedBy && (
                        <div
                          className="dot_btn"
                          onClick={(e) => handleClick(e, item, index)}
                          style={{
                            position: "absolute",
                            zIndex: "2",
                            right: "0",
                            top: "9px",
                          }}
                        >
                          <Link to="/" className="btn">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                          </Link>
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
                                style={{ marginRight: "7px", fontSize: "14px" }}
                                class="fas fa-edit"
                                onClick={() => setModalC(true)}
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

                    <div className="d-flex justify-content-between align-items-center">
                      <div className="date">
                        <p>
                          Date: {moment(item.eventDate).format("YYYY-MM-DD")}
                        </p>
                      </div>
                      <button
                        className="viewbtnnn"
                        key={index}
                        onClick={() => openDetails(item, item._id, index)}
                      >
                        View
                        {/* {viewDetails && index === indx && (
                          <div key={index} className="modaldescript">
                            {item.addNotes}
                          </div>
                        )} */}

                        {/* {viewDetails && (
                    <div className="modaldescript">
                      {selectedDescription}
                    </div>
                  )} */}
                      </button>
                      {/* <div className="time">
                      <p>Time: 5:30 PM</p>
                    </div> */}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Nothing to show!</p>
          )}
        </div>
      </div>
      {viewDetails && <BulletinView selectedDescription={selectedDescription} closemodal={setViewDetails} />}

    </>
  );
}
