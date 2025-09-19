"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import HomeCarousel from "@/components/HomeCarousel";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MaxWidthWrapper className="mt-24">
        {/* Avatar */}
        <div className="mb-8">
          <Image
            src="/vercel.svg"
            alt="Profile avatar"
            width={80}
            height={80}
            priority
            className="h-20 w-20 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/10"
          />
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
          Software designer, founder, and amateur astronaut.
        </h1>

        {/* Subtext */}
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          I’m Spencer, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.
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
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <HomeCarousel />
      </MaxWidthWrapper>
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
