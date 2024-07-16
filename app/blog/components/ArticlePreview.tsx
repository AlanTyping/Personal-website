import Link from "next/link"
import styles from "../../../styles/articles.module.css";
import { PostMeta } from "../api";
import { formatearFecha } from "../utils/utils";

interface Props {
  post: PostMeta,
  i: number
}

export default function ArticlePreview({ post, i }: Props) {
  return (
    <li className={`w ${i > 0 && 'border-t border-[#aaa]'} pt-8`}>
      <div className="mb-4">
      <p className="font-bold text-[1.2rem] text-[#aaa] mb-2">{formatearFecha(post.date)}</p>
        <Link href={`/blog/${post.slug}`} className="font-bold text-[2.3rem] text-[var(--lighterBlue)] leading-8">{post.title}</Link>
      </div>

      <p className="text-[1.2rem] mb-5 text-[#ddd]">{post.excerpt}</p>

      <p className={`${styles.tags} font-bold text-[var(--lighterBlue)]`}>
        {post.tags.map((tag: string) => (
          <Link key={tag} href={`/tags/${tag}`}>
            {tag}
          </Link>
        ))}
      </p>
    </li>
  )
}
