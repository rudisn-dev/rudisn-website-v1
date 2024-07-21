import Link from "next/link";
import React from "react";

const Home2ServicesSection = () => {
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
                    {/* <Link href="/services3">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                      </svg>
                    </Link> */}
                    <p>
                      Offer a wide range of services to help businesses
                      establish and enhance their online presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-wrapper">
            <div className="service-card">
              <h3>1. UI/UX Design</h3>
              <p>
                Creating intuitive and engaging user interfaces and experiences
                through research and design.
              </p>
              <ul>
                <li>
                  <a href="#">User Research</a>
                </li>
                <li>
                  <a href="#">Prototyping</a>
                </li>
                <li>
                  <a href="#">Interaction Design</a>
                </li>
                <li>
                  <a href="#">Wireframing</a>
                </li>
                <li>
                  <a href="#">Visual Design</a>
                </li>
              </ul>
              <Link
                className="primary-btn2 btn-hover"
                href="/service-details"
              >
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

            <div className="service-card">
              <h3>2. App Development</h3>
              <p>
                Developing mobile applications for various platforms to enhance
                user engagement and functionality.
              </p>
              <ul>
                <li>
                  <a href="#">IOS</a>
                </li>
                <li>
                  <a href="#">Android</a>
                </li>
                <li>
                  <a href="#">Cross-Platform Apps</a>
                </li>
                <li>
                  <a href="#">Maintenance</a>
                </li>
                <li>
                  <a href="#">User Testing</a>
                </li>
              </ul>
              <Link
                className="primary-btn2 btn-hover"
                href="/service-details"
              >
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

            <div className="service-card">
              <h3>3. SEO</h3>
              <p>
                Optimizing websites to rank higher on search engines and attract
                more organic traffic.
              </p>
              <ul>
                <li>
                  <a href="#">Keyword Research</a>
                </li>
                <li>
                  <a href="#">On-Page SEO</a>
                </li>
                <li>
                  <a href="#">Off-Page SEO</a>
                </li>
                <li>
                  <a href="#">Content Optimization</a>
                </li>
                <li>
                  <a href="#">Technical SEO</a>
                </li>
              </ul>
              <Link
                className="primary-btn2 btn-hover"
                href="/service-details"
              >
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

            <div className="service-card">
              <h3>4. Web Development</h3>
              <p>
                Building and maintaining websites to ensure optimal performance
                and user experience.
              </p>
              <ul>
                <li>
                  <a href="#">Frontend</a>
                </li>
                <li>
                  <a href="#">Backend</a>
                </li>
                <li>
                  <a href="#">Full-Stack</a>
                </li>
                <li>
                  <a href="#">E-Commerce</a>
                </li>
                <li>
                  <a href="#">Custom solutions</a>
                </li>
              </ul>
              <Link
                className="primary-btn2 btn-hover"
                href="/service-details"
              >
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

            <div className="service-card">
              <h3>5. Cloud Service</h3>
              <p>
                Providing scalable cloud solutions to enhance business agility
                and performance.
              </p>
              <ul>
                <li>
                  <a href="#">Migration</a>
                </li>
                <li>
                  <a href="#">Management</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">DevOps</a>
                </li>
              </ul>
              <Link
                className="primary-btn2 btn-hover"
                href="/service-details"
              >
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

            <div className="service-card">
              <h3>6. Cyber Security</h3>
              <p>
                Protecting systems, networks, and programs from digital attacks.
              </p>
              <ul>
                <li>
                  <a href="#">Vulnerability Assessment</a>
                </li>
                <li>
                  <a href="#">Penetration Testing</a>
                </li>
                <li>
                  <a href="#">Threat Intelligence</a>
                </li>
                <li>
                  <a href="#">Security Audits</a>
                </li>
                <li>
                  <a href="#">Incident Response</a>
                </li>
              </ul>
              <Link
                className="primary-btn2 btn-hover"
                href="/service-details"
              >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Home2ServicesSection;
