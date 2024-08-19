import { groq } from "next-sanity";

const postFields = groq`
  title,
  "mainCoverImage": mainImage.asset->url,
  "date": _createdAt,
  "slug": slug.current,
  "category": categories[]->title,
  "author": {
    "name": author->name,
    "image": author->image.asset->url
  }
`;

export const indexQuery = groq`
*[_type == "post"] | order(_createdAt desc, _updatedAt desc) {
  ${postFields}
}`;

export const categories = groq`
*[_type == "category"] | order(title asc) {
  title,
  "articleCount": count(*[_type == "post" && references(^._id)])
}`;

export const recentPosts = groq`
*[_type == "post"] | order(_createdAt desc)[0...3] {
  ${postFields}
}`;

export const postAndMoreStoriesQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    body,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(_createdAt desc, _updatedAt desc) [0...2] {
    body,
    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;
