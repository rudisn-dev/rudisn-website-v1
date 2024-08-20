import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import { baseUrl, getSharableLinks } from "../../../../../data/data";
import { PortableText } from "next-sanity";
import { SanityImage } from "@/components/common/SanityImage";
import Head from "next/head";
import ContactForm from "@/app/(client)/contact/_components/ContactForm";

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

  if (!blogData || !seo) {
    return <></>;
  }

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
                  alt="Main Cover"
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
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="comment-and-form-area">
                    <div className="inquiry-form">
                      <ContactForm />
                    </div>
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

export default BlogDetail;
