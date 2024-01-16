import { upload } from "@testing-library/user-event/dist/upload";
import React, { useEffect, useState } from "react";
import ThoughtsImg from "../Images/Icons/PNG/Profile (2).png";
import InputImg from "../Images/Icons/PNG/Attach.png";
import CreditsIcon from "../Images/Icons/PNG/Event Create.png";
import EliteCardicon from "../Images/Icons/PNG/Post card.png";
import { useDispatch, useSelector } from "react-redux";
import { useAuthCtx } from "../context/AuthCtx";
import { addPosts, getAllPosts } from "../redux/slices/postSlice";
import { ToastBar, toast } from "react-hot-toast";
import { ApiHelperFunction, fileUpload } from "../services/api/apiHelpers";
import ThoughtModalHome from "../../src/Component/Modal/ThoughtModalHome";
import Loader from "./loader/Loader";
import Ask_HR from "../Images/Icons/PNG/Ask_HR.png";
import connection8 from "../Images/connection8.png"
// Constants
import { BASE_URL } from "../constants/config";
import Askhrmodal from "../SeprateModal/Askhrmodal";
import Thankyou from "../../src/Images/Icons/PNG/Thankyou.png"
import CreateNewPost from "../../src/Images/Icons/PNG/CreateNewPost.png"
export default function ShareThoughts({ getAffinityPosts }) {
  const { setLoading, userData, setModalF } = useAuthCtx();
  const postLoading = useSelector((state) => state.postGetSlice.isLoading);
  const postData = useSelector((state) => state.postGetSlice.addPost);
  const [uploading, setUploading] = useState(false);
  const [imageURL, setImageURL] = useState([]);
  const [image, setImage] = useState("");
  const [modalthght, setModalthght] = useState(false);
  const dispatch = useDispatch();
  const [sharePublicly, setSharePublicly] = useState(false);
  const [shareAffinityGroup, setshareAffinityGroup] = useState(false);
  const [askmodal, setAskmodal] = useState(false)
  const [post, setPost] = useState({
    description: "",
    image: [],
  });

  const initialvaluesaskhr = {
    question: ""
  }

  const handlethoughtModal = () => {
    setModalthght(true);
  };
  const handleaskClick = () => {
    setAskmodal(!askmodal)
  }

  const closeEventModal = () => {
    setModalF(true);
    setModalthght(false)
  };

  const handleImageChange = async (e) => {
    let images = Array.from(e.target.files);
    let imageArray = [];
    setUploading(true);
    for (let i = 0; i < images.length; i++) {
      const form = new FormData();
      form.append("image", images[i]);

      let res = await fileUpload("/image-upload", "POST", form);

      if (res.status) {
        // toast.success("Images uploaded successfully");
        imageArray.push(res?.image);
      } else {
        toast.error("Error uploading image");
      }
    }
    setPost({ ...post, image: imageArray });
    setUploading(false);
  };

  const removeImage = (index) => {
    let images = [...post.image];
    images.splice(index, 1);
    setPost({ ...post, image: images });
  };

  const handleCheckboxChange = (e) => {
    setSharePublicly(e.target.checked);
  };

  // const handleAffinityCheckboxChange = (e) => {
  //   setshareAffinityGroup(e.target.checked);
  // }


  return (
    <>
      <section id="share_thoughts" >
        <div className="top">
          <div className="profilebrdr">
            <div
              className="profile_img"
              style={{ borderRadius: "50%", overflow: "hidden" }}
            >
              <img src={connection8} className="img-fluid" alt="profile" />
              {/* {userData?.image ? (
              <img src={userData?.image} className="img-fluid" alt="profile" />
            ) : (
              <img
                src={BASE_URL + "/" + "uploads/imageUploads/530060.com-4811117"}
                className="img-fluid"
                alt="profile"
              />
            )} */}
            </div>
          </div>
          <form>
            <div className="form-group mb-0">
              {/* <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                aria-describedby="textHelp"
                placeholder="Share your thoughts..."
                value={post?.description}
                onChange={(e) =>
                  setPost({ ...post, description: e.target.value })
                }
              /> */}
              <div className="thght_txt" onClick={handlethoughtModal}>
                <p>Share your thoughts...</p>
              </div>
            </div>
            {uploading ? (
              <Loader />
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                {post?.image?.length > 0 &&
                  post?.image?.map((item, index) => {
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
            )}
          </form>
        </div>

        {/* <div className="share_public_checkbox"> */}

        {/* <input
          type="checkbox"
          id="sharePublicly"
          checked={sharePublicly}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="sharePublicly">
          Share publicly
        </label> */}

        {/* <input
          type="checkbox"
          id="sharePublicly"
          checked={shareAffinityGroup}
          onChange={handleAffinityCheckboxChange}
        />
        <label htmlFor="sharePublicly">
          Share Affinity Group
        </label> */}


        {/* </div> */}
        <div className="bottom">

          {/* <div className="attach_btn" style={{ marginRight: "20px" }} onClick={handlethoughtModal}>
            <div className="file_upload" >
              <div className="input_img" style={{ cursor: "pointer" }}>
                <img src={InputImg} className="img-fluid" alt="icon" />
              </div> */} {/* today */}
          {/* <input
                id=""
                type="file"
                value={image}
                // onChange={handleImageChange}
                accept="image/*"
                multiple
                style={{ cursor: "pointer" }}
              /> */}
          {/* </div>
            <div className="attach">
              <p style={{ cursor: "pointer" }}>Attach</p>
            </div>
          </div> */}
          {/* event  */}
          <div className="crdrtaskthank">
            <div className="request_credits" style={{ marginRight: "20px" }}>
              {
                userData?.userType === "Admin" || userData?.userType === "Manager" ? (<> <button className="btn">
                  <img src={CreditsIcon} className="img-fluid" alt="icon" onClick={closeEventModal} />
                </button>
                  <p style={{ cursor: "pointer" }} onClick={closeEventModal}>Create Events</p></>) :

                  (<>
                    <div className="" style={{ display: "flex", alignItems: "center" }} onClick={handleaskClick}>
                      <button className="btn">
                        <img src={Ask_HR} className="img-fluid" alt="icon" />
                      </button>
                      <p style={{ cursor: "pointer", whiteSpace: "nowrap" }}>Ask HR</p>
                    </div>
                  </>
                  )
              }
              {/* // <button className="btn">
            //   <img src={CreditsIcon} className="img-fluid" alt="icon" />
            // </button>
            // <p style={{ cursor: "pointer" }}>Event</p> */}
            </div>
            <div className="request_credits" style={{ display: "flex", alignItems: "center" }}>
              <button className="btn">
                <img src={Thankyou} lassName="img-fluid" alt="icon" />
              </button>
              <p style={{ cursor: "pointer", whiteSpace: "nowrap" }}>Thank You</p>
            </div>
          </div>
          <div className="">
          <div className="request_credits" style={{ display: "flex", alignItems: "center" }}>
              <button className="btn">
                <img src={CreateNewPost} lassName="img-fluid" alt="icon" />
              </button>
              <p style={{ cursor: "pointer", whiteSpace: "nowrap" }}>Create New Post</p>
            </div>
          </div>
          {/* post card  */}
          {/* <div style={{ cursor: "pointer" }} className="Post_Card">
            <button className="btn">
              <img src={EliteCardicon} className="img-fluid" alt="icon" />
            </button>
            <p>
              <span >élite</span>Post Card
            </p>
          </div> */}

          {/* <div className="post_btn">
            <button className="btn" onClick={handleClick}>
              Post
            </button>
          </div> */}
        </div>
      </section>
      {modalthght && <ThoughtModalHome getAffinityPosts={getAffinityPosts} closemodal={setModalthght} text={"Share your thoughts..."} attach={"Attach"} event={"Event"}
      // elite={"élite Post Card"} 
      />}
      {askmodal && <Askhrmodal Closemodal={setAskmodal} initialValues={initialvaluesaskhr} activity={"askHr"} />}
    </>
  );
}
