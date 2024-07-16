
import Link from "next/link";
// import { processMarkdown } from "../../../lib/markdownProcessor";
import { getPostFromSlug, getAllPosts } from "../../blog/api";
import { formatearFecha } from "../utils/utils";
// import "highlight.js/styles/atom-one-dark.css";
import Markdown from 'markdown-to-jsx';
// import rehypeHighlight from "rehype-highlight";
// import remarkParse from 'remark-parse';
// import rehypeStringify from 'rehype-stringify';
// import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';


export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.meta.slug
  }));
};

export default async function PostPage({ params }) {
  const slug = params.slug
  const post = getPostFromSlug(slug);

  return (
    <div className='bg-[#061333] p-5'>
      <Link href='/'>Go back home</Link>
      <h1>{post.meta.title}</h1>
      <h1>{formatearFecha(post.meta.date)}</h1>
      <br />
      <article class="prose lg:prose-xl prose-sky text-white m-auto prose-h2:text-[#ffa500]">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}