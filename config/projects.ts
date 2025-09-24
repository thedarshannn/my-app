export type Project = {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  links?: { label: string; href: string }[];
};

const projects: Project[] = [
  {
    title: "Smart Home Garden System",
    description:
      "IoT-based home gardening system automating irrigation with real-time sensor data (moisture, temperature, humidity); improved plant health monitoring by ~40%.",
    image: "/smart_sprout.JPG",
    tags: [
      "Raspberry Pi",
      "Python",
      "Android Studio",
      "Java",
      "IoT",
      "Firebase",
    ],
    links: [
      { label: "GitHub", href: "#" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    title: "Virtual Fitness Assistant",
    description:
      "Posture detection and rep counting assistant using OpenCV/MediaPipe with AI voice commands; improved workout tracking accuracy by ~35% (e.g., squats, curls).",
    image: "/globe.svg",
    tags: ["Python", "OpenCV", "MediaPipe", "Raspberry Pi", "Google AI"],
    links: [],
  },
  {
    title: "Greenhouse Controller",
    description:
      "C program on Raspberry Pi to read and log environmental data for local greenhouse monitoring, focused on hardware integration and debugging.",
    image: "/next.svg",
    tags: ["C", "Raspberry Pi", "Vim", "WinSCP"],
    links: [{ label: "GitHub", href: "#" }],
  },
];

export default projects;
