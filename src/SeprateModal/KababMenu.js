import React,{useState,useEffect} from 'react'
import { useAuthCtx } from '../context/AuthCtx';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-hot-toast';
import { ApiHelperFunction, fileUpload } from '../services/api/apiHelpers';
import { useDispatch } from 'react-redux';
import { getBillBoardData } from '../redux/slices/billBoardSlice';
import moment from 'moment';

const KababMenu = ({closemodal , activity ,BulletinBoardSingleData, id , initialValues}) => {
  console.log("initialValues" , initialValues);
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
          values.eventName == "" ||
          // values.hostedBy == "" ||
          values.eventDate == "" ||
          // values.eventstarttime == "" ||
          // values.eventendtime == "" ||
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
          invite:values.addinvites,
        };
          const res = await ApiHelperFunction({
            urlPath: `/update-bulletin-board/${initialValues?._id}`,
            method: "PUT",
            data,
          });
          if (res?.status) {
            toast.success("Event updated successfully");
            resetForm();
            dispatch(getBillBoardData());
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


      console.log("VALUESUPDATE", values);

   
    return (
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
                value={moment(values.eventDate).format("YYYY-MM-DD")}
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
                value={values.invite}
                name="addinvites"
                onBlur={handleBlur}
                onChange={handleChange}
                className="homePgMoInps"
              />
              <small id="emailHelp" style={{ color: "red" }}>
                {errors.invite}
              </small>
            </div>
            <div className="homePgModInnerInpDivs">
              <label htmlFor="" className="addNoteLablCreMod">
                Add Notes
              </label>
              <textarea
                value={values.addNotes}
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
  )
}

export default KababMenu