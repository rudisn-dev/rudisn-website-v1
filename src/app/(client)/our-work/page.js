"use client";
import Link from "next/link";
import React, { useState } from "react";
import { projectsData } from "../../../../data/data";

const Portfolioesonary = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 4);
  };

  const displayedProjects = projectsData.allProjects.slice(0, visibleProjects);
  const allProjectsDisplayed =
    visibleProjects >= projectsData.allProjects.length;

  const pattern = (index) => {
    if (index === 0) return true;
    const mod = (index - 1) % 8;
    return mod === 2 || mod === 3 || mod === 6 || mod === 7;
  };

  return (
    <div className="portfolio-page-area portfolio-masonery pt-130 mb-130">
      <div className="container-lg container-fluid">
        <div className="row mb-130">
          <div className="col-lg-12">
            <div className="section-title">
              <h1>
                Our <span>Work</span>
              </h1>
              <div className="dash-and-paragraph three">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 877 64">
                  <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM875 3L875.271 3.42013L876.697 2.5H875V3ZM842.084 64L845.265 59.1819L839.502 58.836L842.084 64ZM3 3.5H875V2.5H3V3.5ZM874.729 2.57987C861.302 11.2438 844.485 27.4669 841.856 59.4675L842.852 59.5494C845.45 27.938 862.03 11.9643 875.271 3.42013L874.729 2.57987Z"></path>
                </svg>
                <div className="btn-and-paragraph">
                  {/* <span>Selected work * (2020-2024)</span> */}
                  <span>Recent works</span>
                  <p>{projectsData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-130 gy-lg-5 g-4 justify-content-between">
          {displayedProjects.map((data, index) => {
            return (
              <div
                key={index}
                className={`${pattern(index) ? "col-lg-5" : "col-lg-6"} col-md-6 `}
              >
                <div className="portfolio-card two magnetic-item">
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
                      <img src={data.mainImgSrc} alt="" />
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
        {!allProjectsDisplayed && (
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <div className="load-more-btn btn_wrapper">
                <button
                  className="circle-btn btn-hover"
                  onClick={handleLoadMore}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>{" "}
                  Load More <strong>Projects</strong>
                  <span style={{ top: "50.5px", left: "83.75px" }} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolioesonary;
