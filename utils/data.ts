import { FaReact, FaServer, FaLaptopCode } from "react-icons/fa"
import { SiFastapi } from "react-icons/si"
import { TProject, Service, Skill } from "./interface"

import { BsCircleFill } from "react-icons/bs"

export const services: Service[] = [
  {
    Icon: FaReact,
    title: "Frontend Engineering",
    about:
      "Build and maintain scalable product interfaces with <b>React.js</b>, <b>Next.js</b>, and <b>Tailwind CSS</b>.",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "Design reliable backend systems using <b>Node.js</b>, <b>Express.js</b>, <b>NestJS</b>, and <b>Laravel</b>.",
  },
  {
    Icon: SiFastapi,
    title: "Real-time & API Systems",
    about:
      "Develop high-performance <b>REST</b> and <b>GraphQL</b> services, including real-time features with <b>WebSockets</b>.",
  },
  {
    Icon: FaLaptopCode,
    title: "Competitive Programmer",
    about:
      "Strong problem-solving background with active participation in <b>Codeforces</b>, <b>AtCoder</b>, and <b>CodeChef</b>.",
  },
]

export const frontend: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "ReactJS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "NextJS",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Redux Toolkit",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Ant Design",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "GraphQL",
    level: "70",
  },
]

export const backend: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "NodeJS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "ExpressJS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "NestJS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MongoDB",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MySQL",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "PostgreSQL",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "GraphQL",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "WebSockets",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "GIT",
    level: "80",
  },
]

export const education = [
  {
    title: "BSc in Computer Science & Engineering",
    school: "Eastern University",
    period: "02/2019 - 02/2023",
    gpa: "3.73",
  },
  {
    title: "Higher Secondary Certificate",
    school: "Narsingdi Science College",
    period: "04/2014 - 04/2016",
    gpa: "5.00",
  },
  {
    title: "Secondary School Certificate",
    school: "Chaitanya ML High School",
    period: "01/2009 - 01/2014",
    gpa: "5.00",
  },
]

export const experience = [
  {
    title: "Senior Software Engineer",
    company: "MoveOn Technologies Ltd",
    link: "https://career.moveon.com.bd",
    period: "09/2025 - Present",
    tasks: [
      "Enhancing operational efficiency by automating admin and agent delivery workflows.",
      "Building and maintaining a real-time chat application for better engagement with users.",
    ],
  },
  {
    title: "Software Engineer - II",
    company: "MoveOn Technologies Ltd",
    link: "https://career.moveon.com.bd",
    period: "10/2024 - 09/2025",
    tasks: [
      "Maintained a global cross-border e-commerce platform across frontend and backend.",
      "Added new features, improved UX, reviewed code, and provided engineering support.",
    ],
  },
  {
    title: "Software Engineer - I",
    company: "MoveOn Technologies Ltd",
    link: "https://career.moveon.com.bd",
    period: "08/2023 - 10/2024",
    tasks: [
      "Developed a cross-border e-commerce platform for global users across customer, admin, agent, and delivery panels.",
      "Led a team building a management app for agent operations and delivery management.",
      "Contributed to a Chrome extension and integrated web platform for product imports from major marketplaces.",
    ],
  },
  {
    title: "Software Engineer (Internship)",
    company: "Lemonhive",
    link: "https://lemonhive.com",
    period: "03/2023 - 06/2023",
    tasks: [
      "Updated a NestJS backend with new features, tests, and GraphQL API integrations for an education platform.",
      "Built reusable and pixel-perfect frontend components.",
    ],
  },
]

export const projectsData: TProject[] = [
  {
    id: 1,
    title: "Moveon - Cross-Border E-commerce",
    slug: "moveon-cross-border-ecommerce",
    featured: true,
    companyProject: true,
    img: "https://i.ibb.co/8XZw2NP/screencapture-ecommerce-client-rakify-vercel-app-2022-12-26-23-01-52.png",
    demo: "https://moveon.global",
    date: "2024 - Present",
    github: "https://moveon.global",
    stacks: [],
    category: ["Next", "React"],
    desc: "A global cross-border e-commerce platform built for production use. Contributed across multiple panels (customer, admin, agent, and delivery), focusing on feature delivery, performance, and maintainable full-stack architecture.",
  },
  {
    id: 2,
    title: "Moveup - Simplifying Dropshipping",
    slug: "moveup-dropshipping-platform",
    featured: true,
    companyProject: true,
    img: "https://i.ibb.co/Gt787qB/screencapture-repliqmart-vercel-app-2023-07-14-18-41-20.png",
    demo: "https://moveup.click",
    date: "2024",
    github: "",
    stacks: [],
    category: ["React", "Next"],
    desc: "A product import automation solution for dropshipping workflows. Contributed to both a Chrome extension and integrated web platform to simplify importing products from major e-commerce marketplaces.",
  },
  {
    id: 3,
    title: "Btracker - Business Tracker",
    slug: "btracker-business-tracker",
    img: "https://i.ibb.co/sF3kddM/btracker-vercel-app-2022-12-21-21-38-35.png",
    demo: "https://btracker.vercel.app/",
    date: "10/2022 - 01/2023",
    github: "https://github.com/rakify/business-tracker-next-firebase",
    stacks: [
      "ReactJS",
      "NextJS",
      "Redux Toolkit",
      "React Native",
      "Firebase",
      "Axios",
    ],
    category: ["Next", "React", "React Native"],
    desc: "Built for small business operations to record transactions and calculate sales quickly. Delivered both web and Android app versions with shared business logic and Firebase-powered authentication/data.",
  },
  {
    id: 4,
    title: "Bestmart - Multi-vendor Ecommerce",
    slug: "bestmart-multi-vendor-ecommerce",
    img: "https://i.ibb.co/8XZw2NP/screencapture-ecommerce-client-rakify-vercel-app-2022-12-26-23-01-52.png",
    demo: "https://bestmart.vercel.app",
    date: "04/2022 - 03/2023",
    github: "https://github.com/rakify/ecommerce-site-mern-mui",
    stacks: [
      "ReactJS",
      "Redux toolkit",
      "MUI",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "Firebase",
      "JOI",
      "JsonWebToken",
      "CryptoJS",
      "Axios",
    ],
    category: ["React", "Express"],
    desc: "A full-stack multi-vendor ecommerce system with separate customer, seller/admin panels, and backend APIs. Implemented authentication, product and order management, and scalable API structure.",
  },
  {
    id: 5,
    title: "Eumess - Mess Meal Tracker",
    slug: "mess-meal-tracker",
    img: "https://i.ibb.co/ftQq96H/eumess-vercel-app-2022-7-2022-12-21-21-42-52.png",
    demo: "https://eumess.vercel.app/",
    date: "11/2021",
    github: "https://github.com/rakify/mess-meal-tracker",
    stacks: [
      "ReactJS",
      "Redux Toolkit",
      "Axios",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
    ],
    category: ["React", "Express"],
    desc: "A shared meal and expense tracking application for students and roommates living together.",
  },
  {
    id: 6,
    title: "Meal Tracker - Android Version",
    slug: "meal-tracker-android",
    img: "https://i.ibb.co/3cP271s/MT-Homescreen.png",
    demo: "https://drive.google.com/drive/folders/1_K6rm0eYD6U8XplUy2mjTXkQaq3_KIf0?usp=sharing",
    date: "02/2022",
    github: "https://github.com/rakify/meal-tracker-react-native",
    stacks: [
      "React Native",
      "ReactJS",
      "Redux Toolkit",
      "Axios",
      "Async Storage",
    ],
    category: ["React Native"],
    desc: "Android version of the meal tracker app with mobile-first UX and shared workflow features.",
  },
  {
    id: 7,
    title: "Business Tracker - Android Version",
    slug: "business-tracker-android",
    img: "https://i.ibb.co/vXZ2rxt/Screenshot-2022-10-28-16-54-00-70-6583fd0ec015c03f844b9fdf872b44a9.jpg",
    demo: "https://drive.google.com/file/d/15IzKq12A__rjnmzWJnjZA6pzgp5DZgGF/view?usp=sharing",
    date: "10/2022",
    github: "https://github.com/rakify/business-tracker-firebase-react-native",
    stacks: ["React Native", "ReactJS", "Redux Toolkit", "Firebase", "Axios"],
    category: ["React Native"],
    desc: "Android version of Business Tracker for fast sales and due calculations in daily shop operations.",
  },
  {
    id: 8,
    title: "Music Player AI",
    slug: "music-player-ai",
    img: "https://i.ibb.co/X3J33S5/alan-player-2022-12-21-21-50-35.png",
    demo: "",
    date: "08/2022",
    github: "https://github.com/rakify/music-app-alan-ai",
    stacks: ["ReactJS", "NodeJS", "ExpressJS", "Axios", "AlanAI"],
    category: ["React", "Express"],
    desc: "Voice-controlled music application using Alan AI and YouTube APIs for search, playback, and voice actions.",
  },
  {
    id: 9,
    title: "Lemonhive Task - Pokemon Frontend",
    slug: "pokehive",
    img: "https://i.ibb.co/qMJ4wkp/screencapture-pokehive-vercel-app-2023-07-14-19-07-11.png",
    demo: "https://pokehive.vercel.app",
    date: "02/2023",
    github: "https://github.com/rakify/lemon-hive-task",
    stacks: [
      "NextJS",
      "ReactJS",
      "TailwindCSS",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
    ],
    category: ["Next", "React", "Tasks", "GraphQL"],
    desc: "Frontend assessment project built with Next.js, TypeScript, and GraphQL API integration.",
  },
  {
    id: 10,
    title: "NestJS MySQL Starter",
    slug: "nestjs-mysql-starter",
    img: "https://i.ibb.co/M16PQ6X/621cef5a8d6ec035129d2757-blog-nestjs-p-2000.jpg",
    demo: "",
    date: "06/2023",
    github: "https://github.com/rakify/nestjs-mysql-starter",
    stacks: ["NestJS", "GraphQL", "TypeORM", "TypeScript", "MySQL"],
    category: ["Nest", "GraphQL", "Template"],
    desc: "Starter template for NestJS + GraphQL + MySQL projects with auth and seeding support.",
  },
  {
    id: 11,
    title: "NestJS MongoDB Starter",
    slug: "nestjs-mongodb-starter",
    img: "https://i.ibb.co/M16PQ6X/621cef5a8d6ec035129d2757-blog-nestjs-p-2000.jpg",
    demo: "",
    date: "06/2023",
    github: "https://github.com/rakify/nestjs-mongodb-starter",
    stacks: ["NestJS", "GraphQL", "Mongoose", "TypeScript", "MongoDB"],
    category: ["Nest", "GraphQL", "Template"],
    desc: "Starter template for NestJS + GraphQL + MongoDB projects following documented best practices.",
  },
]
