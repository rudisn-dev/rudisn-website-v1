import Breadcrumb from "@/components/common/Breadcrumb";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Pagination from "./Pagination";
import Blogs from "./Blogs";

const AllBlogsWorkflow = () => {
  return (
    <>
      <Breadcrumb bgImg="3" title2="SMART SERVICE" title="WE PROVIDE" />
      <div className="blog-grid-section pt-130 mb-130">
        <div className="container-lg container-fluid">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <Blogs />
              <Pagination />
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBlogsWorkflow;
