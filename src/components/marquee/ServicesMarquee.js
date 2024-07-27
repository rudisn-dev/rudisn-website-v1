import React from "react";
import { allServices, heroData } from "../../../data/data";

function ServicesMarquee() {
  return (
    <div className="marquee">
      {Array.from({ length: 2 }).map((_, index) => {
        return (
          <div key={index} className="marquee__group">
            {allServices
              .map((data) => data.name)
              .map((data, serIndex) => {
                return (
                  <span key={serIndex} style={{ textTransform: "uppercase" }}>
                    {serIndex % 2 === 0 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 40 40"
                      >
                        <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                      >
                        <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                      </svg>
                    )}
                    {data}
                  </span>
                );
              })}
          </div>
        );
      })}
    </div>
  );
}

export default ServicesMarquee;
