export type Social = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "medium";
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
  email: "mr.darshan2919@gmail.com",
  location: "",
  socials: [
    {
      label: "Follow on GitHub",
      href: "https://github.com/thedarshannn",
      icon: "github",
    },
    {
      label: "Follow on LinkedIn",
      href: "https://www.linkedin.com/in/darshan-prajapati29/",
      icon: "linkedin",
    },
    {
      label: "Follow on Medium",
      href: "https://medium.com/@thedarshannn",
      icon: "medium",
    },
  ],
  resumePath: "/Resume.pdf",
  avatar: "/hero.jpg",
  // Work experience (shown on Home Work card)
  experience: [
    {
      company: "Esso",
      role: "Customer Service Attendant",
      start: "Nov 2024",
      end: "Present",
    },
    {
      company: "Humber College",
      role: "Peer Mentor",
      start: "Aug 2024",
      end: "Dec 2024",
    },
    {
      company: "You2Tec Inc",
      role: "Warehouse Supervisor / IT Support",
      start: "May 2024",
      end: "Oct 2024",
    },
    {
      company: "Net Galaxy",
      role: "Data Entry Operator",
      start: "Jul 2021",
      end: "Oct 2022",
    },
  ],
};

export default profile;
