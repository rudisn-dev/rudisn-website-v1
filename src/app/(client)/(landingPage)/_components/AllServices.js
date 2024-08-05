import Link from "next/link";
import React from "react";
import { servicesData } from "../../../../../data/data";

const AllServices = () => {
  return (
    <>
      <div className="home2-services-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title four text-animation">
                <h2>
                  TO PROVIDE SMART <br />
                  <span>SOLUTION</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <div className="btn-and-paragraph">
                    <p>{servicesData.heading}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-wrapper">
            {servicesData.services.map((data, index) => {
              return (
                <div key={index} className="service-card">
                  <div>
                    <h3>
                      {index + 1}. {data.name}
                    </h3>
                    <p>{data.description}</p>
                    <ul>
                      {data.tags.map((tag, tagIndex) => {
                        return (
                          <li key={tagIndex}>
                            <span>{tag}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <Link className="primary-btn2 btn-hover" href={data.path}>
                    Explore More
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
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllServices;
