import React, { useState, useEffect } from 'react'
import { useAuthCtx } from '../context/AuthCtx';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-hot-toast';
import { ApiHelperFunction, fileUpload } from '../services/api/apiHelpers';
import { useDispatch } from 'react-redux';
import { getBillBoardData } from '../redux/slices/billBoardSlice';
import { getAllPosts } from '../redux/slices/postSlice';

const EditPostModal = ({ closemodal, activity, initialValues }) => {
  const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
  const [imageURL, setImageURL] = useState("");
  const dispatch = useDispatch();
  const [localerror, setlocalerror] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [imagesURL, setImagesURL] = useState("");
  const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);
  const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);


  console.log(initialValues, imagesURL, "initialValuesiop")

  // const submitHandler = async (e, selectedSubscription) => {
  //   e.preventDefault();
  //   setShouldValidateOnChange(true);
  //   setShouldValidateOnBlur(true);
  //   console.log("handleSubmit", values);

  //   let data = {};
  //   setLoading(true);
  //   if (
  //     values.eventName == "" ||
  //     values.hostedBy == "" ||
  //     values.eventDate == "" ||
  //     values.eventstarttime == "" ||
  //     values.eventendtime == "" ||
  //     values.notes == ""
  //   ) {
  //     return toast.error("All fields required");
  //   }
  //   data = {
  //     // lattitude: values?.lattitude,
  //     // longitude: values?.longitude,
  //     eventName: values?.eventName,
  //     hostedBy: values?.hostedBy,
  //     eventDate: values?.eventDate,
  //     eventstarttime: values?.eventstarttime,
  //     eventendtime: values?.eventendtime,
  //     addNotes: values?.notes,
  //     image: imageURL,
  //   };

  //   console.log("kkkkkkk", data);
  //   const res = await ApiHelperFunction({
  //     urlPath: "/add-bulletin-board",
  //     method: "POST",
  //     data,
  //   });
  //   if (res?.status) {
  //     toast.success("Event added successfully");
  //     resetForm();
  //     dispatch(getBillBoardData());
  //     closemodal();
  //   } else {
  //     toast.error(res?.message || "Something went wrong");
  //     console.log("ERROR CREATING USER3", res);
  //   }
  //   setLoading(false);
  // };


  const submitHandler = async (e, selectedSubscription) => {
    e.preventDefault();
    setShouldValidateOnChange(true);
    setShouldValidateOnBlur(true);
    console.log("handleSubmit", values);

    let data = {};
    setLoading(true);
    if (
      initialValues.description == ""
    ) {
      return toast.error("All fields required");
    }
    data = {
      // lattitude: values?.lattitude,
      // longitude: values?.longitude,
      description: values?.description,
      image: image,
      // postType: "public"
    };

    console.log("kkkkkkk", data);
    const res = await ApiHelperFunction({
      urlPath: `/edit-post/${initialValues?._id}`,
      method: "PUT",
      data,
    });
    if (res?.status) {
      toast.success("Post is updated successfully");
      resetForm();
      dispatch(getAllPosts());
      closemodal();
    } else {
      toast.error(res?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res);
    }
    setLoading(false);
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

  const removeImage = (index) => {
    let images = imagesURL?.filter((item, indx) => index != indx);
    console.log("images", images);
    setImagesURL([...images]);
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
      setImage(res?.image);
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

  useEffect(() => {
    setImage(values?.image?.[0])
  }, [])




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
                      id="description"
                      aria-describedby="emailHelp"
                      placeholder="Description"
                      value={values?.description}
                      name="description"
                      onBlur={handleBlur}
                      onChange={handleChange}
                    />
                    <small id="emailHelp" style={{ color: "red" }}>
                      {errors.description}
                    </small>
                  </div>
                </div>
              </div>


              <div class="form-group">
                <label for="image">Post Image</label>
                <input
                  type="file"
                  class="form-control"
                  id="imageURL"
                  placeholder="Choose a photo"
                  // value={imageURL}
                  name="image"
                  onBlur={handleBlur}
                  onChange={handleImageChange}
                />
                <small id="emailHelp" style={{ color: "red" }}>
                  {errors.image}
                </small>
                {uploading ? <p>image uploading......</p> : null}
                {image !== "" && (
                  <div style={{ display: "flex" }}>
                    <img
                      style={{ marginTop: "1rem" }}
                      src={image}
                      alt=""
                      height="100rem"
                      width="100rem"
                    />
                    <div
                      onClick={() => {
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
                type="submit"
                onClick={submitHandler}
                class="homePgCreModSubmitBtn"
              >
                Update
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditPostModal