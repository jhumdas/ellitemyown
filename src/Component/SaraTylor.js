import React, { useEffect, useMemo, useState } from "react";
import ProfileImg1 from "../Images/No-Image-Placeholder.png";
// import SilverIcon from "../Images/cryptocurrency_gold.png";
import SilverIcon from "../Images/Icons/PNG/Reward - Silver.png"
import { Link, useNavigate, useLocation } from "react-router-dom";
import InImg from "../Images/in-icon.png";
import Fancybox from "./FAncyBox";
import Gallery1 from "../Images/bigimg1.png";
import Gallery2 from "../Images/bigimg2.png";
// import likeIcon from "../Images/likeIcon.png";
import likeIcon from "../Images/Icons/PNG/Reaction - Like.png"
// import msgChat from "../Images/ph_chat-teardrop-dots-light.png"
import msgChat from "../Images/Icons/PNG/Comment.png"
// import table_icon from "../Images/table_icon.png"
import table_icon from "../Images/Icons/PNG/share-icon-elite-web.svg"
import { useDispatch, useSelector } from "react-redux";
import { addReaction, getAllPosts } from "../redux/slices/postSlice";
import { toast } from "react-hot-toast";
import { ApiHelperFunction, fileUpload } from "../services/api/apiHelpers";
import { useAuthCtx } from "../context/AuthCtx";
import CreateModal from "./Modal/CreateModal";
import { ThreeDots } from "react-loader-spinner";
// Constants
import { BASE_URL } from "../constants/config";
import comimg from "../Images/profile_img.png";
import { RWebShare } from "react-web-share";
import CommentModal from "../SeprateModal/CommentModal";
import EditPostModal from "../SeprateModal/EditPostModal";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmileFill } from "react-icons/bs";
import InputImg from "../Images/input_icon.png";
import empUserImg from "../Images/Icons/PNG/Profile (2).png"

import love from "../Images/Icons/PNG/Reaction - Love.png";
import support from "../Images/Icons/PNG/Reaction - Support.png";
import celebrate from "../Images/Icons/PNG/Reaction - Celebrate.png";
import curious from "../Images/Icons/PNG/Reation - Curious.png";
import insightful from "../Images/Icons/PNG/Reation - Insightful.png";
import like from "../Images/Icons/PNG/Reaction - Like.png"

export default function SaraTylor({
  userID,
  name,
  description,
  reaction,
  createdOn,
  postId,
  isUserReacted,
  optionShow,
  modalB,
  modalA,
  setModalA,
  setModalB,
  handleOptionClick,
  modalId,
  changeShow,
  setModalId,
  imagesArray,
  showComment,
  attach
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reactionMessage = useSelector((state) => state.postGetSlice.reaction);


  const [emojimodalll, setEmojimodalll] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const reactions = ["alike", "thumbsup", "care", "haha", "surprised", "sadface", "angry"];
  const [emojiHovered, setEmojiHovered] = useState(false);

  const [liked, setLiked] = useState(false);
  const { setLoading, userData } = useAuthCtx();
  const [commentView, setCommentView] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [modalC, setModalC] = useState(false);

  const [commentData, setCommentData] = useState([]);
  // const [modalA, setModalA] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const[showComment,setShowComment]=useState(false);
  const [commentIndex, setCommetIndex] = useState(3);
  const [postData, setPostData] = useState({});

  const [comment, setComment] = useState("");
  const [likeLoading, setLikeLoading] = useState(false);
  const [isEmoji, setIsEmoji] = useState(false);
  const [image, setImage] = useState("")
  const [uploading, setUploading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [hide, setHide] = useState(false);
  const [isImageEmoji, setIsImageEmoji] = useState(false)
  const location = useLocation();


  //add reaction
  // console.log("userDataemoji", userData);

  //for emojimodal closing functionality by clicking anywhere
  useEffect(() => {
    getComment();

    const closeEmojiModalll = (event) => {
      if (!event.target.closest('.emojimodalbg') && !event.target.closest('.reaction')) {
        setEmojimodalll(false);
      }
    };

    document.addEventListener('click', closeEmojiModalll);

    return () => {
      document.removeEventListener('click', closeEmojiModalll);
    };

  }, []);


  const AnotherProfile = async () => {
    if (userID == userData?._id) {
      navigate("/profile");
    } else {
      let response = await ApiHelperFunction({ urlPath: `/get-others-profile/${userID}`, method: "GET" })
      if (response && response?.status) {
        console.log("RESPONSE", response?.data?.data);
        let data = response?.data?.data;
        response && navigate("/Profile_rating", {
          state: {
            data
          }
        })
      } else {
        toast.error('Error to fetching another profile data')
      }
    }
  }

  const getComment = async () => {
    let data = {
      postID: postId,
    };



    let urlPath = "/view-comment";
    let res = await ApiHelperFunction({ urlPath, method: "POST", data });
    console.log("ResponseDATA", res?.data);
    if (res?.status) {
      setCommentData(res?.data?.data);
    } else {
      // toast.error(res?.data?.message || "Error Fetching User Details");
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    if (commentText === "" && imageURL === "") {
      return;
    }
    let urlPath = "/add-comment";
    let data = {
      postID: postId,
      comment: commentText,
      image: imageURL
    };

    console.log("imffggg")
    if (commentText || imageURL) {
      let res = await ApiHelperFunction({ urlPath, method: "POST", data });
      if (res?.status) {
        // toast.success("Comment added successfully");
        getComment();
        setCommentText("");
        setImageURL("");
      } else {
        toast.error(res?.data?.message || "Error Fetching User Details");
      }
    } else {
      toast.error("No Comment Added");
    }
  };

  //image
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

  //delete
  const handleDelete = async () => {
    const res = await ApiHelperFunction({
      urlPath: `/delete-post/${postId}`,
      method: "PUT",
    });
    if (res?.status) {
      toast.success("Traning event deleted successfully");

      dispatch(getAllPosts());
      setModalA(false);
    } else {
      toast.error(res?.message || "Something went wrong");
      console.log("ERROR CREATING USER3", res);
    }
  };

  //add reaction

  const handleReaction = async () => {
    setLikeLoading(true);

    const response = await ApiHelperFunction({
      urlPath: "/add-reaction",
      method: "POST",
      data: { postID: postId },
    });

    if (response.status === 200) {
      // toast.success(response?.data?.data?.message);
      dispatch(getAllPosts());
    } else {
      toast.error(response.error);
    }
    setTimeout(() => {
      setLikeLoading(false);
    }, 700);
  };
  //  console.log("images1230",selectedReaction)



  const handleReactionSelect = async (postId, reactionType) => {

    // setSelectedReaction(reactionType);

    const response = await ApiHelperFunction({
      urlPath: "/add-update-reaction",
      method: "POST",
      data: {
        postID: postId,
        reactionData: reactionType,
      },
    });

    if (response.status === 200) {
      dispatch(getAllPosts());
      // console.log("Reaction added/updated successfully!");
    } else {
      // console.log("Failed to add/update reaction");
    }
  };


  const handleemojiClick = () => {
    setEmojimodalll(!emojimodalll);

  }


  const reactionIconMemo = useMemo(() => {
    // console.log("imagesArraymemo",imagesArray?.reactionData?.find(item=>item?.firstName===userData?.firstName))
    return imagesArray?.reactionData?.find(item => item?.firstName === userData?.firstName)
  }, [imagesArray, userData])



  return (
    <>
      <section
        id="sara_tylor"
        // style={{ boxShadow: "1px 1px 5px rgba(0,0,0,0.5)" }}
        onClick={() => setShowModal(false)}
      >
        <div >
          <div className="top_area" style={{ position: "relative" }}>
            <div className="left">
              <div className="profile_img">
                {imagesArray?.userImage ? (
                  <img style={{ cursor: "pointer" }} onClick={AnotherProfile}
                    src={imagesArray?.userImage}
                    className="img-fluid"
                    alt="profile"
                  />
                ) : (
                  <img style={{ cursor: "pointer" }} onClick={AnotherProfile}
                    src={empUserImg}
                    className="img-fluid"
                    alt="profile"
                  />
                )}
              </div>
              <div className="details" onClick={() => navigate(`/singleimage?Singleid=${postId}`)} style={{ cursor: "pointer" }}>
                {/* <Link to="/Profile_rating"> */}
                <div className="name">
                  <h2 style={{ cursor: "pointer" }} onClick={AnotherProfile}>{name}</h2>
                  <span>
                    <img src={SilverIcon} className="img-fluid" alt="icon" />
                    Silver Batch Holder
                  </span>
                </div>
                {/* </Link> */}
                <div className="text">
                  <p>
                    <span>{imagesArray?.type + " "}, </span>
                    <span>Posted on {createdOn}</span>
                  </p>
                </div>
              </div>
            </div>
            {optionShow && (
              <div
                className="dot_btn"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowModal(!showModal);
                  setModalId(postId);
                }}

              >
                <a to="/" className="btn">
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </a>
                {changeShow && showModal && (
                  <div
                    style={{
                      position: "relative",
                      // overflow: "hidden",
                      backgroundColor: "#fff",
                      padding: "3px",
                      border: "none",
                      // top: "123px",
                      padding: "3px 8px",
                      marginLeft: "-27px",
                      borderRadius: "4px",
                      cursor: "pointer",

                      boxShadow: "0 0 0.1rem 0",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <i
                      style={{ marginRight: "7px", fontSize: "14px" }}
                      class="fas fa-edit"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalA(false);
                        setModalB(true);
                        setModalC(true);
                        setPostData(imagesArray);
                      }}
                    ></i>
                    <i
                      style={{
                        margin: "3px",
                        fontSize: "14px",
                        color: "red",
                      }}
                      class="fa fa-trash"
                      aria-hidden="true"
                      onClick={handleDelete}
                    ></i>
                  </div>
                )}
              </div>
            )}

            {/* <div className="right">
            <div className="add_advocacy">
              <Link to="/" className="btn">
                Add to Advocacy
              </Link>
            </div>
            <div className="in_btn">
              <Link to="/" className="btn">
                <img src={InImg} className="img-fluid" alt="in" />
              </Link>
            </div>
            <div className="dots_btn">
              <Link to="/" className="btn">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </Link>
            </div>
          </div> */}
          </div>

          {/* <div
            className="content"
            onClick={() => {

              navigate(`/singleimage?Singleid=${postId}`)
            }}
            style={{ cursor: "pointer" }}
          > */}
          <div
            className="content"
            onClick={() => {
              navigate(
                `/singleimage?Singleid=${postId}&showComment=${showComment}&imagesArray=${JSON.stringify(imagesArray)}`,
                { state: JSON.stringify({ imagesArray: imagesArray }) }
              );
            }}
            style={{ cursor: "pointer" }}
          >
            <p>{description}</p>
          </div>

          {/* <div className="content" onClick={() => navigate(`/singleimage`, {
            state: {
              Singleid: postId,
              setModalId: setModalId,
              showComment: showComment,
              modalA: modalA,
              setModalA: setModalA,
            }
          })} style={{ cursor: "pointer" }} >
          
            <p>{description}</p>
          </div> */}


          <div className="gallery_area">
            <Fancybox options={{ infinite: false }}>
              <p className="all_box">
                {imagesArray?.image.length > 0 &&
                  imagesArray?.image?.slice(0, 4)?.map((item, index) => {
                    return (
                      <button
                        data-fancybox="gallery"
                        data-src="https://lipsum.app/id/1/800x600"
                        className="button button--secondary"
                        style={{
                          width: `${imagesArray?.image?.length === 1 ? "100%" : ""
                            }`,
                          height: `${imagesArray?.image?.length === 1 ? "auto" : ""
                            }`,
                        }}
                      >
                        <div className="card-image">
                          <a
                            href={item}
                            data-fancybox="gallery"
                            data-caption="Caption Images 1"
                          >
                            <img
                              src={item}
                              className="img-fluid"
                              alt="Image Gallery"
                            />

                            {imagesArray?.image.length > 4 && index === 3 && (
                              <div className="moreimgOverlay">
                                <div className="count_img">
                                  <p>{imagesArray?.image.length - 4}+</p>
                                </div>
                              </div>
                            )}
                          </a>
                        </div>
                      </button>
                    );
                  })}
              </p>
            </Fancybox>
          </div>
        </div>


        <div className="like_comment_area" onClick={() => navigate(`/singleimage?Singleid=${postId}`)}>

          {/* Your component content */}

          {/* {reaction > 0 ? (
            <div className="left">
              <i className="fa-solid fa-thumbs-up"></i>
              <p>{reaction} People Reacted</p>
            </div>
          ) : null} */}

          {/* {
                            postData?.map((item) => {
                                return ( */}
          <div class="left">
            {/* <i class="fa-solid fa-thumbs-up"></i> */}
            {reactionIconMemo
              ?
              reactionIconMemo?.reactionData === "like" ? (<img src={like} alt="..." className="likeIconImgg" />) :

                reactionIconMemo?.reactionData === "love" ? (<img src={love} alt="..." className="likeIconImgg" />) :
                  reactionIconMemo?.reactionData === "support" ? (<img src={support} alt="..." className="likeIconImgg" />) :
                    reactionIconMemo?.reactionData === "celebrate" ? (<img src={celebrate} alt="..." className="likeIconImgg" />) :
                      reactionIconMemo?.reactionData === "curious" ? (<img src={curious} alt="..." className="likeIconImgg" />) :
                        reactionIconMemo?.reactionData === "insightful" ? (<img src={insightful} alt="..." className="likeIconImgg" />)
                          :
                          // selectedReaction === "angry" ? (<img src={angry} alt="..." className="likeIconImgg" />) :
                          (<img src={like} alt="..." className="likeIconImg" />)
              :
              (<img src={like} alt="..." className="likeIconImg" />)

            }


            <p>{imagesArray?.totalReaction} People Reacted</p>
          </div>
          {/* )

                            })
                        } */}




          {commentData?.length !== 0 && (
            <div className="right">
              <h6>
                <span>{commentData?.length} </span>
                People Commented
              </h6>
              <p>
                <span>1</span> Share
              </p>
            </div>
          )}
        </div>

        <div className="reaction_area">

          <button
            className="reaction"
            onClick={handleemojiClick}
          // onMouseLeave={() => setEmojimodal(false)}
          >

            {/* {
              selectedReaction === "like" ? (<img src={like} alt="..." className="likeIconImgg" />) :

                selectedReaction === "love" ? (<img src={love} alt="..." className="likeIconImgg" />) :
                  selectedReaction === "support" ? (<img src={support} alt="..." className="likeIconImgg" />) :
                    selectedReaction === "celebrate" ? (<img src={celebrate} alt="..." className="likeIconImgg" />) :
                      selectedReaction === "curious" ? (<img src={curious} alt="..." className="likeIconImgg" />) :
                        selectedReaction === "insightful" ? (<img src={insightful} alt="..." className="likeIconImgg" />) :
                          // selectedReaction === "angry" ? (<img src={angry} alt="..." className="likeIconImgg" />) :
                          (<img src={like} alt="..." className="likeIconImg" />)
            } */}

            {reactionIconMemo
              ?
              reactionIconMemo?.reactionData === "like" ? (<img src={like} alt="..." className="likeIconImgg" />) :

                reactionIconMemo?.reactionData === "love" ? (<img src={love} alt="..." className="likeIconImgg" />) :
                  reactionIconMemo?.reactionData === "support" ? (<img src={support} alt="..." className="likeIconImgg" />) :
                    reactionIconMemo?.reactionData === "celebrate" ? (<img src={celebrate} alt="..." className="likeIconImgg" />) :
                      reactionIconMemo?.reactionData === "curious" ? (<img src={curious} alt="..." className="likeIconImgg" />) :
                        reactionIconMemo?.reactionData === "insightful" ? (<img src={insightful} alt="..." className="likeIconImgg" />)
                          :
                          // selectedReaction === "angry" ? (<img src={angry} alt="..." className="likeIconImgg" />) :
                          (<img src={like} alt="..." className="likeIconImg" />)
              :
              (<img src={like} alt="..." className="likeIconImg" />)

            }

            <span style={{ color: "blue", marginLeft: "2px" }}>Reaction</span>


            {/* emoji modal */}
            {emojimodalll &&
              <div className='emojimodalbg'>
                <button className="reaction">
                  <img src={like} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(postId, "like")} />
                </button>
                <button className="reaction">
                  <img src={love} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(postId, "love")} />
                </button>
                <button className="reaction">
                  <img src={support} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(postId, "support")} />
                </button>
                <button className="reaction">
                  <img src={celebrate} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(postId, "celebrate")} />
                </button>
                <button className="reaction">
                  <img src={curious} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(postId, "curious")} />
                </button>
                <button className="reaction">
                  <img src={insightful} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(postId, "insightful")} />
                </button>
                {/* <button className="reaction">
                  <img src={angry} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(postId, "angry")} />
                </button> */}
              </div>
            }
          </button>




          <button
            className="comments"
            onClick={() => {
              setModalId(postId);
              setCommentView(!commentView);
            }}
          >
            <img src={msgChat} alt="..." className="chatIconImg" />
            <span>Comments</span>
          </button>
          <RWebShare
            data={{
              text: "Like humans, flamingos make friends for life",
              // url: "https://google.com",
              title: "Share Posts",
            }}
            sites={[
              "linkedin",
              "facebook",
              "twitter",
              "whatsapp",
              "mail",
              "copy",
            ]}
            // onClick={() => console.log("shared successfully!")}
            onClick={(platform) => {
              if (platform === "copy") {
                // Copy to clipboard logic
                const textToCopy = "Your custom text or post content here";
                navigator.clipboard.writeText(textToCopy).then(() => {
                  console.log("Text copied to clipboard:", textToCopy);
                  toast.success("Text copied to clipboard!");
                });
              } else {
                console.log("Shared successfully on", platform);
              }
            }}

          >
            <button className="share">

              <img src={table_icon} alt="..." className="shareIconImg" />
              <span>Share</span>
            </button>

          </RWebShare>
        </div>


        {/****comment show start*****/}
        {showComment && commentView && (
          <div className="commentshow_area">
            {commentData?.length > 0 ? (
              commentData?.slice(0, commentIndex)?.map((item, index) => {
                console.log("COMMDATA", item);
                return (
                  <div className="others_comment">
                    <div className="profile_pic">
                      {item?.userImage ? (
                        <img
                          src={item?.userImage}
                          className="img-fluid"
                          alt="profile"
                        />
                      ) : (
                        <img
                          src={ProfileImg1}
                          className="img-fluid"
                          alt="profile"
                        />
                      )}
                    </div>
                    <div className="man_details">
                      <div className="wrap_box">
                        <div className="name">
                          <h4>{item?.firstName + " " + item?.lastName}</h4>
                        </div>
                        {item?.image ? (
                          <img style={{ width: "200px", height: "200px" }}
                            src={item?.image}
                            className="img-fluid"
                            alt=""
                          />
                        ) : (
                          <></>
                        )}
                        {/* <img style={{ width: "60px", height: "60px" }}
                          src={item?.image}
                          className="img-fluid"
                          alt=""
                        /> */}
                        {/* <div className="text">{item?.imageURL}</div> */}
                        <div className="text">
                          <p>{item?.comment}</p>
                        </div>
                      </div>
                      {/* <div className="bottom">
                <div className="text">
                  <p>Reactions</p>
                </div>
                <div className="d-flex align-items-center mr-2">
                  <a href="/">
                    <img
                      src="" 
                      className="img-fluid"
                    />
                  </a>
                  <a href="/">
                    <img
                      src="" 
                      className="img-fluid"
                    />
                  </a>
                  <a href="/">
                    <img
                      src="" 
                      className="img-fluid"
                    />
                  </a>
                  <a href="/">
                    <img
                      src="" 
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div> */}
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No comments to show!</p>
            )}

            {commentData?.length > 3 && commentData?.length != commentIndex && (
              <div className="ShowMoreDialogue_btn">
                <butsetEmojimodalton
                  className="btn"
                  onClick={() => setCommetIndex(commentData?.length)}
                >
                  Show More Comments
                </butsetEmojimodalton>
              </div>
            )}

            {imageURL !== "" && (

              <div style={{
                display: "flex", position: "relative",
                bottom: "0", left: '0', paddingTop: "10px"
              }}>
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
                    setImage('')
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



            {/* <div style={{height:'100px',width:'100%'}}></div> */}
            <div className="mycomment_push">

              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id=""
                    aria-describedby="textHelp"
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />

                  <div className="inpCmntAttach">
                    <i class="fa-solid fa-paperclip"></i>
                    <input
                      type="file"
                      class="form-control"
                      id="hostedBy"
                      placeholder="Choose a photo"
                      value={image}
                      name="hostedBy"

                      onChange={handleImageChange}
                    />
                  </div>

                  {/* <div style={{}}> */}
                  {uploading ? <p style={{
                    position: 'absolute',
                    right: 0,
                    top: '-84%'
                  }}>image uploading......</p> : null}


                  {/* </div> */}

                  <BsEmojiSmileFill className="comment-emoji-icon" onClick={() => setIsEmoji(prev => !prev)} />
                  {isEmoji &&
                    <EmojiPicker onEmojiClick={(emojiObject) => setCommentText(prev => prev + emojiObject.emoji)} />
                  }
                  <button className="sendcommentbtn" onClick={handleComment}>
                    <i className="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {/****comment show End*****/}
      </section >

      {/* {modalA && (
        <CreateModal
          closemodal={setModalA}
          activity={"comment"}
          handleComment={handleComment}
          comment={comment}
          setComment={setComment}
          commentData={commentData}
        />
      )} */}
      {
        modalA && (
          <CommentModal
            closemodal={setModalA}
            activity={"comment"}
            handleComment={handleComment}
            comment={comment}
            setComment={setComment}
            commentData={commentData}
          />
        )
      }
      {/* {modalC && (
        <CreateModal
          closemodal={setModalC}
          activity={"editPost"}
          initialValues={postData}
        />
      )} */}

      {
        modalC && (
          <EditPostModal
            closemodal={setModalC}
            activity={"editPost"}
            initialValues={postData}
          />
        )
      }
    </>
  );
}
