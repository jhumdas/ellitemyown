import React, { useState, useEffect } from 'react'
import { useAuthCtx } from '../context/AuthCtx';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-hot-toast';
import { ApiHelperFunction, fileUpload } from '../services/api/apiHelpers';
import { useDispatch } from 'react-redux';
import { getTrainingData } from '../redux/slices/trainingSlice';
import moment from 'moment';
const EditTrainingModal = ({ closemodal, activity, initialValues }) => {
  const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
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
      values.name == "" ||
      values.trainingDate == "" ||
      values.link == "" ||
      values.image == ""
    ) {
      return toast.error("All fields required");
    }

    data = {
      name: values?.name,
      trainingDate: values?.trainingDate,
      image: imageURL,
    };
    console.log("click_training", data);
    const res = await ApiHelperFunction({
      urlPath: `/update-training/${initialValues?._id}`,
      method: "PUT",
      data,
    });
    if (res?.status) {
      toast.success("Traning event Updated successfully");
      resetForm();
      dispatch(getTrainingData());
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
          link: Yup.string().required("Training Link is required"),
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
                <label for="trainingDate">Traning Link</label>
                <input
                  type="text"
                  class="form-control"
                  id="link"
                  placeholder="training Link"
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
                <label for="hostedBy">Traning Image</label>
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
                onClick={submitHandler}
                class="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTrainingModal