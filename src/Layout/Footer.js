import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Homeicon from "../Images/homeicon.png";
import Employeeicon from "../Images/clarity_employee-line.png";
import Taskicon from "../Images/octicon_project-24.png";
import Messagingicon from "../Images/ph_chat-teardrop-dots-light.png";
import homeActiveIcon from "../Images/homeActiveIcon.png";
import notificationActiveIcon from "../Images/notificationActiveIcon.png";
import performanceActiveIcon from "../Images/performanceActiveIcon.png";
import chatActiveIcon from "../Images/chatActiveIcon.png";
import employeeActiveIcon from "../Images/employeeActiveIcon.png";
import Notificationicon from "../Images/notification.png";
import "../Layout/footer.css"
export default function Footer() {
  return (
    <section className='ftr_section_main'>
      <div className="container-fluid">
        <div className='lstnv_mn'>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <div className="icon">
                  <img
                    src={Homeicon}
                    className="img-fluid normalHeadIcon"
                    alt="icon"
                  />
                  <img
                    src={homeActiveIcon}
                    className="img-fluid activeHeadIcon"
                    alt="icon"
                  />
                </div>
                <div className="name">Home</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/employees">
                <div className="icon">
                  <img
                    src={Employeeicon}
                    className="img-fluid normalHeadIcon"
                    alt="icon"
                  />
                  <img
                    src={employeeActiveIcon}
                    className="img-fluid activeHeadIcon"
                    alt="icon"
                  />
                </div>
                <div className="name">Employee</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/hubpage">
                <div className="icon">
                  <i class="fa-brands fa-hubspot"></i>
                </div>
                <div className="name">Hub</div>
              </NavLink>
            </li>
            {/* <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        <div className='icon'><img src={Taskicon} className="img-fluid" alt='icon' /></div>
                                        <div className='name'>Task Projects</div>
                                    </Link>
                                </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/engagement">
                <div className="icon">
                  <img
                    src={Taskicon}
                    className="img-fluid normalHeadIcon"
                    alt="icon"
                  />
                  <img
                    src={performanceActiveIcon}
                    className="img-fluid activeHeadIcon"
                    alt="icon"
                  />
                </div>
                <div className="name">Performence</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/msg">
                <div className="icon">
                  <img
                    src={Messagingicon}
                    className="img-fluid normalHeadIcon"
                    alt="icon"
                  />
                  <img
                    src={chatActiveIcon}
                    className="img-fluid activeHeadIcon"
                    alt="icon"
                  />
                  <div className="red_dot"></div>
                </div>
                <div className="name">Messaging</div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/noti">
                <div className="icon">
                  <img
                    src={Notificationicon}
                    className="img-fluid normalHeadIcon"
                    alt="icon"
                  />
                  <img
                    src={notificationActiveIcon}
                    className="img-fluid activeHeadIcon"
                    alt="icon"
                  />
                  <div className="red_dot"></div>
                </div>
                <div className="name">Notification</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
