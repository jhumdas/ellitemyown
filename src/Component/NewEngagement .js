import React from 'react'

function NewEngagement() {
    return (
        <>
            <section id='new_engagement'>
                <div className='top'>
                    <div className='head'>
                        <h4>New Engagement </h4>
                    </div>
                    <div className="form-group add_btn m-0">
                        <select className="form-control" id="">
                            <option selected>Add</option>
                            <option>demo</option>
                            <option>demo</option>
                            <option>demo</option>
                            <option>demo</option>
                        </select>
                    </div>
                </div>

                <div className='add_location'>
                    <button className='btn'>
                        <i className="fa-solid fa-location-crosshairs"></i>
                        <span>Add location</span>
                    </button>
                </div>

                <div className='wednesday'>
                    <h6>Wednesday 2:45 to 4:45 PM</h6>
                </div>

                <div className='add_invites'>
                    <button className='btn'>Add Invites</button>
                </div>

                <div className='add_notes'>
                    <div className='head'>
                        <h4>Add Notes</h4>
                    </div>

                    <div className="form-group">
                        <textarea className="form-control" id="" rows={3} defaultValue={""} />
                    </div>
                </div>


            </section>
        </>
    )
}

export default NewEngagement 