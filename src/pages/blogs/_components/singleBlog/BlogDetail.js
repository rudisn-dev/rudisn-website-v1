import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { baseUrl, getSharableLinks } from "../../../../../data/data";
import { PortableText } from "next-sanity";
import { SanityImage } from "@/components/common/SanityImage";
import Head from "next/head";

const myPortableTextComponents = {
  types: {
    image: ({ value }) => {
      return <SanityImage {...value} />;
    },
  },
};

const BlogDetail = ({ blogData, seo }) => {
  const title = blogData?.title;
  const authorName = blogData?.author?.name;
  const authorImage = blogData?.author?.image;

  const blogPath = baseUrl + "/blogs/" + blogData?.slug;

  const sharableLinks = getSharableLinks(blogPath, title);

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content={seo.author} />
        <link rel="canonical" href={seo.canonical} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        <meta property="og:url" content={seo.openGraph.url} />
        <meta property="og:site_name" content={seo.openGraph.site_name} />
        <meta property="og:image" content={seo.openGraph.image} />
        <meta property="og:type" content={seo.openGraph.type} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={seo.twitter.card} />
        <meta name="twitter:site" content={seo.twitter.site} />
        <meta name="twitter:title" content={seo.twitter.title} />
        <meta name="twitter:description" content={seo.twitter.description} />
        <meta name="twitter:image" content={seo.twitter.image} />

        {/* Icons */}
        <link rel="icon" href={seo.icons.icon} />
        <link rel="apple-touch-icon" href={seo.icons.appleTouchIcon} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={seo.icons.favicon32}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={seo.icons.favicon16}
        />
        <link
          rel="mask-icon"
          href={seo.icons.maskIcon}
          color={seo.icons.themeColor}
        />
        <meta name="theme-color" content={seo.icons.themeColor} />
      </Head>
      <div className="details-page-wrapper pt-130 pb-130">
        <div className="container-lg container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="post-tag-and-title">
                <div className="post-tag">
                  <svg
                    width={203}
                    height={33}
                    viewBox="0 0 203 33"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 16.5H201M201 16.5C196.333 15 187 9.8 187 1M201 16.5C196.333 18 187 23.2 187 32"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>{blogData?.category?.join(", ")}</span>
                </div>
                <h1 className="post-title">{title}</h1>
              </div>
              <span className="line-break" />
              <span className="line-break" />
              <span className="line-break" />
              <div className="post-author-meta">
                <div className="author-and-date">
                  <div className="author-area">
                    <div className="author-img">
                      <img src={authorImage} alt={authorName} />
                    </div>
                    <div className="author-name-desig">
                      <span>Admin</span>
                      <h6>
                        <Link href="#">{authorName}</Link>
                      </h6>
                    </div>
                  </div>
                  <div className="date">
                    <span>Date</span>
                    <h6>{dayjs(blogData?.date).format("DD MMMM, YYYY")}</h6>
                  </div>
                </div>
                <div className="social-area d-sm-flex d-none">
                  <h6>Share:</h6>
                  <ul className="social-link">
                    {sharableLinks.map((data, index) => {
                      return (
                        <li key={index}>
                          <a
                            href={data.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={data.type + " Link"}
                          >
                            {data.icon}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              <span className="line-break" />
              <span className="line-break" />
              <span className="line-break" />

              <div className="post-thumb">
                <img
                  src={blogData?.mainCoverImage}
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </div>

              <span className="line-break" />
              <span className="line-break" />
              <span className="line-break" />

              <div className="custom-blog-section">
                <PortableText
                  value={blogData?.body}
                  components={myPortableTextComponents}
                />
                <span className="line-break" />
                <span className="line-break" />
                <span className="line-break" />
                {/* <div className="row mb-70">
                  <div className="col-lg-12 d-flex justify-content-sm-center justify-content-start flex-wrap gap-3">
                    <div className="blog-tag">
                      <h6>Tag:</h6>
                      <ul>
                        <li>
                          <a href="blog-standard">Industry,</a>
                        </li>
                        <li>
                          <a href="blog-standard">Marketing,</a>
                        </li>
                        <li>
                          <a href="blog-standard">Technology,</a>
                        </li>
                        <li>
                          <a href="blog-standard">Health Care</a>
                        </li>
                      </ul>
                    </div>
                    <div className="social-area d-sm-none d-flex">
                      <h6>Share:</h6>
                      <ul className="social-link">
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="bx bxl-facebook" />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/">
                            <i className="bx bxl-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.pinterest.com/">
                            <i className="bx bxl-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="bx bxl-instagram" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}
                {/* <div className="row">
                  <div className="col-lg-12">
                    <div className="details-navigation">
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
                            <a href="blog-details">
                              The Art and Science of Digital Marketing.
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="single-navigation two text-end">
                        <div className="content">
                          <h6>
                            <a href="blog-details">
                              Innovative Solutions for a Digital Tomorrow.
                            </a>
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
                </div> */}
              </div>
              {/* <div className="row">
                <div className="col-lg-12">
                  <div className="comment-and-form-area">
                    <div className="comment-area mb-70">
                      <div className="comment-title">
                        <h4>Comments (02)</h4>
                      </div>
                      <ul className="comment">
                        <li>
                          <div className="single-comment-area">
                            <div className="author-img">
                              <img
                                src="assets/img/innerpage/comment-author-01.jpg"
                                alt=""
                              />
                            </div>
                            <div className="comment-content">
                              <div className="author-name-deg">
                                <h6>Mr. Bowmik Haldar,</h6>
                                <span>05 June, 2023</span>
                              </div>
                              <p>
                                However, here are some well-regarded car
                                dealerships known for their customer service,
                                inventory, and overall reputation. It's always a
                                good idea to research and read reviews
                                specific...
                              </p>
                              <div className="replay-btn">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={14}
                                  height={11}
                                  viewBox="0 0 14 11"
                                >
                                  <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z"></path>
                                </svg>
                                Reply (01)
                              </div>
                            </div>
                          </div>
                          <ul className="comment-replay">
                            <li>
                              <div className="single-comment-area">
                                <div className="author-img">
                                  <img
                                    src="assets/img/innerpage/comment-author-02.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="comment-content">
                                  <div className="author-name-deg">
                                    <h6>Jacoline Juie,</h6>
                                    <span>05 June, 2023</span>
                                  </div>
                                  <p>
                                    However, here are some well-regarded car
                                    dealerships known for their customer
                                    service, inventory, and overall reputation.
                                    It's always a good idea to research and read
                                    reviews specific...
                                  </p>
                                  <div className="replay-btn">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={14}
                                      height={11}
                                      viewBox="0 0 14 11"
                                    >
                                      <path d="M8.55126 1.11188C8.52766 1.10118 8.50182 1.09676 8.47612 1.09903C8.45042 1.1013 8.42569 1.11018 8.40419 1.12486C8.3827 1.13954 8.36513 1.15954 8.35311 1.18304C8.34109 1.20653 8.335 1.23276 8.33539 1.25932V2.52797C8.33539 2.67388 8.2791 2.81381 8.17889 2.91698C8.07868 3.02016 7.94277 3.07812 7.80106 3.07812C7.08826 3.07812 5.64984 3.08362 4.27447 3.98257C3.2229 4.66916 2.14783 5.9191 1.50129 8.24735C2.59132 7.16575 3.83632 6.57929 4.92635 6.2679C5.59636 6.07737 6.28492 5.96444 6.97926 5.93121C7.26347 5.91835 7.54815 5.92129 7.83205 5.94001H7.84594L7.85129 5.94111L7.80106 6.48906L7.85449 5.94111C7.98638 5.95476 8.10864 6.01839 8.19751 6.11966C8.28638 6.22092 8.33553 6.35258 8.33539 6.48906V7.75771C8.33539 7.87654 8.45294 7.95136 8.55126 7.90515L12.8088 4.67796C12.8233 4.66692 12.8383 4.65664 12.8537 4.64715C12.8769 4.63278 12.8962 4.61245 12.9095 4.58816C12.9229 4.56386 12.9299 4.53643 12.9299 4.50851C12.9299 4.4806 12.9229 4.45316 12.9095 4.42887C12.8962 4.40458 12.8769 4.38425 12.8537 4.36988C12.8382 4.36039 12.8233 4.35011 12.8088 4.33907L8.55126 1.11188ZM7.26673 7.02381C7.19406 7.02381 7.11391 7.02711 7.02842 7.03041C6.56462 7.05242 5.92342 7.12504 5.21169 7.32859C3.79464 7.7335 2.11684 8.65116 1.00115 10.7175C0.940817 10.8291 0.844683 10.9155 0.729224 10.9621C0.613765 11.0087 0.486168 11.0124 0.368304 10.9728C0.250441 10.9331 0.149648 10.8525 0.0831985 10.7447C0.0167484 10.6369 -0.011219 10.5086 0.0040884 10.3819C0.499949 6.29981 2.01959 4.15202 3.70167 3.05391C5.03215 2.18467 6.40218 2.01743 7.26673 1.98552V1.25932C7.26663 1.03273 7.32593 0.810317 7.43839 0.615545C7.55084 0.420773 7.71227 0.260866 7.90565 0.152696C8.09902 0.0445258 8.31717 -0.00789584 8.53707 0.000962485C8.75698 0.00982081 8.97048 0.0796305 9.15506 0.203025L13.4233 3.43792C13.5998 3.55133 13.7453 3.7091 13.8462 3.8964C13.9471 4.08369 14 4.29434 14 4.50851C14 4.72269 13.9471 4.93333 13.8462 5.12063C13.7453 5.30792 13.5998 5.4657 13.4233 5.57911L9.15506 8.814C8.97048 8.9374 8.75698 9.00721 8.53707 9.01607C8.31717 9.02492 8.09902 8.9725 7.90565 8.86433C7.71227 8.75616 7.55084 8.59626 7.43839 8.40148C7.32593 8.20671 7.26663 7.9843 7.26673 7.75771V7.02381Z"></path>
                                    </svg>
                                    Reply
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="inquiry-form">
                      <div className="title">
                        <h4>Leave Your Comment:</h4>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label>Your Name* :</label>
                              <input type="text" placeholder="Jackson Mile" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label>Your Email* :</label>
                              <input
                                type="email"
                                placeholder="example@gamil.com"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-25">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="contactCheck"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="contactCheck"
                              >
                                Please save my name, email address for the next
                                time I comment.
                              </label>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-inner mb-50">
                              <label>Your Message :</label>
                              <textarea
                                placeholder="Write Something..."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-inner">
                          <button
                            className="primary-btn3 btn-hover"
                            type="submit"
                          >
                            Post Comment
                            <span style={{ top: "50.5px", left: "83.75px" }} />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
