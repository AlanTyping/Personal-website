import { getAllPosts } from "./api";
import Articles from './components/Articles';

async function getPosts() {
  const posts = getAllPosts()
  .map((post) => post.meta)

  return posts
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="p-10">
      <h1>Articles</h1>
      <Articles posts={posts} />
    </div>
  );
}
 
