import { getAllPosts } from "./api";
import Articles from './components/Articles';
import Link from "next/link";
import Image from "next/image";
import BookPhone from './utils/book-phone.svg';
import BookPc from './utils/book-pc.svg';
import { prata } from "../utilities/fonts";

async function getPosts() {
  const posts = getAllPosts()
    .map((post) => post.meta)

  return posts
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className={`text-white bg-[#040D23] pb-16 ${prata.className} w flex items-center flex-col justify-center`}>
      {/* <div className="w text-start">
        <Link href="/">
        <h1 className="text-[1.2rem] font-bold">Back home</h1>
        </Link>
      </div>
      <div className="w-[60%] m-auto">
        <h1 className="font-bold text-[1.5rem] text-[var(--lightBlue)]">Articles</h1>
      </div>  */}
      <div className="w flex items-center justify-center lg:justify-start lg:w-[1000px] py-8">
        <h2 className="text-[1.5rem] text-center text-[#b3b3b3]">Articles</h2>
      </div>
      <div className="w m-auto flex items-center justify-center">
        <button className="font-normal text-[1.3rem] text-[#b7b7b7] bg-[#05112d] py-3 px-16 mr-40 lg:mb-[-10px]">
          Filtrar
        </button>
      </div>
      <div className="w-[130vw] max-w-[540px] lg:max-w-[1000px] h-[700px] lg:h-[1100px] relative flex items-center justify-center">
        <Image className="lg:hidden" src={BookPhone} fill={true} alt="book phone" />
        <Image className="hidden lg:flex" src={BookPc} fill={true} alt="book phone" />
        <div className="h-[580px] lg:h-[800px] w-[70%] lg:w-[80%] gap-2 flex justify-center items-center flex-col overflow-y-scroll relative">
          <Articles posts={posts} />
        </div>
      </div>

      {/* <Articles posts={posts} /> */}
    </div>
  );
}

