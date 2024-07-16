// import { unified } from 'unified';
// import remarkParse from 'remark-parse';
// import rehypeStringify from 'rehype-stringify';
// import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings';
// import rehypeHighlight from 'rehype-highlight';

// export async function processMarkdown(markdown: string) {
//   const file = await unified()
//   .use(remarkParse)
//   .use(rehypeSlug)
//   .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
//   .use(rehypeHighlight)
//   .use(rehypeStringify)
//   .process(markdown);

//   return String(file);
// }