import ArticlePreview from "./ArticlePreview";

export default function Articles({ posts }) {
  return (
    <ul className="flex items-center w-[90%] mr-5 gap-4 lg:gap-8 flex-col absolute top-0 lg:p-4 lg:mt-[-50px] lg:mr-20">
      {posts.map((post, i) => {
        return (<ArticlePreview post={post} i={i} index={i} key={i} />)
        })}
    </ul>
  );
}