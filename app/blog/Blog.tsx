import { getAllPosts } from "./api";
import Articles from './components/Articles';
import Link from "next/link";
import BookPhone from './utils/book-phone.svg';
import Image from "next/image";
import { prata } from "../utilities/fonts";

async function getPosts() {
  const posts = getAllPosts()
    .map((post) => post.meta)

  return posts
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className={`text-white bg-[#040D23] pb-16 border-y border-[var(--secondary)] ${prata.className} w flex items-center flex-col justify-center`}>
      {/* <div className="w text-start">
        <Link href="/">
        <h1 className="text-[1.2rem] font-bold">Back home</h1>
        </Link>
      </div>
      <div className="w-[60%] m-auto">
        <h1 className="font-bold text-[1.5rem] text-[var(--lightBlue)]">Articles</h1>
      </div>  */}
      <div className="w flex items-center justify-center py-8 ">
        <h2 className="text-[1.5rem] text-center">Check out my Articles</h2>
      </div>
      <div className="w m-auto flex items-center justify-center">
        <button className="font-normal text-[1.3rem] text-[#D8D8D8] bg-[#081942] py-3 px-16 mr-40">
          Filtrar
        </button>
      </div>
      <div className="w-[130vw] max-w-[540px] h-[700px] relative flex items-center justify-center">
        <Image src={BookPhone} fill={true} alt="book phone" />
        <div className="h w-[65%] gap-2 flex justify-center items-center flex-col">
          <Articles posts={posts} />
        </div>
      </div>

      {/* <Articles posts={posts} /> */}
    </div>
  );
}

