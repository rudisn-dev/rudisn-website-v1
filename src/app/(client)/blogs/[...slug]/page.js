import React from "react";
import BlogDetail from "../_components/singleBlog/BlogDetail";

function Page({ params: { slug } }) {
  return <BlogDetail />;
}

export default Page;
