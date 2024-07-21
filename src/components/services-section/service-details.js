"use client"
import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const ServiceDetails = () => {
    const settings = useMemo(()=>{
        return {
            
            slidesPerView: "auto",
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
        }
    },[])
  return (
    <div className="service-details-post-thumb-slider">
    <div className="row">
    <div className="col-lg-12">
        <Swiper {...settings} className="swiper service-post-thumb-slider">
        <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
            <img src="/assets/img/innerpage/portfolio-details-page-img2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <img src="/assets/img/innerpage/service-details-thumb-img1.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <img src="/assets/img/innerpage/service-details-thumb-img2.jpg" alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
            <img src="/assets/img/innerpage/service-details-thumb-img3.jpg" alt="" />
            </SwiperSlide>
        </div>
        <div className="slider-btn-group">
            <div className="slider-btn prev-5">
            <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z">
                </path>
            </svg>
            </div>
            <div className="slider-btn next-5">
            <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z">
                </path>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z">
                </path>
            </svg>
            </div>
        </div>
        </Swiper>
    </div>
    </div>
</div>
  )
}

export default ServiceDetails
