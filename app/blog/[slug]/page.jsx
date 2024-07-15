import Image from "next/image";
import Head from "next/head";

import Link from "next/link";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { getPostFromSlug, getSlugs, PostMeta, getAllPosts } from "../../blog/api";
import YouTube from "../../blog/components/Youtube";
import "highlight.js/styles/atom-one-dark.css";
import Markdown from 'markdown-to-jsx';

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.meta.slug
  }));
};

export default function PostPage({ params }) {
  const slug = params.slug
  const post = getPostFromSlug(slug);

  return (
    <>
    <Link href='/'>Go back home</Link>
      <h1>{post.meta.title}</h1>
      <h1>{post.meta.date}</h1>
      <br/>
      <Markdown>{post.content}</Markdown>
      {/* <MDXRemote {...post.source} components={{ YouTube, Image }} /> */}
    </>
  );
}

// export const getStaticProps = async () => {
//   const { content, meta } = getPostFromSlug(slug);
//   const mdxSource = await serialize(content, {
//     mdxOptions: {
//       rehypePlugins: [
//         rehypeSlug,
//         [rehypeAutolinkHeadings, { behavior: "wrap" }],
//         rehypeHighlight,
//       ],
//     },
//   });

//   return { props: { post: { source: mdxSource, meta } } };
// };

// export const getStaticPaths = async () => {
//   const paths = getSlugs().map((slug) => ({ params: { slug } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };