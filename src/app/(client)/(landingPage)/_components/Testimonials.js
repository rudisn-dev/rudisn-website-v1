"use client";
import Marquee from "react-fast-marquee";
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import Link from "next/link";
import { allPartners, testimonalsData } from "../../../../../data/data";
import Image from "next/image";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);
const Testimonials = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 25,
      // loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".franctional-pagi2",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },
    };
  }, []);
  return (
    <>
      <div className="home2-testimonial-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-40">
            <div className="col-lg-12">
              <Swiper {...settings} className="swiper home2-testimonial-slider">
                <div className="swiper-wrapper">
                  {testimonalsData.map((data, index) => {
                    return (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="row g-md-4 gy-5">
                          <div className="col-md-5 d-flex justify-content-md-center">
                            <div className="author-img magnetic-item">
                              <Image
                                width={336}
                                height={283}
                                src={data.imageSrc}
                                alt="Testimonial"
                              />
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="testimonal-content">
                              <span>{data.heading}</span>
                              <p>{data.description}</p>
                              <div className="author-area">
                                <div className="content">
                                  <p>{data.person}</p>
                                  <span>{data.post}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5" />
            <div className="col-md-7">
              <div className="slider-btn-area">
                <div className="slider-btn-group w-100">
                  <div className="slider-btn prev-2">
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
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                      />
                    </svg>
                  </div>
                  <div className="slider-btn next-2">
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
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                      />
                    </svg>
                  </div>
                </div>
                <span className="dash" />
                <div className="franctional-pagi2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-area two mb-130">
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="partner-wrap two">
                <div className="title1">
                  <h6>Our Trusted Partner</h6>
                </div>
                <div className="marquee light">
                  <div className="marquee__group">
                    <Marquee>
                      {allPartners.map((data, index) => {
                        return (
                          <span key={index}>
                            <Image
                              width={150}
                              height={36}
                              style={{ objectFit: "contain" }}
                              src={data}
                              alt=""
                            />
                          </span>
                        );
                      })}
                    </Marquee>
                  </div>
                  <div aria-hidden="true" className="marquee__group">
                    <Marquee>
                      {allPartners.map((data, index) => {
                        return (
                          <span key={index}>
                            <Image
                              width={150}
                              height={36}
                              style={{ objectFit: "contain" }}
                              src={data}
                              alt=""
                            />
                          </span>
                        );
                      })}
                    </Marquee>
                  </div>
                </div>
                <div className="title2">
                  <h6>We have almost {allPartners.length}+ Partner</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
