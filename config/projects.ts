export type Project = {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  links?: { label: string; href: string }[];
};

// TODO: Fill from resume; placeholder structure ready
const projects: Project[] = [
  {
    title: "Project One",
    description: "A brief description highlighting impact and tech stack.",
    image: "/window.svg",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    links: [{ label: "View", href: "#" }],
  },
  {
    title: "Project Two",
    description: "Another impactful project with clear outcomes.",
    image: "/globe.svg",
    tags: ["React", "Node.js"],
    links: [{ label: "View", href: "#" }],
  },
];

export default projects;
