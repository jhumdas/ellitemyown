import React,{useState,useEffect} from 'react'
import { useAuthCtx } from '../context/AuthCtx';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { toast } from 'react-hot-toast';
import { ApiHelperFunction, fileUpload } from '../services/api/apiHelpers';
import { useDispatch } from 'react-redux';
import { getTrainingData } from '../redux/slices/trainingSlice';
const CommentModal = ({closemodal , activity ,handleComment,comment ,setComment ,commentData, initialValues}) => {
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
  )
}

export default CommentModal