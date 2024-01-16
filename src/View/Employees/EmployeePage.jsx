import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { ApiHelperFunction } from "../../services/api/apiHelpers";
import { toast } from "react-toastify";
import moment from "moment";
import { useAuthCtx } from "../../context/AuthCtx";
import Calendar from "react-calendar";
import AffinityGroups from "../../Component/AffinityGroups";
import "react-calendar/dist/Calendar.css";
import "./Employee.css";
import profilephoto from "../../Images/profilephoto.png";
import awyaicon3 from "../../Images/awyaicon3.png";
import EventsViewModal from "../../SeprateModal/EventsViewModal";
import EventCard from "../../Component/EventCard";
import Modal from "react-modal";
import CreateModal from "../../Component/Modal/CreateModal";

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

const ValuePiece = new Date() | null;
const setValue = ValuePiece | [ValuePiece, ValuePiece];

const initialValues = {
  managedBy: [""],
  companyCode: "",
  firstName: "",
  lastName: "",
  userType: "",
  email: "",
  password: "",
  cpassword: "",
  phoneNo: "",
  managerName: "",
};
const EmployeePage = () => {
  const { userData } = useAuthCtx();
  console.log(userData, "userDatawertq");
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // New state to manage selected date
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [eventsForSelectedDate, setEventsForSelectedDate] = useState([]); // New state for events on selected date

  // const onChangeDate = (e) => {
  //   const newDate = moment(new Date(e.target?.value))?.format("YYYY-MM-DD");
  //   setValue(newDate);
  //   console.log(newDate); //value picked from date picker
  // };

  const [employeeName, setEmployeeName] = useState("");
  const [employeeData, setEmployeeData] = useState([]);
  const { setLoading } = useAuthCtx();
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [modalA, setModalA] = useState(false);
  const [modalView, setModalView] = useState(false);

  const searchEmployee = async () => {
    // setSearching(true);
    let response = await ApiHelperFunction({
      urlPath: "/search-employees",
      method: "POST",
      data: {
        searchName: employeeName,
      },
    });

    if (response?.status) {
      setEmployeeData(response?.data?.data);
    } else {
      toast.error("Something went wrong");
    }
    // setSearching(false);
  };

  // const handleDateChange = (date) => {
  //   setIsOpen(true);
  //   setSelectedDate(date);
  //   // fetchEventsForDate(date);
  // };

  const handleDateChange = async (date) => {
    const data = {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    };

    console.log("dataaa", data);

    try {
      const response = await ApiHelperFunction({
        urlPath: "/view-event-date-wise",
        method: "POST",
        data: data,
      });

      if (response?.status) {
        setEventsForSelectedDate(response?.data?.data);
        // console.log(response?.data?.data, "responseee");
        setIsOpen(true); // Open the modal to display events
      } else {
        // toast.error(response?.message || "Error fetching events");
      }
    } catch (error) {
      // console.error("Error fetching events", error);
      // toast.error("Something went wrong");
    }
  };

  // const fetchEventsForDate = async (date) => {
  //   // Fetch events for the selected date and update the state
  //   let response = await ApiHelperFunction({
  //     urlPath: "/fetch-events",
  //     method: "POST",
  //     data: {
  //       date: moment(date).format("YYYY-MM-DD"),
  //     },
  //   });

  //   if (response?.status) {
  //     setEventsForSelectedDate(response?.data?.events);
  //   } else {
  //     toast.error("Error fetching events");
  //   }
  // };

  useEffect(() => {
    let debounce = setTimeout(() => {
      searchEmployee();
    }, 400);

    return () => clearTimeout(debounce);
  }, [employeeName]);
  console.log("object123", employeeData);

  // useEffect(() => {
  //   fetchEventsForDate();
  // }, []);

  const columns = [
    {
      name: "Employee",
      selector: (row) => row.name,
    },
    {
      name: "Designation",
      selector: (row) => row.designation,
    },

    {
      name: "Department",
      selector: (row) => row.department,
    },
    {
      name: "Employee Status",
      selector: (row) => row.status,
    },
    {
      name: "Joining Date",
      selector: (row) => row.date,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Rewards",
      selector: (row) => row.rewards,
    },
  ];

  // const ViewEmail = (item) => {
  //   console.log("bom", item);
  //   setModalView(true)
  // };

  const data = employeeData?.map((item, index) => {
    return {
      name: item?.firstName + " " + item?.lastName,
      designation: item?.userType,
      department: item?.designation,
      status: item?.employeeStatus ? (
        <div
          style={{
            background: "#D8FFEF",
            width: "5rem",
            height: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5rem",
          }}
        >
          <p
            style={{
              color: "#02975A",
              fontFamily: "Inter",
              margin: "auto",
              fontSize: "1rem",
            }}
          >
            Present
          </p>
        </div>
      ) : (
        <div
          style={{
            background: "#FFEDED",
            width: "5rem",
            height: "2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5rem",
          }}
        >
          <p
            style={{
              color: "#E2445C",
              fontFamily: "Inter",
              margin: "auto",
              fontSize: "1rem",
            }}
          >
            Absent
          </p>
        </div>
      ),
      date: moment(item?.createdOn)?.format("YYYY-MM-DD"),
      email: item?.email,
      rewards: (
        <button
          className="btn"
          style={{
            background: "#0E24CC",
            color: "#fff",
            // height: "2rem",
            // width: "5rem",
            borderRadius: "0.5rem",
          }}
        // onClick={() => ViewEmail(item)}
        >
          Rewards
        </button>
      ),
    };
  });
  return (
    <>
      <section className="employTableSection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3">
              {/* <div className="creEmpTeamDiv">
                <span className="creTeEmSpan">Create Teams</span>
                <button className="creTeEmBtn">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div> */}
              <div className="creEmpTeamMemberDiv">
                <AffinityGroups />
              </div>
              <div className="empCalenderDiv">
                {/* <Calendar onChange={onChange} value={value} /> */}
                <Calendar onChange={handleDateChange} value={value} />
              </div>
            </div>
            <div className="col-xl-9">
              {/* <div className="addEmpTabBeforeDiv">
                <div className="dyTimeMainDiv">
                  <div className="dyTimeDiv">
                    <i
                      class="fa-regular fa-clock"
                      style={{ color: "#0E24CC" }}
                    ></i>
                    <span>TIME TRACKED</span>
                  </div>
                  <div className="timeOfTextsDiv">
                    <span
                      className="timeOfBigText"
                      style={{ color: "#0E24CC" }}
                    >
                      192
                    </span>{" "}
                    <span className="timeOfSmallText">Hours of 168</span>
                  </div>
                  <div className="semiLargeTimeHrs">
                    <span className="semiBig">+20</span>{" "}
                    <span className="semiHrs">hours overtime</span>
                  </div>
                  <div className="smallTimeHrs">
                    <span className="numText">168</span>{" "}
                    <span className="numHrText">Hours of Work</span>
                  </div>
                  <div className="smallTimeHrs">
                    <span className="numText">23</span>{" "}
                    <span className="numHrText">Hours of Extra Work</span>
                  </div>
                </div>
                <div className="dyTimeMainDiv">
                  <div className="dyTimeDiv">
                    <i
                      class="fa-regular fa-calendar"
                      style={{ color: "#38219E" }}
                    ></i>
                    <span>DAY OFF</span>
                  </div>
                  <div className="timeOfTextsDiv">
                    <span
                      className="timeOfBigText"
                      style={{ color: "#38219E" }}
                    >
                      10
                    </span>{" "}
                    <span className="timeOfSmallText">th November</span>
                  </div>
                  <div className="semiLargeTimeHrs">
                    <span className="semiBig">25</span>{" "}
                    <span className="semiHrs">of 14 available</span>
                  </div>
                  <div className="smallTimeHrs">
                    <span className="numText">+2</span>{" "}
                    <span className="numHrText">than Previous months</span>
                  </div>
                </div>
                <div className="dyTimeMainDiv">
                  <div className="dyTimeDiv">
                    <i
                      class="fa-solid fa-heart"
                      style={{ color: "#E2445C" }}
                    ></i>
                    <span>DAY OFF</span>
                  </div>
                  <div className="timeOfTextsDiv">
                    <span
                      className="timeOfBigText"
                      style={{ color: "#E2445C" }}
                    >
                      1
                    </span>{" "}
                    <span className="timeOfSmallText">st November</span>
                  </div>
                  <div className="semiLargeTimeHrs">
                    <span className="semiBig">10</span>{" "}
                    <span className="semiHrs">of 14 available</span>
                  </div>
                  <div className="smallTimeHrs">
                    <span className="numText">-3</span>{" "}
                    <span className="numHrText">than Previous months</span>
                  </div>
                </div>
                <div className="dyMarkNmDiv">
                  <div className="dyMarkNmInnerDiv">
                    <div className="dyMrkFigDiv">
                      <figure className="dyMrkFig">
                        <img src={profilephoto} alt="..." />
                      </figure>
                    </div>
                    <div className="dyMrkNameSubMainDiv">
                      <div className="dyMrkNameInnerDiv">
                        <span className="dyMrkName">Mark Anderson</span>
                        <figure className="dyAwyCoinFig">
                          <img src={awyaicon3} alt="..." />
                        </figure>
                      </div>
                      <p className="dySeniText">Senior Manager</p>
                      <p className="dyPondText">
                        1527 Pond Reef Rd, Ketchikan, Alaska 99901, USA
                      </p>
                      <div className="dyAcFullDiv">
                        <button className="dyActiveBtn">Active</button>
                        <button className="dyFullTimeBtn">Full Time</button>
                      </div>
                    </div>
                  </div>
                  <div className="dyNmPhnDiv">
                    <span className="phnMailDySpan">Phone Number :</span>{" "}
                    <span className="phMainSpanVal">(907) 247-8287</span>
                  </div>
                  <div className="dyNmMailDiv">
                    <span className="phnMailDySpan">Email Address :</span>{" "}
                    <span className="phMainSpanVal">andmark202mail.com</span>
                  </div>
                </div>
              </div> */}
              {userData?.userType === "Admin" ? (
                <div
                  style={{ background: "#E5E5E5", minHeight: "100vh" }}
                  className="addEmployTable"
                >
                  <div
                    className="employees"
                    style={{ boxShadow: "1px 2px 5px rgba(0,0,0,0.5)" }}
                  >
                    {/* <button
        className="btn"
        style={{
          background: "#0E24CC",
          color: "#fff",
          // height: "2rem",
          // width: "5rem",
          margin: "2rem",
          borderRadius: "0.5rem",
        }}
        onClick={() => {
          setModalA(true);
        }}
      >
        Add Employee
      </button> */}

                    <div
                      className="employeeSearch"
                      style={{
                        float: "right",
                        marginRight: "5rem",
                        marginTop: "2rem",
                      }}
                    >
                      <input
                        type="text"
                        className="fontAwesome"
                        name=""
                        id=""
                        placeholder=" Search here"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                      />
                    </div>
                    <DataTable
                      pagination
                      responsive
                      columns={columns}
                      data={data}
                      subHeaderWrap
                      subHeaderAlign="right"
                      direction="auto"
                    />
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>

      {modalA && (
        <CreateModal
          initialValues={initialValues}
          closemodal={() => setModalA(false)}
          getEmployeeDetails={searchEmployee}
        />
      )}

      {/* {modalIsOpen && (
        <EventsViewModal
          activity={eventsForSelectedDate}
          // activity={<EventCard/>}
          closemodal={() => setIsOpen(false)}
        />
      )} */}

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
        <EventsViewModal eventsForSelectedDate={eventsForSelectedDate} />
      </Modal>
    </>
  );
};

export default EmployeePage;
