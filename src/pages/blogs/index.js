import AllBlogsWorkflow from "./_components/allBlogsPage/AllBlogsWorkflow";
import { defaultMetaData } from "../../../data/data";

export const metadata = {
  ...defaultMetaData,
  title: defaultMetaData.title + " | " + "Blogs",
};

function Index() {
  return <AllBlogsWorkflow />;
}

export default Index;
