import Head from "next/head";
import AllBlogsWorkflow from "./_components/allBlogsPage/AllBlogsWorkflow";
import { getAllPosts, getRecentPosts } from "../../../lib/sanity.client";
import { defaultMetaData } from "../../../data/data";

export default function Index({ posts, recentPosts }) {
  return (
    <>
      <Head>
        <title>{defaultMetaData.title + " | Blogs"}</title>
        <meta name="description" content={defaultMetaData.description} />
        <meta name="keywords" content={defaultMetaData.keywords} />
        <meta name="author" content={defaultMetaData.author} />
        <link rel="canonical" href={defaultMetaData.canonical} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={defaultMetaData.openGraph.title} />
        <meta
          property="og:description"
          content={defaultMetaData.openGraph.description}
        />
        <meta property="og:url" content={defaultMetaData.openGraph.url} />
        <meta
          property="og:site_name"
          content={defaultMetaData.openGraph.site_name}
        />
        <meta property="og:image" content={defaultMetaData.openGraph.image} />
        <meta property="og:type" content={defaultMetaData.openGraph.type} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={defaultMetaData.twitter.card} />
        <meta name="twitter:site" content={defaultMetaData.twitter.site} />
        <meta name="twitter:title" content={defaultMetaData.twitter.title} />
        <meta
          name="twitter:description"
          content={defaultMetaData.twitter.description}
        />
        <meta name="twitter:image" content={defaultMetaData.twitter.image} />

        {/* Icons */}
        <link rel="icon" href={defaultMetaData.icons.icon} />
        <link
          rel="apple-touch-icon"
          href={defaultMetaData.icons.appleTouchIcon}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={defaultMetaData.icons.favicon32}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={defaultMetaData.icons.favicon16}
        />
        <link
          rel="mask-icon"
          href={defaultMetaData.icons.maskIcon}
          color={defaultMetaData.icons.themeColor}
        />
        <meta name="theme-color" content={defaultMetaData.icons.themeColor} />
      </Head>
      <AllBlogsWorkflow posts={posts} recentPosts={recentPosts} />
    </>
  );
}

export async function getStaticProps() {
  const [posts = [], recentPosts = []] = await Promise.all([
    getAllPosts(),
    getRecentPosts(),
  ]);

  return {
    props: {
      posts,
      recentPosts,
    },
  };
}
