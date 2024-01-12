import React, { useState, useEffect } from 'react'
import { useAuthCtx } from '../context/AuthCtx';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-hot-toast';
import { ApiHelperFunction, fileUpload } from '../services/api/apiHelpers';
import { useDispatch } from 'react-redux';
import { getBillBoardData } from '../redux/slices/billBoardSlice';
import { getEventData } from '../redux/slices/eventSlice';
import moment from 'moment';

const EditEventModal = ({ closemodal, activity, BulletinBoardSingleData, id, initialValues }) => {
  const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
  console.log("initialValues", initialValues);
  const [imageURL, setImageURL] = useState(initialValues?.image);
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
    console.log("handleSubmit", values);

    let data = {};
    setLoading(true);
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
      notes: values?.notes,
      isHighLighted:values?.isHighLighted,
      image: imageURL,
    };

    console.log("kkkkkkk", data);
    const res = await ApiHelperFunction({
      urlPath: `/update-event/${initialValues?._id}`,
      method: "PUT",
      data,
    });
    if (res?.status) {
      toast.success("Event Updated successfully");
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
                <label for="Add Notes">Notes</label>
                <input
                  type="text"
                  class="form-control"
                  id="notes"
                  placeholder="Add Notes"
                  value={values.notes}
                  name="notes"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                <small id="emailHelp" style={{ color: "red" }}>
                  {errors.notes}
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

              <div class="form-group">
                <label for="hostedBy">Event Image</label>
                <input
                  type="file"
                  class="form-control"
                  id="hostedBy"
                  placeholder="Choose a photo"
                  // value={image}
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
  )
}

export default EditEventModal