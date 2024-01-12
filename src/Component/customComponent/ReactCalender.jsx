import moment from "moment";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Allapicall from "../../services/Allapicall";
import "./Calendar.css";
// import RightArrow from "./right-arrow.png";
const defaultnumberofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function ReactCalender() {
  const [selectedDate, setSelectedDate] = useState("");
  // onSelectDate={(val) => setSelectedDate(val)}
  const [apicalldata, setapicalldata] = useState([]);
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  const [numberOfDays, setNumberOfDays] = useState(defaultnumberofDays);
  const [calendarShow, setCalendarShow] = useState(true);

  const [firstMonth, setFirstMonth] = useState(currentMonth + 1);
  const [secondMonth, setSecondMonth] = useState(
    currentMonth === 11 ? 1 : currentMonth + 2
  );
  const [firstMonthYear, setFirstMonthYear] = useState(currentYear);
  const [secondMonthYear, setSecondMonthYear] = useState(
    currentMonth === 11 ? currentYear + 1 : currentYear
  );
  const [availabilitydate, setAvalibilitydate] = useState([]);
  // const [firstMonthDays, setMonthDays] = useState([]);
  // const [secondMonthDays, setSecondMonthDays] = useState([]);

  function formatDate(year, month, day) {
    const date = new Date(year, month - 1, day);

    const formattedYear = date.getFullYear();
    const formattedMonth = (date.getMonth() + 1).toString().padStart(2, "0"); // Add 1 to month since it's 0-based.
    const formattedDay = date.getDate().toString().padStart(2, "0");

    const formattedDate = `${formattedYear}-${formattedMonth}-${formattedDay}`;

    return formattedDate;
  }

  let date = new Date().getDay();
  console.log("todday is", days[date]);

  let currentMonthDays = numberOfDays[currentMonth];

  useEffect(() => {
    if (firstMonthYear % 4 === 0 || secondMonthYear % 4 === 0) {
      let updatedDays = [...numberOfDays];
      updatedDays[1] = 29;
      setNumberOfDays(updatedDays);
    } else {
      setNumberOfDays(defaultnumberofDays);
    }
  }, [firstMonthYear, secondMonthYear]);

  useEffect(() => {
    console.log("currentMonth", currentMonth, firstMonth);
    const nexMonth = firstMonth + 1;
    // fetchCalenderAvailablity(currentYear, firstMonth, nexMonth);
    fetchCalenderAvailablity();
  }, []);

  const fetchCalenderAvailablity = async () => {
    //     let data = {
    //       year: year,
    //       month1: month1,
    //       month2: month2,
    //       id: activityId,
    //       // id:'64d3a59005edf815fbfb47b9'
    //     };

    let res = await Allapicall.Allcalenderdata();

    // console.log("calender", data, res, firstMonthDays);
    if (res && res.status) {
      setapicalldata(res?.data);
      //   console.log("calender", firstMonthDays);
      //   const dateSet = new Set(res.data?.map((item) => item._id));
      const dateSet = new Set(
        res.data?.map((item) => {
          console.log("calender", item);
          return formatDate(item.year, item.month, item.date);
        })
      );

      // Loop through the second array and update "str" to "1" if the date matches
      firstMonthDays.forEach((subArray) => {
        subArray.forEach((item) => {
          if (item && item.date) {
            const dateString = `${item.year}-${item.month
              .toString()
              .padStart(2, "0")}-${item.date.toString().padStart(2, "0")}`;

            console.log("calender", dateString);
            // console.log("calender", dateSet);
            if (dateSet.has(dateString)) {
              alert("ii");
              const slotCount = res.data?.filter(
                (item) => item.date == dateString
              );
              //   item.str = slotCount[0]?.remainingUsers;
              item.str = slotCount[0].engagementName;
              console.log("eerr", apicalldata);
            }
          }
        });
      });

      secondMonthDays.forEach((subArray) => {
        subArray.forEach((item) => {
          if (item && item.date) {
            const dateString = `${item.year}-${item.month
              .toString()
              .padStart(2, "0")}-${item.date.toString().padStart(2, "0")}`;
            if (dateSet.has(dateString)) {
              const slotCount = res.data?.filter(
                (item) => item._id == dateString
              );
              item.str = slotCount[0]?.remainingUsers;
            }
          }
        });
      });
    }

    console.log("secondMonthDays", secondMonthDays);
  };
  const firstMonthDays = useMemo(() => {
    let arr = [];
    let row = [];
    console.log("firstmonthmemo", firstMonth);
    let startingDate = new Date(firstMonthYear, firstMonth - 1, 1);
    let startingDay = startingDate.getDay();

    if (startingDay) {
      for (let index = 1; index <= startingDay; index++) {
        row.push("");
      }
    }
    for (let index = 1; index <= numberOfDays[firstMonth - 1]; index++) {
      let data = {
        str: "0",
        date: index,
        year: firstMonthYear,
        month: firstMonth,
      };
      row.push(data);
      if (row?.length === 7) {
        arr.push(row);
        row = [];
      }

      if (index === numberOfDays[firstMonth - 1] && row?.length !== 0) {
        arr.push(row);
      }
      // console.log('sdsad', index % 7 === 0);
      // if (index % 7 === 0) {
      //   row.push(index);
      //   arr.push(row);
      //   row = [];
      // } else {
      //   row.push(index);
      // }
      // if()
      // arr.push(index);
      // const element = ;
      // let row =      // console.log('sdsad', index % 7 === 0);
    }
    console.log("arrssss", arr);
    return arr;
  }, [firstMonth, firstMonthYear, numberOfDays]);

  const secondMonthDays = useMemo(() => {
    let arr = [];
    let row = [];

    let startingDate = new Date(secondMonthYear, secondMonth - 1, 1);
    let startingDay = startingDate.getDay();

    if (startingDay) {
      for (let index = 1; index <= startingDay; index++) {
        row.push("");
      }
    }
    for (let index = 1; index <= numberOfDays[secondMonth - 1]; index++) {
      let data = {
        str: "0",
        date: index,
        year: secondMonthYear,
        month: secondMonth,
      };
      row.push(data);
      if (row?.length === 7) {
        arr.push(row);
        row = [];
      }

      if (index === numberOfDays[secondMonth - 1] && row?.length !== 0) {
        arr.push(row);
      }
      // console.log('sdsad', index % 7 === 0);
      // if (index % 7 === 0) {
      //   row.push(index);
      //   arr.push(row);
      //   row = [];
      // } else {
      //   row.push(index);
      // }
      // if()
      // arr.push(index);
      // const element = ;
      // let row =      // console.log('sdsad', index % 7 === 0);
    }
    return arr;
  }, [secondMonth, secondMonthYear, numberOfDays]);

  const nextMonth = () => {
    setFirstMonth((prev) => (prev === 12 ? 1 : prev + 1));
    setSecondMonth((prev) => (prev === 12 ? 1 : prev + 1));
    if (firstMonth === 12) {
      setFirstMonthYear((prev) => prev + 1);
    }
    if (secondMonth === 12) {
      setSecondMonthYear((prev) => prev + 1);
    }
  };

  const prevMonth = () => {
    setFirstMonth((prev) => (prev === 1 ? 12 : prev - 1));
    setSecondMonth((prev) => (prev === 1 ? 12 : prev - 1));
    if (firstMonth === 1) {
      setFirstMonthYear((prev) => prev - 1);
    }
    if (secondMonth === 1) {
      setSecondMonthYear((prev) => prev - 1);
    }
  };
  return (
    <div
      className="inputs"
      onClick={(e) => {
        e.stopPropagation();
        setCalendarShow(true);
      }}
    >
      <div className="type1">
        <div className="fields">
          <div
            id="id_startCalendar"
            className="calendar-widget default-today"
            data-next="#id_deadlineCalendar"
            date-min="today"
            tabIndex={-1}
          >
            {/* <div
              className=""
              onClick={(e) => {
                e.stopPropagation();
                setCalendarShow((prev) => !prev);
              }}
            >
              <span className="calSecIcon">
                <i class="fa-solid fa-calendar-days"></i>
              </span>
              <input
                className="date-field"
                id="type1-start"
                type="text"
                placeholder="YYYY/MM/DD"
                readOnly={true}
                value={selectedDate}
              />
              <span className="drpdwn_icon">
                <i className="fa-solid fa-caret-down"></i>
              </span>
            </div> */}
            {calendarShow && (
              <div className="calendar-wrapper">
                <div className="dual-calendar">
                  <div className="calendar">
                    <div className="calendar-header">
                      <div className="prev-btn" onClick={prevMonth}>
                        <i className="material-icons">p</i>
                      </div>
                      <div className="next-btn" onClick={nextMonth}>
                        <i className="material-icons">n</i>
                      </div>
                      <div className="month-text">
                        <p>
                          {months[firstMonth - 1]} {firstMonthYear}
                        </p>
                      </div>
                    </div>
                    <div className="calendar-body">
                      <div className="date-table">
                        <div className="date-table-header">
                          <div className="day sunday">S</div>
                          <div className="day">M</div>
                          <div className="day">T</div>
                          <div className="day">W</div>
                          <div className="day">T</div>
                          <div className="day">F</div>
                          <div className="day saturday">S</div>
                        </div>
                        <div className="date-table-body">
                          {firstMonthDays.map((row, i) => {
                            return (
                              <div className="date-table-row">
                                {row.map((date) => {
                                  console.log("uuu", date);
                                  return (
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        // border:'0.5px solid',
                                        // borderColor:'lightgrey'
                                        // boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                                      }}
                                      onClick={() => {
                                        if (date?.str == "0") {
                                          return false;
                                        }
                                        let choosemonth =
                                          firstMonth < 10
                                            ? "0" + firstMonth
                                            : firstMonth;
                                        let choosedate =
                                          date?.date < 10
                                            ? "0" + date?.date
                                            : date?.date;
                                        let mydate =
                                          firstMonthYear +
                                          "-" +
                                          choosemonth +
                                          "-" +
                                          choosedate;
                                        // onSelectDate(mydate);
                                        setSelectedDate(mydate);
                                        setCalendarShow((prev) => !prev);
                                      }}
                                    >
                                      <div
                                        className="date"
                                        // style={{
                                        //   textDecoration:
                                        //     date?.str == "0"
                                        //       ? "line-through solid grey 15%"
                                        //       : "",
                                        // }}
                                      >
                                        {date?.date}
                                      </div>
                                      {date?.str && (
                                        <span
                                          style={{
                                            fontSize: "8px",
                                            color: "green",
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                          }}
                                        >
                                          {date?.str}
                                        </span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="calendar plus-one">
                    <div className="calendar-header">
                      <div className="month-text">
                        <p>
                          {months[secondMonth - 1]} {secondMonthYear}
                        </p>
                      </div>
                      <div className="next-btn" onClick={nextMonth}>
                        <i className="material-icons"></i>
                      </div>
                    </div>
                    <div className="calendar-body">
                      <div className="date-table">
                        <div className="date-table-header">
                          <div className="day sunday">S</div>
                          <div className="day">M</div>
                          <div className="day">T</div>
                          <div className="day">W</div>
                          <div className="day">T</div>
                          <div className="day">F</div>
                          <div className="day saturday">S</div>
                        </div>
                        {secondMonthDays.map((row, i) => {
                          return (
                            <div className="date-table-row">
                              {row.map((date) => {
                                return (
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      // border:'0.5px solid',
                                      // borderColor:'lightgrey'
                                      // boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'
                                    }}
                                    onClick={() => {
                                      if (date?.str == "0") {
                                        return false;
                                      }
                                      let choosemonth =
                                        secondMonth < 10
                                          ? "0" + secondMonth
                                          : secondMonth;
                                      let choosedate =
                                        date?.date < 10
                                          ? "0" + date?.date
                                          : date?.date;

                                      let mydate =
                                        secondMonthYear +
                                        "-" +
                                        choosemonth +
                                        "-" +
                                        choosedate;
                                      //   onSelectDate(mydate);
                                      setSelectedDate(mydate);

                                      setCalendarShow((prev) => !prev);
                                    }}
                                  >
                                    <div
                                      className="date"
                                      style={{
                                        textDecoration:
                                          date?.str == "0"
                                            ? "line-through solid grey 15%"
                                            : "",
                                      }}
                                    >
                                      {date?.date}
                                    </div>
                                    {date?.str == "0" ? null : (
                                      <span
                                        style={{
                                          fontSize: "8px",
                                          color: "green",
                                          fontWeight: "bold",
                                          cursor: "pointer",
                                        }}
                                      >
                                        {date?.str}
                                      </span>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactCalender;
