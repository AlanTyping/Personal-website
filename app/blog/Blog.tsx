import { getAllPosts } from "./api";
import Articles from './components/Articles';
import Link from "next/link";
import BookPhone from './utils/book-phone.svg';
import Image from "next/image";

async function getPosts() {
  const posts = getAllPosts()
    .map((post) => post.meta)

  return posts
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="py-16 text-white bg-[#040D23] border-y border-[var(--secondary)]">
      {/* <div className="w text-start">
        <Link href="/">
        <h1 className="text-[1.2rem] font-bold">Back home</h1>
        </Link>
      </div>
      <div className="w-[60%] m-auto">
        <h1 className="font-bold text-[1.5rem] text-[var(--lightBlue)]">Articles</h1>
      </div>  */}
      <div className="w m-auto flex items-center justify-center">
        <button className="font-bold text-[1.3rem] text-[#D8D8D8] bg-[#081942] p-2 px-12">
          Filtrar
        </button>
      </div>
      <div className="w-[120vw] h-[600px] relative">
        <Image src={BookPhone} fill={true} alt="book phone" />
        <div className="h w-[65%] ml-16 gap-2 flex justify-center items-center flex-col">
          <Articles posts={posts} />
        </div>
      </div>

      {/* <Articles posts={posts} /> */}
    </div>
  );
}

