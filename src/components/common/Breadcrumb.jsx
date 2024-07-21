"use client"
import React from "react";
import { usePathname } from "next/navigation";
const Breadcrumb = ({bgImg="1",title="02", title2, }) => {
  const pathname = usePathname();
  const formattedPathname = pathname.startsWith("/") ? pathname.substring(1) : pathname;
  return (
    <>
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/assets/img/innerpage/breadcrumb-bg${bgImg}.jpg)`
         
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
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-content">
              <div className="row">
                <div className="col-lg-5">
                  <div className="section-title white">
                    <h1>
                     {title} <span>{title2}</span>
                    </h1>
                  </div>
                </div>
                <div className="col-lg-7 d-flex align-items-end">
                  <div className="dash-and-paragraph">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 338 44"
                    >
                      <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM337.001 3L337.163 3.47297C337.394 3.3937 337.534 3.15889 337.494 2.9178C337.454 2.67671 337.245 2.5 337.001 2.5V3ZM324.001 44L324.222 38.2307L319.115 40.924L324.001 44ZM3 3.5H337.001V2.5H3V3.5ZM336.839 2.52703C328.657 5.33201 323.03 10.8388 320.343 17.6231C317.657 24.4031 317.923 32.4183 321.444 40.223L322.356 39.8117C318.933 32.2249 318.697 24.4919 321.272 17.9914C323.846 11.4951 329.241 6.18899 337.163 3.47297L336.839 2.52703Z" />
                    </svg>
                    <div className="btn-and-paragraph">
                      <p>
                        Offer a wide range of services to help businesses
                        establish.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul className="breadcrumb-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>{formattedPathname}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
