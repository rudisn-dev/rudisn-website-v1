"use client";
import React from "react";
import CountUp from "react-countup";

const Home2CounterArea = () => {
  return (
    <>
      <div className="home2-counter-area mb-130">
        <div className="container-lg container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4">
                <div className="col-lg-4">
                  <div className="single-counter">
                    <div className="content">
                      <div className="number">
                        <h2 className="counter">
                          <CountUp end={15} />+
                        </h2>
                      </div>
                      <p>Professional Experts</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-counter two">
                    <div className="content">
                      <div className="number">
                        <h2 className="counter">
                          <CountUp end={25} />+
                        </h2>
                      </div>
                      <p>Completed Projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-counter">
                    <div className="content">
                      <div className="number">
                        <h2 className="counter">
                          <CountUp end={6} />+
                        </h2>
                      </div>
                      <p>Year of Experienece</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="home2-inner-banner"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.00) 100%), url(assets/img/home2/inner-baner-bg.jpg)",
        }}
      >
        <div className="clutch-logo btn_wrapper">
          <img src="assets/img/home2/clitch-big.png" alt="" />
        </div>
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content text-animation">
                <h6>
                  <span style={{ top: "50.5px", left: "83.75px" }} />
                  Innovative Idea
                </h6>
                <h2>
                  “ Drawing on the technical expertise of IT professionals to
                  assess and address complex technical.”
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home2CounterArea;
