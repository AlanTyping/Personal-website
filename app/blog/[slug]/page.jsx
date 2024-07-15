
import Link from "next/link";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import { getPostFromSlug, getAllPosts } from "../../blog/api";
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
    <div className='bg-[#061333] p-5'>
      <Link href='/'>Go back home</Link>
      <h1>{post.meta.title}</h1>
      <h1>{post.meta.date}</h1>
      <br />
      <article class="prose lg:prose-xl prose-sky text-white m-auto prose-h2:text-[#ffa500]">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}