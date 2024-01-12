import React, { useState, useEffect } from 'react'
import { useAuthCtx } from '../context/AuthCtx';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-hot-toast';
import { ApiHelperFunction, fileUpload } from '../services/api/apiHelpers';
import { useDispatch } from 'react-redux';
import { getEventData } from '../redux/slices/eventSlice';

const EventsModal = ({ closemodal, activity, initialValues }) => {
  const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const [localerror, setlocalerror] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);
  const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);

  const submitHandler = async (e, selectedSubscription) => {
    e.preventDefault();
    setShouldValidateOnChange(true);
    setShouldValidateOnBlur(true);

    let data = {};
    setLoading(true);
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
      notes: values?.notes,
      isHighLighted: values?.isHighLighted
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

    setLoading(false);
  };

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

  return (
    <div className="createmodal_main">
      <div className="create_modal">
        <div className="create_modal_content crte_own">
          <div
            className="frm_own"
            style={{ width: "100%", height: "100%", padding: "20px 0" }}
          >
            <div className="newBulleCloseModDiv">
              <span className="newBulleCreHead">Events</span>
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
                  value={values?.eventName}
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
                  value={values?.hostedBy}
                  name="hostedBy"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="homePgMoInps"
                />
                <small id="emailHelp" style={{ color: "red" }}>
                  {errors?.hostedBy}
                </small>
              </div>
              <div className="homePgModInnerInpDivs">
                <input
                  type="date"
                  id="eventDate"
                  placeholder="Wednesday 2:45 to 4:45 PM"
                  value={values?.eventDate}
                  name="eventDate"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="homePgMoInps"
                />
                <small id="emailHelp" style={{ color: "red" }}>
                  {errors?.eventDate}
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
                  value={values?.addinvites}
                  name="addinvites"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="homePgMoInps"
                />
                <small id="emailHelp" style={{ color: "red" }}>
                  {errors?.addinvites}
                </small>
              </div>
              <div className="homePgModInnerInpDivs">
                <label htmlFor="" className="addNoteLablCreMod">
                  Add Notes
                </label>
                <textarea
                  value={values?.notes}
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
                  {errors?.notes}
                </small>
              </div>

              <div className="homePgModInnerInpDivs">
                <label htmlFor="isHighLighted" className="isHighLightedLabel">
                  Is Highlighted?
                </label>
                <div className="isHighLightedContainer">
                  <input
                    type="radio"
                    id="isHighLightedYes"
                    name="isHighLighted"
                    value="yes"
                    checked={values.isHighLighted === "yes"}
                    onChange={handleChange}
                    className="isHighLightedRadio"
                  />
                  <label htmlFor="isHighLightedYes" className="radioLabel">
                    Yes
                  </label>

                  <input
                    type="radio"
                    id="isHighLightedNo"
                    name="isHighLighted"
                    value="no"
                    checked={values.isHighLighted === "no"}
                    onChange={handleChange}
                    className="isHighLightedRadio"
                  />
                  <label htmlFor="isHighLightedNo" className="radioLabel">
                    No
                  </label>

                  <div className="isHighLightedSymbol">
                    {values.isHighLighted === "yes" ? "+" : " "}
                  </div>
                </div>
                <small id="isHighLightedHelp" style={{ color: "red" }}>
                  {errors.isHighLighted}
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
                  {errors?.image}
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
  )
}

export default EventsModal