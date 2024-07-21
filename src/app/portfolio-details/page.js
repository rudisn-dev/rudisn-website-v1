"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const PortfolioDetails = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".next-5",
        prevEl: ".prev-5",
      },
    };
  }, []);
  return (
    <>
      <div className="details-page-wrapper portfolio-details pt-130 pb-130">
        <div className="container-lg container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="post-tag-and-title">
                <h1 className="post-title">
                  Celebrates Major Milestone in Digital Services.
                </h1>
                <ul className="post-category">
                  <li>
                    <Link href="/portfolio-showcase">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-showcase">Typography</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-showcase">Usability</Link>
                  </li>
                  <li>
                    <Link href="/portfolio-showcase">Hierarchy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-details-info-wrap">
                <table>
                  <tbody>
                    <tr>
                      <td>Category:</td>
                      <td>
                        <span>Fintect</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Clients:</td>
                      <td>
                        <span>Mr. Marko Paul</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Website:</td>
                      <td>
                        <a href="#">ui.visual.com</a>
                      </td>
                    </tr>
                    <tr>
                      <td>Date:</td>
                      <td>
                        <span>01/15/2024</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="social-area">
                <h6>Share:</h6>
                <ul className="social-link">
                  <li>
                    <a href="https://www.facebook.com/">
                      <i className="bx bxl-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i className="bx bxl-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.pinterest.com/">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">
                      <i className="bx bxl-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <span className="line-break" />
          <span className="line-break" />
          <span className="line-break" />
          <div className="portfolio-details-post-thumb-slider">
            <div className="row">
              <div className="col-lg-12">
                <Swiper
                  {...settings}
                  className="swiper service-post-thumb-slider"
                >
                  <div className="swiper-wrapper">
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/assets/img/innerpage/portfolio-details-thumb-img.jpg"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/assets/img/innerpage/portfolio-details-thumb-img2.jpg"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/assets/img/innerpage/portfolio-details-thumb-img3.jpg"
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                      <img
                        src="/assets/img/innerpage/portfolio-details-thumb-img4.jpg"
                        alt=""
                      />
                    </SwiperSlide>
                  </div>
                  <div className="slider-btn-group">
                    <div className="slider-btn prev-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="slider-btn next-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={11}
                        viewBox="0 0 15 11"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
          <span className="line-break" />
          <span className="line-break" />
          <span className="line-break" />
          <div className="details-page-content mb-130">
            <h3>Projects Overview</h3>
            <div className="row g-lg-4 gy-3">
              <div className="col-lg-6">
                <p className="first-para">
                  A s we reflect on this achievement, we look forward to
                  continuing our journey of digital innovation, creating
                  transformative solutions, and shaping the future of the
                  digital landscape. Celebrating a major milestone in digital
                  services is a significant occasion .
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  This milestone is a testament to the hard work, creativity,
                  and dedication of our incredible team and the unwavering
                  support from our clients and partners. We are grateful for the
                  trust placed in us and the collaborative efforts that have
                  fueled our success.
                </p>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="row g-lg-4 gy-5">
              <div className="col-lg-6">
                <h3>Challenges &amp; Constraints</h3>
                <p>
                  When creating a detailed case study, it's important to provide
                  comprehensive information that communicates the story of the
                  project, including the challenges faced, the solutions
                  implemented, and the achieved results.
                </p>
                <br />
                <ul>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                        <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                      </g>
                    </svg>
                    The digital agency landscape is highly competitive,
                    requiring agencies to differentiate themselves.
                  </li>
                  <li>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                        <path d="M10.9684 4.96979C10.9613 4.9767 10.9546 4.98404 10.9484 4.99179L7.47539 9.41679L5.38239 7.32279C5.24021 7.19031 5.05216 7.11819 4.85786 7.12162C4.66356 7.12505 4.47818 7.20376 4.34076 7.34117C4.20335 7.47858 4.12464 7.66397 4.12121 7.85827C4.11778 8.05257 4.18991 8.24062 4.32239 8.38279L6.96839 11.0298C7.03967 11.1009 7.12455 11.157 7.21797 11.1946C7.31139 11.2323 7.41143 11.2507 7.51213 11.2488C7.61283 11.247 7.71212 11.2249 7.80408 11.1838C7.89604 11.1427 7.97879 11.0835 8.04739 11.0098L12.0394 6.01979C12.1753 5.87712 12.2496 5.68669 12.2463 5.48966C12.2429 5.29263 12.1622 5.10484 12.0214 4.96689C11.8807 4.82893 11.6914 4.7519 11.4943 4.75244C11.2973 4.75299 11.1083 4.83106 10.9684 4.96979Z" />
                      </g>
                    </svg>
                    With a focus on technology, digital agencies have teams
                    skilled in web development.
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <img
                  src="/assets/img/innerpage/portfolio-details-page-img1.jpg"
                  alt=""
                />
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="row g-4 align-items-center">
              <div className="col-md-6">
                <h3>Projects Solution</h3>
                <p>
                  When creating a detailed case study, it's important to provide
                  comprehensive information that communicates.
                </p>
                <br />
                <p>
                  It's important to provide comprehensive information that
                  communicates the story of the project, including the
                  challenges faced, the solutions implemented, and the achieved
                  results.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="/assets/img/innerpage/portfolio-details-counter-img.png"
                  alt=""
                  className="counter-light"
                />
                <img
                  src="/assets/img/innerpage/portfolio-details-counter-dark-img.png"
                  alt=""
                  className="counter-dark"
                />
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <img
              src="/assets/img/innerpage/portfolio-details-page-img2.jpg"
              alt=""
            />
          </div>
          <div className="details-navigation two">
            <div className="single-navigation">
              <a className="arrow" href="#blog-details">
                <svg
                  width={7}
                  height={14}
                  viewBox="0 0 8 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
                Prev
              </a>
              <div className="content">
                <h6>
                  <a href="blog-details">
                    The Art and Science of Digital Marketing.
                  </a>
                </h6>
              </div>
            </div>
            <div className="single-navigation two text-end">
              <div className="content">
                <h6>
                  <a href="blog-details">
                    Innovative Solutions for a Digital Tomorrow.
                  </a>
                </h6>
              </div>
              <a className="arrow" href="blog-details">
                Next
                <svg
                  width={7}
                  height={14}
                  viewBox="0 0 8 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home4-team-section style-2">
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
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title text-animation">
                <h2>
                  Our Core <br />
                  <span>Contributers.</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 788 64">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM787 3L787.165 3.47208L787 2.5V3ZM726.137 64L729.557 59.3484L723.818 58.7125L726.137 64ZM3 3.5H787V2.5H3V3.5ZM786.835 2.52792C774.481 6.83921 760.535 13.0389 749.066 22.1679C737.59 31.3017 728.573 43.3858 726.138 59.453L727.127 59.6028C729.514 43.8512 738.351 31.9742 749.689 22.9503C761.032 13.9214 774.859 7.7666 787.165 3.47208L786.835 2.52792Z" />
                  </svg>
                  <div className="btn-and-paragraph">
                    <Link href="/our-team1">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                      </svg>
                    </Link>
                    <p>
                      Creating a concise and effective design studio brief is
                      crucial for outlining your business, its services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-xl-4 gy-5">
            <div className="col-xl-3 col-md-4 col-sm-6">
              <div className="team-card-1">
                <div className="team-img magnetic-item">
                  <img src="/assets/img/innerpage/team-img1.png" alt="" />
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
                  <img src="/assets/img/innerpage/team-img2.png" alt="" />
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
                  <img src="/assets/img/innerpage/team-img3.png" alt="" />
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
                  <img src="/assets/img/innerpage/team-img4.png" alt="" />
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;
