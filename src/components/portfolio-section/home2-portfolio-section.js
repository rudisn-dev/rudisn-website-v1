import Link from 'next/link'
import React from 'react'

const Home2PortfolioSection = () => {
  return (
    <div className="home2-portfolio-section mb-130">
    <div className="container-lg container-fluid">
      <div className="row mb-60">
        <div className="col-lg-12">
          <div className="section-title text-animation">
            <h2>Work <span>22</span></h2>
            <div className="dash-and-paragraph three">
              <div className="dash" />
              <div className="btn-and-paragraph">
                <Link href="/portfolio-manonery">Explore More
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                    </path>
                  </svg>
                </Link>
                <p>Offer a wide range of services to help businesses establish and enhance their
                  online
                  presence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row gy-lg-5 g-4 justify-content-between">
        <div className="col-lg-6 col-md-6">
          <div className="portfolio-card magnetic-item">
            <div className="image-and-tag">
              <ul className="tag">
                <li><Link href="/portfolio-manonery">Logo</Link></li>
                <li><Link href="/portfolio-manonery">Color</Link></li>
                <li><Link href="/portfolio-manonery">Typography</Link></li>
              </ul>
              <div className="portfolio-img">
                <img src="assets/img/home2/portfolio-01.jpg" alt="" />
                <Link className="details-btn" href="/portfolio-details">
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="portfolio-content">
              <h4><Link href="/portfolio-details">Smart Design, Smarter Solutions.</Link></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="portfolio-card magnetic-item">
            <div className="image-and-tag">
              <ul className="tag">
                <li><Link href="/portfolio-manonery">Logo</Link></li>
                <li><Link href="/portfolio-manonery">Color</Link></li>
                <li><Link href="/portfolio-manonery">Typography</Link></li>
              </ul>
              <div className="portfolio-img">
                <img src="assets/img/home2/portfolio-02.jpg" alt="" />
                <Link className="details-btn" href="/portfolio-details">
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="portfolio-content">
              <h4><Link href="/portfolio-details">Where Vision Meets Technology.</Link></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-6">
          <div className="portfolio-card magnetic-item">
            <div className="image-and-tag">
              <ul className="tag">
                <li><Link href="/portfolio-manonery">Logo</Link></li>
                <li><Link href="/portfolio-manonery">Color</Link></li>
                <li><Link href="/portfolio-manonery">Typography</Link></li>
              </ul>
              <div className="portfolio-img">
                <img src="assets/img/home2/portfolio-03.jpg" alt="" />
                <Link className="details-btn" href="/portfolio-details">
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="portfolio-content">
              <h4><Link href="/portfolio-details">Studio Navigating the Digital Wave.</Link></h4>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="portfolio-card magnetic-item">
            <div className="image-and-tag">
              <ul className="tag">
                <li><Link href="/portfolio-manonery">Logo</Link></li>
                <li><Link href="/portfolio-manonery">Color</Link></li>
                <li><Link href="/portfolio-manonery">Typography</Link></li>
              </ul>
              <div className="portfolio-img">
                <img src="assets/img/home2/portfolio-04.jpg" alt="" />
                <Link className="details-btn" href="/portfolio-details">
                  <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z">
                    </path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="portfolio-content">
              <h4><Link href="/portfolio-details">NexGen Pioneering Digital Solutions.</Link></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home2PortfolioSection
