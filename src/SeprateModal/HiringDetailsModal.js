import React from 'react'

const HiringDetailsModal = ({closemodal,jobrefferedData}) => {
    console.log(jobrefferedData,"ppppp")
    return (
        <div className='viedetailsmain' onClick={() => closemodal()}>
            <div className='viewdetailscontent'>
                <div className='closemarkdst'><i class="fa-solid fa-xmark"></i></div>
                <div className=''>
                <div className="details">
                            <p>
                              Location: <span>{jobrefferedData.location}</span>
                            </p>
                            <p>
                              Salary: <span>{jobrefferedData.salary}</span>
                            </p>
                            <p>
                              Opening: <span>{jobrefferedData.opening}</span>
                            </p>
                            <p>
                              Description: <span>{jobrefferedData.description}</span>
                            </p>
                          </div>

                </div>
            </div>
        </div>
    )
}

export default HiringDetailsModal