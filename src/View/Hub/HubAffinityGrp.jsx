import React, { useEffect, useState } from "react";
import "./Hub.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthCtx } from "../../context/AuthCtx";
import { useDispatch, useSelector } from "react-redux";
import {
  getAffinityGroups,
  getMyAffinityGroups,
} from "../../redux/slices/affinitySlice";
import { RWebShare } from "react-web-share";
// import table_icon from "../../Images/table_icon.png";
import table_icon from "../../Images/Icons/PNG/share-icon-elite-web.svg";
import msgIcon from "../../Images/Icons/PNG/Comment.png";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-hot-toast";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import profilePic from "../../Images/profile_img1.png";
import chatSend from "../../Images/Icons/PNG/Post.png";
import ThoughtModalHome from "../../Component/Modal/ThoughtModalHome";

function HubAffinityGrp({ getAffinityPosts }) {
  const { setModalL, userData } = useAuthCtx();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const affinityData = useSelector((state) => state?.affinitySlice?.groups);
  const myGroup = useSelector((state) => state?.affinitySlice?.myGroups);
  // console.log(affinityData, "affinityData");
  // const [myGroup, setMyGroup] = useState([]);
  const [modalopen, setModalOpen] = useState(false);
  const [checkgroup, setCheckGroup] = useState("mygroup");

  const createModal = () => {
    setModalL(true);
  };

  const handleClick = (item) => {
    navigate(`/affinity/${item?._id}`);
  };

  // const handleClick = (item) => {
  //   const destination =
  //     checkgroup === "mygroup" ? "/affinity" : "/myaffinitymygroups";
  //   navigate(`${destination}/${item?._id}`);
  // };

  const handleModal = () => {
    setModalOpen(true);
  };

  const handleJoinClick = async (item) => {
    const data = {
      // name: groupName,
      groupId: item?._id,
      checkgroup,
    };
    const response = await ApiHelperFunction({
      urlPath: `/join-group`,
      method: "POST",
      data,
    });

    if (response.status === 200) {
      toast.success(response?.data?.message);
      // dispatch(getAffinityGroups());
      // setGroupName("");
    } else {
      toast.error(response?.response?.data?.message);
    }
  };

  // const getAffinityMyGroupData = async () => {
  //   const response = await ApiHelperFunction({
  //     urlPath: `/view-my-affinity-group`,
  //     method: "GET",
  //   });
  //   console.log("RESPONSEFSDFu", response?.data?.data);
  //   if (response && response.status) {
  //     setMyGroup(response?.data?.data.reverse());
  //   } else {
  //     toast.error(response.response?.data?.message);
  //   }
  // };

  // const getAffinityMyGroupData = async () => {
  //   try {
  //     const response = await ApiHelperFunction({
  //       urlPath: `/view-my-affinity-group`,
  //       method: "GET",
  //     });

  //     if (response && response.status) {
  //       const affinityGroups = response?.data?.data?.map(
  //         (item) => item?.affinityGroup
  //       );

  //       const flattenedAffinityGroups = [].concat(...affinityGroups);

  //       setMyGroup(flattenedAffinityGroups);
  //     } else {
  //       // toast.error(response.message);
  //     }
  //   } catch (error) {
  //     // console.error("Error fetching affinity groups:", error);
  //     // toast.error("Error fetching affinity groups");
  //   }
  // };

  useEffect(() => {
    dispatch(getAffinityGroups());
    // getAffinityMyGroupData();
    dispatch(getMyAffinityGroups());
  }, []);
  console.log("object,", myGroup);

  return (
    <div className="hubAffityDiv">
      <div className="myAffSeeAllBtnDiv">
        <p className="myAffityHead">Affinity Groups</p>
        <div className="">
          {userData?.userType === "Admin" || userData?.userType === "Manager" ? (
            <div className="tyEvMainDiv" onClick={createModal}>
              <span className="tyEvIcon">
                <i class="fa-solid fa-plus"></i>
              </span>
              {/* <p className="tyEvText">Add Group</p> */}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="myAffSeeAllBtnInnerDiv">
          {/* <Link className="myAffSeeAllBtn" to="/myAffinityDetails">
            See other Groups
          </Link> */}

          <Link
            className="myAffSeeAllBtn"
            to={
              checkgroup === "mygroup"
                ? "/myaffinitymygroups"
                : "/myAffinityDetails"
            }
          >
            See All
          </Link>
        </div>

      </div>
      {/* <div className="tyEvMainDiv" onClick={() => setModalL(true)}>
        <span className="tyEvIcon">
          <i class="fa-solid fa-plus"></i>
        </span>
        <p className="tyEvText">Add Group</p>
      </div> */}

      <div className="bottom">
        {/* {userData?.userType === "Admin" || userData?.userType === "Manager" ? (
          <div className="tyEvMainDiv" onClick={createModal}>
            <span className="tyEvIcon">
              <i class="fa-solid fa-plus"></i>
            </span>
            <p className="tyEvText">Add Group</p>
          </div>
        ) : (
          ""
        )} */}
      </div>
      <div className="myAffinityGrpsDiv">
        <Tabs
          onSelect={(index) =>
            setCheckGroup(index === 0 ? "mygroup" : "others")
          }
        >
          <TabList>
            <Tab>My Groups</Tab>
            <Tab>Others</Tab>
          </TabList>

          <TabPanel>
            <div className="evetCresParentDiv">
              {myGroup?.length > 0 ? (
                myGroup?.map((item, ind) => {
                  return (
                    <div
                      className="evetCreMainDiv"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleClick(item)}
                      // to={`/affinity/${item._id}`}
                      key={ind}
                    >
                      <div
                        className="evetCreMainDiv"
                        style={{ backgroundColor: "#F1E5DD" }}
                      >
                        <div className="eveCreAfisDiv">
                          <div className="profile_pic">
                            {/* <img
                              className="img-fluid"
                              src={item?.image}
                              alt="..."
                            /> */}

                            {item?.image === "image" ? (
                              <img src={profilePic} alt="" />
                            ) : (
                              <img
                                className="img-fluid"
                                src={item?.image}
                                alt="..."
                              />
                            )}
                          </div>
                          <p className="hubEvCrePara">{item?.groupName}</p>
                          {/* <p className="hubEvCrePara">{item?.grouptype}</p> */}
                          <div className="">
                            {/* <figure className="hubMyAfFig hubMyAfFig1">
                      <img src={afiPic1} alt="..." />
                    </figure> */}

                            {userData?.userType === "Admin" ||
                              userData?.userType === "Manager" ? (
                              <RWebShare
                                data={{
                                  text: `${item?.groupName}`,
                                  // url: "",
                                  title: "Share group",
                                }}
                                // onClick={() =>
                                //   console.log("shared successfully!")
                                // }
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
                                    const textToCopy = `${item?.groupName}`;
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
                                  <img
                                    src={table_icon}
                                    alt="..."
                                    className="shareIconImg"
                                  />
                                  <span></span>
                                </div>
                              </RWebShare>
                            ) : (
                              // <button
                              //   className="jnbtn d-none"
                              //   onClick={() => handleJoinClick(item)}
                              // >
                              //   Join
                              // </button>

                              <></>
                            )}

                            {/* <RWebShare
                      data={{
                        text: "Like humans, flamingos make friends for life",
                        url: "https://google.com",
                        title: "Share group",
                      }}
                      onClick={() => console.log("shared successfully!")}
                    >
                      <div className="share">
                        <img
                          src={table_icon}
                          alt="..."
                          className="shareIconImg"
                        />
                        <span></span>
                      </div>
                    </RWebShare> */}

                            {/* <figure className="hubMyAfFig hubMyAfFig2">
                <img src={afiPic2} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig3">
                <img src={afiPic3} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig4">
                <img src={afiPic4} alt="..." />
              </figure> */}
                          </div>
                        </div>
                        <div className="myAffCreBtnsDiv">
                          <p className="myAffCrePara">
                            Created by {item?.gpAdminFirstName}{" "}
                            {item?.gpAdminLastName} ({item?.userType})
                          </p>
                          {/* <button className="myAffCreChatBtn">
                    <i class="fa-regular fa-comment-dots"></i>
                  </button> */}
                          {/* <figure className="msgIconFig">
                            <img src={msgIcon} alt="..." />
                          </figure> */}
                        </div>
                        <div
                          className="myAffTypeBtnInpDiv"
                          style={{ cursor: "pointer" }}
                          onClick={handleModal}
                        >
                          <input
                            type="text"
                            placeholder="Type your message"
                            className="myAffChatTypeInp"
                          />
                          <button className="myAffChatTypeBtn">
                            <img src={chatSend} alt="..." />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No Groups to show!</p>
              )}
              {/* <div className="evetCreMainDiv" style={{ backgroundColor: "#F1E5DD" }}>
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
              {/* <div className="evetCreMainDiv" style={{ backgroundColor: "#F1F1D4" }}>
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
        <div className="evetCreMainDiv" style={{ backgroundColor: "#E8E9FF" }}>
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
          </TabPanel>
          <TabPanel>
            <div className="evetCresParentDiv">
              {affinityData?.length > 0 ? (
                affinityData?.map((item, ind) => {
                  return (
                    <div
                      className="evetCreMainDiv"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleClick(item)}
                      // to={`/affinity/${item._id}`}
                      key={ind}
                    >
                      <div
                        className="evetCreMainDiv"
                        style={{ backgroundColor: "#F1E5DD" }}
                      >
                        <div className="eveCreAfisDiv">
                          <div className="profile_pic">
                            {/* <img
                              className="img-fluid"
                              src={item?.image}
                              alt="..."
                            /> */}

                            {item?.image === "image" ? (
                              <img src={profilePic} alt="" />
                            ) : (
                              <img
                                className="img-fluid"
                                src={item?.image}
                                alt="..."
                              />
                            )}
                          </div>
                          <p className="hubEvCrePara">{item?.groupName}</p>
                          {/* <p className="hubEvCrePara">{item?.grouptype}</p> */}
                          <div className="">
                            {/* <figure className="hubMyAfFig hubMyAfFig1">
                      <img src={afiPic1} alt="..." />
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
                            ) : ( */}
                            <button
                              className="jnbtn"
                              onClick={() => handleJoinClick(item)}
                            >
                              Join
                            </button>
                            {/* )} */}
                            {/* <RWebShare
                      data={{
                        text: "Like humans, flamingos make friends for life",
                        url: "https://google.com",
                        title: "Share group",
                      }}
                      onClick={() => console.log("shared successfully!")}
                    >
                      <div className="share">
                        <img
                          src={table_icon}
                          alt="..."
                          className="shareIconImg"
                        />
                        <span></span>
                      </div>
                    </RWebShare> */}
                            {/* <figure className="hubMyAfFig hubMyAfFig2">
                <img src={afiPic2} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig3">
                <img src={afiPic3} alt="..." />
              </figure>
              <figure className="hubMyAfFig hubMyAfFig4">
                <img src={afiPic4} alt="..." />
              </figure> */}
                          </div>
                        </div>
                        <div className="myAffCreBtnsDiv">
                          <p className="myAffCrePara">
                            Created by {item?.gpAdminFirstName}{" "}
                            {item?.gpAdminLastName} ({item?.userType})
                          </p>
                          {/* <button className="myAffCreChatBtn">
                    <i class="fa-regular fa-comment-dots"></i>  
                  </button> */}
                          {/* <figure className="msgIconFig">
                            <img src={msgIcon} alt="..." />
                          </figure> */}
                        </div>
                        <div
                          className="myAffTypeBtnInpDiv"
                          style={{ cursor: "pointer" }}
                          onClick={handleModal}
                        >
                          <input
                            type="text"
                            placeholder="Type your message"
                            className="myAffChatTypeInp"
                          />
                          <button className="myAffChatTypeBtn">
                            <img src={chatSend} alt="..." />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>No Groups to show!</p>
              )}
              {/* <div className="evetCreMainDiv" style={{ backgroundColor: "#F1E5DD" }}>
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
              {/* <div className="evetCreMainDiv" style={{ backgroundColor: "#F1F1D4" }}>
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
        <div className="evetCreMainDiv" style={{ backgroundColor: "#E8E9FF" }}>
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
          </TabPanel>
        </Tabs>
      </div>
      {modalopen && (
        <ThoughtModalHome
          getAffinityPosts={getAffinityPosts}
          closemodal={setModalOpen}
          text={"Share your thoughts..."}
          attach={"Attach"}
          event={"Event"}
        // elite={"élite Post Card"}
        />
      )}
    </div>
  );
}

export default HubAffinityGrp;
