import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sara Thibierge",
  initials: "DV",
  url: "https://dillion.io",
  location: "Paris, France",
  description:
    "I'm a engineering student passionate about web developpment and UX design.",
  summary:
    " I love to create and design websites and applications that are both beautiful and functional. I am currently studying AI at ESILV and I am also a freelance web developer and designer. I am always looking for new opportunities to learn and grow.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "TailwindCSS",
    "Python",
    "C#",
    "Postgres",
    "Docker",
    "Elasticsearch",
    "Figma",
    "Blender",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ThibSara",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sara-thibierge-6092471bb/",
        icon: Icons.linkedin,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Freelance",
      href: "https://alticefrance.com/",
      badges: [],
      location: "Paris, France",
      title: "Web Developer & Designer",
      logoUrl: "/freelance.png",
      start: "May 2024",
      end: "Present",
      description:
        "I create websites and applications for clients. So far, I have developed a progressive web app for internal use at CEA and created a website for a graphotherapy specialist.",
    },
    {
      company: "Altice - SFR",
      href: "https://alticefrance.com/",
      badges: [],
      location: "Paris, France",
      title: "Internship - Data Engineer",
      logoUrl: "/altice.png",
      start: "April 2024",
      end: "August 2024",
      description:
        "Handled the processing and analysis of response data from SFR's video content. Implemented continuous data processing using ElasticSearch, and conducted analysis on Kubernetes with Kubeflow, leveraging Python’s machine learning libraries for advanced insights.",
    },
  ],
  education: [
    {
      school: "ESILV - Leonard de Vinci General Engineering School",
      href: "https://www.esilv.fr/",
      degree: "Master Data Science & IA - Additional UX Design course",
      logoUrl: "/esilv.png",
      start: "2020",
      end: "2025",
    },
    {
      school: "Introduction to Artificial Intelligence with Python",
      href: "https://pll.harvard.edu/course/cs50s-introduction-artificial-intelligence-python",
      degree: "CS50 Certificate delivered by Harvard University",
      logoUrl: "/harvard.png",
      start: "April",
      end: "2024",
    },
    {
      school: "Design Thinking",
      href: "https://www.dthinking.academy/",
      degree: "Design Thinking Certificate delivered by D+HINKING",
      logoUrl: "/dthinking.png",
      start: "June",
      end: "2023",
    },
    {
      school: "High school Jules Ferry ",
      href: "https://lyc-ferry-versailles.ac-versailles.fr/",
      degree: "Scientific Baccalaureate - Honors",
      logoUrl: "/buildspace.jpg",
      start: "2017",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Impulse Studio",
      href: "https://studio-impulse-git-dev-thibsaras-projects.vercel.app/",
      dates: "August 2024 - Present",
      active: true,
      description:
        "A commercial website for my design and development studio. I am currently building this website with a partner to showcase our work and attract clients.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://studio-impulse-git-dev-thibsaras-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ThibSara/studio-impulse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "impulse.mov",
    },
    {
      title: "Grapho78",
      href: "https://grapho78.com/  ",
      dates: "May 2024 - June 2024",
      active: true,
      description:
        "An informative website about graphotherapy. I built this website for a client and included a wordpress back office.",
      technologies: [
        "Next.js",
        "Typescript",
        "Wordpress",
        "TailwindCSS",
        "Shadcn UI",
        "Spline",
      ],
      links: [
        {
          type: "Website",
          href: "https://grapho78.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ThibSara/grapho78-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "grapho.mov",
    },
    {
      title: "Do Ré Mi",
      href: "https://automatic.chat",
      dates: "January 2024 - April 2024",
      active: true,
      description:
        "A mobile application that allows users to learn music theory through quizzes and games. Both compatible with Android and IOS.",
      technologies: ["React-Native", "Javascript", "Mobile", "Android studio"],
      links: [
        {
          type: "Source",
          href: "https://github.com/ThibSara/doremi-music/tree/master",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/doremi.png",
      video: "",
    },
    {
      title: "Car Mini-game",
      href: "https://oieoie.com/vroom-vroom/",
      dates: "December 2023 - January 2024",
      active: true,
      description:
        "Experiment 3D car game using React-three-fiber and Spline. I built this project to learn more about 3D in React.",
      technologies: [
        "React",
        "Javascript",
        "Spline",
        "React-three-fiber",
        "3D",
      ],
      links: [
        {
          type: "Website",
          href: "https://oieoie.com/vroom-vroom/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ThibSara/CarTrackWebsite",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "car.mov",
    },
  ],
} as const;
