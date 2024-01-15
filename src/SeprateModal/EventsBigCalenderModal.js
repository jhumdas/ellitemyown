import React from "react";
import Eventimg2 from "../Images/No-Image-Placeholder.png";
import moment from "moment";
import { RWebShare } from "react-web-share";
import table_icon from "../Images/Icons/PNG/share-icon-elite-web.svg"
import toast from "react-hot-toast";

export default function EventsBigCalenderModal({ eventsForSelectedDate }) {
  console.log(eventsForSelectedDate, "eventsForSelectedDaterty");
  return (
    <>
      <section className="eventsBigCalenSection">
        <div
          className="bulletin_board"
          // onClick={(e) => stopModal(e)}
          id="eventsBulle"
        >
          <div className="bottom">
            <div
              // key={index}
              className="card_area"
              style={{
                background: "#EAEBFB",
                position: "relative",
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="event_img">
                {eventsForSelectedDate?.image ? (
                  <img
                    src={eventsForSelectedDate?.image}
                    className="img-fluid"
                    alt="event"
                  />
                ) : (
                  <img src={Eventimg2} className="img-fluid" alt="event" />
                )}
              </div>

              <div className="event_details">
                <div style={{ marginBottom: "9px" }}>
                  <div className="head">
                    <h2>Event Title : {eventsForSelectedDate?.title}</h2>
                  </div>
                </div>
                <div className="hosted">
                  <p>
                    End :{" "}
                    {moment(eventsForSelectedDate?.end).format("YYYY-MM-DD")}
                  </p>
                </div>

                <div className="hosted">
                  <p>
                    Start :{" "}
                    {moment(eventsForSelectedDate?.start).format("YYYY-MM-DD")}
                  </p>
                </div>
                <div className="head">
                  <p className="evntShortDesc">
                    {eventsForSelectedDate?.notes}
                  </p>
                </div>
              </div>

              <RWebShare
                data={{
                  text: `${eventsForSelectedDate?.title}`,
                  // url: "https://google.com",
                  title: "Share Events",
                }}
                // onClick={() => console.log("shared successfully!")}
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
                    const textToCopy = `${eventsForSelectedDate?.title}`;
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
                  <img src={table_icon} alt="..." className="shareIconImg" />
                  <span></span>
                </div>
              </RWebShare>
            </div>

            {/* {eventsForSelectedDate.length > 0 ? (
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
                                                <h2>Title : {item.title}</h2>
                                            </div>

                                            <div className="head">
                                                <h2>End : {item.end}</h2>
                                            </div>

                                        </div>
                                        <div className="hosted">
                                            <p>Start : {item.start}</p>
                                        </div>

                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <p>No events on the selected date</p>
                    )} */}
          </div>
        </div>
      </section>
    </>
  );
}
