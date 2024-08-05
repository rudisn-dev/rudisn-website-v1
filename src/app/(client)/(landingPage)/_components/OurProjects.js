import Link from "next/link";
import React from "react";
import { projectsData } from "../../../../../data/data";
import Image from "next/image";

const OurProjects = () => {
  return (
    <div className="home2-portfolio-section mb-130">
      <div className="container-lg container-fluid">
        <div className="row mb-60">
          <div className="col-lg-12">
            <div className="section-title text-animation">
              <h2>
                Work <span>{projectsData.totalProjects}</span>
              </h2>
              <div className="dash-and-paragraph three">
                <div className="dash" />
                <div className="btn-and-paragraph">
                  <Link href="/our-work">
                    Explore More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                  </Link>
                  <p>{projectsData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-lg-5 g-4 justify-content-between">
          {projectsData.allProjects.slice(0, 4).map((data, index) => {
            return (
              <div className={`${data.showCaseColumnWidth} col-md-6 `}>
                <div className="portfolio-card magnetic-item">
                  <div className="image-and-tag">
                    <ul className="tag">
                      {data.tags.map((tag, index) => {
                        return (
                          <li key={index}>
                            <span>{tag}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <div className="portfolio-img">
                      <Image
                        width={590}
                        height={326}
                        style={{ objectFit: "cover" }}
                        src={data.mainImgSrc}
                        alt="Project Banner"
                      />
                      <Link className="details-btn" href={data.path}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                        >
                          <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-content">
                    <h4>
                      <Link href={data.path}>{data.name}</Link>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className="row mt-70"
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            className="primary-btn3 btn-hover"
            href="/our-work"
            style={{ width: "165px" }}
          >
            View all
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={12}
              viewBox="0 0 12 12"
            >
              <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
            </svg>
            <span style={{ top: "50.5px", left: "83.75px" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
