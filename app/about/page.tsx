import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Github, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <MaxWidthWrapper className="mt-20 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left column: Heading + body copy */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-foreground">
              I’m Spencer Sharp. I live in New York City, where I design the
              future.
            </h1>

            <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                I’ve enjoyed building things for as long as I can remember. My
                first lines of code were as a kid on an old Macintosh, and the
                curiosity from those moments has stayed with me ever since.
              </p>
              <p>
                The only thing I loved more than computers as a kid was space. I
                once strapped on a makeshift helmet and jumped off a backyard
                tree, convinced that with enough imagination I could get to
                orbit. That same spirit still fuels my work today.
              </p>
              <p>
                Over the years I’ve worked on products across consumer,
                developer tooling, and research. I care about systems that
                empower people and make complex ideas feel simple and
                approachable.
              </p>
              <p>
                Today I’m building at Planetaria — civilian space suits and
                tools you can assemble at home, so the next generation of
                explorers can get a little closer to the stars from their own
                backyards.
              </p>
            </div>
          </div>

          {/* Right column: Portrait + social links + email */}
          <aside className="lg:col-span-5">
            <div className="space-y-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-black/10 dark:ring-white/10 -rotate-2">
                <Image
                  src="/hero.jpg"
                  alt="Portrait in a flight helmet"
                  fill
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-cover"
                  priority
                />
              </div>

              <ul className="space-y-4 text-sm">
                <li>
                  <AboutLink href="#" label="Follow on X">
                    <Twitter className="h-4 w-4" /> Follow on X
                  </AboutLink>
                </li>
                <li>
                  <AboutLink href="#" label="Follow on Instagram">
                    <Instagram className="h-4 w-4" /> Follow on Instagram
                  </AboutLink>
                </li>
                <li>
                  <AboutLink href="#" label="Follow on GitHub">
                    <Github className="h-4 w-4" /> Follow on GitHub
                  </AboutLink>
                </li>
                <li>
                  <AboutLink href="#" label="Follow on LinkedIn">
                    <Linkedin className="h-4 w-4" /> Follow on LinkedIn
                  </AboutLink>
                </li>
              </ul>

              <div className="border-t pt-6">
                <a
                  href="mailto:spencer@planetaria.tech"
                  className="inline-flex items-center gap-3 text-sm text-foreground/80 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span>spencer@planetaria.tech</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}

function AboutLink({
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
      className="inline-flex items-center gap-3 text-foreground/80 transition-colors hover:text-foreground"
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </Link>
  );
}
