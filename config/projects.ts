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
      {
        label: "GitHub",
        href: "https://github.com/thedarshannn/SmartHomeGardenSys",
      },
      {
        label: "Demo",
        href: "https://drive.google.com/file/d/1oMOYAk3LVeW9KwkhEt3rDPT0TIbobifq/view?usp=sharing",
      },
    ],
  },
];

export default projects;
