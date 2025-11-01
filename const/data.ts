import type { INavLinks, ISectionNamesFloat } from "@/types/types";

export const NavLinkItems: INavLinks[] = [
  { title: "Home", href: "#home" },
  { title: "My Stack", href: "#my-stack" },
  { title: "Builds", href: "#builds" },
  { title: "About Me", href: "#about-me" },
  { title: "Let's Talk", href: "#lets-talk" },
];

export const SectionNamesFloat: ISectionNamesFloat[] = [
  {
    href: "/",
    currentSection: [
      {
        link: "Home",
        path: "#home",
      },
      {
        link: "My Stack",
        path: "#my-stack",
      },
      {
        link: "Builds",
        path: "#builds",
      },
      {
        link: "About Me",
        path: "#about-me",
      },
      {
        link: "Let's Talk",
        path: "#lets-talk",
      },
    ],
  },
];

export const tabsData = [
  {
    title: "Frontend",
    description: "Core frontend frameworks, libraries and styling tools.",
    images: [
      {
        src: "/assets/images/stack/react.png",
        alt: "React",
        description: "UI library",
      },
      {
        src: "/assets/images/stack/next.png",
        alt: "Next.js",
        description: "React framework",
      },
      {
        src: "/assets/images/stack/tailwind.png",
        alt: "Tailwind CSS",
        description: "Utility CSS",
      },
      {
        src: "/assets/images/stack/css.png",
        alt: "CSS",
        description: "Styling language",
      },
    ],
  },
  {
    title: "Backend",
    description: "Server-side APIs and deployment (Next.js example)",
    images: [
      {
        src: "/assets/images/stack/next.png",
        alt: "Next.js (API)",
        description: "Edge & API routes",
      },
      {
        src: "/assets/images/stack/backend/nodejs.png",
        alt: "Node.js",
        description: "JavaScript runtime",
      },
      {
        src: "/assets/images/stack/backend/express.js.png",
        alt: "Express.js",
        description: "Minimal Node web framework",
      },
      {
        src: "/assets/images/stack/backend/flask.png",
        alt: "Flask",
        description: "Python microframework",
      },
      {
        src: "/assets/images/stack/backend/django.png",
        alt: "Django",
        description: "Full-stack Python framework",
      },
    ],
  },
  {
    title: "Databases",
    description: "Databases and managed storage solutions.",
    images: [
      {
        src: "/assets/images/stack/database/firebase.png",
        alt: "Firebase",
        description: "Realtime & managed backend",
      },
      {
        src: "/assets/images/stack/database/mongodb.png",
        alt: "MongoDB",
        description: "Document database",
      },
      {
        src: "/assets/images/stack/database/postgress.png",
        alt: "Postgres",
        description: "Relational database",
      },
      {
        src: "/assets/images/stack/database/sqlite.png",
        alt: "SQLite",
        description: "Lightweight embedded DB",
      },
      {
        src: "/assets/images/stack/database/supabase.png",
        alt: "Supabase",
        description: "Postgres-as-a-service",
      },
      {
        src: "/assets/images/stack/database/redis.png",
        alt: "Redis",
        description: "In-memory data structure store",
      },
    ],
  },
  {
    title: "Others",
    description: "Design, prototyping, and workflow automation tools.",
    images: [
      {
        src: "/assets/images/stack/design/figma.png",
        alt: "Figma",
        description: "Collaborative design tool",
      },
      {
        src: "/assets/images/stack/design/canva.png",
        alt: "Canva",
        description: "Online graphic design",
      },

      {
        src: "/assets/images/stack/automation/make.png",
        alt: "Make",
        description: "Visual workflow automation",
      },
      {
        src: "/assets/images/stack/automation/n8n.png",
        alt: "n8n",
        description: "Open-source workflow automation",
      },
      {
        src: "/assets/images/stack/automation/Zapier.png",
        alt: "Zapier",
        description: "No-code automation platform",
      },
    ],
  },
];

export const projectsData = [
  {
    title: "Sample Project",
    description:
      "This is a sample project description. Replace this with your actual project details.",
    imageSrc: "/assets/projects/sample.png",
    href: "https://example.com",
  },
];
