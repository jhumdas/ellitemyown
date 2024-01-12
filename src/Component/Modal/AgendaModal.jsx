import React from "react";
import "./Modal.css";

import { useNavigate } from "react-router-dom";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { logDOM } from "@testing-library/react";

function AgendaModal() {
  const [agendaData, setAgendaData] = useState([]);
  const [eventType, setEventType] = useState(null);
  // console.log("agendaData ",agendaData );
  const navigate = useNavigate();
  useEffect(() => {
    ViewAgendaData();
  }, []);

  const ViewAgendaData = async () => {
    const response = await ApiHelperFunction({
      urlPath: `/view-agenda`,
      method: "GET",
    });
    console.log("RESPONSEFSDF", response?.data?.data);
    if (response && response.status) {
      setAgendaData(response?.data?.data);
    } else {
      // toast.error(response.error);
    }
  };

  const checkRadio = (target, val) => {
    return val == target ? true : false;
  };

  const handleCheckbox = (indexx, index, status, ele, userId) => {
    let newArr = [...agendaData];
    // console.log(newArr[indexx].event[index]);
    // return false
    newArr[indexx].eventData[index].eventParticipate = status;
    setAgendaData(newArr);
    updateParticipantsStatus(ele?._id, userId, status);
  };

  const updateParticipantsStatus = async (id, userId, status) => {
    let data = {
      eventId: id,
      userid: userId,
      isParticipateInEvent: status,
    };

    console.log("DFGFHHGH", data);
    const response = await ApiHelperFunction({
      urlPath: `/update-event-participants-status`,
      method: "POST",
      data,
    });
    if (response && response.status) {
      toast.success("Updated successfully");
    } else {
      toast.error("Backend error");
    }
  };
  return (
    <section className="agenModalSec">
      <div className="agendaWhiteMod">
        <p className="agendaHead">Events</p>
        <button
          className="agendaCrossBtn"
          onClick={() => navigate("/engagementcalender")}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div className="agendaEvntTableDiv">
          <table className="agendaEvntTable">
            <thead>
              <tr>
                <td className="agendaEvntTd">Employee Name</td>
                <td className="agendaEvntTd">Designation</td>
                <td className="agendaEvntTd">Event</td>
                {/* <td className="agendaEvntTd">Event-3</td> */}
                {/* <td className="agendaEvntTd">Event-4</td>
                <td className="agendaEvntTd">Event-5</td> */}
              </tr>
            </thead>
            <tbody>
              {agendaData &&
                agendaData?.map((item, indexx) => {
                  return (
                    <tr>
                      <td className="agenInnerTd">
                        <div className="agenInnerTdDiv">
                          <span className="agenEmpName">{item?.firstName}</span>
                        </div>
                      </td>
                      <td className="agenInnerTd">
                        <div className="agenInnerTdDiv">
                          <span className="agenEmpName">
                            {item?.designation}
                          </span>
                        </div>
                      </td>
                      <td className="agenInnerTd">
                        {item?.eventData?.map((ele, index) => {
                          return (
                            <div className="agenInnerTdDiv">
                              <div className="agenInnerWrap">
                                <div className="agenDateText">
                                  <span>{ele?.eventName}</span>
                                </div>
                                {/* <div className="agenTimeText">
                          <span>Time:</span> <span>12:00:00</span>
                        </div> */}
                                <div className="agenRadioDiv">
                                  <div className="agenInnerRadio">
                                    <input
                                      type="radio"
                                      onClick={() =>
                                        handleCheckbox(
                                          indexx,
                                          index,
                                          true,
                                          ele,
                                          item?._id
                                        )
                                      }
                                      {...(ele?.eventParticipate === true
                                        ? { checked: true }
                                        : {})}
                                      name={`agendaInp1${index}${indexx}`}
                                    />
                                    <label htmlFor="">Yes</label>
                                  </div>
                                  <div className="agenInnerRadio">
                                    <input
                                      type="radio"
                                      onClick={() =>
                                        handleCheckbox(
                                          indexx,
                                          index,
                                          false,
                                          ele,
                                          item?._id
                                        )
                                      }
                                      {...(ele?.eventParticipate === false
                                        ? { checked: true }
                                        : {})}
                                      name={`agendaInp1${index}${indexx}`}
                                    />
                                    <label htmlFor="">No</label>
                                  </div>
                                </div>

                                {/* <div className="agenRadioDiv">
                        
                        <div className="agenInnerRadio" >
                          <input  type="radio" name="video" value="yes" id={`${index}${indexx}`} onClick={(e) => setEventType(e.target.name)} checked={ele?.eventParticipate ? false : true}/>
                          <label htmlFor="">Yes</label>
                        </div>
                        <div className="agenInnerRadio" value="no" name="video" id={`${index}${indexx}`} onClick={(e) => setEventType(e.target.name)} checked={ele?.eventParticipate ? false : true}>
                          <input type="radio" />
                          <label htmlFor="">No</label>
                        </div>
                      </div> */}

                                {/* <div class="form-group">
                                  
                                    <div class="form-check">
                                        <input class="form-check-input" value="yes" onClick={(e) => setEventType(e.target.name)} checked={ele?.eventParticipate } type="radio" name="video" id={`${index}${indexx}`}  />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Video
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" value="no" type="radio" name="video" id={`${index}${indexx}`} onClick={(e) => setEventType(e.target.name)} checked={ele?.eventParticipate} />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            OTT
                                        </label>
                                    </div>
                                </div> */}
                              </div>
                            </div>
                          );
                        })}
                      </td>
                    </tr>
                  );
                })}

              {/* <tr>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <span className="agenEmpName">Employee Abc</span>
                  </div>
                </td>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <div className="agenInnerWrap">
                      <div className="agenDateText">
                        <span>Date:</span> <span>Sun, Nov 2012</span>
                      </div>
                      <div className="agenTimeText">
                        <span>Time:</span> <span>12:00:00</span>
                      </div>
                      <div className="agenRadioDiv">
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">Yes</label>
                        </div>
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <div className="agenInnerWrap">
                      <div className="agenDateText">
                        <span>Date:</span> <span>Sun, Nov 2012</span>
                      </div>
                      <div className="agenTimeText">
                        <span>Time:</span> <span>12:00:00</span>
                      </div>
                      <div className="agenRadioDiv">
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">Yes</label>
                        </div>
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <div className="agenInnerWrap">
                      <div className="agenDateText">
                        <span>Date:</span> <span>Sun, Nov 2012</span>
                      </div>
                      <div className="agenTimeText">
                        <span>Time:</span> <span>12:00:00</span>
                      </div>
                      <div className="agenRadioDiv">
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">Yes</label>
                        </div>
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <div className="agenInnerWrap">
                      <div className="agenDateText">
                        <span>Date:</span> <span>Sun, Nov 2012</span>
                      </div>
                      <div className="agenTimeText">
                        <span>Time:</span> <span>12:00:00</span>
                      </div>
                      <div className="agenRadioDiv">
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">Yes</label>
                        </div>
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <div className="agenInnerWrap">
                      <div className="agenDateText">
                        <span>Date:</span> <span>Sun, Nov 2012</span>
                      </div>
                      <div className="agenTimeText">
                        <span>Time:</span> <span>12:00:00</span>
                      </div>
                      <div className="agenRadioDiv">
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">Yes</label>
                        </div>
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <span className="agenEmpName">Employee Abc</span>
                  </div>
                </td>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <div className="agenInnerWrap">
                      <div className="agenDateText">
                        <span>Date:</span> <span>Sun, Nov 2012</span>
                      </div>
                      <div className="agenTimeText">
                        <span>Time:</span> <span>12:00:00</span>
                      </div>
                      <div className="agenRadioDiv">
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">Yes</label>
                        </div>
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <div className="agenInnerWrap">
                      <div className="agenDateText">
                        <span>Date:</span> <span>Sun, Nov 2012</span>
                      </div>
                      <div className="agenTimeText">
                        <span>Time:</span> <span>12:00:00</span>
                      </div>
                      <div className="agenRadioDiv">
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">Yes</label>
                        </div>
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <div className="agenInnerWrap">
                      <div className="agenDateText">
                        <span>Date:</span> <span>Sun, Nov 2012</span>
                      </div>
                      <div className="agenTimeText">
                        <span>Time:</span> <span>12:00:00</span>
                      </div>
                      <div className="agenRadioDiv">
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">Yes</label>
                        </div>
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <div className="agenInnerWrap">
                      <div className="agenDateText">
                        <span>Date:</span> <span>Sun, Nov 2012</span>
                      </div>
                      <div className="agenTimeText">
                        <span>Time:</span> <span>12:00:00</span>
                      </div>
                      <div className="agenRadioDiv">
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">Yes</label>
                        </div>
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="agenInnerTd">
                  <div className="agenInnerTdDiv">
                    <div className="agenInnerWrap">
                      <div className="agenDateText">
                        <span>Date:</span> <span>Sun, Nov 2012</span>
                      </div>
                      <div className="agenTimeText">
                        <span>Time:</span> <span>12:00:00</span>
                      </div>
                      <div className="agenRadioDiv">
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">Yes</label>
                        </div>
                        <div className="agenInnerRadio">
                          <input type="radio" name="agendaInp1" />
                          <label htmlFor="">No</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default AgendaModal;
