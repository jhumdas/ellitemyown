import React, { useEffect, useMemo, useState } from 'react'
import BulletinBoard from '../../Component/BulletinBoard'
import HallofFame from '../../Component/HallofFame'
import Employees from '../../Component/Employees'
import EventCard from '../../Component/EventCard'
import JobsReferred from '../../Component/JobsReferred'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import GoalAchiver from '../../Component/GoalAchiver'
import TrainingCard from '../../Component/TrainingCard'
import Initiative from '../../Component/Initiative'
import HubAffinityGrp from '../Hub/HubAffinityGrp'
import goldIcon from "../../Images/Icons/PNG/Reward - Gold.png";
import { ApiHelperFunction, fileUpload } from '../../services/api/apiHelpers';
import eliteExp from "../../Images/Icons/PNG/Elite employee experience logo.png";
import ShareThoughts from '../../Component/ShareThoughts'
import SaraTylor from '../../Component/SaraTylor'
import { useNavigate, useParams } from 'react-router-dom'
import mngry from "../../Images/mngry.jpeg";
import RewardSilve from "../../Images/RewardSilver.png";
import Fancybox from "../../Component/FAncyBox";
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { ThreeDots } from 'react-loader-spinner';
import like from "../../Images/Icons/PNG/Reaction - Like.png"
import Comment from "../../Images/Icons/PNG/Comment.png";
import Share from "../../Images/Icons/PNG/Share.png";
import love from "../../Images/Icons/PNG/Reaction - Love.png";
import support from "../../Images/Icons/PNG/Reaction - Support.png";
import celebrate from "../../Images/Icons/PNG/Reaction - Celebrate.png";
import curious from "../../Images/Icons/PNG/Reation - Curious.png";
import insightful from "../../Images/Icons/PNG/Reation - Insightful.png";
import { useAuthCtx } from '../../context/AuthCtx'
import moment from 'moment'
import { getAllPosts } from '../../redux/slices/postSlice'
import toast from 'react-hot-toast'
import { RWebShare } from 'react-web-share'
import CommentModal from '../../SeprateModal/CommentModal'
import msgChat from "../../Images/Icons/PNG/Comment.png"
import table_icon from "../../Images/Icons/PNG/share-icon-elite-web.svg"
import ProfileImg1 from "../../Images/No-Image-Placeholder.png";
import { BsEmojiSmileFill } from 'react-icons/bs'
import EmojiPicker from 'emoji-picker-react'


const SingleImage = () => {
    const { userData } = useAuthCtx();

    const [goldCard, setGoldCard] = useState([]);
    const [loading, setLoading] = useState(false);
    const [postData, setPostData] = useState([]);
    const [emojimodal, setEmojimodal] = useState(false);
    const params = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const SingleimageId = queryParams.get("Singleid");
    const imagesArray = JSON.parse(queryParams.get('imagesArray'));
    const [selectedReaction, setSelectedReaction] = useState(null);
    const reactions = ["alike", "thumbsup", "care", "haha", "surprised", "sadface", "angry"];
    const [emojiHovered, setEmojiHovered] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [comment, setComment] = useState("");
    const [likeLoading, setLikeLoading] = useState(false);
    const [isEmoji, setIsEmoji] = useState(false);
    const [image, setImage] = useState("")
    const [uploading, setUploading] = useState(false);
    const [imageURL, setImageURL] = useState("");
    const [commentView, setCommentView] = useState(false);
    const [commentText, setCommentText] = useState("");

    const [commentData, setCommentData] = useState([]);
    // const [modalA, setModalA] = useState(false);
    const [showModal, setShowModal] = useState(false);
    // const[showComment,setShowComment]=useState(false);
    const [commentIndex, setCommetIndex] = useState(3);

    const showComment = queryParams.get('showComment');


    console.log("uuuu", selectedReaction)

    const getComment = async () => {
        let data = {
            postID: SingleimageId,
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
            postID: SingleimageId,
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

    const handleEmojiMouseEnter = () => {
        setEmojiHovered(true);
    };

    const handleEmojiMouseLeave = () => {
        setEmojiHovered(false);
    };

    const postDataReducer = useSelector((state) => state.postGetSlice);
    let filterData = postDataReducer?.posts.filter((item) => {
        // console.log("ddd", item._id, SingleimageId)
        return item._id === SingleimageId
    });

    useEffect(() => {
        const closeEmojiModal = (event) => {
            if (!event.target.closest('.emojimodalbg') && !event.target.closest('.reaction')) {
                setEmojimodal(false);
            }
        };

        document.addEventListener('click', closeEmojiModal);

        return () => {
            document.removeEventListener('click', closeEmojiModal);
        };
    }, []);


    useEffect(() => {
        if (SingleimageId) {
            setPostData(filterData)
        }
        // console.log("filterDataUseeff",filterData,postData)
    }, [filterData]);

    // console.log("postData", postData,filterData)

    //for gold card
    const getGoldCard = async () => {
        setLoading(true);

        const response = await ApiHelperFunction({
            urlPath: "/get-profile",
            method: "GET",
        });


        if (response.status === 200) {
            setGoldCard(response?.data?.data);
            // console.log("data get successfully");
        } else {
            // toast.error(response.message);
        }
        setLoading(false);
    };

    //for affinity group posts
    const getAffinityPosts = async () => {
        const data = {
            affinityGroupId: params?.id,
            postType: "private",
        };
        setLoading(true);
        const response = await ApiHelperFunction({
            urlPath: "/view-all-post",
            method: "POST",
            data,
        });
        if (response.status === 200) {
            // toast.success(response?.data?.data?.message);
            // console.log(response?.data, "response?.data");
            setPostData(response?.data?.data);
        } else {
            // toast.error(response?.message);
        }
        setLoading(false);
    };


    // const handleReactionSelect = async (index) => {
    //     const reactionType = reactions[index];
    //     setSelectedReaction(index);

    //     const response = await ApiHelperFunction({
    //         urlPath: "/add-update-reaction",
    //         method: "POST",
    //         data: {
    //             postID: SingleimageId,
    //             reactionData: reactionType,
    //         },
    //     });

    //     if (response.status === 200) {
    //         // Handle success
    //         console.log("Reaction added/updated successfully!");
    //     } else {
    //         // Handle error
    //         console.error("Failed to add/update reaction");
    //     }
    // };

    const handleReactionSelect = async (SingleimageId, reactionType) => {
        // setSelectedReaction(reactionType);

        const response = await ApiHelperFunction({
            urlPath: "/add-update-reaction",
            method: "POST",
            data: {
                postID: SingleimageId,
                reactionData: reactionType,
            },
        });

        if (response.status === 200) {
            dispatch(getAllPosts());
            // console.log("Reaction added/updated successfully!");
        } else {
            // console.error("Failed to add/update reaction");
        }
    };

    useEffect(() => {
        getAffinityPosts();
        // dispatch(getAllPosts());
        // dispatch(getAllAffinityPosts());
    }, [params?.id]);


    useEffect(() => {
        getGoldCard();
        getComment()
    }, [])

    const handleemojiClick = () => {
        setEmojimodal(!emojimodal)
    }

    const reactionIconMemo = useMemo(() => {
        // console.log("imagesArraymemo",imagesArray?.reactionData?.find(item=>item?.firstName===userData?.firstName))
        return imagesArray?.reactionData?.find(item => item?.firstName === userData?.firstName)
    }, [])

    // const reactionIconMemo = useMemo(() => {
    //     // console.log("imagesArraymemo",imagesArray?.reactionData?.find(item=>item?.firstName===userData?.firstName))
    //     return postData?.map((item) => {
    //         <>{item?.reactionData?.find(item => item?.firstName === userData?.firstName)}</>
    //     })
    //     // return item?.reactionData?.find(item => item?.firstName === userData?.firstName)
    //     //   }, [postData, userData])

    // }, [postData, userData])

    return (
        <>
            <div className="thought_area_mxh-left">
                <BulletinBoard />
                <HallofFame />
                <Employees />
                <EventCard />
                <JobsReferred />
            </div>
            <div className='thought_area_mxh-mid'>
                {/* <ShareThoughts getAffinityPosts={getAffinityPosts} /> */}
                <section id='sara_tylor'>
                    {
                        postData?.map((item) => {
                            return (
                                <>
                                    <div className='top_area'>
                                        <div className='left'>
                                            <div className='profile_img'>
                                                <img src={item?.userImage} alt="..." />
                                                {/* <img src={userData?.image} alt="..." /> */}
                                            </div>

                                            <div className='details'>
                                                <div className='name' >
                                                    <h2 >{item?.firstName} {item?.lastName}</h2>
                                                    {/* <h2 >Manager Roy</h2> */}
                                                    <span>
                                                        <img src={RewardSilve} class="img-fluid" alt="icon" />
                                                        Silver Batch Holder
                                                    </span>
                                                </div>
                                                <div className="text">
                                                    <p>
                                                        <span>{item?.userType} </span>
                                                        {/* <div> */}
                                                        <span>Posted on {moment(item?.createdOn).format('YYYY - MM - DD')}</span>
                                                        {/* </div> */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="content">
                                        <p>{item?.description}
                                        </p>
                                    </div>
                                </>
                            )
                        })
                    }
                    {/* <div className="content">
                        <p>WE ARE HIRING
                            REFER YOUR FRIENDS
                        </p>
                    </div> */}
                    <div className="gallery_area">
                        {postData?.map((item) => {
                            // console.log("item", item?.image)
                            return (
                                <Fancybox options={{ infinite: false }}>
                                    <p className="all_box">
                                        {item?.image?.length > 0 &&
                                            item?.image?.slice(0, 4)?.map((item, index) => {
                                                return (
                                                    <button
                                                        data-fancybox="gallery"
                                                        data-src="https://lipsum.app/id/1/800x600"
                                                        className="button button--secondary"
                                                        style={{
                                                            width: `${item?.image?.length === 1 ? "" : "100%"
                                                                }`,
                                                            height: `${item?.image?.length === 1 ? "" : "auto"
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
                                                                    alt=""
                                                                />

                                                                {item?.image?.length > 4 && index === 3 && (
                                                                    <div className="moreimgOverlay">
                                                                        <div className="count_img">
                                                                            <p>{item?.image?.length - 4}+</p>
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
                            )
                        })}

                    </div>

                    <div className='like_comment_area'>
                        {
                            postData?.map((item) => {
                                return (
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
                                )

                            })
                        }
                        {/* <div class="left">
                            <i class="fa-solid fa-thumbs-up"></i>
                            <p>1 People Reacted</p>
                        </div> */}

                        {
                            commentData?.length !== 0 && (
                                <div className="right">
                                    <h6>
                                        <span>{commentData?.length} </span>
                                        People Commented
                                    </h6>
                                    <p>
                                        <span>1</span> Share
                                    </p>
                                </div>
                            )
                        }
                    </div>
                    <div className='reaction_area'>
                        <button
                            className="reaction"
                            onClick={handleemojiClick}
                        // onMouseLeave={() => setEmojimodal(false)}
                        >
                            {/* <img src={alike} alt="..." className="likeIconImg" /> */}
                            {/* <span style={{ color: "blue" }}>Reaction</span> */}
                            {/* <img src={selectedReaction ? reactions[selectedReaction] : alike} alt="..." className="likeIconImg" /> */}
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
                            <span style={{ color: "blue" }}>Reaction</span>
                            {emojimodal &&
                                <div className='emojimodalbg'>
                                    <button className="reaction">
                                        <img src={like} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "like")} />
                                    </button>
                                    <button className="reaction">
                                        <img src={love} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "love")} />
                                    </button>
                                    <button className="reaction">
                                        <img src={support} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "support")} />
                                    </button>
                                    <button className="reaction">
                                        <img src={celebrate} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "celebrate")} />
                                    </button>
                                    <button className="reaction">
                                        <img src={curious} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "curious")} />
                                    </button>
                                    <button className="reaction">
                                        <img src={insightful} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "insightful")} />
                                    </button>
                                    {/* <button className="reaction">
                                        <img src={angry} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "angry")} />
                                    </button> */}
                                </div>
                            }
                        </button>
                        {/* {emojimodal &&
                            <div className='emojimodalbg'>
                                <button className="reaction">
                                    <img src={alike} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "alike")} />
                                </button>
                                <button className="reaction">
                                    <img src={thumbsup} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "thumbsup")} />
                                </button>
                                <button className="reaction">
                                    <img src={care} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "care")} />
                                </button>
                                <button className="reaction">
                                    <img src={haha} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "haha")} />
                                </button>
                                <button className="reaction">
                                    <img src={surprised} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "surprised")} />
                                </button>
                                <button className="reaction">
                                    <img src={sadface} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "sadface")} />
                                </button>
                                <button className="reaction">
                                    <img src={angry} alt="..." className="likeIconImgg" onClick={() => handleReactionSelect(SingleimageId, "angry")} />
                                </button>
                            </div>
                        } */}


                        {/* <button className="comments">
                            <img src={Comment} alt="..." className="chatIconImg" />
                            <span style={{ color: "blue" }} >Comments</span>
                        </button>
                        <button className="share">
                            <img src={Share} alt="..." className="shareIconImg" />
                            <span style={{ color: "blue" }}>Share</span>
                        </button> */}

                        <button
                            className="comments"
                            onClick={() => {
                                // setModalId(SingleimageId);
                                setCommentView(!commentView);
                            }}
                        >
                            <img src={msgChat} alt="..." className="chatIconImg" />
                            <span>Comments</span>
                        </button>
                        <RWebShare
                            data={{
                                text: "Like humans, flamingos make friends for life",
                                url: "https://google.com",
                                title: "Share Posts",
                            }}
                            onClick={() => console.log("shared successfully!")}
                        >
                            <button className="share">

                                <img src={table_icon} alt="..." className="shareIconImg" />
                                <span>Share</span>
                            </button>

                        </RWebShare>
                    </div>


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

                </section >
            </div >

            {/* {
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
            } */}

            <div className="thought_area_mxh_right">
                <div className="eliteFigDiv" style={{ marginBottom: "1rem" }}>
                    {/* <figure className="eliteFig">
            <img src={eliteCard} alt="..." />
          </figure>
          <span className="goldCardText">GOLD CLUB</span> */}
                    <div className="goldClubDiv">
                        <div className="goldInnerDiv">
                            <div>
                                <p className="eliteSubHead">Status</p>
                                <p className="goldClHead">Gold</p>
                            </div>
                            <figure className="goldIconFig">
                                <img src={eliteExp} alt="..." />
                            </figure>
                        </div>
                        <div className="cardNameDiv">
                            <div>
                                <p className="cardNumbText">{goldCard?.goldClubNo}</p>
                                <p className="sanjNameText">
                                    {goldCard?.firstName} {goldCard?.lastName}
                                </p>
                            </div>
                            {/* <p className="goldSmClub">Gold Club</p> */}
                            <figure className="goldIcoFigDiv">
                                <img src={goldIcon} alt="..." />
                            </figure>
                        </div>
                    </div>
                </div>
                <div className="iniSusTabDiv">
                    <Tabs>
                        <TabList>
                            <Tab>Initiative</Tab>
                            <Tab>Sustainable</Tab>
                        </TabList>

                        <TabPanel>
                            <Initiative />
                        </TabPanel>
                        <TabPanel>
                            <GoalAchiver />
                        </TabPanel>
                    </Tabs>
                </div>
                <TrainingCard />
                <div className="myAffitiDiv">
                    <HubAffinityGrp />
                </div>
            </div>
        </>
    )
}

export default SingleImage