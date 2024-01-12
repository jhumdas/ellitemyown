import React, { useState } from "react";
import { Link } from "react-router-dom";
import Eventimg1 from "../Images/eventimg1.png";
import Eventimg2 from "../Images/eventimg2.png";
import { useAuthCtx } from "../context/AuthCtx";
import { ApiHelperFunction } from "../services/api/apiHelpers";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import Allapicall from "../services/Allapicall";
import { error } from "jquery";
import moment from "moment";

function HighlightedEvents() {
  const { calenderMonth, calenderYear } = useAuthCtx();
  const [data, setData] = useState([]);

  console.log("calender", calenderMonth, calenderYear);

  const highlightEvent = async () => {
    const response = await ApiHelperFunction({
      urlPath: "/get-highlights-events",
      method: "POST",
      data: {
        month: calenderMonth,
        year: calenderYear,
      },
    });

    // console.log("zzzz", response?.data?.status);

    if (response.status === 200) {
      setData(response?.data?.data);
      console.log("data get successfully");
    } else {
      setData([]);
      // console.log("zz", response?.response?.data?.message);
    }
  };



  useEffect(() => {
    highlightEvent();
  }, [calenderMonth]);

  return (
    <>
      <section id="highlighted_events">
        <div className="top">
          <div className="head">
            <h4>Highlighted Events</h4>
          </div>
        </div>
        <div className="bottom">
          {data && data?.length > 0 ? (
            data?.map((item, index) => {
              return (
                <div
                  className="card_area"
                  style={{ marginBottom: "17px", background: "#EAEBFB" }}
                >
                  <div className="event_img">
                    {(item?.image === undefined || "")? (
                      <img src={Eventimg1} className="img-fluid" alt="event" />
                    ) : (
                      <img
                        src={item?.image}
                        className="img-fluid"
                        alt="event"
                      />
                    )}
                    {/* <img src={Eventimg1} className="img-fluid" alt="event" /> */}
                  </div>
                  <div className="event_details">
                    <div
                      className="d-flex justify-content-between align-items-start"
                      style={{ marginBottom: "9px" }}
                    >
                      <div className="head">
                        <h2>{item?.eventName}</h2>
                      </div>
                      <div className="d-flex align-items-center mt-2">
                        <div className="plus_btn">
                          <button className="btn">
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                        <div className="dt" style={{ position: "relative" }}>
                          <Link to="/" className="btn">
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="hosted">
                      <p>{item.hostedBy}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="date">
                        <p>Date: {moment(item.eventDate).format("YYYY-MM-DD")}</p>
                      </div>
                      {/* <div className="time">
                        <p>Time: 5:30 PM</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  color: "#c94f4f",
                }}
              >
                No Highlighted Events for this month{" "}
              </p>
            </div>
          )}

          {/* <div
            className="card_area"
            style={{ marginBottom: "17px", background: "#FDEFE9" }}
          >
            <div className="event_img">
              <img src={Eventimg2} className="img-fluid" alt="event" />
            </div>
            <div className="event_details">
              <div
                className="d-flex justify-content-between align-items-start"
                style={{ marginBottom: "9px" }}
              >
                <div className="head">
                  <h2>Cyber Security Webinar</h2>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <div className="plus_btn">
                    <button className="btn">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div className="dt" style={{ position: "relative" }}>
                    <Link to="/" className="btn">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hosted">
                <p>Hosted by company name</p>
              </div>

              <div className="d-flex justify-content-between">
                <div className="date">
                  <p>Date: 16th Feb, 2022</p>
                </div>
                <div className="time">
                  <p>Time: 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="card_area"
            style={{ marginBottom: "17px", background: "#FDEFE9" }}
          >
            <div className="event_img">
              <img src={Eventimg2} className="img-fluid" alt="event" />
            </div>
            <div className="event_details">
              <div
                className="d-flex justify-content-between align-items-start"
                style={{ marginBottom: "9px" }}
              >
                <div className="head">
                  <h2>
                    Driving Road Safety - online session with Traffic officer
                  </h2>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <div className="plus_btn">
                    <button className="btn">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div className="dt" style={{ position: "relative" }}>
                    <Link to="/" className="btn">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hosted">
                <p>Hosted by company name</p>
              </div>

              <div className="d-flex justify-content-between">
                <div className="date">
                  <p>Date: 16th Feb, 2022</p>
                </div>
                <div className="time">
                  <p>Time: 5:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card_area" style={{ background: "#FDEFE9" }}>
            <div className="event_img">
              <img src={Eventimg2} className="img-fluid" alt="event" />
            </div>
            <div className="event_details">
              <div
                className="d-flex justify-content-between align-items-start"
                style={{ marginBottom: "9px" }}
              >
                <div className="head">
                  <h2>World Day We care for Earth</h2>
                </div>
                <div className="d-flex align-items-center mt-2">
                  <div className="plus_btn">
                    <button className="btn">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                  <div className="dt" style={{ position: "relative" }}>
                    <Link to="/" className="btn">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hosted">
                <p>Hosted by company name</p>
              </div>

              <div className="d-flex justify-content-between">
                <div className="date">
                  <p>Date: 16th Feb, 2022</p>
                </div>
                <div className="time">
                  <p>Time: 5:30 PM</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default HighlightedEvents;
