import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useAuthCtx } from "../../context/AuthCtx";
import { toast } from "react-hot-toast";
import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import { useDispatch, useSelector } from "react-redux";
import { getBillBoardData } from "../../redux/slices/billBoardSlice";
import { getTrainingData } from "../../redux/slices/trainingSlice";
import moment from "moment";
import { BASE_URL, API_ENDPOINT_PATH } from "../../constants/config";
import { getRefferedJobs } from "../../redux/slices/jobRefferedSlice";
import { getAllPosts } from "../../redux/slices/postSlice";
import { getEventData } from "../../redux/slices/eventSlice";
import { getEmployeeData } from "../../redux/slices/employeeSlice";
import ProfileImg1 from "../../Images/No-Image-Placeholder.png";
import AlartIcon1 from "../../Images/awyaicon1.png";
import AlartIcon2 from "../../Images/awyaicon2.png";
import { getSustainable } from "../../redux/slices/sustainableSlice";

const CreateModal = ({
  closemodal,
  activity,
  handleComment,
  comment,
  setComment,
  commentData,
  BulletinBoardSingleData,
  id,
  initialValues,
}) => {
  const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
  const [eventName, setEventName] = useState("");
  const [hostedBy, setHostedBy] = useState("");
  const [date, setDate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState("");
  const [imagesURL, setImagesURL] = useState([]);
  const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);
  const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);
  const [Feventstarttime, setFeventstarttime] = useState("");
  const [Feventendtime, setFeventendtime] = useState("");
  const [localerror, setlocalerror] = useState("");
  const [searching, setSearching] = useState(false);
  const [sustainableStatus, setSustainableStatus] = useState("");

  const dispatch = useDispatch();
  const employeeData = useSelector((state) => state.employeeSlice.employee);

  console.log("employeeData", employeeData);

  const handleImageChange = async (e) => {
    let image = e.target.files[0];
    setUploading(true);

    const form = new FormData();
    form.append("image", image);

    let res = await fileUpload("/image-upload", "POST", form);

    if (res.status) {
      toast.success("Image uploaded successfully");
      setImageURL(res?.image);
    } else {
      toast.error("Error uploading image");
    }
    setUploading(false);
  };

  const handleTimeChange = (e) => {
    const inputTime = e.target.value;

    // Parse the input time as a Date object
    const date = new Date(`1970-01-01T${inputTime}`);

    // Format the time in 12-hour format with "AM" or "PM"
    const formattedTime = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    console.log("tvall", formattedTime);
    return formattedTime;
  };

  function compareTimes(time2, time1) {
    const [hour1, minute1] = time1.split(":").map(Number);
    const [hour2, minute2] = time2.split(":").map(Number);

    console.log("first:", hour1, minute1, hour2, minute2);
    if (hour1 > hour2) {
      return true;
    } else if (hour1 < hour2) {
      return false;
    } else {
      // Hours are equal
      if (minute1 > minute2) {
        return true;
      } else if (minute1 < minute2) {
        return false;
      } else {
        // Minutes are equal
        return false; // Both times are equal
      }
    }
  }

  const removeImage = (index) => {
    let images = imagesURL?.filter((item, indx) => index != indx);
    console.log("images", images);
    setImagesURL([...images]);
  };

  const handleImagesChange = async (e) => {
    let image = e.target.files[0];
    setUploading(true);

    const form = new FormData();
    form.append("image", image);

    let res = await fileUpload("/image-upload", "POST", form);

    if (res.status) {
      toast.success("Images uploaded successfully");
      setImagesURL(res?.data);
    } else {
      toast.error("Error uploading image");
    }
    setUploading(false);
  };

  const addSustainable = async (id) => {
    const response = await ApiHelperFunction({
      urlPath: `/set-in-sustainable-employees/${id}`,
      method: "PUT",
    });
    console.log("Employye_hall_message", response);

    if (response.status === 200) {
      dispatch(getSustainable());
      dispatch(getEmployeeData());
    } else {
      toast.error(response?.response?.data?.message);
    }
  };
  // console.log("sustainableStatus", sustainableStatus);

  useEffect(() => {
    dispatch(getEmployeeData());
    getUserDetails();
  }, []);

  const schemaCheck = Yup.object(
    activity === "billBoard" ||
      activity === "events" ||
      activity === "kababMenu" ||
      activity === "editEvent"
      ? {
          eventName: Yup.string().required("Event Name is required"),
          hostedBy: Yup.string().required("Host name is required"),
          eventDate: Yup.string().required("Event date is required"),
          eventstarttime: Yup.string().required("start Time is required"),
          eventendtime: Yup.string().required(" End Time is required"),
          notes: Yup.string().required(" Notes is required"),
          addinvites: Yup.string().required(" Addinvites is required"),
          lattitude: Yup.string().required(" lattitude is required"),

          longitude: Yup.string().required(" longitude is required"),
        }
      : activity === "training" || activity === "editTraining"
      ? {
          name: Yup.string().required("Event Name is required"),
          trainingDate: Yup.string().required("Training date is required"),
        }
      : activity === "halloffame" || activity === "edithalloffame"
      ? {
          // name: Yup.string().required("name is required"),
          reason: Yup.string().required("Reason is required"),
        }
      : activity === "jobReffered"
      ? {
          name: Yup.string().required("Job Name is required"),
          location: Yup.string().required("Job location is required"),
          salary: Yup.string().required("Salary range is required"),
          description: Yup.string().required("Description range is required"),
          opening: Yup.string().required("Opening is required"),
        }
      : ""
  );

  //@ Submit Handler
  const submitHandler = async (e, selectedSubscription) => {
    e.preventDefault();

    setShouldValidateOnChange(true);
    setShouldValidateOnBlur(true);
    console.log("handleSubmit", values);

    let data = {};
    setLoading(true);
    if (activity === "billBoard") {
      if (
        values.eventName == "" ||
        values.hostedBy == "" ||
        values.eventDate == "" ||
        values.eventstarttime == "" ||
        values.eventendtime == "" ||
        values.notes == ""
      ) {
        return toast.error("All fields required");
      }
      data = {
        // lattitude: values?.lattitude,
        // longitude: values?.longitude,
        eventName: values?.eventName,
        hostedBy: values?.hostedBy,
        eventDate: values?.eventDate,
        eventstarttime: values?.eventstarttime,
        eventendtime: values?.eventendtime,
        addNotes: values?.notes,
        image: imageURL,
      };

      console.log("kkkkkkk", data);
      const res = await ApiHelperFunction({
        urlPath: "/add-bulletin-board",
        method: "POST",
        data,
      });
      if (res?.status) {
        toast.success("Event added successfully");
        resetForm();
        dispatch(getBillBoardData());
        closemodal();
      } else {
        toast.error(res?.message || "Something went wrong");
        console.log("ERROR CREATING USER3", res);
      }
    } else if (activity === "training") {
      if (
        values.name == "" ||
        values.trainingDate == "" ||
        values.image == ""
      ) {
        return toast.error("All fields required");
      }

      data = {
        name: values?.name,
        trainingDate: values?.trainingDate,
        link: values?.link,
        image: imageURL,
      };
      console.log("click_training", data);
      const res = await ApiHelperFunction({
        urlPath: "/add-training",
        method: "POST",
        data,
      });
      if (res?.status) {
        toast.success("Traning event added successfully");
        resetForm();
        dispatch(getTrainingData());
        closemodal();
      } else {
        toast.error(res?.message || "Something went wrong");
        console.log("ERROR CREATING USER3", res);
      }
    } else if (activity === "kababMenu") {
      if (
        values.eventName == "" ||
        values.hostedBy == "" ||
        values.eventDate == ""
      ) {
        return toast.error("All fields required");
      }
      data = {
        eventName: values?.eventName,
        hostedBy: values?.hostedBy,
        eventDate: values?.eventDate,
        image: imageURL,
      };
      const res = await ApiHelperFunction({
        urlPath: `/update-bulletin-board/${id}`,
        method: "PUT",
        data,
      });
      if (res?.status) {
        toast.success("Traning event edited successfully");
        resetForm();
        dispatch(getBillBoardData());
        closemodal();
      } else {
        toast.error(res?.message || "Something went wrong");
        console.log("ERROR CREATING USER3", res);
      }
    } else if (activity === "editTraining") {
      if (values.name == "" || values.trainingDate == "" || values.link == "") {
        return toast.error("All fields required");
      }
      data = {
        name: values?.name,
        trainingDate: values?.trainingDate,
        link: values?.link,
        image: imageURL,
      };
      const res = await ApiHelperFunction({
        urlPath: `/update-training/${id}`,
        method: "PUT",
        data,
      });
      if (res?.status) {
        toast.success("Traning event edited successfully");
        resetForm();
        dispatch(getTrainingData());
        closemodal();
      } else {
        toast.error(res?.message || "Something went wrong");
        console.log("ERROR CREATING USER3", res);
      }
    } else if (activity === "jobReffered") {
      if (
        values.name == "" ||
        values.location == "" ||
        values.salary == "" ||
        values.opening == "" ||
        values.description == ""
      ) {
        toast.error("All fields required");
        // return false;
      } else {
        data = {
          name: values.name,
          location: values.location,
          salary: values.salary,
          opening: values.opening,
          description: values.description,
        };

        const res = await ApiHelperFunction({
          urlPath: `/reffred-job`,
          method: "POST",
          data,
        });
        if (res?.status) {
          toast.success("Job Refferal added successfully");
          resetForm();
          dispatch(getRefferedJobs());
          closemodal();
        } else {
          toast.error(res?.message || "Something went wrong");
          console.log("ERROR CREATING USER3", res);
        }
      }
    } else if (activity === "editPost") {
      const res = await ApiHelperFunction({
        urlPath: `/edit-post/${values?._id}`,
        method: "PUT",
        data: values,
      });
      if (res?.status) {
        toast.success("Post edited successfully");
        resetForm();
        dispatch(getAllPosts());
        // getAffinityPosts();
        closemodal();
      } else {
        toast.error(res?.message || "Something went wrong");
        console.log("ERROR CREATING USER3", res);
      }
    } else if (activity === "events") {
      if (
        values.eventName == "" ||
        values.hostedBy == "" ||
        values.eventDate == ""
      ) {
        toast.error("All fields required");
      }

      data = {
        eventName: values?.eventName,
        hostedBy: values?.hostedBy,
        eventDate: values?.eventDate,
        image: imageURL,
      };

      const res = await ApiHelperFunction({
        urlPath: "/add-event",
        method: "POST",
        data,
      });

      if (res?.status) {
        toast.success("Event added successfully");
        resetForm();
        dispatch(getEventData());
        closemodal();
      } else {
        toast.error(res?.message || "Something went wrong");
        console.log("ERROR CREATING USER3", res);
      }
    } else if (activity === "editEvent") {
      if (
        values.eventName == "" ||
        values.hostedBy == "" ||
        values.eventDate == ""
      ) {
        return toast.error("All fields required");
      }
      const data = {
        eventName: values?.eventName,
        hostedBy: values?.hostedBy,
        eventDate: values?.eventDate,
        image: imageURL,
      };
      const res = await ApiHelperFunction({
        urlPath: `/update-event/${values?._id}`,
        method: "PUT",
        data,
      });
      if (res?.status) {
        toast.success("Event edited successfully");
        resetForm();
        dispatch(getEventData());
        closemodal();
      } else {
        toast.error(res?.message || "Something went wrong");
        console.log("ERROR CREATING USER3", res);
      }
    } else if (activity === "goalAchiver") {
      if (
        values.eventName == "" ||
        values.hostedBy == "" ||
        values.eventDate == ""
      ) {
        return toast.error("All fields required");
      }
      const data = {
        eventName: values?.eventName,
        hostedBy: values?.hostedBy,
        eventDate: values?.eventDate,
        image: imageURL,
      };
      const res = await ApiHelperFunction({
        urlPath: `/update-event/${values?._id}`,
        method: "PUT",
        data,
      });
      if (res?.status) {
        toast.success("Event edited successfully");
        resetForm();
        dispatch(getEventData());
        closemodal();
      } else {
        toast.error(res?.message || "Something went wrong");
        console.log("ERROR CREATING USER3", res);
      }
    }

    setLoading(false);
  };

  const { values, errors, handleBlur, handleSubmit, resetForm, handleChange } =
    useFormik({
      initialValues,
      validationSchema: schemaCheck,
      validateOnChange: shouldValidateOnChange,
      validateOnBlur: shouldValidateOnBlur,
      onSubmit: (val) => {
        console.log("val", val);
      },
    });

  console.log("newjj", values);

  return (
    <>
      {/* billboard  */}
      {activity === "billBoard" && (
        <div className="createmodal_main">
          <div className="create_modal">
            <div className="create_modal_content crte_own">
              <div
                className="frm_own"
                style={{ width: "100%", height: "100%", padding: "20px 0" }}
              >
                <div className="newBulleCloseModDiv">
                  <span className="newBulleCreHead">New Bulletin</span>
                  <div onClick={() => closemodal()}>
                    <i
                      class="fa-solid fa-xmark"
                      style={{
                        color: "red",
                        fontSize: "24px",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                </div>
                <form className="homePageCreModal">
                  <div className="addCurLocaModDiv"></div>

                  <div className="homePgModInnerInpDivs">
                    <input
                      type="text"
                      id="eventName"
                      aria-describedby="emailHelp"
                      placeholder="Event Name"
                      value={values.eventName}
                      name="eventName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="homePgMoInps"
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.eventName}
                    </small>
                  </div>
                  <div className="homePgModInnerInpDivs">
                    <input
                      type="date"
                      id="eventDate"
                      placeholder="Wednesday 2:45 to 4:45 PM"
                      value={values.eventDate}
                      name="eventDate"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="homePgMoInps"
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.eventDate}
                    </small>
                  </div>
                  <div className="homePgModInnerInpDivs">
                    <input
                      type="text"
                      id="hostedBy"
                      placeholder="Add Invites"
                      value={values.addinvites}
                      name="addinvites"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="homePgMoInps"
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.addinvites}
                    </small>
                  </div>
                  <div className="homePgModInnerInpDivs">
                    <label htmlFor="" className="addNoteLablCreMod">
                      Add Notes
                    </label>
                    <textarea
                      value={values.notes}
                      name="notes"
                      id=""
                      cols=""
                      rows="8"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="addNoteCreModTextArea"
                    ></textarea>
                    <small id="emailHelp" style={{ color: "red" }}>
                      {localerror}
                      {errors.notes}
                    </small>
                  </div>
                  <div className="homePgModInnerInpDivs">
                    <input
                      type="file"
                      id="hostedBy"
                      placeholder="Choose a photo"
                      value={image}
                      accept="image/*"
                      name="hostedBy"
                      onBlur={handleBlur}
                      onChange={handleImageChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.image}
                    </small>
                    {uploading ? <p>image uploading......</p> : null}
                    {imageURL !== "" && (
                      <div style={{ display: "flex" }}>
                        <img
                          style={{ marginTop: "1rem" }}
                          src={imageURL}
                          alt=""
                          height="100rem"
                          width="100rem"
                        />
                        <div
                          onClick={() => {
                            setImageURL("");
                            setImage("");
                          }}
                        >
                          <i
                            class="fa-solid fa-xmark"
                            style={{
                              color: "red",
                              fontSize: "2rem",
                              cursor: "pointer",
                            }}
                          ></i>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="homePgCreModSubmitDiv">
                    <button
                      type="button"
                      className="homePgCreModSubmitBtn"
                      onClick={submitHandler}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* training  */}
      {activity === "training" && (
        <div className="createmodal_main">
          <div className="create_modal">
            <div className="Create_overlay"></div>

            <div className="create_modal_content">
              <div className="close_icon" onClick={() => closemodal()}>
                <p className="emplModHead">Training</p>
                <i
                  class="fa-solid fa-xmark"
                  style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </div>

              <div
                className="frm_own"
                style={{ width: "100%", height: "100%", padding: "10px 20px" }}
              >
                <form
                  onSubmit={(e) => {
                    setShouldValidateOnBlur(true);
                    setShouldValidateOnChange(true);
                    handleSubmit(e);
                  }}
                >
                  <div class="form-group">
                    <label for="name">Training Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Training Name"
                      value={values.name}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.name}
                    </small>
                  </div>

                  <div class="form-group">
                    <label for="trainingDate">Traning Date</label>
                    <input
                      type="date"
                      class="form-control"
                      id="trainingDate"
                      placeholder="Event Date"
                      value={values.trainingDate}
                      name="trainingDate"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.trainingDate}
                    </small>
                  </div>

                  <div class="form-group">
                    <label for="trainingDate">Traning Link</label>
                    <input
                      type="text"
                      class="form-control"
                      id="link"
                      placeholder="Training Link"
                      value={values.link}
                      name="link"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.link}
                    </small>
                  </div>

                  <div class="form-group">
                    <label for="hostedBy">Training Image</label>
                    {/* <input
                      type="file"
                      class="form-control"
                      id="hostedBy"
                      placeholder="Choose a photo"
                      value={image}
                      name="hostedBy"
                      onBlur={handleBlur}
                      onChange={handleImageChange}
                    /> */}
                    <div className="attch_main_img">
                      <div className="attchfl">
                        {/* <input type="file" id="myfile" name="myfile"  /> */}
                        <input
                          type="file"
                          class="form-control"
                          id="hostedBy"
                          placeholder="Choose a photo"
                          value={image}
                          name="hostedBy"
                          onBlur={handleBlur}
                          onChange={handleImageChange}
                        />
                        <div className="attch_img">
                          <div className="attach_img_bg">
                            <i className="fa-solid fa-plus"></i>
                          </div>
                          <div className="pht">
                            <p>Add photos/videos</p>
                          </div>
                          <div className="drp">
                            <p>or drag and drop</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.image}
                    </small>
                    {uploading ? <p>image uploading......</p> : null}
                    {imageURL !== "" && (
                      <div style={{ display: "flex" }}>
                        <img
                          style={{ marginTop: "1rem" }}
                          src={imageURL}
                          alt=""
                          height="100rem"
                          width="100rem"
                        />
                        <div
                          onClick={() => {
                            setImageURL("");
                            setImage("");
                          }}
                        >
                          <i
                            class="fa-solid fa-xmark"
                            style={{
                              color: "red",
                              fontSize: "2rem",
                              cursor: "pointer",
                            }}
                          ></i>
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    type=""
                    class="homePgCreModSubmitBtn"
                    onClick={submitHandler}
                  >
                    Submit
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* events */}
      {activity === "events" && (
        <div className="createmodal_main">
          <div className="create_modal">
            <div className="create_modal_content crte_own">
              <div
                className="frm_own"
                style={{ width: "100%", height: "100%", padding: "20px 0" }}
              >
                <div className="newBulleCloseModDiv">
                  <span className="newBulleCreHead">New Event</span>
                  <div onClick={() => closemodal()}>
                    <i
                      class="fa-solid fa-xmark"
                      style={{
                        color: "red",
                        fontSize: "24px",
                        cursor: "pointer",
                      }}
                    ></i>
                  </div>
                </div>
                {/* <Formik initialValues={initialValues} onSubmit={onSubmit}> */}
                <form
                  // onSubmit={(e) => {
                  //   setShouldValidateOnBlur(true);
                  //   setShouldValidateOnChange(true);
                  //   handleSubmit(e);
                  //   // submitHandler(e);
                  // }}
                  className="homePageCreModal"
                >
                  <div className="addCurLocaModDiv">
                    {/* <button className="addCurLocaBtn">
                      <i class="fa-solid fa-location-crosshairs"></i>
                      Add location
                    </button> */}
                    {/* <input
                      type="text"
                      placeholder="Add location"
                      className="modAddLocaInp"
                    /> */}
                    {/* <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "0.6rem",
                      }}
                    >
                      <p>lattitude:</p>
                      <input
                        style={{ backgroundColor: "white" }}
                        type="text"
                        id="addlocation"
                        value={values.lattitude}
                        name="eventstarttime"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                        }}
                        className="homePgMoInps"
                      />
                      <p>longitude:</p>
                      <input
                        style={{ backgroundColor: "white" }}
                        type="text"
                        id="eventDate"
                        value={values.longitude}
                        name="eventendtime"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        className="homePgMoInps"
                      />
                    </div> */}
                  </div>

                  <div className="homePgModInnerInpDivs">
                    <input
                      type="text"
                      id="eventName"
                      aria-describedby="emailHelp"
                      placeholder="Event Name"
                      value={values.eventName}
                      name="eventName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="homePgMoInps"
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.eventName}
                    </small>
                  </div>
                  <div className="homePgModInnerInpDivs">
                    <input
                      type="text"
                      id="hostedBy"
                      placeholder="Hosted by"
                      value={values.hostedBy}
                      name="hostedBy"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="homePgMoInps"
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.hostedBy}
                    </small>
                  </div>
                  <div className="homePgModInnerInpDivs">
                    <input
                      type="date"
                      id="eventDate"
                      placeholder="Wednesday 2:45 to 4:45 PM"
                      value={values.eventDate}
                      name="eventDate"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="homePgMoInps"
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.eventDate}
                    </small>
                    {/* <div
                      style={{
                        paddingTop: "1rem",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <label>Pick Time</label>
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.eventstarttime}
                      </small>
                      <small id="emailHelp" style={{ color: "red" }}>
                        {localerror}
                        {errors.eventendtime}
                      </small>
                    </div> */}

                    {/* <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "0.6rem",
                      }}
                    >
                      <input
                        style={{}}
                        type="time"
                        id="eventDate"
                        placeholder="from"
                        value={values.eventstarttime}
                        name="eventstarttime"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          setFeventstarttime(e.target.value);
                        }}
                        className="homePgMoInps"
                      />
                      <p>to</p>
                      <input
                        style={{}}
                        type="time"
                        id="eventDate"
                        placeholder="upto"
                        value={values.eventendtime}
                        name="eventendtime"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          if (compareTimes(Feventstarttime, e.target.value)) {
                            handleChange(e);
                            setFeventendtime(handleTimeChange(e));
                            setlocalerror("");
                          } else {
                            setlocalerror("Please select time correctly");
                          }
                        }}
                        className="homePgMoInps"
                      />
                    </div> */}
                  </div>
                  <div className="homePgModInnerInpDivs">
                    <input
                      type="text"
                      id="hostedBy"
                      placeholder="Add Invites"
                      value={values.addinvites}
                      name="addinvites"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="homePgMoInps"
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.addinvites}
                    </small>
                  </div>
                  <div className="homePgModInnerInpDivs">
                    <label htmlFor="" className="addNoteLablCreMod">
                      Add Notes
                    </label>
                    <textarea
                      value={values.notes}
                      name="notes"
                      id=""
                      cols=""
                      rows="8"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className="addNoteCreModTextArea"
                    ></textarea>
                    <small id="emailHelp" style={{ color: "red" }}>
                      {localerror}
                      {errors.notes}
                    </small>
                  </div>
                  <div className="homePgModInnerInpDivs">
                    <input
                      type="file"
                      id="hostedBy"
                      placeholder="Choose a photo"
                      value={image}
                      accept="image/*"
                      name="hostedBy"
                      onBlur={handleBlur}
                      onChange={handleImageChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.image}
                    </small>
                    {uploading ? <p>image uploading......</p> : null}
                    {imageURL !== "" && (
                      <div style={{ display: "flex" }}>
                        <img
                          style={{ marginTop: "1rem" }}
                          src={imageURL}
                          alt=""
                          height="100rem"
                          width="100rem"
                        />
                        <div
                          onClick={() => {
                            setImageURL("");
                            setImage("");
                          }}
                        >
                          <i
                            class="fa-solid fa-xmark"
                            style={{
                              color: "red",
                              fontSize: "2rem",
                              cursor: "pointer",
                            }}
                          ></i>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="homePgCreModSubmitDiv">
                    <button
                      type="button"
                      className="homePgCreModSubmitBtn"
                      onClick={submitHandler}
                    >
                      Submit
                    </button>
                  </div>
                </form>
                {/* </Formik> */}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* comments  */}
      {activity === "comment" && (
        <div className="createmodal_main">
          <div className="create_modal">
            <div className="Create_overlay"></div>

            <div className="create_modal_content">
              <div className="close_icon" onClick={() => closemodal()}>
                <i
                  class="fa-solid fa-xmark"
                  style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </div>
              <h4 style={{ textAlign: "center", padding: "4px" }}>Comments</h4>

              <div className="frm_own">
                <div
                  style={{
                    width: "100%",
                    height: "10rem",

                    // padding: "2rem",
                    overflowY: "auto",
                  }}
                >
                  {commentData?.length === 0 ? (
                    <div>No Comment(s) Yet.</div>
                  ) : null}
                  {commentData &&
                    commentData?.map((item) => {
                      return (
                        <div className="otherscomment">
                          <div
                            className="details"
                            style={{
                              background: "#F7F7F7",
                              margin: "5px",
                              padding: "2px",
                              boxShadow: "1px 1px 2px rgba(0,0,0,0.5)",
                            }}
                          >
                            <div className="name">
                              <h5>
                                {`${item?.firstName}
                              ${item?.lastName}`}
                              </h5>
                            </div>
                            <div></div>
                            <div className="text">{item?.comment}</div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className="givcomment_bar">
                  <div
                    className="form-group"
                    style={{
                      display: "flex",
                      marginTop: "23px",
                    }}
                  >
                    <input
                      type="text"
                      className="form-control"
                      id=""
                      aria-describedby="textHelp"
                      placeholder="Write a comment....."
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                      type="submit"
                      className="send_btn"
                      style={{
                        padding: "7px",
                        border: "none",
                        background: "antiquewhite",
                        borderRadius: "4px",
                      }}
                      onClick={handleComment}
                    >
                      <i className="fa-regular fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* edit billboard  */}
      {activity === "kababMenu" && (
        <div className="createmodal_main">
          <div className="create_modal">
            <div className="Create_overlay"></div>

            <div className="create_modal_content">
              <div className="close_icon" onClick={() => closemodal()}>
                <i
                  class="fa-solid fa-xmark"
                  style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </div>

              <div
                className="frm_own"
                style={{ width: "100%", height: "100%", padding: "2rem" }}
              >
                <form
                  onSubmit={(e) => {
                    setShouldValidateOnBlur(true);
                    setShouldValidateOnChange(true);
                    handleSubmit(e);
                  }}
                >
                  <div class="form-group">
                    <label for="eventName">Event Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="eventName"
                      aria-describedby="emailHelp"
                      placeholder="Event Name"
                      value={eventName}
                      name="eventName"
                      onBlur={handleBlur}
                      onChange={(e) => setEventName(e.target.value)}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.eventName}
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="hostedBy">Hosted By</label>
                    <input
                      type="text"
                      class="form-control"
                      id="hostedBy"
                      placeholder="Hosted by"
                      value={hostedBy}
                      name="hostedBy"
                      onBlur={handleBlur}
                      onChange={(e) => setHostedBy(e.target.value)}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.hostedBy}
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="eventDate">Event Date</label>
                    <input
                      type="date"
                      class="form-control"
                      id="eventDate"
                      placeholder="Event Date"
                      value={date}
                      name="eventDate"
                      onBlur={handleBlur}
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.eventDate}
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="hostedBy"></label>
                    <input
                      type="file"
                      class="form-control"
                      id="hostedBy"
                      placeholder="Choose a photo"
                      value={image}
                      name="hostedBy"
                      onBlur={handleBlur}
                      onChange={handleImageChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.image}
                    </small>
                    {uploading ? <p>image uploading......</p> : null}
                    {imageURL !== "" && (
                      <div style={{ display: "flex" }}>
                        <img
                          style={{ marginTop: "1rem" }}
                          src={imageURL}
                          alt=""
                          height="100rem"
                          width="100rem"
                        />
                        <div
                          onClick={() => {
                            setImageURL("");
                            setImage("");
                          }}
                        >
                          <i
                            class="fa-solid fa-xmark"
                            style={{
                              color: "red",
                              fontSize: "2rem",
                              cursor: "pointer",
                            }}
                          ></i>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    // onClick={submitHandler}
                    class="btn btn-primary"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* edit training */}
      {activity === "editTraining" && (
        <div className="createmodal_main">
          <div className="create_modal">
            <div className="Create_overlay"></div>

            <div className="create_modal_content">
              <div className="close_icon" onClick={() => closemodal()}>
                <i
                  class="fa-solid fa-xmark"
                  style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </div>

              <div
                className="frm_own"
                style={{ width: "100%", height: "100%", padding: "2rem" }}
              >
                <h4 style={{ marginBottom: "2rem" }}>Edit Training</h4>
                <form
                  onSubmit={(e) => {
                    setShouldValidateOnBlur(true);
                    setShouldValidateOnChange(true);
                    handleSubmit(e);
                  }}
                >
                  <div class="form-group">
                    <label for="name">Training Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Training Name"
                      value={values.name}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.name}
                    </small>
                  </div>

                  <div class="form-group">
                    <label for="trainingDate">Training Date</label>
                    <input
                      type="date"
                      class="form-control"
                      id="trainingDate"
                      placeholder="Event Date"
                      value={moment(values.trainingDate).format("YYYY-MM-DD")}
                      name="trainingDate"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.trainingDate}
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="hostedBy">Training Image</label>
                    <input
                      type="file"
                      class="form-control"
                      id="hostedBy"
                      placeholder="Choose a photo"
                      value={image}
                      name="hostedBy"
                      onBlur={handleBlur}
                      onChange={handleImageChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.image}
                    </small>
                    {uploading ? <p>image uploading......</p> : null}
                    {imageURL !== "" && (
                      <div style={{ display: "flex" }}>
                        <img
                          style={{ marginTop: "1rem" }}
                          src={imageURL}
                          alt=""
                          height="100rem"
                          width="100rem"
                        />
                        <div
                          onClick={() => {
                            setImageURL("");
                            setImage("");
                          }}
                        >
                          <i
                            class="fa-solid fa-xmark"
                            style={{
                              color: "red",
                              fontSize: "2rem",
                              cursor: "pointer",
                            }}
                          ></i>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    // onClick={submitHandler}
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* job refered  */}
      {activity === "jobReffered" && (
        <div className="createmodal_main">
          <div className="create_modal">
            <div className="Create_overlay"></div>

            <div className="create_modal_content">
              <div className="close_icon" onClick={() => closemodal()}>
                <p className="emplModHead">Add Job Refferal</p>
                <i
                  class="fa-solid fa-xmark"
                  style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </div>

              <div
                className="frm_own"
                style={{ width: "100%", height: "100%", padding: "10px 20px" }}
              >
                <form
                  onSubmit={(e) => {
                    setShouldValidateOnBlur(true);
                    setShouldValidateOnChange(true);
                    submitHandler(e);
                  }}
                >
                  <div className="row">
                    <div class="col-md-6 form-group">
                      <label for="name">Job Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        aria-describedby="emailHelp"
                        placeholder="Job Name"
                        value={values.name}
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.name}
                      </small>
                    </div>

                    <div class="col-md-6 form-group">
                      <label for="trainingDate">Location</label>
                      <input
                        type="text"
                        class="form-control"
                        id="trainingDate"
                        placeholder="Enter location"
                        value={values.location}
                        name="location"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.location}
                      </small>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-md-6  form-group">
                      <label for="trainingDate">Salary</label>
                      <input
                        type="text"
                        class="form-control"
                        id="trainingDate"
                        placeholder="Salary range"
                        value={values.salary}
                        name="salary"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.salary}
                      </small>
                    </div>
                    <div class="col-md-6  form-group">
                      <label for="trainingDate">Opening</label>
                      <input
                        type="text"
                        class="form-control"
                        id="trainingDate"
                        placeholder="Enter Openings"
                        value={values.opening}
                        name="opening"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.opening}
                      </small>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="trainingDate">Description</label>
                    <textarea
                      type="text"
                      class="form-control"
                      id="trainingDate"
                      placeholder="Description"
                      value={values.description}
                      name="description"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.description}
                    </small>
                  </div>

                  <button
                    type="submit"
                    // onClick={submitHandler}
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* edit post  */}
      {activity === "editPost" && (
        <div className="createmodal_main">
          <div className="create_modal">
            <div className="Create_overlay"></div>

            <div className="create_modal_content">
              <div className="close_icon" onClick={() => closemodal()}>
                <i
                  class="fa-solid fa-xmark"
                  style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </div>

              <div
                className="frm_own"
                style={{ width: "100%", height: "100%", padding: "2rem" }}
              >
                <h4 style={{ marginBottom: "1rem" }}>Edit Post</h4>
                <form
                  onSubmit={(e) => {
                    setShouldValidateOnBlur(true);
                    setShouldValidateOnChange(true);
                    handleSubmit(e);
                  }}
                >
                  <div class="form-group">
                    <div className="row">
                      <div className="col-md-12">
                        <label for="eventName">Description</label>
                        <textarea
                          type="text"
                          class="form-control"
                          id="eventName"
                          aria-describedby="emailHelp"
                          placeholder="First Name"
                          value={values?.description}
                          name="description"
                          onBlur={handleBlur}
                          onChange={handleChange}
                        />
                        <small id="emailHelp" style={{ color: "red" }}>
                          {errors.firstName}
                        </small>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="hostedBy">Post Images</label>
                    {/* <input
                      type="file"
                      class="form-control"
                      id="hostedBy"
                      placeholder="Choose a photo"
                      value={imagesURL}
                      name="hostedBy"
                      onBlur={handleBlur}
                      onChange={handleImagesChange}
                      multiple
                    /> */}
                    <div className="attch_main_img">
                      <div className="attchfl">
                        {/* <input type="file" id="myfile" name="myfile"  /> */}
                        <input
                          type="file"
                          class="form-control"
                          id="imagesURL"
                          placeholder="Choose a photo"
                          value={imagesURL}
                          name="imagesURL"
                          onBlur={handleBlur}
                          onChange={handleImagesChange}
                          multiple
                        />
                        <div className="attch_img">
                          <div className="attach_img_bg">
                            <i className="fa-solid fa-plus"></i>
                          </div>
                          <div className="pht">
                            <p>Add photos/videos</p>
                          </div>
                          <div className="drp">
                            <p>or drag and drop</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.image}
                    </small>
                    {uploading ? <p>image uploading......</p> : null}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                      }}
                    >
                      {imagesURL?.length > 0 &&
                        imagesURL?.map((item, index) => {
                          return (
                            <div key={index} className="thoughtsimg_up">
                              <img src={item} className="img-fluid" alt="" />
                              <div
                                className="close"
                                onClick={() => {
                                  removeImage(index);
                                }}
                              >
                                <i class="fa-solid fa-xmark"></i>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  <div
                    type="submit"
                    // onClick={submitHandler}
                    class="homePgCreModSubmitBtn"
                  >
                    Submit
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* edit event  */}
      {activity === "editEvent" && (
        <div className="createmodal_main">
          <div className="create_modal">
            <div className="Create_overlay">Events</div>

            <div className="create_modal_content">
              <div className="close_icon" onClick={() => closemodal()}>
                <i
                  class="fa-solid fa-xmark"
                  style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </div>

              <div
                className="frm_own"
                style={{ width: "100%", height: "100%", padding: "2rem" }}
              >
                <form
                  onSubmit={(e) => {
                    setShouldValidateOnBlur(true);
                    setShouldValidateOnChange(true);
                    handleSubmit(e);
                  }}
                >
                  <div class="form-group">
                    <label for="eventName">Event Name</label>
                    <input
                      type="text"
                      class="form-control"
                      id="eventName"
                      aria-describedby="emailHelp"
                      placeholder="Event Name"
                      value={values.eventName}
                      name="eventName"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.eventName}
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="hostedBy">Hosted By</label>
                    <input
                      type="text"
                      class="form-control"
                      id="hostedBy"
                      placeholder="Hosted by"
                      value={values.hostedBy}
                      name="hostedBy"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.hostedBy}
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="eventDate">Event Date</label>
                    <input
                      type="date"
                      class="form-control"
                      id="eventDate"
                      placeholder="Event Date"
                      value={moment(values.eventDate).format("YYYY-MM-DD")}
                      name="eventDate"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.eventDate}
                    </small>
                  </div>
                  <div class="form-group">
                    <label for="hostedBy">Event Image</label>
                    <input
                      type="file"
                      class="form-control"
                      id="hostedBy"
                      placeholder="Choose a photo"
                      value={image}
                      name="hostedBy"
                      onBlur={handleBlur}
                      onChange={handleImageChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.image}
                    </small>
                    {uploading ? <p>image uploading......</p> : null}
                    {imageURL !== "" && (
                      <div style={{ display: "flex" }}>
                        <img
                          style={{ marginTop: "1rem" }}
                          src={imageURL}
                          alt=""
                          height="100rem"
                          width="100rem"
                        />
                        <div
                          onClick={() => {
                            setImageURL("");
                            setImage("");
                          }}
                        >
                          <i
                            class="fa-solid fa-xmark"
                            style={{
                              color: "red",
                              fontSize: "2rem",
                              cursor: "pointer",
                            }}
                          ></i>
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={submitHandler}
                    class="btn btn-primary"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sustainable Initiative or goal achiver */}
      {activity === "goalAchiver" && (
        <div className="createmodal_main">
          <div className="create_modal">
            <div className="Create_overlay"></div>

            <div className="create_modal_content">
              <div className="close_icon" onClick={() => closemodal()}>
                <p className="emplModHead">Employees</p>
                <i
                  class="fa-solid fa-xmark"
                  style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
                ></i>
              </div>

              <div
                className="frm_own"
                style={{ width: "100%", height: "100%", padding: "10px 20px" }}
              >
                {employeeData?.length > 0 ? (
                  searching ? (
                    <p>Searching.....</p>
                  ) : (
                    employeeData?.map((item, index) => {
                      return (
                        <ul className="empListModUl">
                          <li className="empListModLi">
                            <figure className="evModalFig">
                              {/* <img src={champion} alt="..." /> */}
                              {item?.image ? (
                                <img
                                  src={item?.image}
                                  className="img-fluid"
                                  alt="profile"
                                />
                              ) : (
                                <img
                                  src={ProfileImg1}
                                  className="img-fluid"
                                  alt="profile"
                                />
                              )}
                            </figure>
                            <div className="empCryDiv">
                              <div>
                                <p className="empNmModal">
                                  {/* {item?.firstName} +  {item?.lastName} */}
                                  {`${item?.firstName} ${item?.lastName}`}
                                </p>
                                <p className="creModText">Manager</p>
                              </div>
                              <div className="crypoFigDiv">
                                <figure className="crypoFig">
                                  {/* <img src={cryptocurr1} alt="..." /> */}
                                  {userData?.userType === "Admin" ? (
                                    item?.isSustainable ? (
                                      <img
                                        src={AlartIcon1}
                                        style={{ cursor: "pointer" }}
                                        className="img-fluid"
                                        alt="icon"
                                        onClick={() =>
                                          addSustainable(item?._id)
                                        }
                                      />
                                    ) : (
                                      <img
                                        src={AlartIcon2}
                                        style={{ cursor: "pointer" }}
                                        className="img-fluid"
                                        alt="icon"
                                        onClick={() =>
                                          addSustainable(item?._id)
                                        }
                                      />
                                    )
                                  ) : (
                                    ""
                                  )}
                                </figure>
                                <button className="chatEmpModBtn">
                                  <i class="fa-regular fa-comment-dots"></i>
                                </button>
                                <div className="showAct"></div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      );
                    })
                  )
                ) : (
                  ""
                  // <p style={{ color: "red" }}>{message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateModal;
