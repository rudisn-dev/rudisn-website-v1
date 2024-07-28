import React from "react";
import { contactInformation, heroData } from "../../../../data/data";
import ServicesMarquee from "@/components/common/ServicesMarquee";

const Hero = () => {
  return (
    <>
      <div className="home2-banner-area">
        <div className="container-xl container-fluid">
          <div className="row">
            <div className="col-xxl-8 col-xl-7 col-lg-7 d-flex align-items-center">
              <div className="banner-content-wrap">
                {heroData.heading}
                <div className="banner-content">
                  {/* <div className="vector-and-review  text-animation">
                    <div className="vector">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={341}
                        height={65}
                        viewBox="0 0 341 65"
                      >
                        <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM339 3L339.319 3.38519L340.388 2.5H339V3ZM312.916 65L316.032 60.1396L310.265 59.8712L312.916 65ZM3 3.5H339V2.5H3V3.5ZM338.681 2.61481C328.01 11.4468 314.692 27.9505 312.626 60.4724L313.624 60.5358C315.671 28.3112 328.842 12.0559 339.319 3.38519L338.681 2.61481Z" />
                      </svg>
                    </div>
                    <a href="#" className="rating-area">
                      <div className="review">
                        <span>Review On</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={78}
                          height={22}
                          viewBox="0 0 78 22"
                          fill="none"
                        >
                          <path
                            d="M57.5244 16.95C58.9366 16.95 60.0814 15.8109 60.0814 14.4057C60.0814 13.0005 58.9366 11.8613 57.5244 11.8613C56.1121 11.8613 54.9673 13.0005 54.9673 14.4057C54.9673 15.8109 56.1121 16.95 57.5244 16.95Z"
                            fill="#E62415"
                          />
                          <path d="M20.3027 0H23.6865V21.713H20.3027V0ZM36.0104 15.0174C36.0104 18.3843 33.2418 18.6522 32.3959 18.6522C30.281 18.6522 29.9734 16.6817 29.9734 15.4957V7.09739H26.5704V15.4765C26.5511 17.5617 27.1472 19.2835 28.3007 20.4313C29.3484 21.3606 30.6831 21.9067 32.0846 21.9798C33.4862 22.0528 34.8709 21.6483 36.0104 20.833V21.713H39.4134V7.09739H36.0104V15.0174ZM46.7577 2.18087H43.3547V7.09739H40.9899V10.2922H43.3547V21.713H46.7577V10.2922H49.5455V7.09739H46.7577V2.18087ZM60.562 17.5617C59.793 18.2504 58.774 18.633 57.6589 18.633C57.0924 18.649 56.5286 18.5494 56.0022 18.3404C55.4758 18.1315 54.998 17.8175 54.5982 17.4178C54.1984 17.0182 53.885 16.5414 53.6773 16.0167C53.4696 15.492 53.3721 14.9306 53.3907 14.367C53.3907 11.8991 55.1403 10.1774 57.6589 10.1774C58.7547 10.1774 59.793 10.5409 60.5812 11.2296L61.1195 11.6887L63.5036 9.31652L62.9076 8.78087C61.4638 7.49957 59.5934 6.79737 57.6589 6.81043C53.2369 6.81043 50.0261 9.98609 50.0261 14.3478C50.0026 15.3534 50.1837 16.3533 50.5585 17.2874C50.9333 18.2215 51.494 19.0706 52.207 19.7836C52.9199 20.4966 53.7704 21.0588 54.7073 21.4364C55.6442 21.814 56.6482 21.9992 57.6589 21.9809C59.6776 21.9809 61.5617 21.273 62.946 19.9913L63.5228 19.4557L61.1003 17.0835L60.562 17.5617ZM76.2697 8.37913C75.222 7.44988 73.8873 6.90369 72.4858 6.83066C71.0842 6.75762 69.6995 7.16211 68.56 7.97739V0H65.157V21.713H68.56V13.8122C68.56 10.4452 71.3286 10.1774 72.1745 10.1774C74.2894 10.1774 74.597 12.1478 74.597 13.3339V21.7322H78V13.3339C78.1027 11.5199 77.4807 9.73895 76.2697 8.37913ZM15.2847 16.5096C14.6226 17.1863 13.8302 17.7231 12.9548 18.088C12.0793 18.4529 11.1389 18.6383 10.1898 18.633C6.24846 18.633 3.38378 15.553 3.38378 11.3252C3.38378 7.07826 6.24846 3.99826 10.1898 3.99826C12.0932 3.99826 13.9004 4.74435 15.2655 6.10261L15.8038 6.63826L18.1686 4.28522L17.6495 3.74957C16.674 2.76231 15.5096 1.97946 14.2251 1.44719C12.9406 0.914914 11.562 0.644003 10.1706 0.650435C4.38353 0.650435 0 5.24174 0 11.3443C0 17.4087 4.38353 22 10.1706 22C13.0352 22 15.6884 20.8904 17.6495 18.8817L18.1686 18.3461L15.823 15.9548L15.2847 16.5096Z" />
                        </svg>
                      </div>
                      <div className="rating">
                        <ul className="star">
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-half" />
                          </li>
                        </ul>
                        <span>(50 reviews)</span>
                      </div>
                    </a>
                  </div> */}
                  <div className="content-and-btn text-animation">
                    {heroData.description}
                    <div className="banner-btn">
                      <a
                        href={contactInformation.calendly}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                          </svg>
                        </span>
                        <span className="content">Schedule a Call</span>
                        <span className="icon two">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={12}
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-5 d-lg-flex d-none">
              <div className="banner-img magnetic-item">
                <img src={heroData.heroImgSrc} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slider-section two mb-130">
        <ServicesMarquee />
      </div>
    </>
  );
};

export default Hero;
