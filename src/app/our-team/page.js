import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/rudisn-logo.svg",
  },
};

const OurTeam3 = () => {
  return (
    <>
      <div
        className="breadcrumb-section style-2"
        style={{
          backgroundImage:
            "linear-gradient(rgba(248, 248, 248, 0.5), rgba(248, 248, 248, 0.5)), url(assets/img/innerpage/breadcrumb-bg6.jpg)",
        }}
      >
        <svg
          className="vector"
          xmlns="http://www.w3.org/2000/svg"
          width={300}
          height={374}
          viewBox="0 0 300 374"
          fill="none"
        >
          <path
            d="M49.999 359.57C49.999 530.694 188.228 669.14 358.399 669.14C528.57 669.14 666.799 530.694 666.799 359.57C666.799 188.445 528.57 50 358.399 50C188.228 50 49.999 188.445 49.999 359.57Z"
            strokeWidth={100}
          />
        </svg>
        <div className="container-lg container-fluid">
          <div className="banner-wrapper">
            <div className="banner-content">
              <div className="row align-items-center gy-5">
                <div className="col-lg-7">
                  <div className="section-title">
                    <h1>
                      We Have <span>Dynamic Teams.</span>
                    </h1>
                  </div>
                  <div className="dash-and-paragraph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 338 44"
                    >
                      <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM337.001 3L337.163 3.47297C337.394 3.3937 337.534 3.15889 337.494 2.9178C337.454 2.67671 337.245 2.5 337.001 2.5V3ZM324.001 44L324.222 38.2307L319.115 40.924L324.001 44ZM3 3.5H337.001V2.5H3V3.5ZM336.839 2.52703C328.657 5.33201 323.03 10.8388 320.343 17.6231C317.657 24.4031 317.923 32.4183 321.444 40.223L322.356 39.8117C318.933 32.2249 318.697 24.4919 321.272 17.9914C323.846 11.4951 329.241 6.18899 337.163 3.47297L336.839 2.52703Z" />
                    </svg>
                    <p>
                      Offer a wide range of services to help businesses
                      establish.
                    </p>
                  </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-xxl-center">
                  <Link className="circle-btn btn-hover" href="/career-list">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>{" "}
                    Join Our <br /> Team
                    <span style={{ top: "50.5px", left: "83.75px" }} />
                  </Link>
                </div>
              </div>
            </div>
            <ul className="breadcrumb-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Team Style-03</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="team-card-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row gy-5">
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img1.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Jorche Milton</h6>
                  <span>Axleo, CEO</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img2.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Robert Jhonson</h6>
                  <span>Co-founder</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img3.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Mrs. Emily Sophia</h6>
                  <span>Excutive Manager</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img4.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Benjamin Lucas</h6>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img5.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Mr. Daniel Scoot</h6>
                  <span>Sr. Digital Marketer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img6.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Grace Lily</h6>
                  <span>Excutive Manager</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img7.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>Ava Sophia</h6>
                  <span>UI/UX Designer</span>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1">
                <div className="team-img magnetic-item">
                  <img src="assets/img/innerpage/team-img8.png" alt="" />
                  <ul className="social-area">
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bx bxl-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bx bxl-linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="team-content text-center">
                  <h6>William Samuel</h6>
                  <span>Digital Marketer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section four">
        <div className="container-lg container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="section-title text-animation">
                <h2>
                  Let’s <span>TALK</span>
                </h2>
                <div className="dash-and-paragraph">
                  <div className="dash" />
                  <div className="content-and-social">
                    <p>
                      Crafting a contact text for a digital agency involves
                      providing essential information for potential clients or
                      collaborators to reach out.
                    </p>
                    <div className="social-area">
                      <h6>Connect Us</h6>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={6}
                        viewBox="0 0 50 6"
                      >
                        <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                      </svg>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="bi bi-twitter-x" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram-alt" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-lg-flex justify-content-end align-items-center">
              <div className="btn_wrapper">
                <Link className="circle-btn btn-hover two" href="/contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>{" "}
                  Contact <strong>Now</strong>
                  <span style={{ top: "50.5px", left: "83.75px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam3;
