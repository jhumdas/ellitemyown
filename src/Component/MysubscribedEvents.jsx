import React from 'react'
import { Link } from 'react-router-dom'
import eventimg1 from "../../src/Images/eventimg1.png";
import eventimg2 from "../../src/Images/eventimg2.png"
function MysubscribedEvents() {
  return (
    <section id='highlighted_events'>
    <div className='top'>
        <div className='head'>
            <h4>My Subscribed Events</h4>
        </div>
    </div>
    <div className='bottom'>
        <div className='card_area' style={{ marginBottom: "17px", background: "#EAEBFB" }}>
            <div className='event_img'>
                <img src={eventimg1} className="img-fluid" alt='event' />
            </div>
            <div className='event_details'>
                <div className='d-flex justify-content-between align-items-start' style={{ marginBottom: "9px" }}>
                    <div className='head'>
                        <h2>Cleaning Drive near Taj Mahal</h2>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='plus_btn'>
                            <button className='btn'><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <div className='dt' style={{position:"relative"}}>
                            <Link to="/" className='btn'><i className="fa-solid fa-ellipsis-vertical"></i></Link>
                        </div>
                    </div>
                </div>
                {/* <div className='hosted'>
                    <p>Hosted by company name</p>
                </div> */}

                <div className='d-flex justify-content-between'>
                    <div className='date'>
                        <p>Date: 16th Feb, 2022</p>
                    </div>
                    <div className='time'>
                        <p>Time: 5:30 PM</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='card_area' style={{ marginBottom: "17px", background: "#FDEFE9" }}>
            <div className='event_img'>
                <img src={eventimg2} className="img-fluid" alt='event' />
            </div>
            <div className='event_details'>
                <div className='d-flex justify-content-between align-items-start' style={{ marginBottom: "9px" }}>
                    <div className='head'>
                        <h2>Cyber Security Webinar</h2>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='plus_btn'>
                            <button className='btn'><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <div className='dt' style={{position:"relative"}}>
                            <Link to="/" className='btn'><i className="fa-solid fa-ellipsis-vertical"></i></Link>
                        </div>
                    </div>
                </div>
                <div className='hosted'>
                    <p>Hosted by company name</p>
                </div>

                <div className='d-flex justify-content-between'>
                    <div className='date'>
                        <p>Date: 16th Feb, 2022</p>
                    </div>
                    <div className='time'>
                        <p>Time: 5:30 PM</p>
                    </div>
                </div>

            </div>
        </div>
        <div className='card_area' style={{ background: "#FDEFE9" }}>
            <div className='event_img'>
                <img src={eventimg2} className="img-fluid" alt='event' />
            </div>
            <div className='event_details'>
                <div className='d-flex justify-content-between align-items-start' style={{ marginBottom: "9px" }}>
                    <div className='head'>
                        <h2>Driving Road Safety - online session with Traffic officer</h2>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className='plus_btn'>
                            <button className='btn'><i className="fa-solid fa-plus"></i></button>
                        </div>
                        <div className='dt' style={{position:"relative"}}>
                            <Link to="/" className='btn'><i className="fa-solid fa-ellipsis-vertical"></i></Link>
                        </div>
                    </div>
                </div>
                <div className='hosted'>
                    <p>Hosted by company name</p>
                </div>

                <div className='d-flex justify-content-between'>
                    <div className='date'>
                        <p>Date: 16th Feb, 2022</p>
                    </div>
                    <div className='time'>
                        <p>Time: 5:30 PM</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
  )
}

export default MysubscribedEvents
