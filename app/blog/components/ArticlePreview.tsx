import Link from "next/link"
import styles from "../../../styles/articles.module.css";
import { PostMeta } from "../api";
import { formatearFecha } from "../utils/utils";
import { prata } from "../../utilities/fonts";
import '../blog.css'

interface Props {
  post: PostMeta,
  i: number
}

export default function ArticlePreview({ post, i }: Props) {
  return (
    // <li className={`w ${i > 0 && 'border-t border-[#666]'} pt-2`}>
    //   <div className="mb-4">
    //     <p className={`${styles.tags} font-bold text-[#666] text-end pb-4`}>
    //       {post.tags.map((tag: string) => (
    //         <Link key={tag} href={`/tags/${tag}`}>
    //           {tag}
    //         </Link>
    //       ))}
    //     </p>
    //     <p className="text-[1.1rem] text-[#aaa] mb-2">{formatearFecha(post.date)}</p>
    //     <Link href={`/blog/${post.slug}`} className="font-bold text-[2.5rem] text-[var(--lighterBlue)] leading-8">{post.title}</Link>
    //   </div>

    //   <p className="text-[1.2rem] mb-5 text-[#ddd]">{post.excerpt}</p>
    // </li>
    <li className={`h-[270px] relative overflow-hidden overflow-y-scroll w pt-6 ${i > 0 && 'border-t border-[#838383]'} z-10 gap-3 flex flex-col ${prata.className} `}>
      <div className="w">
        <p className="text-[#B7B7B7] text-[1rem]">{formatearFecha(post.date)}</p>
      </div>
      <div className="w">
        <h2 className="text-[#D8D8D8] text-[1.7rem] leading-tight">{post.title}</h2>
      </div>
      <div className="w">
        <h2 className="text-[#B7B7B7] text-[1.15rem]">{post.excerpt}</h2>
      </div>
      <div className="w p-2 overflow-hidden overflow-x-scroll min-h-[35px]">
        <ul className="flex gap-2">
          {post.tags.map((tag: string) => (
            <li key={tag} className="text-[0.9rem] text-[#B7B7B7] gap-1 flex flex-row w-auto">
             <span>-</span>
             <span>{tag}</span>  
            </li>
          ))}
        </ul>
      </div>

      <div id="blog-preview-read-more" className="w py-8 sticky bottom-0 bg-[rgba(0,0,0,0.73)] ">
          <span className="text-[1.2rem] underline font-semibold text-[#D8D8D8]">Read more</span>
      </div>
    </li>
  )
}
