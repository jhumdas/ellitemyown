import React, { useEffect, useState } from "react";
import ThoughtsImg from "../../Images/profile_img.png";
import connection4 from "../../Images/connection4.png";
import { Link } from "react-router-dom";
import InputImg from "../../Images/Icons/PNG/Attach.png";
import CreditsIcon from "../../Images/Icons/PNG/Points.png";
import EliteCardicon from "../../Images/elitecardicon.png";
import { toast } from "react-hot-toast";
import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import { useAuthCtx } from "../../context/AuthCtx";
import { BASE_URL } from "../../constants/config";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, getAllPosts } from "../../redux/slices/postSlice";
import { useLocation } from "react-router-dom";
import Loader from "../loader/Loader";
import { getAdvocacyPosts } from "../../redux/slices/advocacyPostSlice";
import profileImg from "../../Images/Icons/PNG/Profile (2).png";
import writeTest from "../../Images/Icons/PNG/Testimonials.png";
// import toast, { Toaster } from "react-hot-toast";

export default function ThoughtModal({
  closemodal,
  text,
  attach,
  event,
  elite,
}) {
  const [hide, setHide] = useState(false);
  const location = useLocation();
  const [uploading, setUploading] = useState(false);
  const [sharePublicly, setSharePublicly] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  // console.log(" attach" , attach);
  const [post, setPost] = useState({
    description: "",
    image: "",
  });

  useEffect(() => {
    if (location?.pathname === "/advocacy") {
      setHide(true);
    }
  }, []);
  const { userData } = useAuthCtx();
  const dispatch = useDispatch();

  // const handleImageChange = async (e) => {
  //   let images = Array.from(e.target.files);
  //   let imageArray = [];
  //   setUploading(true);
  //   for (let i = 0; i < images.length; i++) {
  //     const form = new FormData();
  //     form.append("image", images[i]);

  //     let res = await fileUpload("/image-upload", "POST", form);
  //     //   console.log("resimg", res);

  //     if (res?.status) {
  //       toast.success("Images uploaded successfully");
  //       console.log("Images uploaded successfully");
  //       imageArray.push(res?.image);
  //     } else {
  //       toast.error("Error uploading image");
  //     }
  //   }
  //   setPost({ ...post, image: imageArray });
  //   setUploading(false);
  // };

  const handleImageChange = async (e) => {
    let image = e.target.files[0];
    setUploading(true);

    const form = new FormData();
    form.append("image", image);

    let res = await fileUpload("/image-upload", "POST", form);
    console.log("imaggg", res);

    if (res.status) {
      toast.success("Image uploaded successfully");
      setPost((prev) => ({ ...prev, image: res?.image }));
    } else {
      toast.error("Error uploading image");
    }
    setUploading(false);
  };

  // const removeImage = (index) => {
  //   let images = [...post.image];
  //   images.splice(index, 1);
  //   setPost({ ...post, image: images });
  // };

  const handleChange = (e) => {
    e.preventDefault();
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setSharePublicly(e.target.checked);
  };

  const handlePost = async (e) => {
    if (post.description === "") {
      toast?.error("Please enter description!");
      return;
    }
    // if (post.image === "") {
    //   toast?.error("Please enter image!");
    //   return;
    // }
    if (userData?.userType !== "Admin") {
      if (!sharePublicly) {
        toast?.error("Please check 'Share publicly' checkbox to post!");
        return;
      }
    }

    setUploading(true);

    let data = {
      description: post?.description,
      image: post?.image,
    };

    let response = await ApiHelperFunction({
      urlPath: "/add-advocacy-content",
      method: "POST",
      data: data,
    });

    if (response.status === 200) {
      toast.success(response?.data?.message);
      // console.log(response?.data?.message, "resssssssssssss");

      setPost({
        description: "",
        image: "",
      });
      closemodal();
      dispatch(getAdvocacyPosts());
    } else {
      toast?.error("User can not Post Advocacy-Testimonial");
    }

    setUploading(false);
  };

  // console.log("aapost", post?.image);

  return (
    <>
      <div className="thought_moadal_main">
        <div className="thought_moadal">
          {/* <div className="Create_overlay"></div> */}
          <div className="thought_modal_content">
            <div className="close_icon" onClick={() => closemodal()}>
              <i
                class="fa-solid fa-xmark"
                style={{ color: "red", fontSize: "16px", cursor: "pointer" }}
              ></i>
            </div>
            <div className="thoghts_txt_top_btm">
              <div className="top">
                <p>Create post</p>
              </div>
              <div className="bottom">
                <div className="img_thght">
                  <div
                    className="profile_img"
                    style={{ borderRadius: "50%", overflow: "hidden" }}
                  >
                    {(userData?.image === "image" || "" || undefined) ? (
                      // <img
                      //   src={userData?.image}
                      //   className="img-fluid"
                      //   alt="profile"
                      // />
                      <img src={profileImg} alt="..." />
                    ) : (
                      <img
                        src={userData?.image}
                        className="img-fluid"
                        alt="profile"
                      />
                      // <img
                      //   src={
                      //     BASE_URL +
                      //     "/" +
                      //     "uploads/imageUploads/530060.com-4811117"
                      //   }
                      //   className="img-fluid"
                      //   alt="profile"
                      // />
                    )}
                  </div>
                  <div className="prfl_mnm">
                    <p>{`${userData?.firstName} ${userData?.lastName}`}</p>
                  </div>
                </div>

                <form>
                  {/* <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="description"
                                            name="description"
                                            aria-describedby="textHelp"
                                            placeholder="Share your thoughts..."

                                        />
                                    </div> */}

                  <textarea
                    id=""
                    name="description"
                    value={post?.description}
                    rows="4"
                    cols="50"
                    className="txtar"
                    placeholder={!hide ? text : "Testimonials"}
                    onChange={(e) => handleChange(e)}
                  ></textarea>
                </form>

                {/* <div className='attch_main_img'>
                                    <div className='attchfl'>
                                        <input type="file" id="myfile" name="myfile"  />
                                        <div className='attch_img'>
                                            <div className='attach_img_bg'>
                                                <i className="fa-solid fa-plus"></i>
                                            </div>
                                            <div className='pht'>
                                                <p>Add photos/videos</p>
                                            </div>
                                            <div className='drp'>
                                                <p>or drag and drop</p>
                                            </div>

                                        </div>
                                    </div>


                                </div> */}

                {uploading ? (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Loader />
                  </div>
                ) : (
                  <div className="prt_img_flx">
                    {post?.image && (
                      <div className="prt_img">
                        <img src={post?.image} alt="" />
                        <div
                          onClick={() => {
                            setPost((prev) => ({ ...prev, image: "" })); // Reset the image on cross button click
                          }}
                        >
                          <i
                            className="fa-solid fa-xmark"
                            style={{
                              color: "red",
                              fontSize: "21px",
                              cursor: "pointer",
                              position: "absolute",
                              top: "-8px",
                              right: "-5px",
                            }}
                          ></i>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div className="shrtatchps">
                  <div
                    className="attach_btn"
                    style={
                      {
                        // marginRight: "20px",
                        // display: "flex",
                        // alignItems: "center",
                      }
                    }
                  >
                    <div className="file_upload">
                      <div className="input_img" style={{ cursor: "pointer" }}>
                        <img src={InputImg} className="img-fluid" alt="icon" />
                      </div>
                      <input
                        id=""
                        type="file"
                        // value={image}
                        onChange={handleImageChange}
                        accept="image/*"
                        // multiple
                        style={{ cursor: "pointer" }}
                      />
                    </div>

                    <div className="attach">
                      <p style={{ cursor: "pointer" }}>
                        {!hide ? attach : "Attach"}
                      </p>
                    </div>

                    {/* <div>(360 x 190 px)</div> */}
                  </div>
                  <div
                    className="request_credits"
                    style={
                      {
                        // marginRight: "20px",
                        // display: "flex",
                        // alignItems: "center",
                      }
                    }
                  >
                    {/* <button className="btn">
                      <img src={CreditsIcon} className="img-fluid" alt="icon" />
                    </button> */}
                    <p style={{ cursor: "pointer" }}>{event}</p>
                  </div>
                  <div
                    className="Post_Card"
                    style={
                      {
                        // marginRight: "20px",
                        // display: "flex",
                        // alignItems: "center",
                      }
                    }
                  >
                    {/* <button className="btn">
                      <img
                        src={EliteCardicon}
                        className="img-fluid"
                        alt="icon"
                      />
                    </button>
                    <p style={{ cursor: "pointer" }}>
                      <span>{elite}</span>
                    </p> */}
                    {userData?.userType !== "Admin" ? (
                      <div className="share_public_checkbox">
                        <input
                          type="checkbox"
                          id="sharePublicly"
                          checked={sharePublicly}
                          onChange={handleCheckboxChange}
                        />
                        <label htmlFor="sharePublicly">
                          Share publicly (requires approval)
                        </label>
                      </div>
                    ) : (
                      <div className="rateSkillDiv">
                        <figure className="writeTestFig">
                          <img src={writeTest} alt="..." />
                        </figure>
                        <span className="writeTestText">
                          Write Testimonials
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* <div className="share_public_checkbox">
                  <input
                    type="checkbox"
                    id="sharePublicly"
                    checked={sharePublicly}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="sharePublicly">
                    Share publicly (requires approval)
                  </label>
                </div> */}

                <div style={{ cursor: "pointer" }} className="post_btn">
                  <div className="post_btn_main" onClick={(e) => handlePost(e)}>
                    Post
                  </div>
                </div>
              </div>
            </div>

            {/* dynamically photo add design */}
            {/* <div className="prt_img">
              <img src={connection4} alt="" />
              <div className="prt_overlay"></div>
              <div className="prt_img_edt">
                <Link to="/" className="edt_btnn_icon">
                  <i className="fa-solid fa-pen"></i>
                  Edit
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
