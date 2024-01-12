import React, { useEffect, useState } from "react";
import "./Notifications.css";
import NotificationSingle from "./NotificationSingle";
import notiImg from "../../Images/notiImg.png";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-toastify";
import moment from "moment";
function NotificationActual({
  id,
  advocacyPostId,
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
  value,
}) {
  const [modalA, setModalA] = useState(false);
  const [notiData, setNotiData] = useState([]);

  const openNotiModal = () => {
    setModalA(true);
  };

  // const viewAllNotification = async () => {
  //   let res = await ApiHelperFunction({
  //     urlPath: "/view-notification",
  //     method: "GET",
  //   });

  //   if (res && res?.status) {
  //     setNotiData(res?.data?.data);
  //   } else {
  //     toast.error(res?.message);
  //   }
  // };

  // useEffect(() => {
  //   viewAllNotification();
  // }, []);

  console.log(value, "value");

  return (
    <>
      <div
        className="notiActualImgDiv"
        // style={
        //   activeY
        //     ? { backgroundColor: "#EDF0FF" }
        //     : { backgroundColor: "white" }
        // }
        onClick={openNotiModal}
      >
        <figure className="notiPersonImg">
          <img src={notiImg} alt="..." />
          {/* <span className="notiBellSpan">{icon}</span> */}
        </figure>
        <div>
          <div>
            {/* Lorem Ipsum <span>Join to</span> BLANK CANVAS{" "} */}
            <h4 className="notiInnerMainHead">{title}</h4>
            <p>{description}</p>
            {/* {notiData?.map((item, key) => {
              return (
                <>
                  <div key={key}>{item?.title}</div>
                </>
              );
            })} */}
          </div>
          <div>
            {/* <span className="hourTimeNoti">2h ago</span> */}
            <span className="hourTimeNoti">
              {moment(createdOn)?.startOf("hour").fromNow()}
            </span>
            {/* <span className="planNoti">Social Media Plan</span> */}
          </div>
        </div>
      </div>
      {modalA && (
        <NotificationSingle
          closeSingleModal={setModalA}
          id={id}
          advocacyPostId={advocacyPostId}
          title={title}
          description={description}
          image={image}
          advocacyPostedBy={advocacyPostedBy}
          userFirstName={userFirstName}
          userLastName={userLastName}
          isAdminApproved={isAdminApproved}
          groupId={groupId}
          requestId={requestId}
          userID={userID}
          createdOn={createdOn}
          Value={value}
        />
      )}
    </>
  );
}

export default NotificationActual;
