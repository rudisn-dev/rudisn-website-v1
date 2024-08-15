import React from "react";
import Link from "next/link";

function Blogs() {
  return (
    <div className="row gy-5 mb-70">
      {Array.from({ length: 6 }).map((_, index) => {
        return (
          <div key={index} className="col-md-6">
            <div className="blog-card1 magnetic-item">
              <Link href="/blogs/test" className="blog-img">
                <img src="assets/img/home2/blog-img-01.jpg" alt="blog-img-01" />
              </Link>
              <div className="blog-content">
                <ul className="mete">
                  <li>
                    <Link href="/blogs">Creative Design</Link>
                  </li>
                  <li>
                    <Link href="/blogs">02 April, 2023</Link>
                  </li>
                </ul>
                <h4>
                  <Link href="/blogs/test">
                    Celebrates Major Milestone in Digital Services
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogs;
