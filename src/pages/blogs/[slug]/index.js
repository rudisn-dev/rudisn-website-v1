import { baseUrl, defaultMetaData, logoUrl } from "../../../../data/data";
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
} from "../../../../lib/sanity.client";
import BlogDetail from "../_components/singleBlog/BlogDetail";

export default function ProjectSlugRoute({ post, morePosts, seo }) {
  return <BlogDetail blogData={post} morePosts={morePosts} seo={seo} />;
}

export const getStaticProps = async (ctx) => {
  const { params = {} } = ctx;
  const { post, morePosts } = await getPostAndMoreStories(params.slug);

  if (!post) {
    return { notFound: true };
  }

  const description =
    post.body?.[0]?.children?.[0]?.text || defaultMetaData.description;
  const keywords =
    [...(post.category || []).map((category) => category.title)].join(", ") ||
    defaultMetaData.keywords;

  const seo = {
    ...defaultMetaData,
    title: post.title || defaultMetaData.title,
    description,
    keywords,
    canonical: `${baseUrl}/blogs/${post.slug}`,
    openGraph: {
      ...defaultMetaData.openGraph,
      title: post.title || defaultMetaData.openGraph.title,
      description,
      url: `${baseUrl}/blogs/${post.slug}`,
      image: post?.mainCoverImage || defaultMetaData.openGraph.image,
    },
    twitter: {
      ...defaultMetaData.twitter,
      title: post.title || defaultMetaData.twitter.title,
      description,
      image: post.mainCoverImage || defaultMetaData.twitter.image,
    },
  };

  return {
    props: {
      post,
      morePosts,
      seo,
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
