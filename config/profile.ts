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
  slogan: "Hi, I'm Darshan 👋 ",
  bio: [
    "I'm an international student from India, now living in Canada. I recently graduated from Humber College in Computer Engineering Technology — and trust me, I know all about those late nights, coffee-fueled projects, and college grind life! ☕💻",

    "Right now, I'm leveling up my skills with IT certifications while also exploring entry-level opportunities in software development and IT support. I'm super curious, always learning, and love experimenting with new tech.",

    "One of my favorite projects was Smart Sprout, an IoT-based smart home garden system. I led the development team and delivered both the hardware system and Android app — all up and running smoothly in just 8 months. 🌱",

    "I've also built a fitness assistant using AI & computer vision and a greenhouse controller with Raspberry Pi, because I enjoy blending hardware + software to create useful, real-world solutions.",

    "Always up for a challenge, always building something new. 🚀",
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
