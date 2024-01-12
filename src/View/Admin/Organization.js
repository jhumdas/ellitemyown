import React from 'react'
import Material from '../../Images/material-symbols_arrow-forward-ios.png';
import Material2 from '../../Images/material-symbols_arrow-nxt.png';
import Organigation from '../../Images/organigation-one.png';
import PhInfo from '../../Images/ph_info-thin.png';
import Organigation2 from '../../Images/organigation-one.png';
import PhInfo2 from '../../Images/ph_info-thin.png';
import Organigation3 from "../../Images/organigation-one.png";
import PhInfo3 from "../../Images/ph_info-thin.png";
import PhInfo4 from "../../Images/ph_info-thin.png";
import Organigation4 from "../../Images/organigation-one.png";
import Organigation5 from "../../Images/organigation-one.png";
import PhInfo5 from  "../../Images/ph_info-thin.png";


function Organization() {
    return (
        <>
            <section id="organigation">
                <div className="container-fluid">
                    <div className="organigation-top_wrap">
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="new-hire">
                                    <div className="lft-text">
                                        <h5>New Hire Queue</h5>
                                    </div>
                                    <div className="rgt-text">
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="onboarding">
                                    <div className="lft-text">
                                        <h5>Onboarding <br />
                                            Initiated</h5>
                                    </div>
                                    <div className="rgt-text">
                                        <p>6</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="onboarding-c">
                                    <div className="lft-text">
                                        <h5>Onboarding <br />
                                            Completed</h5>
                                    </div>
                                    <div className="rgt-text">
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="onboarding-over">
                                    <div className="lft-text">
                                        <h5>Over all Onboarding<br />
                                            Experience rating</h5>
                                    </div>
                                    <div className="rgt-text">
                                        <p>75%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="option">
                        <div className="row align-items-center ">
                            <div className="col-xl-6">
                                <div className="d-flex custom">
                                    <div className="option-center">
                                        <div className="join">
                                            <p>Joining In:<span>All</span></p>
                                        </div>
                                        <div className="status">
                                            <label htmlFor>Status: <span>All</span></label>
                                            <select id="#">
                                                <option value="#" />
                                            </select>
                                        </div>
                                    </div>
                                    <div className="joindate">
                                        <div className="status">
                                            <label htmlFor>Short by: <span>Joining Date </span></label>
                                            <select id="#">
                                                <option value="#" />
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="option-right_input">
                                            <input type="text" name id className="srch" placeholder="Search for New hires" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="right-nxt_option">
                                            <div className="text">
                                                <p> <span> 1</span> To <span> 6</span> off 6</p>
                                            </div>
                                            <div className="next-icon">
                                                <span><a href="#"> <img src={Material} alt="icon" className="img-fluid" /> </a></span>
                                                <span><a href="#"> <img src={Material2} alt="icon" className="img-fluid" /></a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ paddingLeft: '22px' }}><span className="round-shape" /></th>
                                    <th>
                                        <p> Full Name </p>
                                    </th>
                                    <th>
                                        <p> Hired Date </p>
                                    </th>
                                    <th>
                                        <p> Joining Date </p>
                                    </th>
                                    <th>
                                        <p> Onboarding stage </p>
                                    </th>
                                    <th>
                                        <p> Status </p>
                                    </th>
                                    <th>
                                        <p> Experience rating </p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ paddingLeft: '22px' }}><span className="round-shape" /></td>
                                    <td className="profile">
                                        <div className="t-profile">
                                            <div>
                                                <img src={Organigation} alt="img" className="img-fluid" />
                                            </div>
                                            <div className="pf-text">
                                                <p className="title">Anna Lee</p>
                                                <p className="sub-title">Developer</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="d-frmt">
                                        <p className="s-heding">12 Jan 2021</p>
                                        <p className="s-h_title">16 days ago</p>
                                    </td>
                                    <td className="d-frmt_next">
                                        <p className="s-heding"> <span><img src={PhInfo} alt="icon" className="img-fluid" style={{ width: '22px' }} /></span> 14 Jan 2021</p>
                                        <p className="s-h_title">5 days  since joinin...</p>
                                    </td>
                                    <td className="day"><p>30 Days</p></td>
                                    <td className="start">
                                        <p className="s-heding"> <span className="staer-shape" /> To start</p>
                                        <p className="s-h_title">Pending with Employee</p>
                                    </td>
                                    <td className="ratting">
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                    </td>
                                    <td />
                                    <td />
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td style={{ paddingLeft: '22px' }}><span className="round-shape" /></td>
                                    <td className="profile">
                                        <div className="t-profile">
                                            <div>
                                                <img src={Organigation2} alt="img" className="img-fluid" />
                                            </div>
                                            <div className="pf-text">
                                                <p className="title">Anna Lee</p>
                                                <p className="sub-title">Developer</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="d-frmt">
                                        <p className="s-heding">12 Jan 2021</p>
                                        <p className="s-h_title">16 days ago</p>
                                    </td>
                                    <td className="d-frmt_next">
                                        <p className="s-heding"> <span><img src={PhInfo2} alt="icon" className="img-fluid" style={{ width: '22px' }} /></span> 14 Jan 2021</p>
                                        <p className="s-h_title">5 days  since joinin...</p>
                                    </td>
                                    <td className="day"><p>30 Days</p></td>
                                    <td className="start">
                                        <p className="s-heding"> <span className="staer-shape" /> To start</p>
                                        <p className="s-h_title">Pending with Employee</p>
                                    </td>
                                    <td className="ratting">
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" style={{ color: '#CFCFCF' }} /></span>
                                    </td>
                                    <td />
                                    <td />
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td style={{ paddingLeft: '22px' }}><span className="round-shape" /></td>
                                    <td className="profile">
                                        <div className="t-profile">
                                            <div>
                                                <img src={Organigation3} alt="img" className="img-fluid" />
                                            </div>
                                            <div className="pf-text">
                                                <p className="title">Anna Lee</p>
                                                <p className="sub-title">Developer</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="d-frmt">
                                        <p className="s-heding">12 Jan 2021</p>
                                        <p className="s-h_title">16 days ago</p>
                                    </td>
                                    <td className="d-frmt_next">
                                        <p className="s-heding"> <span><img src={PhInfo3} alt="icon" className="img-fluid" style={{ width: '22px' }} /></span> 14 Jan 2021</p>
                                        <p className="s-h_title">5 days  since joinin...</p>
                                    </td>
                                    <td className="day"><p>30 Days</p></td>
                                    <td className="start">
                                        <p className="s-heding"> <span className="staer-shape" /> To start</p>
                                        <p className="s-h_title">Pending with Employee</p>
                                    </td>
                                    <td className="ratting">
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" style={{ color: '#CFCFCF' }} /></span>
                                    </td>
                                    <td />
                                    <td />
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td style={{ paddingLeft: '22px' }}><span className="round-shape" /></td>
                                    <td className="profile">
                                        <div className="t-profile">
                                            <div>
                                                <img src={Organigation4} alt="img" className="img-fluid" />
                                            </div>
                                            <div className="pf-text">
                                                <p className="title">Anna Lee</p>
                                                <p className="sub-title">Developer</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="d-frmt">
                                        <p className="s-heding">12 Jan 2021</p>
                                        <p className="s-h_title">16 days ago</p>
                                    </td>
                                    <td className="d-frmt_next">
                                        <p className="s-heding"> <span><img src={PhInfo4} alt="icon" className="img-fluid" style={{ width: '22px' }} /></span> 14 Jan 2021</p>
                                        <p className="s-h_title">5 days  since joinin...</p>
                                    </td>
                                    <td className="day"><p>30 Days</p></td>
                                    <td className="start">
                                        <p className="s-heding"> <span className="staer-shape" /> To start</p>
                                        <p className="s-h_title">Pending with Employee</p>
                                    </td>
                                    <td className="ratting">
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" style={{ color: '#CFCFCF' }} /></span>
                                        <span><i className="fa-solid fa-star" style={{ color: '#CFCFCF' }} /></span>
                                    </td>
                                    <td />
                                    <td />
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td style={{ paddingLeft: '22px' }}><span className="round-shape" /></td>
                                    <td className="profile">
                                        <div className="t-profile">
                                            <div>
                                                <img src={Organigation5} alt="img" className="img-fluid" />
                                            </div>
                                            <div className="pf-text">
                                                <p className="title">Anna Lee</p>
                                                <p className="sub-title">Developer</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="d-frmt">
                                        <p className="s-heding">12 Jan 2021</p>
                                        <p className="s-h_title">16 days ago</p>
                                    </td>
                                    <td className="d-frmt_next">
                                        <p className="s-heding"> <span><img src={PhInfo5} alt="icon" className="img-fluid" style={{ width: '22px' }} /></span> 14 Jan 2021</p>
                                        <p className="s-h_title">5 days  since joinin...</p>
                                    </td>
                                    <td className="day"><p>30 Days</p></td>
                                    <td className="start">
                                        <p className="s-heding"> <span className="staer-shape" /> To start</p>
                                        <p className="s-h_title">Pending with Employee</p>
                                    </td>
                                    <td className="ratting">
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" /></span>
                                        <span><i className="fa-solid fa-star" style={{ color: '#CFCFCF' }} /></span>
                                        <span><i className="fa-solid fa-star" style={{ color: '#CFCFCF' }} /></span>
                                    </td>
                                    <td />
                                    <td />
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Organization