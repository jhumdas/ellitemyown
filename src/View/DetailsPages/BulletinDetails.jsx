import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Eventimg2 from "../../Images/No-Image-Placeholder.png";
import CreateModal from "../../Component/Modal/CreateModal";
import { useDispatch, useSelector } from "react-redux";
import { getBillBoardData } from "../../redux/slices/billBoardSlice";
import moment from "moment";
import { useAuthCtx } from "../../context/AuthCtx";
// Constants
import { BASE_URL, API_ENDPOINT_PATH } from "../../constants/config";
import { toast } from "react-toastify";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import "./Details.css";
import KababMenu from "../../SeprateModal/KababMenu";
import bulletinImg from "../../Images/Icons/PNG/Bulletin_Board.png";
import BulletinView from "../../SeprateModal/BulletinView";

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

export default function BulletinDetails() {
  const [indx, setindx] = useState('')
  const [modala, setModala] = useState(false);
  const [modalA, setModalA] = useState(false);
  const [modalB, setModalB] = useState(false);
  const [modalId, setModalId] = useState("");
  const [BulletinBoardSingleData, setBulletinBoardSingleData] = useState({});
  const [viewDetails, setViewDetails] = useState(false);
  const [selectedDescription, setSelectedDescription] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null); // New state
  const [top, setTop] = useState(null);
  const [left, setLeft] = useState(null);
  const dispatch = useDispatch();
  const billBoardData = useSelector(
    (state) => state.billBoardData?.billBoardData
  );
  const createModal = () => {
    setModala(true);
  };

  // const openDetails = (item) => {
  //   setViewDetails(!viewDetails);
  //   // alert(item.addNotes);
  // };


  const { userData } = useAuthCtx();

  const handleClick = (e, ele, index) => {
    setModalId(ele._id);
    // console.log("EVENT", e, index);
    setBulletinBoardSingleData(ele);
    // console.log("s", e, ele);
    setTop(e.clientY);
    setLeft(e.clientX);
    setModalA(!modalA);
  };


  const openDetails = (item, id, index) => {
    console.log("index", index);
    setBulletinBoardSingleData(item);
    setindx(index)
    setViewDetails(!viewDetails);
    //  alert("working")
    setSelectedDescription(item.addNotes || "");
  };

  // const handleIdClick = (id) => {
  //   // Fetch the description based on the ID
  //   const selectedItem = billBoardData.find((item) => item._id === id);
  //   if (selectedItem) {
  //     setModalId(id);
  //     setSelectedDescription(selectedItem.addNotes || "");
  //     setSelectedItemId(id); // Set the selected item ID
  //     setModalA(true);
  //   }
  // };

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
      toast.success("Bulletin deleted successfully");

      dispatch(getBillBoardData());
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
            <div className="bulletin_board" id="bullettBoad">
              <div className="top">
                <div className="head bulleBoardHead">
                  <figure className="bulleBoardFig">
                    <img src={bulletinImg} alt="..." />
                  </figure>
                  <h4>Bulletin Board</h4>
                  <div className="" style={{marginLeft:"15px"}}>
                  {(userData?.userType === "Admin" || userData?.userType === "Manager") ? (
                    <div className="tyEvMainDiv" onClick={createModal}>
                      <span className="tyEvIcon">
                        <i class="fa-solid fa-plus"></i>
                      </span>
                      {/* <p className="tyEvText">Add Bulletin Board</p> */}
                    </div>
                  ) : (<></>)}
                </div>
                </div>
             
                <div>
                  <Link to="/" className="backHomeBtn">
                    {/* <i class="fa-solid fa-house-chimney"></i> */}
                    Back
                  </Link>
                </div>
              </div>
              <div className="bottom bullentindetailflx">

                {billBoardData?.length > 0 ? (
                  billBoardData?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="card_area_details card_area_bullentindetails"
                        style={{
                          marginBottom: "17px",
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
                            <img
                              src={Eventimg2}
                              className="img-fluid"
                              alt="event"
                            />
                          )}
                          <div className="view_dotsabs">
                            {userData?._id === item?.addedBy && (
                              <div
                                className="dot_btn"
                                onClick={(e) => handleClick(e, item, index)}
                                style={{
                                  position: "absolute",
                                  zIndex: "2",
                                  right: "4px",
                                  top: "5px",

                                }}
                              >
                                <Link to="/bulletinDetails" className="btn" style={{ color: "#fff" }}>
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
                            )}
                            <div className="vwdnbtn">
                              <button
                                className="viewbtn" style={{cursor:"pointer"}}
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
                              {/* <div className="vsmodalcntnt"></div> */}
                            </div>

                          </div>
                        </div>
                        <div className="head">
                          <h2>{item.eventName}</h2>
                        </div>
                        <div className="date">
                          <p>
                            Date:{" "}
                            {moment(item.eventDate).format("YYYY-MM-DD")}
                          </p>
                        </div>
                        <div className="event_details">
                          <div
                            className="d-flex justify-content-between"
                            style={{ marginBottom: "9px" }}
                          >
                            {/* <div className="head">
                              <h2>{item.eventName}</h2>
                            </div> */}
                            {/* {userData?._id === item?.addedBy && (
                              <div
                                className="dot_btn"
                                onClick={(e) => handleClick(e, item, index)}
                                style={{
                                  position: "absolute",
                                  zIndex: "2",
                                  right: "0",
                                  top: "0",
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
                            )} */}
                          </div>
                          {/* <div className="hosted">
                    <p>Hosted by {item.hostedBy}</p>
                  </div> */}

                          <div className="d-flex justify-content-between">
                            {/* <div className="date">
                              <p>
                                Date:{" "}
                                {moment(item.eventDate).format("YYYY-MM-DD")}
                              </p>
                            </div> */}
                            {/* <button
                              className="viewbtn"
                              key={index}
                              onClick={() => openDetails(item, item._id, index)}
                            >
                              View
                              {viewDetails && index === indx && (
                                <div key={index} className="modaldescript">
                                  {item.addNotes}
                                </div>
                              )} */}

                            {/* {viewDetails && (
                    <div className="modaldescript">
                      {selectedDescription}
                    </div>
                  )} */}
                            {/* </button> */}

                            {/* <div className="time">
                      <p>Time: 5:30 PM</p>
                    </div> */}
                          </div>
                          {/* <button
                            className="viewbtn"
                            onClick={() => openDetails(item)}
                          >
                            View
                          </button> */}
                          {/* <div className="d-flex justify-content-between">
                            <div className="date">
                              <p>Description : {item?.addNotes}</p>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <p>Nothing to show!</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {modalB && (
        <CreateModal
          closemodal={setModalB}
          activity={"kababMenu"}
          BulletinBoardSingleData={BulletinBoardSingleData}
          id={modalId}
          initialValues={BulletinBoardSingleData}
        />
      )} */}

      {modalB && (
        <KababMenu
          closemodal={setModalB}
          activity={"kababMenu"}
          BulletinBoardSingleData={BulletinBoardSingleData}
          id={modalId}
          initialValues={BulletinBoardSingleData}
        />
      )}

      {modala && (
        <CreateModal
          closemodal={setModala}
          activity={"billBoard"}
          initialValues={initialValues}
        />
      )}

      {viewDetails &&<BulletinView selectedDescription={selectedDescription} closemodal={setViewDetails}/>}
    </section>
  );
}
