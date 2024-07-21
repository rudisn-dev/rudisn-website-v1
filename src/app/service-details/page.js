import Link from "next/link";
import Marquee from "react-fast-marquee";
import ServiceDetails from "@/components/services-section/service-details";

export const metadata = {
  title: "Axleo - Digital Agency Creative Portfolio Template",
  icons: {
    icon: "/assets/img/rudisn-logo.svg",
  },
};

const ServiceDetailsPage = () => {
  return (
    <>
      <div className="details-page-wrapper service-details pt-130 mb-130">
        <div className="container-lg container-fluid">
          <ServiceDetails />
          <span className="line-break" />
          <span className="line-break" />
          <span className="line-break" />
          <div className="post-tag-and-title mb-0">
            <h1 className="post-title">Email Marketing</h1>
            <ul className="post-category">
              <li>
                <a href="#">Segment</a>
              </li>
              <li>
                <a href="#">Audience</a>
              </li>
              <li>
                <a href="#">Automation</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>
          <span className="line-break" />
          <span className="line-break" />
          <span className="line-break" />
          <div className="details-page-content mb-130">
            <h3>Service Overview</h3>
            <div className="row g-lg-4 gy-3">
              <div className="col-lg-6">
                <p className="first-para">
                  A s we reflect on this achievement, we look forward to
                  continuing our journey of digital innovation, creating
                  transformative solutions, and shaping the future of the
                  digital landscape. Celebrating a major milestone in digital
                  services is a significant occasion .
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  This milestone is a testament to the hard work, creativity,
                  and dedication of our incredible team and the unwavering
                  support from our clients and partners. We are grateful for the
                  trust placed in us and the collaborative efforts that have
                  fueled our success.
                </p>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <h3>Key Features</h3>
            <div className="row g-lg-4 gy-3">
              <div className="col-lg-6">
                <p>
                  As we reflect on this achievement, we look forward to
                  continuing our journey of digital innovation, creating
                  transformative solutions, and shaping the future of the
                  digital landscape. Celebrating a major milestone in digital
                  services is a significant occasion .
                </p>
              </div>
              <div className="col-lg-6">
                <p>
                  These features contribute to a robust email marketing
                  strategy, enabling businesses to send targeted, personalized,
                  and automated campaigns while ensuring compliance and
                  security. When choosing an email marketing platform
                </p>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="row g-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="process-card">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={60}
                      height={60}
                      viewBox="0 0 60 60"
                    >
                      <path d="M57.9884 13.7966C58.9593 12.5268 58.1378 9.91272 56.1958 10.6596C51.6398 12.4521 46.9344 16.4107 43.8721 20.2945C40.6605 24.4024 40.063 29.6306 41.5568 34.5601C43.7228 41.7303 50.0713 46.4357 56.1958 50.2448C59.034 52.0374 61.5735 47.556 58.81 45.7635C54.3286 43 49.3244 39.4896 47.0838 34.5601C45.3659 30.6763 45.3659 26.2696 48.2041 22.8339C51.0423 19.4729 55.2249 17.2323 57.9884 13.7966ZM1.22465 45.7635C-1.61353 47.4813 1.00059 51.9627 3.83877 50.2448C9.96328 46.4357 16.2372 41.7303 18.4778 34.5601C19.9716 29.78 19.4488 24.5518 16.3865 20.5933C13.399 16.6347 8.54419 12.5268 3.91346 10.7343C1.97155 9.98741 1.07528 12.6015 2.12092 13.8712C4.80973 17.2323 8.84294 19.4729 11.6811 22.6846C14.6687 26.1203 14.8181 30.6016 13.0255 34.7095C10.7102 39.4896 5.63131 43 1.22465 45.7635ZM45.7394 1.17409C42.9759 5.65544 39.4655 10.6596 34.536 12.9003C30.6522 14.6181 26.2455 14.6181 22.8098 11.7799C19.3741 8.94176 17.1334 4.75917 13.6977 1.99567C12.5027 1.02471 9.88859 1.92098 10.6355 3.8629C12.428 8.41894 16.3865 13.1244 20.2704 16.1866C24.3783 19.3982 29.6065 19.9957 34.536 18.502C41.7062 16.336 46.4116 9.98741 50.2207 3.8629C51.9386 1.02471 47.5319 -1.5894 45.7394 1.17409ZM50.2207 56.22C46.4116 50.0955 41.7062 43.8216 34.536 41.5809C29.7559 40.0871 24.5277 40.6099 20.5691 43.6722C16.6106 46.6598 12.5027 51.5145 10.7102 56.1453C9.96328 58.0872 12.5774 58.9835 13.8471 57.9378C17.2081 55.249 19.4488 51.2158 22.6604 48.3776C26.0961 45.39 30.5775 45.2407 34.6854 47.0332C39.6149 49.2739 43.0506 54.278 45.8887 58.7594C47.5319 61.5976 51.9386 59.0582 50.2207 56.22Z" />
                    </svg>
                  </div>
                  <div className="process-content">
                    <h4>Management</h4>
                    <p>Gather relevant information through interviews.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="process-card two">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={60}
                      height={60}
                      viewBox="0 0 60 60"
                    >
                      <path d="M49.9998 54C49.9998 42.9552 41.0448 34.0002 30 34.0002C18.9552 34.0002 10.0002 42.9552 10.0002 54H6C6 40.746 16.746 30 30 30C43.254 30 54 40.746 54 54H49.9998ZM34.0002 6C34.0002 17.0448 42.9552 26.0004 54 26.0004V30C40.746 30 30 19.254 30 6H34.0002Z" />
                      <path d="M48 18C51.3137 18 54 15.3137 54 12C54 8.68629 51.3137 6 48 6C44.6863 6 42 8.68629 42 12C42 15.3137 44.6863 18 48 18Z" />
                      <path d="M29.9998 54.0006C34.418 54.0006 37.9996 50.4189 37.9996 46.0008C37.9996 41.5826 34.418 38.001 29.9998 38.001C25.5816 38.001 22 41.5826 22 46.0008C22 50.4189 25.5816 54.0006 29.9998 54.0006Z" />
                      <path d="M16.0002 26.0004C21.5232 26.0004 26.0004 21.5232 26.0004 16.0002C26.0004 10.4772 21.5232 6 16.0002 6C10.4772 6 6 10.4772 6 16.0002C6 21.5232 10.4772 26.0004 16.0002 26.0004Z" />
                    </svg>
                  </div>
                  <div className="process-content">
                    <h4>Email Campaign</h4>
                    <p>
                      Generate potential solutions or strategies to address.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="process-card">
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={60}
                      height={60}
                      viewBox="0 0 60 60"
                    >
                      <path d="M7.60352 23.0723H13.4092V51.4915H7.60352V23.0723ZM17.6513 23.0723H23.457V51.4915H17.6513V23.0723ZM27.2859 23.0723H33.0916V51.4915H27.2859V23.0723Z" />
                      <path d="M51.4926 30.3405C51.4926 37.1765 46.0985 42.7766 39.3416 43.11V46.7256C48.0922 46.3891 55.1077 39.1689 55.1077 30.3403C55.1077 21.2979 47.7486 13.9414 38.7033 13.9414H13.7969V17.5549H38.7035C45.7555 17.5549 51.4927 23.2904 51.4927 30.3404L51.4926 30.3405Z" />
                      <path d="M38.7041 9.05133H13.7975V12.6649H38.7041C48.4535 12.6649 56.3851 20.594 56.3851 30.3403C56.3851 39.8729 48.7973 47.6658 39.3424 48.003V51.6197C50.7909 51.2812 60 41.8655 60 30.3403C60 18.6015 50.4467 9.05133 38.7041 9.05133ZM9.47194 12.4485C9.47194 9.8381 7.34743 7.71436 4.73603 7.71436C2.12463 7.71436 0 9.8381 0 12.4485C0 15.0589 2.12463 17.1826 4.73603 17.1826C7.34743 17.1826 9.47194 15.0589 9.47194 12.4485Z" />
                    </svg>
                  </div>
                  <div className="process-content">
                    <h4>Automation</h4>
                    <p>
                      Provide training and support to help the client's team.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="process-card two">
                  <div className="icon">
                    <svg
                      width={60}
                      height={60}
                      viewBox="0 0 60 60"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 0H20.3521V31.921C20.3521 32.6307 20.3459 33.3051 20.3401 33.9487C20.3186 36.2948 20.3009 38.2315 20.5993 39.978C20.9517 42.0403 21.7205 43.6087 23.4602 44.8949L23.4618 44.8961C24.9098 45.969 27.3447 46.5838 29.9541 46.5691C32.5885 46.5543 34.835 45.9034 35.9411 45.039C37.2943 43.9818 37.9294 42.8817 38.2727 41.1263C38.648 39.2074 38.648 36.6636 38.6479 32.7092V0H54L54 31.295C54.0004 37.0178 54.0007 42.4934 52.5385 47.0765C50.9848 51.9468 47.8116 55.7624 41.7715 58.1757C38.3488 59.5432 33.5429 60.0627 29.0549 59.994C24.5788 59.9256 20.0268 59.2656 17.1183 58.0041C11.1449 55.4146 8.01404 51.4961 6.47024 46.7162C4.99975 42.1634 4.99988 36.8817 5 31.6177L5 0ZM8.94343 3.96669V31.4719C8.94343 36.9571 8.96777 41.6113 10.2207 45.4906C11.4139 49.1848 13.7465 52.223 18.679 54.3612C20.8876 55.3193 24.8348 55.9623 29.1149 56.0278C33.3833 56.0931 37.5914 55.5776 40.3158 54.4891C45.2762 52.5073 47.5953 49.5894 48.7837 45.8644C50.0406 41.9247 50.0565 37.0443 50.0565 31.023V3.96669H42.5913V32.5569C42.5913 32.7331 42.5914 32.9076 42.5914 33.0805C42.5925 36.6902 42.5933 39.5845 42.142 41.892C41.6323 44.4981 40.5328 46.4742 38.3602 48.1716C36.2734 49.8023 33.012 50.5187 29.9761 50.5358C26.9156 50.5529 23.5183 49.8642 21.1239 48.0905M8.94343 3.96669H16.4087V31.921C16.4087 32.5127 16.4027 33.1096 16.3967 33.707C16.3725 36.1061 16.3482 38.5155 16.7129 40.6499C17.1962 43.4786 18.383 46.0633 21.1231 48.0899"
                      />
                    </svg>
                  </div>
                  <div className="process-content">
                    <h4>Social Integration</h4>
                    <p>
                      Provide training and support to help the client's team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <span className="line-break" />
            <span className="line-break" />
            <span className="line-break" />
            <div className="row g-4">
              <div className="col-lg-6">
                <img
                  src="/assets/img/innerpage/service-details-page-img1.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6">
                <img
                  src="/assets/img/innerpage/service-details-page-img2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="details-navigation two">
            <div className="single-navigation">
              <a className="arrow" href="#blog-details">
                <svg
                  width={7}
                  height={14}
                  viewBox="0 0 8 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 6.50008L8 0L2.90909 6.50008L8 13L0 6.50008Z" />
                </svg>
                Prev
              </a>
              <div className="content">
                <h6>
                  <a href="blog-details">Graphics Design</a>
                </h6>
              </div>
            </div>
            <div className="single-navigation two text-end">
              <div className="content">
                <h6>
                  <a href="blog-details">UI/UX Design</a>
                </h6>
              </div>
              <a className="arrow" href="blog-details">
                Next
                <svg
                  width={7}
                  height={14}
                  viewBox="0 0 8 13"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 6.50008L0 0L5.09091 6.50008L0 13L8 6.50008Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="service-details-faq-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-70">
            <div className="col-lg-4">
              <div className="sub-title2 text-animation">
                <h6>FAQ’s</h6>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="section-title">
                <div className="text-animation">
                  <h2>Aksked &amp; Question</h2>
                </div>
                <div className="dash-and-paragraph">
                  <div className="dash" />
                  <div className="paragraph-and-btn">
                    <div className="text-animation">
                      <p>
                        The specific goals of a marketing agency can vary
                        depending on the client's needs, industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-wrap">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="single-faq">
                  <h6>1. What services does your agency offer?</h6>
                  <p>
                    Provide an overview of the primary digital services your
                    agency specializes in, such as digital marketing, web
                    development, design, etc. Feel free to customize these based
                    on the specific services, policies, and practices.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-faq">
                  <h6>2. What industries does your agency work with?</h6>
                  <p>
                    Provide an overview of the primary digital services your
                    agency specializes in, such as digital marketing, web
                    development, design, etc. Feel free to customize these based
                    on the specific services, policies, and practices.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-faq">
                  <h6>
                    3. What sets your agency apart from others in the industry?
                  </h6>
                  <p>
                    Provide an overview of the primary digital services your
                    agency specializes in, such as digital marketing, web
                    development, design, etc. Feel free to customize these based
                    on the specific services, policies, and practices.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="single-faq">
                  <h6>4. What is your pricing structure or payment process?</h6>
                  <p>
                    Provide an overview of the primary digital services your
                    agency specializes in, such as digital marketing, web
                    development, design, etc. Feel free to customize these based
                    on the specific services, policies, and practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="section-title text-animation">
                <h2>
                  Let’s <span>TALK</span>
                </h2>
                <div className="dash-and-paragraph">
                  <div className="dash" />
                  <div className="content-and-social">
                    <p>
                      Crafting a contact text for a digital agency involves
                      providing essential information for potential clients or
                      collaborators to reach out.
                    </p>
                    <div className="social-area">
                      <h6>Connect Us</h6>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={6}
                        viewBox="0 0 50 6"
                      >
                        <path d="M50 3L45 0.113249V5.88675L50 3ZM0 3.5H45.5V2.5H0V3.5Z" />
                      </svg>
                      <ul>
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="bi bi-twitter-x" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram-alt" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-lg-flex justify-content-end align-items-center text-animation">
              <div className="btn_wrapper">
                <Link className="circle-btn btn-hover" href="/contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                  </svg>{" "}
                  Contact <strong>Now</strong>
                  <span style={{ top: "50.5px", left: "83.75px" }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-slider-section two">
        <div className="marquee">
          <div className="marquee__group">
            <Marquee>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                >
                  <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
                </svg>{" "}
                DIGITAL PRODUCT
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                UI/UX DESIGN
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                DIGITAL STUDIO
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                >
                  <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
                </svg>
                BRANDING DESIGN
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                UI/UX DESIGN
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                EMAIL MARKETING
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                >
                  <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
                </svg>
                BRANDING DESIGN
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                UI/UX DESIGN
              </span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
                </svg>
                EMAIL MARKETING
              </span>
            </Marquee>
          </div>
          <div className="marquee__group">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>{" "}
              DIGITAL PRODUCT
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              DIGITAL STUDIO
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              EMAIL MARKETING
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
              >
                <path d="M20 9.47811L26.1809 0L25.8767 11.4983L36.1889 7.6431L29.5116 16.7508L40 20L29.5116 23.2492L36.1889 32.3569L25.8767 28.5017L26.1809 40L20 30.5219L13.8191 40L14.1233 28.5017L3.82706 32.3569L10.4884 23.2492L0 20L10.4884 16.7508L3.82706 7.6431L14.1233 11.4983L13.8191 0L20 9.47811Z" />
              </svg>
              BRANDING DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              UI/UX DESIGN
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
              >
                <circle cx="8.5" cy="8.5" r={8} stroke="#1A1A1A" />
              </svg>
              EMAIL MARKETING
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsPage;
