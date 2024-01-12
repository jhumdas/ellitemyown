import React from 'react'
import ion_flag from "../../src/Images/ion_flag.png";
import engageEvntIcon from "../Images/Icons/PNG/Engagement.png"

function EngagementeventCard() {
  return (
    <div id="engagementevent_card">
    <div className="card_top">
        <h4>Engagement<br />and Events</h4>
        <div className="circle">
            <figure className='engageEvFig'>
                <img src={engageEvntIcon} alt="..." />
            </figure>
        </div>
    </div>
    {/* <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: '50%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
    </div>
    <h6>Progress</h6>
    <div className="card_bottom">
        <span className="flag_icon">
            <img className="img-fluid" src={ion_flag} alt="pic" />
            </span>
        <h6>Pending Action</h6>
    </div> */}
</div>
  )
}

export default EngagementeventCard
