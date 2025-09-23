import Link from "next/link";
import siteConfig from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative mt-8 border-t bg-no-repeat bg-right-bottom bg-[length:auto_220px] md:bg-[length:auto_320px] min-h-[180px] md:min-h-[240px]"
      style={{ backgroundImage: "url(/Footer.png)" }}
      role="contentinfo"
    >
      {/* Overlay for readability across themes */}
      <div className="absolute inset-0 bg-background/50" aria-hidden />

      {/* Full-width container with larger horizontal padding */}
      <div className="relative w-full px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <nav className="flex items-center gap-10 text-sm">
            <Link href="/about" className="hover:underline underline-offset-4">
              About
            </Link>
            <Link
              href="/projects"
              className="hover:underline underline-offset-4"
            >
              Projects
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground text-center md:text-right w-full md:w-auto">
            © {year} {siteConfig.author}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
