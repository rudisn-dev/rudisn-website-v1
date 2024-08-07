import React from "react";
import AllBlogsWorkflow from "./_components/allBlogsPage/AllBlogsWorkflow";
import { defaultMetaData } from "../../../../data/data";

export const metadata = {
  ...defaultMetaData,
  title: defaultMetaData.title + " | " + "Blogs",
};

function Page() {
  return <AllBlogsWorkflow />;
}

export default Page;
