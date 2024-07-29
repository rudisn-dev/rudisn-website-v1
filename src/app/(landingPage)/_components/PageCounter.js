"use client";
import React from "react";
import CountUp from "react-countup";
import { counterData } from "../../../../data/data";

const PageCounter = () => {
  return (
    <>
      <div className="home2-counter-area mb-130">
        <div className="container-lg container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row g-4">
                {counterData.map((data, index) => {
                  return (
                    <div key={index} className="col-lg-4">
                      <div className="single-counter">
                        <div className="content">
                          <div className="number">
                            <h2 className="counter">
                              <CountUp end={data.value} />+
                            </h2>
                          </div>
                          <p>{data.title}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageCounter;
