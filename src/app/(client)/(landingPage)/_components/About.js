"use client";
import useScrollZoomAnimationImg from "@/hooks/useScrollZoomAnimationImg";
import Link from "next/link";
import React from "react";
import CountUp from "react-countup";
import { aboutUsData } from "../../../../../data/data";
import Image from "next/image";

const About = () => {
  useScrollZoomAnimationImg();
  return (
    <>
      <div className="home2-about-section mb-130">
        <div className="container-lg container-fluid">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title three text-animation">
                <h2>
                  ABOUT OUR
                  <br />
                  <span>AGENCY</span>
                </h2>
                <div className="dash-and-paragraph three">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                    <path d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z" />
                  </svg>
                  <div className="btn-and-paragraph">
                    <p>{aboutUsData.aboutUs}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-5">
              <div className="counter-and-btn">
                <ul className="counter-wrap">
                  <li className="single-counter">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <path d="M58.3331 63C58.3331 50.1144 47.8856 39.6669 35 39.6669C22.1144 39.6669 11.6669 50.1144 11.6669 63H7C7 47.537 19.537 35 35 35C50.463 35 63 47.537 63 63H58.3331ZM39.6669 7C39.6669 19.8856 50.1144 30.3338 63 30.3338V35C47.537 35 35 22.463 35 7H39.6669Z" />
                        <path d="M56 21C59.866 21 63 17.866 63 14C63 10.134 59.866 7 56 7C52.134 7 49 10.134 49 14C49 17.866 52.134 21 56 21Z" />
                        <path
                          d="M35.0001 63.0007C40.1546 63.0007 44.3332 58.8221 44.3332 53.6676C44.3332 48.513 40.1546 44.3345 35.0001 44.3345C29.8456 44.3345 25.667 48.513 25.667 53.6676C25.667 58.8221 29.8456 63.0007 35.0001 63.0007Z"
                          fill="#F5BEBE"
                        />
                        <path
                          d="M18.6669 30.3338C25.1104 30.3338 30.3338 25.1104 30.3338 18.6669C30.3338 12.2234 25.1104 7 18.6669 7C12.2234 7 7 12.2234 7 18.6669C7 25.1104 12.2234 30.3338 18.6669 30.3338Z"
                          fill="#F5BEBE"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <div className="number">
                        <h3 className="counter">
                          <CountUp end={aboutUsData.totalProjects} />
                        </h3>
                        <span>+</span>
                      </div>
                      <p>Delivered Software Projects.</p>
                    </div>
                  </li>
                  <li className="single-counter">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <path d="M64.3529 46.3883L60.521 44.9041C59.9731 46.3175 59.3088 47.683 58.5349 48.9865L62.0681 51.0853C62.9586 49.5856 63.7228 48.0146 64.3529 46.3883ZM51.1152 62.079L49.0036 58.553C47.7033 59.3319 46.3405 60.0012 44.9292 60.5541L46.4277 64.3812C48.0511 63.7445 49.619 62.9746 51.1152 62.079ZM59.0406 55.3386L55.9009 52.6869C54.9218 53.8456 53.8493 54.9221 52.6944 55.9057L55.3568 59.0359C56.6839 57.9064 57.916 56.6698 59.0406 55.3386ZM64.3235 23.5375C63.6889 21.9136 62.9208 20.3451 62.0271 18.8481L58.4991 20.9553C59.276 22.2566 59.9435 23.6202 60.4949 25.0319L64.3235 23.5375ZM55.2969 10.9151L52.6415 14.0521C53.7992 15.0323 54.8743 16.106 55.8561 17.2623L58.9899 14.6034C57.8619 13.275 56.6267 12.0415 55.2969 10.9151ZM46.3545 5.59211L44.8656 9.42297C46.2783 9.97264 47.6428 10.6386 48.9453 11.4139L51.0485 7.8827C49.5499 6.9906 47.9798 6.22444 46.3545 5.59211ZM23.5895 5.55957C21.9504 6.19188 20.367 6.96019 18.856 7.85645L20.9533 11.3909C22.2666 10.6117 23.6429 9.94378 25.0677 9.39412L23.5895 5.55957ZM17.226 14.0452L14.5723 10.9071C13.2319 12.0413 11.9878 13.2845 10.8526 14.6242L13.988 17.2806C14.9761 16.1145 16.0591 15.0323 17.226 14.0452ZM5.49707 23.638L9.33066 25.119C9.88163 23.6946 10.5506 22.3187 11.3306 21.0056L7.79777 18.9062C6.9004 20.4166 6.13082 21.9994 5.49707 23.638ZM14.644 59.155L17.2885 56.0093C16.1183 55.0251 15.0317 53.9457 14.0398 52.782L10.9115 55.4477C12.0512 56.7844 13.2996 58.0243 14.644 59.155ZM25.1482 60.6385C23.7209 60.0931 22.3417 59.4291 21.0253 58.6533L18.9393 62.1944C20.4538 63.0865 22.0404 63.8503 23.6823 64.4778L25.1482 60.6385ZM11.3706 49.0629C10.5865 47.7515 9.91332 46.3768 9.35828 44.9532L5.52906 46.4454C6.16754 48.0828 6.94179 49.664 7.84371 51.1724L11.3706 49.0629Z" />
                        <rect x={29} width={12} height={11} fill="#8FBEF5" />
                        <rect
                          x={58}
                          y={29}
                          width={12}
                          height={11}
                          fill="#8FBEF5"
                        />
                        <rect y={29} width={12} height={11} fill="#8FBEF5" />
                        <rect
                          x={29}
                          y={59}
                          width={12}
                          height={11}
                          fill="#8FBEF5"
                        />
                      </svg>
                    </div>
                    <div className="content">
                      <div className="number">
                        <h3 className="counter">
                          <CountUp end={100} />
                        </h3>
                        <span>%</span>
                      </div>
                      <p>Service Satisfaction Guarentee.</p>
                    </div>
                  </li>
                  <li className="single-counter">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={70}
                        height={70}
                        viewBox="0 0 70 70"
                      >
                        <path
                          d="M27.1432 57.7834L21.1707 57.8162C24.3661 59.2642 26.5889 61.1645 27.7981 63.4905C28.5755 64.9858 28.729 66.3076 28.7304 67.1132L37.1813 67.1174C37.0198 64.6878 35.9943 62.4288 34.2525 60.6956C32.3503 58.803 29.8283 57.7641 27.1432 57.7834ZM2.92324 32.8344L2.91162 41.3931C3.71348 41.3931 5.02775 41.5449 6.51484 42.3203C8.83264 43.5288 10.7274 45.7559 12.1728 48.9612L12.2222 42.8783C12.244 40.1935 11.215 37.6659 9.32455 35.7608C7.59752 34.0204 5.34549 32.9958 2.92324 32.8344Z"
                          fill="#F5BEBE"
                        />
                        <path d="M12.1414 52.8312C10.7623 48.2083 8.62963 45.0097 5.96977 43.5788C4.6816 42.8859 3.54984 42.7621 2.90986 42.7613L2.87842 66.1298L12.1084 56.8931L12.1414 52.8312ZM17.286 57.8376L13.0745 57.8607L3.84119 67.1008L27.3623 67.1126C27.3597 66.467 27.2334 65.3291 26.5395 64.035C25.1051 61.3596 21.9061 59.218 17.286 57.8376ZM27.1063 37.8548C25.7273 33.2322 23.5945 30.0335 20.9347 28.6027C19.6464 27.9097 18.5149 27.7861 17.8748 27.7853L17.8434 51.1541L27.0734 41.9173L27.1063 37.8548Z" />
                        <path d="M27.1874 27.9024C27.2092 25.2177 26.1802 22.69 24.2897 20.785C22.5627 19.0446 20.3107 18.0199 17.8886 17.8584L17.877 26.4171C18.6788 26.4171 19.9932 26.569 21.48 27.3442C23.7977 28.5527 25.6926 30.7797 27.138 33.9849L27.1874 27.9024ZM32.0237 42.8629L28.0397 42.8848L18.8064 52.1249L42.3035 52.1365C42.2796 51.4875 42.1165 50.3554 41.3933 49.0681C39.8878 46.3889 36.6487 44.2446 32.0237 42.8629Z" />
                        <path
                          d="M42.1085 42.8075L35.9161 42.8415C39.1209 44.2869 41.3765 46.1821 42.6415 48.5006C43.4631 50.0062 43.65 51.3361 43.6723 52.1373L52.1465 52.1415C51.985 49.712 50.9595 47.4528 49.2176 45.7196C47.3153 43.827 44.7878 42.7893 42.1085 42.8075ZM35.8999 13.6268C34.6115 12.9337 33.48 12.8101 32.84 12.8094L32.8086 36.1781L42.0386 26.9414L42.0716 22.8792C40.6923 18.2565 38.5598 15.0575 35.8999 13.6268Z"
                          fill="#F5BEBE"
                        />
                        <path
                          d="M42.1522 12.9264C42.1741 10.2416 41.145 7.71396 39.2546 5.80893C37.5276 4.0685 35.2755 3.04379 32.8534 2.88232L32.8418 11.4412C33.6437 11.4412 34.9579 11.5929 36.445 12.3683C38.7627 13.5767 40.6576 15.8038 42.1028 19.0091L42.1522 12.9264ZM47.1243 27.886L43.0046 27.9086L33.7713 37.1487L57.2825 37.1604C57.2712 36.513 57.1296 35.378 56.4248 34.0876C54.9619 31.4098 51.7464 29.2669 47.1243 27.886Z"
                          fill="#F5BEBE"
                        />
                        <path d="M57.1298 27.8314L51.0124 27.8649C54.2117 29.312 56.4476 31.2106 57.6793 33.5342C58.4735 35.0326 58.6408 36.3573 58.6509 37.1613L67.1115 37.1656C66.95 34.7359 65.9245 32.4769 64.1826 30.7437C62.2938 28.8644 59.791 27.8315 57.1298 27.8315V27.8314ZM47.189 19.8186C47.189 21.4491 48.5143 22.7756 50.1435 22.7756C51.7726 22.7756 53.0979 21.4491 53.0979 19.8186C53.0979 18.188 51.7726 16.8613 50.1435 16.8613C48.5143 16.8613 47.189 18.1879 47.189 19.8186Z" />
                        <path d="M59.3815 14.9502C60.4745 14.9502 61.3606 14.0641 61.3606 12.9711C61.3606 11.878 60.4745 10.9919 59.3815 10.9919C58.2884 10.9919 57.4023 11.878 57.4023 12.9711C57.4023 14.0641 58.2884 14.9502 59.3815 14.9502Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <div className="number">
                        <h3 className="counter">
                          <CountUp end={100} />
                        </h3>
                        <span>%</span>
                      </div>
                      <p>Highly Accredited Security.</p>
                    </div>
                  </li>
                </ul>
                {/* <Link href="/about">
                  <span className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                  </span>
                  <span className="content">About Rudisn</span>
                  <span className="icon two">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 12 12"
                    >
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z"></path>
                    </svg>
                  </span>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-sm-5">
                  <div className="about-left">
                    <div className="about-img animet-images magnetic-item">
                      <Image
                        width={336}
                        height={320}
                        src={aboutUsData.image1}
                        style={{ objectFit: "cover" }}
                        alt="Company Logo"
                      />
                    </div>
                    <p className="text-animation2">{aboutUsData.aboutUs2}</p>
                  </div>
                </div>
                <div className="col-sm-7 d-sm-flex  d-none">
                  <div className="about-right-img animet-images magnetic-item">
                    <Image
                      width={424}
                      height={534}
                      src={aboutUsData.image2}
                      style={{ objectFit: "cover" }}
                      alt="Company Name"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
