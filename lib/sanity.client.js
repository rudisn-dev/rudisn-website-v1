import {
  apiVersion,
  dataset,
  projectId,
  studioUrl,
  useCdn,
} from "./sanity.api";
import {
  indexQuery,
  postAndMoreStoriesQuery,
  postBySlugQuery,
  postSlugsQuery,
  settingsQuery,
} from "./sanity.queries";
import { createClient } from "next-sanity";

export function getClient(preview) {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
    stega: {
      enabled: preview?.token ? true : false,
      studioUrl,
    },
  });

  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }

  return client;
}

export const getSanityImageConfig = () => getClient();

export async function getSettings(client) {
  return (await client.fetch(settingsQuery)) || {};
}

export async function getAllPosts(client) {
  return (await client.fetch(indexQuery)) || [];
}

export async function getAllPostsSlugs() {
  const client = getClient();
  const slugs = (await client.fetch(postSlugsQuery)) || [];
  return slugs.map((slug) => ({ slug }));
}

export async function getPostBySlug(client, slug) {
  return (await client.fetch(postBySlugQuery, { slug })) || {};
}

export async function getPostAndMoreStories(client, slug) {
  return await client.fetch(postAndMoreStoriesQuery, { slug });
}
