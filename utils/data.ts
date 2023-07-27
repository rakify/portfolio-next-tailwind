import { FaReact, FaServer, FaLaptopCode } from "react-icons/fa"
import { SiFastapi } from "react-icons/si"
import { TProject, Service, Skill } from "./interface"

import { BsCircleFill } from "react-icons/bs"

export const services: Service[] = [
  {
    Icon: FaReact,
    title: "Frontend Development",
    about:
      "Capable of building a  visually stunning and highly scalable web application using <b>React.js</b> and <b>Next.js</b>.",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Equipped to leverage the full potential of <b>Express.js</b> & <b>Nest.js</b> to create a high-performance, reliable, and secure web infrastructure.",
  },
  {
    Icon: SiFastapi,
    title: "API Development",
    about:
      "Capable of designing and implementing a scalable and efficient REST API and GraphQL API.",
  },
  {
    Icon: FaLaptopCode,
    title: "Competitive Programmer",
    about:
      "Honed my problem-solving skills through daily engagement in <b>Codeforces</b>, <b>Atcoder</b> and <b>Codechef</b>.",
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
    name: "Redux Toolkit",
    level: "90",
  },

  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MUI",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Ant Design",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "GraphQL",
    level: "50",
  },

  {
    Icon: BsCircleFill,
    name: "React Native",
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
    name: "Rest API",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "GraphQL",
    level: "80",
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
    name: "MySQL",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "GIT",
    level: "80",
  },
]

export const projectsData: TProject[] = [
  {
    id: 1,
    title: "Bestmart - Multi-vendor Ecommerce Web App",
    slug: "multi-vendor-ecommerce",
    img: "https://i.ibb.co/8XZw2NP/screencapture-ecommerce-client-rakify-vercel-app-2022-12-26-23-01-52.png",
    demo: "https://bestmart.vercel.app",
    date: "Jun 22, 2022 - Finished",
    github: "https://github.com/rakify/ecommerce-site-mern-mui",
    stacks: [
      "ReactJS",
      "Firebase",
      "Redux Toolkit",
      "JOI",
      "MUI",
      "Axios",
      "CryptoJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "Firebase",
      "JsonWebToken",
    ],
    category: ["React", "Express", "Firebase", "Mongo", "Rest API"],
    desc: "This is a multi vendor MERN full stack ecommerce web app project. It contains total 3 parts. one for api, one frontend for sellers/customers and another frontend for admin panel. This project is currently live. Please check github for more information.",
  },
  {
    id: 2,
    title: "Btracker - Business Tracker",
    slug: "Business-Tracker",
    img: "https://i.ibb.co/sF3kddM/btracker-vercel-app-2022-12-21-21-38-35.png",
    demo: "https://btracker.vercel.app/",
    desc:
      "Business tracker is a web app for business people to record and to calculate their sells faster." +
      "If you own any shop or business you can use this app to add all your products and later just giving input like quantity," +
      "percentage of discount on products that can take discount, it will calculate all cost." +
      "You can add products category wise like some product might be under discounts on total price" +
      "or some you do not want to give any discount, it will calculate them separately." +
      "It will also ask for customers previous due and todays reserve and based on all input" +
      "it will show resulted ammount that customer is going to pay. Its super easy to use.",
    github: "https://github.com/rakify/business-tracker-next-firebase",
    date: "February 1, 2022 - Finished",
    stacks: ["NextJS", "ReactJS", "Firebase", "Redux Toolkit", "MUI", "Axios"],
    category: ["Next", "React", "Firebase", "Rest API"],
  },
  {
    id: 3,
    title: "Eumess - Mess Meal Tracker",
    slug: "Mess-Meal-Tracker",
    img: "https://i.ibb.co/ftQq96H/eumess-vercel-app-2022-7-2022-12-21-21-42-52.png",
    demo: "https://eumess.vercel.app/",
    desc: "mess meal tracker for people/students living together in a mess or hostel",
    github: "https://github.com/rakify/mess-meal-tracker",
    date: "November 7, 2021 - Finished",
    stacks: [
      "ReactJS",
      "Redux toolkit",
      "Axios",
      "Styled components",
      "NodeJS",
      "ExpressJS",
      "CryptoJS",
      "JOI",
      "Jsonwebtoken",
      "MongoDB",
      "Nodemailer",
    ],
    category: ["React", "Mongo", "Express", "Rest API"],
  },
  {
    id: 4,
    title: "Meal Tracker - Android Version",
    slug: "Meal-Tracker",
    img: "https://i.ibb.co/3cP271s/MT-Homescreen.png",
    demo: "https://drive.google.com/drive/folders/1_K6rm0eYD6U8XplUy2mjTXkQaq3_KIf0?usp=sharing",
    desc: "This is react native version of previous mess meal tracker web app. Mess meal tracker is for people/students living together in a mess or hostel",
    github: "https://github.com/rakify/meal-tracker-react-native",
    date: "February 17, 2022 - Finished",
    stacks: [
      "React Native",
      "ReactJS",
      "Redux toolkit",
      "Async Storage",
      "React Navigations",
      "Axios",
    ],
    category: ["React Native", "Rest API"],
  },

  {
    id: 5,
    title: "Business Tracker - Android Version",
    slug: "Business-Tracker",
    img: "https://i.ibb.co/vXZ2rxt/Screenshot-2022-10-28-16-54-00-70-6583fd0ec015c03f844b9fdf872b44a9.jpg",
    demo: "https://drive.google.com/file/d/15IzKq12A__rjnmzWJnjZA6pzgp5DZgGF/view?usp=sharing",
    desc: "This is react native version of previous business tracker web app. If you own any shop or business you can use this app to add all your products and later just giving input like quantity, percentage of discount on products that can take discount, it will calculate all cost. You can add products category wise like some product might be under discounts on total price or some you do not want to give any discount, it will calculate them separately. It will also ask for customers previous due and todays reserve and based on all input it will show resulted ammount that customer is going to pay.",
    github: "https://github.com/rakify/business-tracker-firebase-react-native",
    date: "October 03, 2022 - Finished",
    stacks: [
      "React Native",
      "ReactJS",
      "Redux toolkit",
      "Async Storage",
      "React Navigations",
      "Axios",
      "Firebase",
    ],
    category: ["React Native", "Firebase", "Rest API"],
  },
  {
    id: 6,
    title: "Music Player AI",
    slug: "Music-App",
    img: "https://i.ibb.co/X3J33S5/alan-player-2022-12-21-21-50-35.png",
    demo: "",
    date: "August 27, 2022 - Finished",
    desc: "This is an AI project. Its a voice controlled music app thanks to Alan AI and Youtube Api. Using this you can search, play, pause, change, download, stop playing songs also can create a playlist and play them one by one, all by using voice command.",
    github: "https://github.com/rakify/music-app-alan-ai",
    stacks: ["ReactJS", "ExpressJS", "NodeJS", "Axios", "AlanAI"],
    category: ["React", "Express"],
  },
  {
    id: 7,
    title: "Repliq Task - Ecommerce Frontend",
    slug: "repliq-mart",
    img: "https://i.ibb.co/Gt787qB/screencapture-repliqmart-vercel-app-2023-07-14-18-41-20.png",
    demo: "https://repliqmart.vercel.app",
    date: "July 06, 2023 - Finished",
    desc: "This project is a practice project, a task assigned by Repliq for the Junior React Developer position. In this project, I have used NextJS v13, TailwindCSS v3.3.2, Typescript, and MUI to design the admin panel. I have also used Context as state management for practice, instead of Redux or Redux Toolkit. Authentication is being handled from the backend. The backend was implemented by me almost a year ago. Previously, I have worked on a similar project with Redux Toolkit, a multi-vendor full-stack ecommerce project",
    github: "https://github.com/rakify/repliq-task",
    stacks: [
      "NextJS",
      "ReactJS",
      "Context",
      "TailwindCSS",
      "Typescript",
      "MUI",
      "Axios",
    ],
    category: ["Next", "React", "Tasks"],
  },
  {
    id: 8,
    title: "Lemonhive Task - Pokemon Frontend",
    slug: "pokehive",
    img: "https://i.ibb.co/qMJ4wkp/screencapture-pokehive-vercel-app-2023-07-14-19-07-11.png",
    demo: "https://pokehive.vercel.app",
    date: "February 03, 2023 - Finished",
    desc: "This project is a practice project, a task assigned by Lemonhive for the Frontend Developer (Internship) position. In this project, I have used NextJS, TailwindCSS, Typescript, Apollo CLient and Graphql.",
    github: "https://github.com/rakify/lemon-hive-task",
    stacks: [
      "NextJS",
      "ReactJS",
      "TailwindCSS",
      "Typescript",
      "GraphQL",
      "Apollo Client",
    ],
    category: ["Next", "React", "Tasks", "GraphQL"],
  },
  {
    id: 9,
    title: "NestJS MySQL Starter",
    slug: "nest-mysql",
    img: "https://i.ibb.co/M16PQ6X/621cef5a8d6ec035129d2757-blog-nestjs-p-2000.jpg",
    demo: "",
    date: "JUne 18, 2023 - Finished",
    desc: "This is a starter template for project that needs nestJS backend. This version uses graphql and typeorm with mysql. This follows best practice that is mentioned at the NestJS documentation. This package handled authentication using @nestjs/jwt and seeding is handled by nestjs-seeder.",
    github: "https://github.com/rakify/nestjs-mysql-starter",
    stacks: ["NestJS", "GraphQL", "Typeorm", "Typescript", "MySQL"],
    category: ["Nest", "GraphQL", "MySQL", "Template"],
  },
  {
    id: 10,
    title: "NestJS MongoDB Starter",
    slug: "nest-mongodb",
    img: "https://i.ibb.co/M16PQ6X/621cef5a8d6ec035129d2757-blog-nestjs-p-2000.jpg",
    demo: "",
    date: "Jun 21, 2023 - Finished",
    desc: "This is a starter template for project that needs nestJS backend. This version uses graphql and mongoose with mongodb. This follows best practice that is mentioned at the NestJS documentation. This package handled authentication using @nestjs/jwt and seeding is handled by nestjs-seeder.",
    github: "https://github.com/rakify/nestjs-mongodb-starter",
    stacks: ["NestJS", "GraphQL", "Mongoose", "Typescript", "MongoDB"],
    category: ["Nest", "GraphQL", "Mongo", "Template"],
  },
]
