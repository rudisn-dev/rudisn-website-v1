import React from "react";
import { contactInformation, heroData } from "../../../../../data/data";
import ServicesMarquee from "@/components/common/ServicesMarquee";
import Image from "next/image";

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
                  <div className="content-and-btn text-animation">
                    {heroData.description}
                    <div className="banner-btn">
                      <a
                        href={contactInformation.calendly}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Calendly"
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
                <Image
                  src={heroData.heroImgSrc}
                  width={562}
                  height={677}
                  style={{ objectFit: "contain" }}
                  alt="Main illustration"
                />
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
