import { basePathsSitemap, baseUrl } from "../../data/data";
import { getAllPosts } from "../../lib/sanity.client";

export default async function sitemap() {
  const posts = await getAllPosts();

  const postsSitemap = posts?.map((post) => {
    return {
      url: baseUrl + "/blogs/" + post.slug,
      lastModified: new Date(post.date),
      priority: 0.7,
      changeFrequency: "weekly",
    };
  });

  const allPaths = [...basePathsSitemap, ...postsSitemap];

  return allPaths;
}
