"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HomeCarousel from "@/components/HomeCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MaxWidthWrapper className="mt-20 md:mt-24">
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
      {/* Full-bleed sticky carousel that overlaps EdgeGuides and bleeds to edges */}
      <div className="sticky top-28 md:top-36 left-1/2 w-screen">
        <HomeCarousel />
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
