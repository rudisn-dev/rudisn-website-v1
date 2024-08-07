"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { solutionData } from "../../../../../data/data";

const OurProcess = () => {
  useEffect(() => {
    const allProcesses = document.querySelectorAll(
      ".home2-process-wrapper .single-process-static"
    );
    if (allProcesses.length > 0) {
      const totalProcesses = allProcesses.length;
      // Calculate the circumference of the circle
      const radius = 150; // Same as your SVG's radius
      const circumference = 2 * Math.PI * radius;

      // Select elements
      const progressBar = document.querySelector(".progress-bar");
      const pct = document.querySelector(".pct");

      // Set the initial stroke-dasharray and stroke-dashoffset to circumference
      progressBar.style.strokeDasharray = `${circumference} ${circumference}`;
      progressBar.style.strokeDashoffset = circumference;

      // Assuming you have a place to display the current page/total, e.g., <p id="pageIndicator">1/4</p>
      const pageIndicator = document.getElementById("pageIndicator");
      if (pageIndicator) pageIndicator.textContent = `1/${totalProcesses}`;

      const actl = gsap.timeline({
        scrollTrigger: {
          trigger: ".home2-process-wrapper",
          start: "top 250px",
          scrub: 1,
          ease: "linear",
          markers: false,
          onUpdate: (self) => {
            const progress = self.progress; // 0 to 1
            const offset = circumference - progress * circumference;
            progressBar.style.strokeDashoffset = offset;
            pct.textContent = `${Math.round(progress * 100)}%`;

            // Calculate the current page based on scroll progress
            const currentPage = Math.min(
              Math.ceil(progress * totalProcesses),
              totalProcesses
            );
            if (pageIndicator)
              pageIndicator.textContent = `${currentPage}/${totalProcesses}`;
          },
        },
      });
      gsap.to(".progress-bar", {
        strokeDashoffset: 0, // Animate from full circumference to 0 to fill the circle
        duration: 5, // Duration in seconds
        ease: "linear", // Use an easing function to make the animation smooth
        // You can control the progress dynamically by adjusting the end value of strokeDashoffset
      });
    }
  }, []); // Empty dependency array to ensure effect runs only once
  return (
    <>
      <div className="home2-process-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title three text-animation">
                <h2>
                  Our Solution
                  <br />
                  <span>Proccess</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z" />
                  </svg>
                  <div className="btn-and-paragraph">
                    <p>{solutionData.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-lg-4" id="scroll-progress">
            <div className="col-lg-6">
              <div className="progress-wrapper">
                <p className="pct">0%</p>
                <div className="counter-wrap">
                  <p className="steps">Step</p>
                  <p id="pageIndicator">01/04</p>
                </div>
                <svg className="complete" width={340} height={340}>
                  <defs>
                    <linearGradient id="grad">
                      <stop offset="0%" />
                      <stop offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle cx={168} cy={168} r={150} />
                  <circle className="progress-bar" cx={168} cy={168} r={150} />
                </svg>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home2-process-wrapper">
                {solutionData.allSolutions.map((data, index) => {
                  return (
                    <div key={index} className="single-process-static">
                      <div className="single-process">
                        <div className="icon">{data.icon}</div>
                        <div className="content">
                          <h3>{data.title}</h3>
                          <p>{data.description}</p>
                          <ul>
                            {data.options.map((option, optIndex) => {
                              return (
                                <li key={optIndex}>
                                  <i className="ri-add-line"></i> {option}
                                </li>
                              );
                            })}
                          </ul>
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

export default OurProcess;
