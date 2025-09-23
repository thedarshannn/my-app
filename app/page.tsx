import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Briefcase,
  Download,
} from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HomeCarousel from "@/components/HomeCarousel";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Home() {
  const blogs = getAllBlogs().slice(0, 3);
  return (
    <main className="min-h-screen isolate">
      <MaxWidthWrapper className="mt-20 md:mt-24 relative z-10">
        {/* Give hero a bit more left breathing room */}
        <div className="pl-4 md:pl-8 lg:pl-14 xl:pl-20">
          {/* Avatar */}
          <div className="mb-8">
            <Image
              src="/hero.jpg"
              alt="Profile avatar"
              width={80}
              height={80}
              priority
              className="h-20 w-20 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/10"
            />
          </div>

          {/* Headline (slightly smaller for a cleaner feel) */}
          <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-6xl">
            Software designer, founder, and amateur astronaut.
          </h1>

          {/* Subtext */}
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>

          {/* Social row */}
          <div className="mt-8 flex items-center gap-6">
            <SocialLink href="#" label="X / Twitter">
              <Twitter className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="#" label="Instagram">
              <Instagram className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="#" label="GitHub">
              <Github className="h-5 w-5" />
            </SocialLink>
            <SocialLink href="#" label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Full-bleed sticky carousel bounded to its container (no background mask) */}
      <section className="relative">
        <div className="sticky top-28 md:top-36 inset-x-0 w-screen pointer-events-none -z-10 overflow-hidden">
          <HomeCarousel />
        </div>
      </section>

      {/* Blog list + Work sidebar below carousel (no mask) */}
      <div className="relative z-10">
        <MaxWidthWrapper>
          <section className="mt-12 md:mt-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Left: Blog list */}
              <div className="md:col-span-8">
                <div className="space-y-10">
                  {blogs.map((blog) => (
                    <article key={blog.slug}>
                      <a
                        href={`/blogpost/${blog.slug}`}
                        className="group block rounded-2xl p-6 transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span
                            className="h-4 w-0.5 rounded bg-border"
                            aria-hidden
                          />
                          <time dateTime={blog.date}>
                            {formatDate(blog.date)}
                          </time>
                        </div>
                        <h2 className="mt-3 text-xl md:text-2xl font-semibold">
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
                    </article>
                  ))}
                </div>
              </div>

              {/* Right: Work card (no stay-updated box) */}
              <aside className="md:col-span-4">
                <div className="rounded-2xl border p-6">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <Briefcase className="h-4 w-4" />
                    Work
                  </div>
                  <ol className="mt-6 space-y-5">
                    {workItems.map((item) => (
                      <li
                        key={item.company}
                        className="flex items-start justify-between gap-4"
                      >
                        <div>
                          <div className="font-medium leading-tight">
                            {item.company}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {item.role}
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground whitespace-nowrap">
                          {item.dates}
                        </div>
                      </li>
                    ))}
                  </ol>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-accent/40"
                    >
                      Download CV <Download className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
    </main>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="text-foreground/60 transition-colors hover:text-foreground"
    >
      {children}
    </Link>
  );
}

function getAllBlogs() {
  const contentDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));
  const entries = files.map((filename) => {
    const filepath = path.join(contentDir, filename);
    const raw = fs.readFileSync(filepath, "utf-8");
    const { data } = matter(raw);
    return {
      slug: data.slug || filename.replace(/\.md$/, ""),
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      date: data.date ?? "1970-01-01",
    } as { slug: string; title: string; description: string; date: string };
  });
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

const workItems = [
  { company: "Planetaria", role: "CEO", dates: "2019 — Present" },
  { company: "Airbnb", role: "Product Designer", dates: "2014 — 2019" },
  { company: "Facebook", role: "iOS Software Engineer", dates: "2011 — 2014" },
  { company: "Starbucks", role: "Shift Supervisor", dates: "2008 — 2011" },
];
