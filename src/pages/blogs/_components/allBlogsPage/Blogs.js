import React from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

function Blogs({ posts }) {
  return (
    <div className="row gy-5 mb-70">
      {posts?.map((data, index) => {
        const detailsLink = "/blogs/" + data?.slug;
        return (
          <div key={index} className="col-md-6">
            <div className="blog-card1 magnetic-item">
              <Link href={detailsLink} className="blog-img">
                <Image
                  width={872}
                  height={389}
                  style={{ objectFit: "cover" }}
                  src={data?.mainCoverImage}
                />
              </Link>
              <div className="blog-content">
                <ul className="mete">
                  <li>{data?.category}</li>
                  <li>{dayjs(data?.date).format("DD MMMM, YYYY")}</li>
                </ul>
                <h4>
                  <Link href={detailsLink}>{data?.title}</Link>
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
