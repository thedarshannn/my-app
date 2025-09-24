import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
// import rehypeHighlight from "rehype-highlight";
import { rehypePrettyCode } from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import gray from "gray-matter";
import fs from "fs";
import path from "path";
import Onthispage from "@/components/Onthispage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(process.cwd(), "content", `${params.slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = gray(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: "material-theme-ocean",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <MaxWidthWrapper className="px-6 py-12 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:gap-12">
        {/* Blog Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none flex-1">
          <h1 className="mb-6 text-4xl font-bold tracking-tight">
            {data.title}
          </h1>
          {data.date && (
            <p className="mb-6 text-sm text-muted-foreground">
              {new Date(data.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}
          <div
            className="prose dark:prose-invert max-w-none leading-relaxed"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>

        {/* Sidebar */}
        <aside className="mt-12 lg:mt-0 lg:w-64 shrink-0 lg:border-l lg:pl-6">
          <Onthispage
            className="text-sm sticky top-24"
            htmlContent={htmlContent}
          />
        </aside>
      </div>
    </MaxWidthWrapper>
  );
}
