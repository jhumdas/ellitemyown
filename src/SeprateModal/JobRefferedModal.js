import React,{useState,useEffect} from 'react'
import { useAuthCtx } from '../context/AuthCtx';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-hot-toast';
import { ApiHelperFunction, fileUpload } from '../services/api/apiHelpers';
import { useDispatch } from 'react-redux';
import { getTrainingData } from '../redux/slices/trainingSlice';
import moment from 'moment';
import { getRefferedJobs } from '../redux/slices/jobRefferedSlice';
const JobRefferedModal = ({closemodal , activity ,initialValues}) => {
    const { setLoading, loading, getUserDetails, userData } = useAuthCtx();
    const [imageURL, setImageURL] = useState("");
    const dispatch = useDispatch();
    const [localerror, setlocalerror] = useState("");
    const [image, setImage] = useState("");
    const [uploading, setUploading] = useState(false);
    const [shouldValidateOnChange, setShouldValidateOnChange] = useState(false);
    const [shouldValidateOnBlur, setShouldValidateOnBlur] = useState(false);


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

      const submitHandler = async (e, selectedSubscription) => {
        e.preventDefault();
    
    
        setShouldValidateOnChange(true);
        setShouldValidateOnBlur(true);
        console.log("handleSubmit", values);
    
        let data = {};
        setLoading(true);
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
        setLoading(false);
      };
    
  return (
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
              class="btn homePgCreModSubmitBtn"
              style={{margin:'0 auto', display:'table'}}
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

export default JobRefferedModal