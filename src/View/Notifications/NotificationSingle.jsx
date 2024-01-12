import React, { useEffect, useState } from "react";
import "./Notifications.css";
import notiImg from "../../Images/notiImg.png";
import scenarioImg from "../../Images/scenarioImg.jpg";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { useAuthCtx } from "../../context/AuthCtx";
import { toast } from "react-hot-toast";
import moment from "moment";

function NotificationSingle({
  id,
  advocacyPostId,
  closeSingleModal,
  title,
  description,
  image,
  advocacyPostedBy,
  userFirstName,
  userLastName,
  isAdminApproved,
  groupId,
  requestId,
  userID,
  createdOn,
}) {
  const [isApprove, setApprove] = useState("pending");
  const { userData } = useAuthCtx();
  const [isApproveAdvocacy, setApproveAdvocacy] = useState("pending");

  console.log("jhghjgjhjh", isAdminApproved);

  const handleAffinityApprove = async (requestId, approvalStatus) => {
    if (userData?.userType === "Admin") {
      let data = {
        id: requestId,
        // id: id,
        isAdminApproved: approvalStatus,
      };

      let response = await ApiHelperFunction({
        urlPath: "/give-approval",
        method: "POST",
        data: data,
      });

      if (response.status == 200) {
        // console.log("responseadmin", response?.data);
        if (response?.data?.status) {
          toast.success(response?.data?.message);
          // if (approvalStatus === true) {
          //   setApprove(true);
          // } else {
          //   setApprove(false);
          // }

          if (approvalStatus) {
            setApprove(approvalStatus);
          }
        } else {
          toast.error(response?.data?.message);
        }
      } else {
        toast.error(response?.response?.data?.message);
      }
    }
  };

  const handleApprove = async (advocacyPostId, approvalStatus) => {
    if (userData?.userType === "Manager") {
      let data = {
        id: advocacyPostId,
        isAdminApproved: approvalStatus,
      };

      let response = await ApiHelperFunction({
        urlPath: "/advocacy-content-update",
        method: "POST",
        data: data,
      });

      if (response.status == 200) {
        console.log("response", response?.data);
        if (response?.data?.status) {
          toast.success(response?.data?.message);
          if (approvalStatus) {
            setApproveAdvocacy(approvalStatus);
          }
        } else {
          toast.error(response?.message);
        }
      }
    } else if (userData?.userType === "Admin") {
      let data = {
        id: advocacyPostId,
        isAdminApproved: approvalStatus,
      };

      let response = await ApiHelperFunction({
        urlPath: "/advocacy-content-update",
        method: "POST",
        data: data,
      });

      if (response.status == 200) {
        // console.log("responseadmin", response?.data);
        if (response?.data?.status) {
          toast.success(response?.data?.message);
          if (approvalStatus) {
            setApproveAdvocacy(approvalStatus);
          }
        } else {
          toast.error(response?.data?.message);
        }
      }
    } else {
      return;
    }
    closeSingleModal();
    // dispatch(getAdvocacyPosts());
    //  else {
    //   toast.error("Can't get data. Something went wrong");
    // }
  };

  useEffect(() => {
    // Update isApprove state based on the initial value of isAdminApproved
    setApprove(isAdminApproved);
  }, [isAdminApproved]);

  useEffect(() => {
    // Update isApprove state based on the initial value of isAdminApproved
    setApproveAdvocacy(isAdminApproved);
  }, [isAdminApproved]);

  return (
    <>
      <section className="notiSingleSection">
        {groupId ? (
          <div className="notisignalInnerDiv">
            <div className="notSingMainDiv">
              <figure className="notImgFig">
                <img src={notiImg} alt="..." />
              </figure>
              <div>
                <p className="abcNotName">
                  {userFirstName} {userLastName}
                </p>
                <p className="timeNotSinText">
                  {
                    // console.log("createdOn", createdOn, )
                  }
                  {moment(new Date(createdOn)).fromNow()}
                </p>
              </div>
            </div>
            <p className="loremSingleText">{title}</p>
            {/* <figure className="singlePopFig"></figure> */}
            {/* {!isAdminApproved ? (
              <>
                <button
                  className="btn btn-success"
                  style={{ marginTop: "8px", marginLeft: "4rem" }}
                  onClick={() => handleAffinityApprove(requestId, true)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-danger"
                  style={{ marginTop: "8px", marginRight: "4rem" }}
                  onClick={() => handleAffinityApprove(requestId, false)}
                >
                  Reject
                </button>
              </>
            ) : (
              <button className="btn btn-success">Approved</button>
            )} */}

            {isAdminApproved === "pending" ? (
              <>
                <div className="btnacpt">
                  <button
                    className="btn btn-success"
                    style={{ marginLeft: "4rem" }}
                    onClick={() => handleAffinityApprove(requestId, "true")}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginRight: "4rem" }}
                    onClick={() => handleAffinityApprove(requestId, "false")}
                  >
                    Reject
                  </button>
                </div>
              </>
            ) : isAdminApproved === "true" ? (
              <button className="btn btn-success">Approved</button>
            ) : (
              <button className="btn btn-danger">Rejected</button>
            )}

            <button
              className="cancelSingleBtn"
              onClick={() => closeSingleModal()}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        ) : (
          <div className="notisignalInnerDiv">
            <div className="notSingMainDiv">
              <figure className="notImgFig">
                <img src={notiImg} alt="..." />
              </figure>
              <div>
                <p className="abcNotName">
                  {userFirstName} {userLastName}
                </p>
                <p className="timeNotSinText">
                  {" "}
                  {moment(createdOn)?.startOf("hour").fromNow()}
                </p>
              </div>
            </div>
            <p className="loremSingleText">{description}</p>
            <figure className="singlePopFig">
              <img src={image} alt="..." />
            </figure>
            {isAdminApproved === "pending" ? (
              <>
                <div className="btnacpt">
                  <button
                    className="btn btn-success"
                    style={{ marginTop: "8px", marginLeft: "8rem" }}
                    onClick={() => handleApprove(advocacyPostId, "true")}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{ marginTop: "8px", marginLeft: "5px" }}
                    onClick={() => handleApprove(advocacyPostId, "false")}
                  >
                    Reject
                  </button>
                </div>
              </>
            ) : isAdminApproved === "true" ? (
              <button className="btn btn-success">Approved</button>
            ) : (
              <button className="btn btn-danger">Rejected</button>
            )}
            {/* <button className="btn btn-success" onClick={(e) => handleApprove(e)}>
    Accept
  </button>
  <button className="btn btn-danger" style={{ marginLeft: "5px" }}>
    Reject
  </button> */}
            <button
              className="cancelSingleBtn"
              onClick={() => closeSingleModal()}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        )}
        {/* // <div className="notisignalInnerDiv">
        //   <div className="notSingMainDiv">
        //     <figure className="notImgFig">
        //       <img src={notiImg} alt="..." />
        //     </figure>
        //     <div>
        //       <p className="abcNotName">
        //         {userFirstName} {userLastName}
        //       </p>
        //       <p className="timeNotSinText">2 hr</p>
        //     </div>
        //   </div>
        //   <p className="loremSingleText">{description}</p>
        //   <figure className="singlePopFig">
        //     <img src={image} alt="..." />
        //   </figure>
        //   {!isAdminApproved ? (
        //     <>
        //       <button
        //         className="btn btn-success"
        //         style={{ marginTop: "8px", marginLeft: "8rem" }}
        //         onClick={() => handleApprove(id)}
        //       >
        //         Accept
        //       </button>
              
        //     </>
        //   ) : (
        //     <button className="btn btn-success">Approved</button>
        //   )}
         
        //   <button
        //     className="cancelSingleBtn"
        //     onClick={() => closeSingleModal()}
        //   >
        //     <i class="fa-solid fa-xmark"></i>
        //   </button>
        // </div> */}
      </section>
    </>
  );
}

export default NotificationSingle;
