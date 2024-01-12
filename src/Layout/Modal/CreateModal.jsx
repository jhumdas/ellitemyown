import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { useAuthCtx } from "../../context/AuthCtx";
import { ToastBar, toast } from "react-hot-toast";
import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import { useDispatch } from "react-redux";
import { getBillBoardData } from "../../redux/slices/billBoardSlice";
import { getTrainingData } from "../../redux/slices/trainingSlice";
// Constants
import { BASE_URL, API_ENDPOINT_PATH } from "../../constants/config";
import moment from "moment";
const initialValues = {
  firstName: "",
  lastName: "",
  image: "",
};

const CreateModal = ({
  closemodal,
  activity,
  handleComment,
  comment,
  setComment,
  commentData,
  BulletinBoardSingleData,
}) => {
  const { setLoading, loading } = useAuthCtx();
  const [eventName, setEventName] = useState("");
  const [hostedBy, setHostedBy] = useState("");
  const [date, setDate] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState("");
  const { userData, getUserDetails } = useAuthCtx();

  console.log("ImageURL", imageURL);

  const dispatch = useDispatch();
  //  console.log("url",userData);

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

  useEffect(() => {
    if (activity == "kababMenu") {
      setEventName(BulletinBoardSingleData.eventName);
      setHostedBy(BulletinBoardSingleData.hostedBy);
      setDate(moment(BulletinBoardSingleData.eventDate).format("YYYY-MM-DD"));
    }
    setImageURL(userData?.image);
    window.scrollTo({ top: 0 });
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, []);
  const schemaCheck = Yup.object(
    activity === "billBoard"
      ? {
          eventName: Yup.string().required("Event Name is required"),
          hostedBy: Yup.string().required("Host name is required"),
          eventDate: Yup.string().required("Event date is required"),
        }
      : activity === "training"
      ? {
          name: Yup.string().required("Event Name is required"),
          trainingDate: Yup.string().required("Training date is required"),
        }
      : ""
  );
  //@ Submit Handler
  const submitHandler = async (e, selectedSubscription) => {
    if (loading) return;

    let data = {};
    setLoading(true);

    data = {
      firstName: values.firstName,
      lastName: values.lastName,
      image: imageURL,
    };

    const res = await ApiHelperFunction({
      urlPath: "/update-profile",
      method: "PUT",
      data,
    });
    if (res?.status) {
      toast.success("Profile edited successfully");
      resetForm();
      closemodal();
      // dispatch(getUserDetails());
      getUserDetails();
      // window.alert(5);
    } else {
      toast.error(res?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res);
    }

    setLoading(false);
  };

  const { values, errors, handleBlur, handleSubmit, resetForm, handleChange } =
    useFormik({
      initialValues: userData,
      onSubmit: (e) => {
        submitHandler(e);
      },
      validationSchema: schemaCheck,
    });
  return (
    <>
      <div className="createmodal_main">
        <div className="create_modal">
          <div className="Create_overlay"></div>

          <div className="create_modal_content">
            <div
              className="close_icon closeIconEdit"
              onClick={() => closemodal()}
            >
              <i
                class="fa-solid fa-xmark"
                style={{ color: "red", fontSize: "24px", cursor: "pointer" }}
              ></i>
            </div>

            <div
              className="frm_own"
              style={{ width: "100%", height: "100%", padding: "22px" }}
            >
              <h4 style={{ marginBottom: "1rem" }}>Edit Profile</h4>
              <form onSubmit={handleSubmit}>
                <div class="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <label for="eventName">First Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="eventName"
                        aria-describedby="emailHelp"
                        placeholder="First Name"
                        value={values?.firstName}
                        name="firstName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.firstName}
                      </small>
                    </div>
                    <div className="col-md-6">
                      <label for="eventName">Last Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="eventName"
                        aria-describedby="emailHelp"
                        placeholder="Last Name"
                        value={values.lastName}
                        name="lastName"
                        onBlur={handleBlur}
                        onChange={handleChange}
                      />
                      <small id="emailHelp" style={{ color: "red" }}>
                        {errors.lastName}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="hostedBy">Profile Picture</label>
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

                <div style={{ textAlign: "center" }}>
                  <button type="submit" class="btn btn-sm btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateModal;
