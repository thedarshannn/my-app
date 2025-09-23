export type Social = {
  label: string;
  href: string;
  icon: "twitter" | "instagram" | "github" | "linkedin" | "mail";
};

export type Profile = {
  name: string;
  title: string;
  slogan: string;
  bio: string[];
  email: string;
  location?: string;
  socials: Social[];
  resumePath?: string;
  avatar?: string;
  experience?: Array<{
    company: string;
    role: string;
    start: string; // e.g., "2023" or "Jan 2023"
    end: string; // e.g., "Present" or "Jun 2024"
  }>;
};

// TODO: Update these fields from the attached resume
const profile: Profile = {
  name: "Darshan Prajapati",
  title: "Software Engineer",
  slogan: "Building reliable, delightful products with code and curiosity.",
  bio: [
    "Full‑stack developer specializing in React, Next.js, and TypeScript.",
    "I design and build performant web apps, from product thinking to clean, scalable code.",
    "Previously shipped projects across startups and client work; I care about developer experience and robust UX.",
  ],
  email: "spencer@planetaria.tech",
  location: "",
  socials: [
    { label: "Follow on X", href: "#", icon: "twitter" },
    { label: "Follow on Instagram", href: "#", icon: "instagram" },
    { label: "Follow on GitHub", href: "#", icon: "github" },
    { label: "Follow on LinkedIn", href: "#", icon: "linkedin" },
  ],
  resumePath: "/Resume.pdf",
  avatar: "/hero.jpg",
  // TODO: Replace with exact roles and dates from your resume
  experience: [
    {
      company: "Freelance",
      role: "Full‑stack Developer",
      start: "2023",
      end: "Present",
    },
    {
      company: "Company ABC",
      role: "Frontend Engineer",
      start: "2021",
      end: "2023",
    },
  ],
};

export default profile;
