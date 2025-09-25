import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type BlogFrontmatter = {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string; // ISO or YYYY-MM-DD
};

type BlogItem = BlogFrontmatter & { filepath: string };

function getAllBlogs(): BlogItem[] {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  const entries: BlogItem[] = files.map((filename) => {
    const filepath = path.join(contentDir, filename);
    const raw = fs.readFileSync(filepath, "utf-8");
    const { data } = matter(raw);
    return {
      slug: data.slug || filename.replace(/\.md$/, ""),
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      imageUrl: data.imageUrl ?? "/vercel.svg",
      date: data.date ?? "1970-01-01",
      filepath,
    };
  });
  // Sort by date desc
  return entries.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  } catch {
    return d;
  }
}

export default function BlogPage() {
  const blogs = getAllBlogs();
  return (
    <MaxWidthWrapper className="py-12">
      {/* Header aligned with content column */}
      <div className="mb-12 text-center">
        <h1 className="text-2xl md:text-5xl font-semibold leading-tight tracking-tight text-foreground">
          A grad’s journal on coding, tinkering, <br /> and figuring things out
          in tech.
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          All of my thoughts on coding, projects, and experimenting with tech —
          collected along the way as I keep learning and building.
        </p>
      </div>

      {/* List */}
      <div className="space-y-10">
        {blogs.map((blog) => (
          <article key={blog.slug} className="">
            <div className="grid grid-cols-1 md:grid-cols-12 md:items-stretch gap-4">
              {/* Date left with vertical guide line */}
              <div className="md:col-span-3 text-sm text-muted-foreground md:text-left md:pl-6 md:pt-6 md:border-l md:border-border">
                <time dateTime={blog.date}>{formatDate(blog.date)}</time>
              </div>

              {/* Content right as hoverable card */}
              <div className="md:col-span-9">
                <a
                  href={`/blogpost/${blog.slug}`}
                  className="group block h-full rounded-2xl border border-transparent p-6 transition-colors hover:border-border hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {blog.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {blog.description}
                  </p>
                  <div className="mt-3">
                    <span className="text-primary inline-flex items-center gap-1 hover:underline underline-offset-4 transition-transform group-hover:translate-x-0.5">
                      Read article <span aria-hidden>›</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </MaxWidthWrapper>
  );
}
