import AllBlogsWorkflow from "./_components/allBlogsPage/AllBlogsWorkflow";
import { defaultMetaData } from "../../../data/data";
import { getAllPosts, getClient } from "../../../lib/sanity.client";

export const metadata = {
  ...defaultMetaData,
  title: defaultMetaData.title + " | " + "Blogs",
};

export default function Index({ posts }) {
  return <AllBlogsWorkflow posts={posts} />;
}

export async function getStaticProps() {
  const client = getClient();

  const [posts = []] = await Promise.all([getAllPosts(client)]);

  return {
    props: {
      posts,
    },
  };
}
