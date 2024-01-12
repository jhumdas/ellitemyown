import React from "react";
import "../../View/Landingpage/Landingpage.css";
import logo from "../../Images/Logo.png";
import aa from "../../Images/banner_img.png";
import bb from "../../Images/about_picture.png";
import cc from "../../Images/card_img1.png";
import dd from "../../Images/card-img2.png";
import ee from "../../Images/card-img3.png";
import ff from "../../Images/card-img4.png";
import gg from "../../Images/card-img5.png";
import hh from "../../Images/card_img6.png";
import Cresta_logo from "../../Images/Cresta logo.png";
import Dribbble_logo from "../../Images/Dribbble_logo.png";
import footer_logo from "../../Images/footer_logo.png";
import Logitech_logo from "../../Images/Logitech_logo.png";
import Miro_logo from "../../Images/Miro_logo.png";
import Slack_logo from "../../Images/Slack_logo.png";
import Stripe_logo from "../../Images/Stripe_logo.png";
import work_img1 from "../../Images/work_img1.png";
import work_img2 from "../../Images/work_img2.png";
import work_img3 from "../../Images/work_img3.png";
import work_img4 from "../../Images/work_img4.png";
import work_img5 from "../../Images/work_img5.png";
import service_img from "../../Images/service-img.png";
import Ellipse_7 from "../../Images/Ellipse_7.png";
import Ellipse_8 from "../../Images/Ellipse _8.png";
import Ellipse_9 from "../../Images/Ellipse_9.png";
import Ellipse_10 from "../../Images/Ellipse_10.png";
import Ellipse_11 from "../../Images/Ellipse_11.png";
import Ellipse_12 from "../../Images/Ellipse_12.png";
import Ellipse_13 from "../../Images/Ellipse_13.png";
import star_img from "../../Images/star_img.png";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import BenefitSlidePart from "./BenefitSlidePart";
import $ from "jquery";

function Index() {
  $(document).ready(function () {
    $(".client-single").on("click", function (event) {
      event.preventDefault();

      var active = $(this).hasClass("active");

      var parent = $(this).parents(".testi-wrap");

      if (!active) {
        var activeBlock = parent.find(".client-single.active");

        var currentPos = $(this).attr("data-position");

        var newPos = activeBlock.attr("data-position");

        activeBlock
          .removeClass("active")
          .removeClass(newPos)
          .addClass("inactive")
          .addClass(currentPos);
        activeBlock.attr("data-position", currentPos);

        $(this)
          .addClass("active")
          .removeClass("inactive")
          .removeClass(currentPos)
          .addClass(newPos);
        $(this).attr("data-position", newPos);
      }
    });
  });
  const navigate = useNavigate();
  return (
    <>
      <section className="header">
        <div className="custContain">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    price
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    contacts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Help
                  </Link>
                </li>
              </ul>
              <button
                className="loginbtn"
                type="submit"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
              <button className="signupbtn" type="submit">
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      </section>

      <section className="banner">
        <div className="custContain">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="banner_title_section">
                <div className="title">
                  <p>
                    <span> Your </span> platform for
                  </p>
                  <span>Transforming</span>
                  <p>
                    Employee <span> Experience</span>
                  </p>
                </div>
                <div className="conten">
                  <p>
                    a gamified approach to transform and leverage Human Resource
                    services
                  </p>
                </div>
                <div className="banner_btn">
                  <button className="askforbtn" type="submit">
                    Ask for Demo
                  </button>
                  <button className="viewplanbtn" type="submit">
                    View plan
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="banner_img_section">
                <div className="banner_img">
                  <img src={aa} alt="banner-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="custContain">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="about_img">
                <div className="banner_img">
                  <img src={bb} alt="banner-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="about-dtls">
                <div className="title">
                  <p>
                    <span>About </span> this product
                  </p>
                </div>
                <div className="conten">
                  <p>
                    {" "}
                    elite Employee Program (FEP) is a next-gen employee
                    experience design – an approach to transfom HR design on
                    ‘Management by Objective’ philosophy, which improves the
                    overall employee engagement level at an organization level.
                    Give employees an unique overall cohesive experience
                  </p>
                </div>
                <div className="banner_btn">
                  <button className="viewplanbtn" type="submit">
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="work">
        <div className="custContain">
          <div className="work_title">
            <p>
              <span> Everything</span> you need to do Better <span> work </span>
            </p>
          </div>
          <div className="work_sub_title">
            <p>
              Lorem ipsum dolor sit amet consectetur. Non cum condimentum sit
              gravida.
            </p>
          </div>
          <div className="row margintop">
            <div className="col-lg-4 col-md-4 col-sm-6 col-8">
              <div className="work_card">
                <div className="sub-card">
                  <div className="card_img">
                    <img src={cc} alt="logo" />
                  </div>
                </div>
                <div className="card_title">
                  <p>Weighted Scores</p>
                </div>
                <div className="card_dtls">
                  <p>
                    Pre-set point gain based on activity and its acknowledgement
                    among employees .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-8">
              <div className="work_card">
                <div className="sub-card">
                  <div className="card_img">
                    <img src={dd} alt="logo" />
                  </div>
                </div>
                <div className="card_title">
                  <p>Loyalty Program</p>
                </div>
                <div className="card_dtls">
                  <p>
                    Pre-set point gain based on activity and its acknowledgement
                    among employees .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-8">
              <div className="work_card">
                <div className="sub-card">
                  <div className="card_img">
                    <img src={ee} alt="logo" />
                  </div>
                </div>
                <div className="card_title">
                  <p> Feedback Loop</p>
                </div>
                <div className="card_dtls">
                  <p>
                    Pre-set point gain based on activity and its acknowledgement
                    among employees .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-8">
              <div className="work_card">
                <div className="sub-card">
                  <div className="card_img">
                    <img src={ff} alt="logo" />
                  </div>
                </div>
                <div className="card_title">
                  <p>Social Route</p>
                </div>
                <div className="card_dtls">
                  <p>
                    Pre-set point gain based on activity and its acknowledgement
                    among employees .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-8">
              <div className="work_card">
                <div className="sub-card">
                  <div className="card_img">
                    <img src={gg} alt="logo" />
                  </div>
                </div>
                <div className="card_title">
                  <p>Behaviour CategoryS</p>
                </div>
                <div className="card_dtls">
                  <p>
                    Pre-set point gain based on activity and its acknowledgement
                    among employees .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-8">
              <div className="work_card">
                <div className="sub-card">
                  <div className="card_img">
                    <img src={hh} alt="logo" />
                  </div>
                </div>
                <div className="card_title">
                  <p>Weighted Scores</p>
                </div>
                <div className="card_dtls">
                  <p>
                    Pre-set point gain based on activity and its acknowledgement
                    among employees .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/******* */}

      <section className="service">
        <div className="custContain">
          <div className="row responsive">
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="about-dtls">
                <div className="title">
                  <p>
                    Easy connect at <span> Dialoguein platform.</span>{" "}
                  </p>
                </div>
                <div className="conten">
                  <p>
                    {" "}
                    Fractalz provides user friendly social engaging platform
                    that transform employee experience and actively use Employer
                    branding to benefit potential employees and higher levels of
                    loyalty and commitment from current employees.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="service_img">
                <div className="work_img">
                  <img src={work_img1} alt="banner-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="service_img">
                <div className="work_img">
                  <img src={work_img2} alt="banner-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="about-dtls">
                <div className="title">
                  <p>
                    Manage everyone <span> work </span>
                    &amp; <span> projects </span>
                  </p>
                </div>
                <div className="conten">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Commodo semper
                    tincidunt nec odio mattis mi quam.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row responsive">
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="about-dtls">
                <div className="title">
                  <p>
                    <span> Yearly </span> &amp; <span> Monthly </span>{" "}
                    recognition Assist{" "}
                  </p>
                </div>
                <div className="conten">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Commodo semper
                    tincidunt nec odio mattis mi quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="service_img">
                <div className="work_img">
                  <img src={work_img3} alt="banner-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Benefits">
        <div className="custContain">
          <Swiper
            pagination={true}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="myfastSwiper"
          >
            <SwiperSlide>
              <BenefitSlidePart />
            </SwiperSlide>
            <SwiperSlide>
              <BenefitSlidePart />
            </SwiperSlide>
            <SwiperSlide>
              <BenefitSlidePart />
            </SwiperSlide>
            <SwiperSlide>
              <BenefitSlidePart />
            </SwiperSlide>
            <SwiperSlide>
              <BenefitSlidePart />
            </SwiperSlide>
            <SwiperSlide>
              <BenefitSlidePart />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="roles">
        <div className="custContain">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="service_img">
                <div className="work_img">
                  <img src={work_img4} alt="banner-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="about-dtls">
                <div className="title">
                  <p>
                    User <span> Roles </span>
                  </p>
                </div>
                <div className="conten">
                  <ol>
                    <li>Task Creation</li>
                    <li>Rating peers</li>
                    <li>Testimonials</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row responsive">
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="about-dtls">
                <div className="title">
                  <p>
                    Put this section after <span> Our Services </span>{" "}
                  </p>
                </div>
                <div className="conten">
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet consectetur. Commodo semper
                    tincidunt nec odio mattis mi quam.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="service_img">
                <div className="work_img">
                  <img src={service_img} alt="banner-img" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="service_img">
                <div className="work_img">
                  <img src={work_img5} alt="banner-img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 m-auto">
              <div className="about-dtls">
                <div className="title">
                  <p>
                    Get more rewards &amp; <span> Points Engage </span> &amp;{" "}
                    <span>
                      {" "}
                      Shear Events
                      <span />
                    </span>
                  </p>
                </div>
                <div className="conten">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Commodo semper
                    tincidunt nec odio mattis mi quam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Associate">
        <div className="custContain">
          <div className="associate_section">
            <div className="title">
              <p>Associate with us</p>
            </div>
            <div className="benefit_dtls">
              <p>
                Lorem ipsum dolor sit amet consectetur. Commodo semper tincidunt
                nec odio mattis mi quam.
              </p>
            </div>
          </div>
          <div className="associate_slider">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              modules={[Autoplay]}
              breakpoints={{
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 6,
                  spaceBetween: 60,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="mySecLogoSwiper"
            >
              <SwiperSlide>
                <div className="associate_logo">
                  <img src={Logitech_logo} alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="associate_logo">
                  <img src={Miro_logo} alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="associate_logo">
                  <img src={Slack_logo} alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="associate_logo">
                  <img src={Cresta_logo} alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="associate_logo">
                  <img src={Miro_logo} alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="associate_logo">
                  <img src={Stripe_logo} alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="associate_logo">
                  <img src={Dribbble_logo} alt="logo" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="associate_logo">
                  <img src={Logitech_logo} alt="logo" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section id="testimonial-area">
        <div className="custContain">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="section-heading text-center">
                <h5>See Our Testimonial</h5>
              </div>
              <div className="star_img">
                <img src={star_img} alt="star" />
              </div>
            </div>
          </div>
          <div className="testi-wrap">
            <div
              className="client-single active position-1"
              data-position="position-1"
            >
              <div className="client-img">
                <img src={Ellipse_11} alt="" />
              </div>
              <div className="client-reting">
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
              </div>
              <div className="client-comment">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas neque, laoreet faucibus nunc turpis.”{" "}
                </p>
              </div>
            </div>
            <div
              className="client-single inactive position-2"
              data-position="position-2"
            >
              <div className="client-img">
                <img src={Ellipse_7} alt="" />
              </div>
              <div className="client-reting">
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
              </div>
              <div className="client-comment">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas neque, laoreet faucibus nunc turpis.”{" "}
                </p>
              </div>
            </div>
            <div
              className="client-single inactive position-3"
              data-position="position-3"
            >
              <div className="client-img">
                <img src={Ellipse_8} alt="" />
              </div>
              <div className="client-reting">
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
              </div>
              <div className="client-comment">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas neque, laoreet faucibus nunc turpis.”{" "}
                </p>
              </div>
            </div>
            <div
              className="client-single inactive position-4"
              data-position="position-4"
            >
              <div className="client-img">
                <img src={Ellipse_9} alt="" />
              </div>
              <div className="client-reting">
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
              </div>
              <div className="client-comment">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas neque, laoreet faucibus nunc turpis.”{" "}
                </p>
              </div>
            </div>
            <div
              className="client-single inactive position-5"
              data-position="position-5"
            >
              <div className="client-img">
                <img src={Ellipse_12} alt="" />
              </div>
              <div className="client-reting">
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
              </div>
              <div className="client-comment">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas neque, laoreet faucibus nunc turpis.”{" "}
                </p>
              </div>
            </div>
            <div
              className="client-single inactive position-6"
              data-position="position-6"
            >
              <div className="client-img">
                <img src={Ellipse_13} alt="" />
              </div>
              <div className="client-reting">
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
              </div>
              <div className="client-comment">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas neque, laoreet faucibus nunc turpis.”{" "}
                </p>
              </div>
            </div>
            <div
              className="client-single inactive position-7"
              data-position="position-7"
            >
              <div className="client-img">
                <img src={Ellipse_10} alt="" />
              </div>
              <div className="client-reting">
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
                <Link to="/">
                  <i className="fa-solid fa-star" />
                </Link>
              </div>
              <div className="client-comment">
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas neque, laoreet faucibus nunc turpis.”{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
