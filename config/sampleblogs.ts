// sampleBlogs.ts

export interface Blog {
  slug: string;
  title: string;
  description: string;
  content: string; // markdown content
  imageUrl: string;
}

export const SampleBlogs: Blog[] = [
  {
    slug: "getting-started-nextjs",
    title: "Getting Started with Next.js",
    description:
      "A beginner-friendly introduction to Next.js and why it’s a game changer.",
    content: `
# Getting Started with Next.js 🚀

Next.js is a **React framework** that makes building full-stack applications easier.  

### Why Next.js?
- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes built-in
- Great developer experience  

### Installation
\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

Happy coding!
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1735405817208-79a2fd79e18b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "tailwindcss-for-beginners",
    title: "TailwindCSS for Beginners",
    description: "Learn how to style modern apps quickly with TailwindCSS.",
    content: `
# TailwindCSS for Beginners 🎨

TailwindCSS is a **utility-first CSS framework** that lets you build modern UIs without writing custom CSS.  

### Benefits
- No more naming CSS classes
- Responsive design made easy
- Highly customizable  

### Example
\`\`\`html
<button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
  Click Me
</button>
\`\`\`

And that’s it — styled instantly!
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1756049060197-37b4b52c3183?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "why-shadcn-ui",
    title: "Why shadcn/ui is Awesome",
    description:
      "Discover how shadcn/ui makes building UI components a breeze.",
    content: `
# Why shadcn/ui is Awesome ✨

\`shadcn/ui\` provides **beautiful, accessible, and customizable components** for your Next.js + Tailwind apps.  

### Key Features
- Built on top of Radix primitives
- Easy to customize with Tailwind
- Prebuilt components (buttons, modals, navbars, etc.)

### Example Button
\`\`\`tsx
import { Button } from "@/components/ui/button"

<Button>Click me</Button>
\`\`\`

Now you can focus on **building apps**, not reinventing the wheel!
    `,
    imageUrl:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default SampleBlogs;
