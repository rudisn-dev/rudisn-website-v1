"use client";
import Link from "next/link";
import React, { useState } from "react";
import Sidebar from "../common/Sidebar";
import { contactInformation, logoUrl, navBarData } from "../../../data/data";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <header className="header-area style-2">
        <div className="logo-and-menu">
          <div className="header-logo">
            <Link href="/">
              <img
                alt="image"
                className="img-fluid"
                src={logoUrl}
                style={{ height: "43px" }}
              />
            </Link>
          </div>
          <div className="main-menu">
            <div className="mobile-logo-area d-lg-none d-flex justify-content-between align-items-center">
              <div className="mobile-logo-wrap">
                <Link href="/">
                  <img alt="image" src={logoUrl} />
                </Link>
              </div>
            </div>
            <ul className="menu-list">
              {navBarData.map((data, index) => {
                if (data?.subPaths) {
                  return (
                    <li key={index} className="menu-item-has-children">
                      <Link href="#" className="drop-down">
                        {data.name}
                      </Link>
                      <i className="bi bi-plus dropdown-icon" />
                      <ul className="sub-menu">
                        {data.subPaths.map((subData, subIndex) => {
                          return (
                            <li key={subIndex}>
                              <Link href={subData.path}>{subData.name}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <Link href={data.path}>{data.name}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
        <div className="nav-right d-flex jsutify-content-end align-items-center">
          <div className="sidebar-btn" onClick={toggleMenu}>
            <svg
              className="open"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.28585 11.4286C9.28585 11.2391 9.2106 11.0574 9.07664 10.9235C8.94269 10.7895 8.76101 10.7143 8.57157 10.7143H5.35585C4.31437 10.7145 3.31559 11.1283 2.57915 11.8647C1.84271 12.6012 1.4289 13.5999 1.42871 14.6414V14.6443C1.4289 15.6858 1.84271 16.6845 2.57915 17.421C3.31559 18.1574 4.31437 18.5712 5.35585 18.5714H5.35871C6.4002 18.5712 7.39897 18.1574 8.13541 17.421C8.87185 16.6845 9.28567 15.6858 9.28585 14.6443V11.4286ZM18.5716 5.3557C18.5714 4.31422 18.1576 3.31544 17.4211 2.579C16.6847 1.84256 15.6859 1.42875 14.6444 1.42856H14.6416C13.6001 1.42875 12.6013 1.84256 11.8649 2.579C11.1284 3.31544 10.7146 4.31422 10.7144 5.3557V8.57142C10.7144 8.76086 10.7897 8.94254 10.9236 9.07649C11.0576 9.21045 11.2393 9.2857 11.4287 9.2857H14.643C15.6849 9.2857 16.6842 8.8718 17.4209 8.13505C18.1577 7.3983 18.5716 6.39905 18.5716 5.35713V5.3557ZM18.5716 14.6414C18.5714 13.5999 18.1576 12.6012 17.4211 11.8647C16.6847 11.1283 15.6859 10.7145 14.6444 10.7143H11.4287C11.2393 10.7143 11.0576 10.7895 10.9236 10.9235C10.7897 11.0574 10.7144 11.2391 10.7144 11.4286V14.6443C10.7146 15.6858 11.1284 16.6845 11.8649 17.421C12.6013 18.1574 13.6001 18.5712 14.6416 18.5714H14.6444C15.6859 18.5712 16.6847 18.1574 17.4211 17.421C18.1576 16.6845 18.5714 15.6858 18.5716 14.6443V14.6414ZM9.28585 5.3557C9.28567 4.31422 8.87185 3.31544 8.13541 2.579C7.39897 1.84256 6.4002 1.42875 5.35871 1.42856H5.35585C4.31437 1.42875 3.31559 1.84256 2.57915 2.579C1.84271 3.31544 1.4289 4.31422 1.42871 5.3557V5.35713C1.42871 6.39905 1.84261 7.3983 2.57936 8.13505C3.31611 8.8718 4.31536 9.2857 5.35728 9.2857H8.57157C8.76101 9.2857 8.94269 9.21045 9.07664 9.07649C9.2106 8.94254 9.28585 8.76086 9.28585 8.57142V5.3557Z"
              />
            </svg>
            <svg
              className="close"
              xmlns="http://www.w3.org/2000/svg"
              width={18}
              height={18}
              viewBox="0 0 18 18"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 0L11.1686 8.99601L18 18L9.0041 11.1605L0 18L6.83156 8.99601L0 0L9.0041 6.83156L18 0Z"
              />
            </svg>
          </div>
          <div className="hotline-area d-xl-flex d-none">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 30 30"
              >
                <path d="M27.0705 2.34375H17.344C15.7286 2.34375 14.4141 3.65801 14.4141 5.27344V10.6641C14.4141 12.2795 15.7286 13.594 17.344 13.594H22.5002V15.2998C22.5002 15.5367 22.6429 15.7503 22.8614 15.8411C22.9339 15.8711 23.0104 15.8858 23.0859 15.8858C23.2411 15.8859 23.3899 15.8245 23.4998 15.715L25.6288 13.5939H27.0705C28.686 13.5939 30.0002 12.2795 30.0002 10.6641V5.27344C30.0002 3.65801 28.686 2.34375 27.0705 2.34375ZM28.8284 10.6641C28.8284 11.6334 28.0399 12.4221 27.0705 12.4221H25.3867C25.2317 12.4221 25.0829 12.4835 24.9731 12.5929L23.6721 13.889V13.008C23.6721 12.6844 23.4098 12.4221 23.0862 12.4221H17.344C16.3747 12.4221 15.5862 11.6334 15.5862 10.6641V5.27344C15.5862 4.30412 16.3747 3.51563 17.344 3.51563H27.0705C28.0399 3.51563 28.8284 4.30412 28.8284 5.27344V10.6641Z" />
                <path d="M26.4262 18.5918C24.7633 16.9288 22.0575 16.9288 20.3947 18.5918L18.8298 20.1564C18.2233 20.7632 17.2695 20.8058 16.611 20.2565C14.1209 18.1774 11.8225 15.879 9.74351 13.3889C9.19396 12.7304 9.23702 11.7764 9.84352 11.1701L11.4084 9.60526C13.0712 7.94237 13.0712 5.23657 11.4084 3.57374L9.08362 1.24898C8.27814 0.443554 7.20699 0 6.06793 0C4.92887 0 3.85778 0.443554 3.05211 1.24898C1.31493 2.98652 0.244015 5.29159 0.0368863 7.73987C-0.170008 10.188 0.498311 12.6402 1.91921 14.6448C5.61734 19.8621 10.1378 24.3824 15.3552 28.0807C17.1207 29.3323 19.2333 30.0001 21.3848 29.9999C21.676 29.9999 21.9682 29.9878 22.26 29.963C24.7084 29.7559 27.0134 28.6852 28.7507 26.9478C29.5564 26.1423 29.9999 25.0712 29.9999 23.932C29.9999 22.7928 29.5564 21.722 28.7507 20.9163L26.4262 18.5918ZM16.0328 27.1248C10.9239 23.5031 6.49677 19.0763 2.87516 13.967C0.259308 10.2766 0.682295 5.27642 3.88086 2.07779C4.46504 1.49367 5.24182 1.17187 6.06793 1.17187C6.89416 1.17187 7.67076 1.49367 8.25511 2.07773L10.5796 4.40255C11.1639 4.98661 11.4855 5.76345 11.4855 6.5895C11.4855 7.41555 11.1639 8.19233 10.5796 8.77645L10.483 8.87324L6.66412 5.0544C6.43549 4.82571 6.06447 4.82571 5.8356 5.0544C5.60674 5.28327 5.60674 5.65429 5.8356 5.88315L9.65427 9.70182L9.01478 10.3413C7.97679 11.3795 7.90308 13.0126 8.8438 14.1398C10.9679 16.6839 13.316 19.0321 15.8601 21.1562C16.9873 22.0967 18.6204 22.0234 19.6586 20.9852L20.2981 20.3457L26.9318 26.9794C23.7551 29.3712 19.3615 29.4841 16.0329 27.1248H16.0328ZM27.9221 26.1191C27.8892 26.152 27.8557 26.1843 27.8225 26.2166C27.8114 26.2033 27.7999 26.1902 27.7874 26.1776L21.1266 19.5172L21.2234 19.4203C21.8075 18.8363 22.5843 18.5145 23.4104 18.5145C24.2364 18.5145 25.0132 18.8363 25.5973 19.4203L27.9221 21.7451C28.5064 22.3292 28.828 23.1061 28.828 23.932C28.828 24.7583 28.5064 25.5349 27.9221 26.1191Z" />
                <path d="M4.64648 3.28009C4.49121 3.28041 4.34235 3.34212 4.2324 3.45177C4.12289 3.5619 4.06116 3.71072 4.06055 3.86603C4.06055 4.02013 4.12324 4.17136 4.2324 4.28029C4.34247 4.38976 4.49125 4.45144 4.64648 4.45197C4.8007 4.45197 4.95176 4.38927 5.06074 4.28029C5.17029 4.1702 5.23199 4.02134 5.23242 3.86603C5.23242 3.71204 5.1699 3.56075 5.06074 3.45177C4.9508 3.342 4.80184 3.28027 4.64648 3.28009ZM12.7913 21.5575C11.5864 20.4851 10.4311 19.3583 9.32895 18.1805C9.10781 17.9441 8.73703 17.9318 8.50084 18.1529C8.26441 18.3738 8.25205 18.7447 8.47313 18.9809C9.59963 20.1849 10.7805 21.3367 12.0121 22.4329C12.1193 22.5285 12.2578 22.5813 12.4014 22.5813C12.563 22.5813 12.7237 22.5149 12.8395 22.3846C13.0547 22.1429 13.0329 21.7726 12.7913 21.5575ZM7.80498 16.4793C7.59358 16.2344 7.22525 16.209 6.98016 16.4207C6.73523 16.6322 6.70986 17.0039 6.92133 17.249L6.92842 17.2572C6.98302 17.3205 7.05063 17.3712 7.12664 17.4059C7.20264 17.4406 7.28525 17.4586 7.36881 17.4584C7.50475 17.4584 7.64186 17.411 7.7533 17.3147C7.99799 17.1028 8.02272 16.7306 7.81096 16.4862L7.80498 16.4793ZM25.0485 7.38283C24.8933 7.38337 24.7444 7.44505 24.6343 7.5545C24.5249 7.66468 24.4632 7.81349 24.4626 7.96876C24.4626 8.12304 24.5253 8.27404 24.6343 8.38302C24.7433 8.49201 24.8945 8.5547 25.0485 8.5547C25.2026 8.5547 25.3538 8.49201 25.4628 8.38302C25.5723 8.2729 25.634 8.12406 25.6345 7.96876C25.6345 7.81472 25.5718 7.66366 25.4628 7.5545C25.3526 7.44505 25.2038 7.38337 25.0485 7.38283ZM22.2102 7.38283C22.0549 7.38337 21.9061 7.44505 21.7959 7.5545C21.6865 7.66468 21.6248 7.81349 21.6243 7.96876C21.6243 8.12304 21.687 8.27404 21.7959 8.38302C21.9055 8.49201 22.0561 8.5547 22.2102 8.5547C22.3643 8.5547 22.5155 8.49201 22.6245 8.38302C22.7342 8.27308 22.796 8.12412 22.7961 7.96876C22.7961 7.81472 22.7341 7.66366 22.6245 7.5545C22.5144 7.44493 22.3655 7.38324 22.2102 7.38283ZM19.3725 7.38283C19.2178 7.38283 19.0672 7.44552 18.9582 7.5545C18.8486 7.6645 18.7868 7.81342 18.7866 7.96876C18.7866 8.12304 18.8486 8.27404 18.9582 8.38302C19.0672 8.49201 19.2185 8.5547 19.3725 8.5547C19.5265 8.5547 19.6778 8.49201 19.7868 8.38302C19.8963 8.2729 19.9579 8.12406 19.9584 7.96876C19.9584 7.81472 19.8957 7.66366 19.7868 7.5545C19.6766 7.44505 19.5278 7.38337 19.3725 7.38283Z" />
              </svg>
            </div>
            <div className="content">
              <span>To More Inquiry</span>
              <h6>
                <a
                  href={contactInformation.calendly}
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule a Call
                </a>
              </h6>
            </div>
          </div>
          <Link href="/contact" className="header-btn btn-hover">
            Get in Touch
            <span style={{ top: "50.5px", left: "83.75px" }} />
          </Link>
        </div>
      </header>
    </>
  );
};

export default NavBar;
