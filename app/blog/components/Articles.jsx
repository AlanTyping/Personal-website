import ArticlePreview from "./ArticlePreview";

export default function Articles({ posts }) {
  return (
    <ul className="flex items-center w bg-red-500 gap-4 flex-col w md:w-[60%] m-auto mt-8">
      {posts.map((post, i) => {
        if (i < 2 ) return (<ArticlePreview post={post} i={i} index={i} key={i} />)
        })}
    </ul>
  );ñ
}