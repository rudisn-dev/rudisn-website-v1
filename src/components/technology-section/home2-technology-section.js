import React from "react";
import { technologyData } from "../../../data/data";

const Home2TechnologySection = () => {
  return (
    <div className="home2-technology-section mb-130">
      <div className="container-lg container-fluid">
        <div className="row mb-60">
          <div className="section-title four white text-animation">
            <h2>
              We Used Advance <br />
              <span>TECHNOLOGY</span>
            </h2>
            <div className="dash-and-paragraph three">
              <div className="btn-and-paragraph">
                <p>{technologyData.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="technology-tab-wrap">
              <ul className="nav nav-tabs" id="technologyTab" role="tablist">
                {technologyData.categories.map((category) => (
                  <li
                    className="nav-item"
                    key={category.id}
                    role="presentation"
                  >
                    <button
                      className={`nav-link ${
                        category.id === "front" ? "active" : ""
                      }`}
                      id={`${category.id}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${category.id}`}
                      type="button"
                      role="tab"
                      aria-controls={category.id}
                      aria-selected={category.id === "front" ? "true" : "false"}
                    >
                      {category.title}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content" id="technologyTabContent">
                {technologyData.categories.map((category) => (
                  <div
                    className={`tab-pane fade ${
                      category.id === "front" ? "show active" : ""
                    }`}
                    id={category.id}
                    role="tabpanel"
                    aria-labelledby={`${category.id}-tab`}
                    key={category.id}
                  >
                    <div className="row g-4 align-items-end">
                      {category.technologies.map((tech) => (
                        <div
                          className="col-lg-2 col-md-3 col-sm-4 col-6"
                          key={tech.name}
                        >
                          <div
                            className={`single-technology ${
                              tech.big ? "big" : ""
                            } btn_wrapper`}
                          >
                            <div className="icon">
                              <img src={tech.icon} alt="" />
                            </div>
                            <span>{tech.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2TechnologySection;
