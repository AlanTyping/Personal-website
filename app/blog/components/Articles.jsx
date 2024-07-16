import ArticlePreview from "./ArticlePreview";

export default function Articles({ posts }) {
  return (
    <ul className="flex items-center gap-6 flex-col w md:w-[45%] m-auto p-3">
      {posts.map((post, i) => (<ArticlePreview post={post} i={i} index={post.slug} />))}
    </ul>
  );
}