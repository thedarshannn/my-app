import Image from "next/image";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiMedium } from "react-icons/si";
import profile from "@/config/profile";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <MaxWidthWrapper className="mt-20 md:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left column: Heading + body copy */}
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-foreground">
              {profile.slogan}
            </h1>

            <div className="mt-8 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
              {profile.bio.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>

          {/* Right column: Portrait + social links + email */}
          <aside className="lg:col-span-5">
            <div className="space-y-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl ring-1 ring-black/10 dark:ring-white/10 -rotate-2">
                <Image
                  src={profile.avatar || "/hero.JPG"}
                  alt={`${profile.name} portrait`}
                  fill
                  sizes="(min-width: 1024px) 30vw, 80vw"
                  className="object-cover"
                  priority
                />
              </div>

              <ul className="space-y-4 text-sm">
                {profile.socials.map((s) => (
                  <li key={s.label}>
                    <AboutLink href={s.href} label={s.label}>
                      {s.icon === "github" && <Github className="h-4 w-4" />}
                      {s.icon === "linkedin" && (
                        <Linkedin className="h-4 w-4" />
                      )}
                      {s.icon === "medium" && <SiMedium className="h-4 w-4" />}
                      <span className="ml-2">{s.label}</span>
                    </AboutLink>
                  </li>
                ))}
              </ul>

              <div className="border-t pt-6">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-3 text-sm text-foreground/80 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  <span>{profile.email}</span>
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
