import React from 'react'
import profilePic from "../../Images/profile_img1.png";
import { ImageOutlined } from '@mui/icons-material';
import profileD from "../../Images/profile_img1.png";
import aaa from "../../Images/ask_hr.png";
import bbb from "../../Images/elitecardicon.png";
import ccc from "../../Images/write_icon.png";

function Profileactivity() {
    return (
        <>
            <section className='Profileactivity_sec'>
                <div className='profilebox'>
                    <div className='profilepic'>
                        <img src={profilePic} className='img-fluid' alt='profile'></img>
                    </div>
                    <h4 className='name'>Mark Anderson</h4>
                    <h5 className='post'>Junior Designer</h5>
                    {/* <p className='employe'>Employee Id: 1234</p> */}
                </div>
                <div className='profilepost_card'>
                    <div className='top_area'>
                        <div className='profile'>
                            <img src={profileD} className='img-fluid' alt='' />
                        </div>

                        <div className="form-group typing">
                            <input
                                type="text"
                                className="form-control"
                                id=""
                                aria-describedby="textHelp"
                                placeholder="Ask for help... let’s have great experience"
                            />
                        </div>

                    </div>

                    <div className="bottom_area">
                        <div className="attach_btn" style={{ marginRight: 20 }}>
                            <div className="file_upload">
                                <div className="input_img">
                                    <img
                                        src={aaa}
                                        className="img-fluid"
                                        alt="icon"
                                    />
                                </div>
                                <input id="" type="file" accept="" multiple="" />
                            </div>
                            <div className="attach">
                                <p>Attach</p>
                            </div>
                        </div>
                        <div className="request_credits" style={{ marginRight: 20 }}>
                            <button className="btn">
                                <img
                                    src={bbb}
                                    className="img-fluid"
                                    alt="icon"
                                />
                                <span>Event</span>
                            </button>
                        </div>
                        <div className="Post_Card">
                            <button className="btn">
                                <img
                                    src={ccc}
                                    className="img-fluid"
                                    alt="icon"
                                />
                            </button>
                            <p>
                                <span>élite</span>Post Card
                            </p>
                        </div>
                        <div className="post_btn">
                            <button className="btn">Post</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Profileactivity