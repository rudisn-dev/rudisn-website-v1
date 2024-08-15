import React from "react";
import Link from "next/link";

function Sidebar() {
  return (
    <div className="col-lg-4">
      <div className="blog-sidebar">
        <div className="single-widgets widget_search mb-40">
          <form>
            <div className="wp-block-search__inside-wrapper ">
              <input
                type="search"
                id="wp-block-search__input-1"
                className="wp-block-search__input"
                name="s"
                defaultValue
                placeholder="Search..."
                required
              />
              <button type="submit" className="wp-block-search__button">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.7425 10.3418C12.7107 9.0205 13.1444 7.38236 12.9567 5.75508C12.769 4.1278 11.9739 2.63139 10.7303 1.56522C9.48666 0.49905 7.88635 -0.0582469 6.2495 0.0048239C4.61265 0.0678947 3.05997 0.746681 1.90209 1.90538C0.744221 3.06409 0.0665459 4.61725 0.00464636 6.25415C-0.0572531 7.89104 0.501188 9.49095 1.56825 10.7338C2.63531 11.9766 4.13229 12.7707 5.7597 12.9572C7.38711 13.1438 9.02494 12.7089 10.3455 11.7397H10.3445C10.3745 11.7797 10.4065 11.8177 10.4425 11.8547L14.2924 15.7046C14.4799 15.8922 14.7342 15.9977 14.9995 15.9977C15.2647 15.9978 15.5192 15.8926 15.7068 15.7051C15.8944 15.5176 15.9999 15.2632 16 14.9979C16.0001 14.7327 15.8948 14.4782 15.7073 14.2906L11.8575 10.4408C11.8217 10.4046 11.7833 10.3711 11.7425 10.3408V10.3418ZM12.0004 6.4979C12.0004 7.22015 11.8582 7.93532 11.5818 8.60258C11.3054 9.26985 10.9003 9.87614 10.3896 10.3868C9.87889 10.8975 9.2726 11.3027 8.60533 11.5791C7.93807 11.8554 7.2229 11.9977 6.50065 11.9977C5.77841 11.9977 5.06324 11.8554 4.39597 11.5791C3.72871 11.3027 3.12242 10.8975 2.61171 10.3868C2.10101 9.87614 1.6959 9.26985 1.41951 8.60258C1.14312 7.93532 1.00086 7.22015 1.00086 6.4979C1.00086 5.03927 1.5803 3.64037 2.61171 2.60896C3.64312 1.57755 5.04202 0.99811 6.50065 0.99811C7.95929 0.99811 9.35818 1.57755 10.3896 2.60896C11.421 3.64037 12.0004 5.03927 12.0004 6.4979Z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="single-widgets widget_egns_categoris mb-40">
          <div className="widget-title">
            <h4>Category:</h4>
          </div>
          <ul className="wp-block-categoris-cloud">
            <li>
              <Link href="/blog-standard">
                <span>Technology</span> <span>(02)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog-standard">
                <span>Marketing</span> <span>(04)</span>{" "}
              </Link>
            </li>
            <li>
              <Link href="/blog-standard">
                <span>Fintech</span> <span>(06)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog-standard">
                <span>Health &amp; Care</span> <span>(02)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog-standard">
                <span>Human Resource</span> <span>(03)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog-standard">
                <span>Corporate</span> <span>(04)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog-standard">
                <span>Mobile Banking</span> <span>(03)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="single-widgets widget_egns_recent_post mb-40">
          <div className="widget-title">
            <h4>Recent Blogs:</h4>
          </div>
          <div className="recent-post-wraper">
            <div className="widget-cnt">
              <div className="wi">
                <Link href="/blog-details">
                  <img
                    src="assets/img/innerpage/blog-sidebar-1.jpg"
                    alt="image"
                  />
                </Link>
              </div>
              <div className="wc">
                <Link href="/blog-standard">07 January, 2024 / Marko</Link>
                <h5>
                  <Link href="/blog-details">
                    The Power of Visual Storytelling in Marketing
                  </Link>
                </h5>
              </div>
            </div>
            <div className="widget-cnt">
              <div className="wi">
                <Link href="/blog-details">
                  <img
                    src="assets/img/innerpage/blog-sidebar-2.jpg"
                    alt="image"
                  />
                </Link>
              </div>
              <div className="wc">
                <Link href="/blog-standard">13 January, 2024 / Noure</Link>
                <h5>
                  <Link href="/blog-details">
                    {" "}
                    A Journey through Creative Excellence
                  </Link>
                </h5>
              </div>
            </div>
            <div className="widget-cnt">
              <div className="wi">
                <Link href="/blog-details">
                  <img
                    src="assets/img/innerpage/blog-sidebar-3.jpg"
                    alt="image"
                  />
                </Link>
              </div>
              <div className="wc">
                <Link href="/blog-standard">0 February, 2024 / Barlow</Link>
                <h5>
                  <Link href="/blog-details">
                    Strategies for a Standout Identity
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="single-widgets widget_egns_tag">
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
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
