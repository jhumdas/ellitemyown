import React, { useEffect, useState } from "react";
import ThoughtsImg from "../../Images/profile_img.png";
import connection4 from "../../Images/connection4.png";
import { Link, useNavigate } from "react-router-dom";
// import InputImg from "../../Images/input_icon.png";
import InputImg from "../../Images/Icons/PNG/Attach.png";
// import CreditsIcon from "../../Images/Credits.png";
import CreditsIcon from "../../Images/Icons/PNG/Event Create.png";
// import EliteCardicon from "../../Images/elitecardicon.png";
import EliteCardicon from "../../Images/Icons/PNG/Post card.png";
import { toast } from "react-hot-toast";
import { ApiHelperFunction, fileUpload } from "../../services/api/apiHelpers";
import { useAuthCtx } from "../../context/AuthCtx";
import { BASE_URL } from "../../constants/config";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, getAllPosts } from "../../redux/slices/postSlice";
import { useLocation } from "react-router-dom";
import Loader from "../loader/Loader";
import profileImg from "../../Images/Icons/PNG/Profile (2).png";
import { getAllAffinityPosts } from "../../redux/slices/affinityPostSlice";
import bi_calendarevent from "../../Images/bi_calendarevent.png";
import Ask_HR from "../../Images/Icons/PNG/Ask_HR.png"
import { BsEmojiSmileFill } from "react-icons/bs";
import EmojiPicker from "emoji-picker-react";
import Createnewpost from "../../Images/Icons/PNG/CreateNewPost.png"
import Post from "../../Images/Icons/PNG/Post.png"
export default function ThoughtModalHome({
  closemodal,
  text,
  attach,
  event,
  // elite,
  getAffinityPosts,
}) {
  const [image, setImage] = useState("");
  const [hide, setHide] = useState(false);
  const location = useLocation();
  const [uploading, setUploading] = useState(false);
  const [sharePublicly, setSharePublicly] = useState("publicly");
  const [shareAffinityGroup, setshareAffinityGroup] = useState(false);
  const [showAffinityDropdown, setShowAffinityDropdown] = useState(false);
  const [groupid, setGroupId] = useState("");
  const [grpData, setGrpData] = useState([]);
  const { setModalF } = useAuthCtx();
  const [isEmoji, setIsEmoji] = useState(false);
  const navigate = useNavigate();

  const getGroupData = async () => {
    const response = await ApiHelperFunction({
      urlPath: `/view-my-affinity-group`,
      method: "GET",
    });
    console.log("RESPONSEF", response?.data?.data);
    if (response && response.status) {
      setGrpData(response?.data?.data);
    } else {
      // toast.error(response.message);
    }
  };

  const closeEventModal = () => {
    setModalF(true);
    closemodal();
  };
  const handleset = (e) => {
    e.stopPropagation()
  }

  useEffect(() => {
    getGroupData();
  }, []);

  // console.log("sharePublicly", sharePublicly);

  // console.log(" attach" , attach);
  const [post, setPost] = useState({
    description: "",
    image: [],
    // affinityGroupId: "",
  });

  useEffect(() => {
    if (location?.pathname === "/advocacy") {
      setHide(true);
    }
  }, []);
  const { userData } = useAuthCtx();
  const dispatch = useDispatch();

  const handleImageChange = async (e) => {
    let images = Array.from(e.target.files);
    let imageArray = [];
    setUploading(true);
    for (let i = 0; i < images.length; i++) {
      const form = new FormData();
      form.append("image", images[i]);

      let res = await fileUpload("/image-upload", "POST", form);
      //   console.log("resimg", res);

      if (res?.status) {
        toast.success("Images uploaded successfully");
        console.log("Images uploaded successfully");
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

  const handleChange = (e) => {
    e.preventDefault();
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  // const handleCheckboxChange = (e) => {
  //   setSharePublicly(e.target.value);
  // };

  const handleCheckboxChange = (e) => {
    setSharePublicly(e.target.value);

    if (e.target.value === "affinity") {
      setShowAffinityDropdown(true);
    } else {
      setShowAffinityDropdown(false);
    }
  };

  // const handleAffinityCheckboxChange = (e) => {
  //   setshareAffinityGroup(e.target.checked);
  // };

  const handlePost = async (e) => {
    if (post.description === "" || post.image === "") {
      toast.error("Please enter description or image!");
      return;
    }

    let data = {
      description: post.description,
      image: post.image,
      postType: "public",
    };

    if (sharePublicly === "publicly") {
      setUploading(true);
      let response = await ApiHelperFunction({
        urlPath: "/user-add-post",
        method: "POST",
        data: data,
      });
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setPost({
          description: "",
          image: "",
        });
        setUploading(false);
        closemodal();
        dispatch(getAllPosts());
      } else {
        toast.error("Can't get data. Something went wrong");
        setUploading(false);
      }
    } else if (sharePublicly === "affinity") {
      // console.log("affinity api");

      let data2 = {
        description: post.description,
        image: post.image,
        affinityGroupId: groupid,
        postType: "private",
      };

      setUploading(true);
      let response = await ApiHelperFunction({
        urlPath: "/user-add-post",
        method: "POST",
        data: data2,
      });
      console.log(data2, "responseerty");

      if (response?.status === 200) {
        toast.success(response?.data?.message);
        setPost({
          description: "",
          image: "",
        });
        setUploading(false);
        closemodal();
        navigate(`/affinity/${groupid}`);
        getAffinityPosts();
        // dispatch(getAllPosts());
      } else {
        // console.log(response?.response?.data?.message, "responseerty");
        toast.error(response?.response?.data?.message);
        setUploading(false);
      }
    } else {
      return;
    }
  };

  console.log("aapost", post?.image);

  return (
    <>
      <div className="thought_moadal_main" onClick={() => closemodal()}>
        <div className="thought_moadal">
          {/* <div className="Create_overlay"></div> */}
          <div className="thought_modal_content" onClick={(e) => handleset(e)}>
            {/* <div className="close_icon" onClick={() => closemodal()}>
              <i
                class="fa-solid fa-xmark"
                style={{ color: "red", fontSize: "16px", cursor: "pointer" }}
              ></i>
            </div> */}
            <div className="thoghts_txt_top_btm">
              <div className="top">
                <div className="crtimg">
                  <img src={Createnewpost} alt="..." />
                </div>
                <p>Create New Post</p>
              </div>
              <div className="bottom">
                <div className="img_thght">
                  <div
                    className="profile_img"
                    style={{ borderRadius: "50%", overflow: "hidden" }}
                  >
                    {userData?.image === "image" ? (
                      // <img
                      //   src={userData?.image}
                      //   className="img-fluid"
                      //   alt="profile"
                      // />
                      <img src={profileImg} alt="..." />
                    ) : (
                      // <img
                      //   src={
                      //     BASE_URL +
                      //     "/" +
                      //     "uploads/imageUploads/530060.com-4811117"
                      //   }
                      //   className="img-fluid"
                      //   alt="profile"
                      // />

                      <img
                        src={userData?.image}
                        className="img-fluid"
                        alt="profile"
                      />
                    )}
                  </div>
                  {/* <div className="prfl_mnm">
                    <p>{`${userData?.firstName} ${userData?.lastName}`}</p>
                  </div> */}
                </div>


                <div className="dbdyptrtddiv">
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
                      value={setPost?.description}
                      rows="4"
                      cols="50"
                      className="txtar"
                      placeholder={!hide ? text : "Testimonials"}
                      onChange={(e) => handleChange(e)}
                    ></textarea>



                    {/* <BsEmojiSmileFill
                    className="comment-emoji-icon"
                    onClick={() => setIsEmoji((prev) => !prev)}
                  />
                  {isEmoji && (
                    <EmojiPicker
                      onEmojiClick={(emojiObject) => {
                        const emoji = emojiObject.emoji;
                        setPost((prev) => ({
                          ...prev,
                          description: prev.description + emoji,
                        }));
                      }}
                    />
                  )} */}
                  </form>
                </div>
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
                    {post?.image &&
                      post?.image?.map((item, index) => {
                        return (
                          <div className="prt_img" key={index}>
                            <img src={item} alt="" />

                            <div className="close_icon_img">
                              <i
                                class="fa-solid fa-xmark"
                                style={{
                                  color: "red",
                                  fontSize: "24px",
                                  cursor: "pointer",
                                }}
                                onClick={() => removeImage(index)}
                              ></i>
                            </div>
                          </div>
                        );
                      })}
                    {/* <img
                    src={
                      "https://elites3bkt.s3.ap-south-1.amazonaws.com/image/5a0411b0-6cc4-11ee-b3d0-41cd9c11a0d4.jpeg"
                    }
                    alt="upload image"
                  /> */}

                    {/* <div className="prt_img">
                    <img src={connection4} alt="" />
                    <div className="close_icon_img">
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
                  <div className="prt_img">
                    <img src={connection4} alt="" />
                    <div className="close_icon_img">
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
                  <div className="prt_img">
                    <img src={connection4} alt="" />
                    <div className="close_icon_img">
                      <i
                        class="fa-solid fa-xmark"
                        style={{
                          color: "red",
                          fontSize: "24px",
                          cursor: "pointer",
                        }}
                      ></i>
                    </div>
                  </div> */}
                  </div>
                )}

                <div className="shrtatchps">
                  <div className="">
                    {/* share anf affinity group end */}
                    <div
                      className="share_public_checkbox"
                      style={{ marginTop: "15px" }}
                    >
                      <input
                        type="radio"
                        id="sharePublicly"
                        name="sharePublicly"
                        value="publicly"
                        checked={sharePublicly === "publicly" ? true : false}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="sharePublicly" style={{ paddingLeft: "5px" }}>
                        Share publicly
                      </label>

                      <input
                        type="radio"
                        id="sharePublicly"
                        name="sharePublicly"
                        value="affinity"
                        checked={sharePublicly === "affinity" ? true : false}
                        onChange={handleCheckboxChange}
                        style={{ marginLeft: "10px" }}
                      />
                      <label htmlFor="sharePublicly" style={{ paddingLeft: "5px" }}>
                        Share Affinity Group
                      </label>

                      {showAffinityDropdown && (
                        // <div className="affinityDropdown">
                        //   Share Affinity Group Dropdown
                        // </div>

                        <div className="emplListDiv">
                          <p className="empListSubHead">Groups Name</p>
                          <select
                            class="empListSelect"
                            aria-label="Select Employee name"
                            name="groupid"
                            value={groupid}
                            // onBlur={handleBlur}
                            onChange={(e) => setGroupId(e.target.value)}
                          >
                            <option value={""} disabled>
                              Select Group
                            </option>
                            {grpData?.map((item, i) => (
                              <option key={i} value={item?._id}>
                                {item?.groupName}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    </div>
                    {/*share anf affinity group end  */}
                  </div>
                  <div className="attachpostflxdiv">
                    <div className="bsimgicon" >
                      <BsEmojiSmileFill
                        className=""
                        onClick={() => setIsEmoji((prev) => !prev)}
                      />
                      {isEmoji && (
                        <EmojiPicker
                          onEmojiClick={(emojiObject) => {
                            const emoji = emojiObject.emoji;
                            setPost((prev) => ({
                              ...prev,
                              description: prev.description + emoji,
                            }));
                          }}
                        />
                      )}
                    </div>
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
                          value={image}
                          onChange={handleImageChange}
                          accept="image/*"
                          multiple
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <div className="attach">
                        <p style={{ cursor: "pointer" }}>
                          {!hide ? attach : "Attach"}
                        </p>
                      </div>
                    </div>
                    <div className="postimgicon" style={{ cursor: "pointer" }} onClick={(e) => handlePost(e)}>
                      <div className="pstimg">
                        <img src={Post} alt="..." />
                      </div>
                      <div className="">
                        <p>Post</p>
                      </div>
                    </div>
                  </div>
                  {/* {userData?.userType === "Admin" || userData?.userType === "Manager" ? (
                    <div
                      className="request_credits"
                      
                    >
                      <button className="btn" onClick={closeEventModal}>
                        <img
                          src={CreditsIcon}
                          className="img-fluid"
                          alt="icon"
                        />
                      </button>
                      <p style={{ cursor: "pointer" }}>{event}</p>
                    </div>
                  ) : (
                    <div className="ask_hr">
                     
                      <div className="askhdpphr">
                        <img
                          className="img-fluid"
                          src={Ask_HR}
                          alt="icon"
                        />
                      </div>

                    
                  <p style={{
                    cursor: "pointer", fontSize: "13px",
                    fontWeight: "600",
                    lineheight: "18px",
                    color: "#000",
                  }}>ASK HR</p>
                </div>
                  )} */}


                  {/* <div
                    className="request_credits"
                    style={
                      {
                        // marginRight: "20px",
                        // display: "flex",
                        // alignItems: "center",
                      }
                    }
                  >
               
                    <button className="btn" onClick={closeEventModal}>
                      <img src={CreditsIcon} className="img-fluid" alt="icon" />
                    </button>
                    <p style={{ cursor: "pointer" }}>{event}</p>
                  </div> */}
                  {/* <div
                    className="Post_Card"
                   
                  >
                    <button className="btn">
                      <img
                        src={EliteCardicon}
                        className="img-fluid"
                        alt="icon"
                      />
                    </button>
                    <p style={{ cursor: "pointer" }}>
                      <span>{elite}</span>
                    </p>
                  </div> */}
                </div>

                {/* <BsEmojiSmileFill className="comment-emoji-icon" onClick={() => setIsEmoji(prev => !prev)} />
                {isEmoji &&
                  <EmojiPicker onEmojiClick={(emojiObject) => setPost(prev => prev + emojiObject.emoji)} />
                } */}
                {/* <div style={{ cursor: "pointer" }} className="post_btn">
                  <div className="post_btn_main" onClick={(e) => handlePost(e)}>
                    Post
                  </div>
                </div> */}
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
      </div >
    </>
  );
}
