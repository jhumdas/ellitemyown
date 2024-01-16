import { Calendar, momentLocalizer, Views, Agenda } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useAuthCtx } from "../../context/AuthCtx";
import React, { useEffect } from "react";
import Modal from "react-modal";
import { useState } from "react";
import { toast } from "react-toastify";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import EventsBigCalenderModal from "../../SeprateModal/EventsBigCalenderModal";
import './MyCalendar.css';

const localizer = momentLocalizer(moment); // or globalizeLocalizer

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BigCalender = ({ fetchcalenderdata }) => {
  const { calenderMonth, setCalenderMonth, calenderYear, setCalenderYear } =
    useAuthCtx();
  const [eventsForSelectedDate, setEventsForSelectedDate] = useState([]);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [value, onChange] = useState(new Date());
  //   const defaultDate = new Date(2023, 10, 15); // Year, Month (0-based), Day

  // const events = [
  //   {
  //     title: (
  //       <img
  //         src={
  //           "https://elites3bkt.s3.ap-south-1.amazonaws.com/image/344cda60-6823-11ee-aa1b-9dd455ce1b9e.jpeg"
  //         }
  //       ></img>
  //     ),
  //     start: moment(new Date()),
  //     end: moment(new Date()),
  //   },
  // ];

  console.log("fetchcalenderdata", fetchcalenderdata);

  const localizer = momentLocalizer(moment);
  const views = [Views.MONTH, Views.AGENDA];
  // const views = [Views.AGENDA]

  const handleNavigate = (date, view) => {
    let NewDate;

    if (!date) {
      NewDate = new Date();
    } else {
      NewDate = new Date(date);
    }

    const getmonth = NewDate.getMonth() + 1;
    const getYear = NewDate.getFullYear();

    setCalenderYear(getYear);
    setCalenderMonth(getmonth);

    console.log("xxdate", getmonth, getYear);
  };

  useEffect(() => {
    handleNavigate();
  }, []);

  const convertedEvents = fetchcalenderdata?.map((event) => ({
    title: event.title,
    image: event.image,
    notes: event.notes,
    start: event.start.toDate(),
    end: event.end.toDate(),
  }));


  // const CustomEvent = ({ event }) => (
  //   <div>
  //     {/* <img
  //       src={event.image}
  //       alt="Event Image"
  //       style={{ height: "50px", width: "120px" }}
  //     /> */}
  //     <div>{event.title}</div>
  //   </div>
  // );

  const CustomEvent = ({ event }) => (
    <>

      {event?.image === "" ? (
        <div>{event.title}</div>
      ) : (
        <img
          src={event.image}
          alt="Event Image"
          style={{ height: "50px", width: "120px" }}
        />
      )}
      {/* 
      <div>
        <strong>{event.title}</strong>
        
        <div>Date: {event.start.toLocaleDateString()}</div>
        <div>Description: {event.notes}</div>
      </div> */}
    </>
  );

  const handleSelectEvents = () => {
    alert(`Clicked on event with title: `);
  };

  const handleSelectEvent = (event, e) => {
    e.preventDefault();
  };

  const handleDateChange = (e) => {
    console.log(e, "eeeee");
    setIsOpen(true);
    setEventsForSelectedDate(e);
  };

  // console.log("dddd", eventsForSelectedDate);

  return (
    <div style={{ height: "100vh" }}>
      <Calendar
        localizer={localizer}
        events={convertedEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ width: "100%" }}
        onNavigate={handleNavigate}
        selectable={() => {

        }}
        // components={components}
        // onSelectEvent={(e)=>{console.log("convertedEventsllkk",e)}}
        onSelectEvent={(e) => handleDateChange(e)}
        // value={value}
        eventPropGetter={(event, start, end, isSelected) => ({
          style: {
            // backgroundColor: "transparent",
            border: "none",
            outline: 0,
            // color: "red",
            // fontSize: "25px",
            // fontWeight: "500",
          },
          showMore: false,
        })}
        components={{
          event: CustomEvent,
        }}
        // onShowMore={() => {
        //   alert("Show more event");
        // }}

        // selectable
        views={views}
        messages={{ agenda: "List Of Events" }}

      // showMultiDayTimes={false}
      // onSelectEvent={() => {
      //   alert("event");
      // }}
      // onSelecting={() => {
      //   alert("onselecting");
      // }}
      // onSelectSlot={() => {
      //   alert("onSelectSlot");
      // }}
      // titleAccessor="#"
      // defaultDate={moment(new Date())} // Set the default date to display
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button
          className="btn btn-danger"
          style={{ marginLeft: "80%", height: "30px", width: "30px" }}
          onClick={() => setIsOpen(false)}
        >
          X
        </button>
        <EventsBigCalenderModal eventsForSelectedDate={eventsForSelectedDate} />
      </Modal>
    </div>
  );
};

export default BigCalender;
