import React from "react";
import Link from "next/link";
import dayjs from "dayjs";

function Sidebar({ recentPosts }) {
  return (
    <div className="col-lg-4">
      <div className="blog-sidebar">
        <div className="single-widgets widget_egns_recent_post mb-40">
          <div className="widget-title">
            <h4>Recent Blogs:</h4>
          </div>
          <div className="recent-post-wraper">
            {recentPosts?.map((post, index) => {
              const url = "/blogs/" + post?.slug;
              return (
                <div key={index} className="widget-cnt">
                  <div className="wi">
                    <Link href={url}>
                      <img src={post?.mainCoverImage} alt="image" style={{objectFit:"cover"}} />
                    </Link>
                  </div>
                  <div className="wc">
                    <Link href={url}>
                      {dayjs(post?.date).format("DD MMMM, YYYY")} /{" "}
                      {post?.author?.name}
                    </Link>
                    <h5>
                      <Link href={url}>{post?.title}</Link>
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="single-widgets widget_egns_tag">
          <div className="widget-title">
            <h4>Tag:</h4>
          </div>
          <p className="wp-block-tag-cloud">
            <Link href="/blog-standard">Technology,</Link>
            <Link href="/blog-standard">Marketing,</Link>
            <Link href="/blog-standard">Fintech,</Link>
            <Link href="/blog-standard">Health,</Link>
            <Link href="/blog-standard">SEO Marketing,</Link>
            <Link href="/blog-standard">Development,</Link>
            <Link href="/blog-standard">Corporate,</Link>
            <Link href="/blog-standard">Human,</Link>
            <Link href="/blog-standard">Agency,</Link>
            <Link href="/blog-standard">Resources,</Link>
            <Link href="/blog-standard">Tech.</Link>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
