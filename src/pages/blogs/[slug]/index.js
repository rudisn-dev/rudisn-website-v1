import {
  getAllPostsSlugs,
  getClient,
  getPostAndMoreStories,
} from "../../../../lib/sanity.client";
import BlogDetail from "../_components/singleBlog/BlogDetail";

export default function ProjectSlugRoute(props) {
  const { post, morePosts } = props;
  return <BlogDetail blogData={post} morePosts={morePosts} />;
}

export const getStaticProps = async (ctx) => {
  const { params = {} } = ctx;
  const client = getClient();

  const { post, morePosts } = await getPostAndMoreStories(client, params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
      morePosts,
    },
  };
};

export const getStaticPaths = async () => {
  const slugs = await getAllPostsSlugs();

  return {
    paths: slugs?.map(({ slug }) => `/blogs/${slug}`) || [],
    fallback: "blocking",
  };
};
