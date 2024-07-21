import Link from "next/link";
import React from "react";

const Footer2 = () => {
  return (
    <>
      <footer className="style-2">
        <div className="container-lg container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-top">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="footer-logo-contact-wrap">
                      <div className="footer-logo">
                        <Link href="/">
                          <img
                            src="assets/img/rudisn-logo.svg"
                            alt="footer-logo"
                          />
                        </Link>
                      </div>
                      <ul className="footer-contact">
                        <li className="single-contact">
                          <span>Phone</span>
                          <h5>
                            <a href="tel:+919075274002">+91 90752 74002</a>
                          </h5>
                        </li>
                        <li className="single-contact">
                          <span>Email Now</span>
                          <h5>
                            <a href="mailto:rudisn2002@gmail.com">
                              rudisn2002@gmail.com
                            </a>
                          </h5>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-btm">
                <div className="copyright-area">
                  <p>
                    Copyright {new Date().getFullYear()}{" "}
                    <Link href="/">Rudisn</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
