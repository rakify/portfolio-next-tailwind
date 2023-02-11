import { FaReact, FaServer, FaLaptopCode } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { TProject, Service, Skill } from "./interface";

import { BsCircleFill } from "react-icons/bs";

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
      "Equipped to leverage the full potential of <b>Express.js</b> to create a high-performance, reliable, and secure web infrastructure.",
  },
  {
    Icon: SiFastapi,
    title: "API Development",
    about:
      "Capable of designing and implementing a scalable and efficient REST API with <b>Node.js</b>.",
  },
  {
    Icon: FaLaptopCode,
    title: "Competitive Programmer",
    about:
      "Honed my problem-solving skills through daily engagement in <b>Codeforces</b>, <b>Atcoder</b> and <b>Codechef</b>.",
  },
];

export const frontend: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "ReactJS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "ReduxToolkit",
    level: "90",
  },

  {
    Icon: BsCircleFill,
    name: "TailwindCSS",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MUI",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "NextJS",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "50",
  },
];

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
    name: "MongoDB",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "GIT",
    level: "80",
  },
];

export const projectsData: TProject[] = [
  {
    id: 1,
    title: "Bestmart - Multi-vendor Ecommerce Web App",
    slug: "multi-vendor-ecommerce",
    img: "https://i.ibb.co/8XZw2NP/screencapture-ecommerce-client-rakify-vercel-app-2022-12-26-23-01-52.png",
    demo: "https://bestmart.vercel.app",
    date: "Jun 22, 2022 - Now",
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
    category: ["react", "express", "firebase", "mongo", "node"],
    desc: "This is a multi vendor MERN full stack ecommerce web app project. It contains total 3 parts. one for api, one frontend for sellers/customers and another frontend for admin panel. This project is currently live. Please check github for more information.",
  },
  {
    id: 2,
    title: "Business Tracker",
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
    date: "February 1, 2022 - Now",
    stacks: ["NextJS", "Firebase", "Redux Toolkit", "MUI", "Axios"],
    category: ["next", "firebase"],
    // screenshot: [
    //   {
    //     id: 0,
    //     title: "Admin View",
    //     img: "https://i.ibb.co/5TdNsXB/screencapture-localhost-3000-2023-01-06-16-16-35.png",
    //     featured: true,
    //   },
    //   {
    //     id: 1,
    //     title: "Seller View",
    //     img: "https://i.ibb.co/DLcwqV2/screencapture-localhost-3000-2023-01-06-16-18-15.png",
    //   },
    //   {
    //     id: 2,
    //     title: "Salesman View",
    //     img: "https://i.ibb.co/gWyrCcy/Salesman.png",
    //   },
    //   {
    //     id: 3,
    //     title: "Order Details",
    //     img: "https://i.ibb.co/VNFRNrw/Order-Details.png",
    //   },
    // ],
  },

  {
    id: 3,
    title: "Mess Meal Tracker",
    slug: "Mess-Meal-Tracker",
    img: "https://i.ibb.co/ftQq96H/eumess-vercel-app-2022-7-2022-12-21-21-42-52.png",
    demo: "https://eumess.vercel.app/",
    desc: "mess meal tracker for people/students living together in a mess or hostel",
    github: "https://github.com/rakify/mess-meal-tracker",
    date: "November 7, 2021 - Completed",
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
    category: ["react", "node", "mongo", "express"],
  },
  {
    id: 4,
    title: "Music App",
    slug: "Music-App",
    img: "https://i.ibb.co/X3J33S5/alan-player-2022-12-21-21-50-35.png",
    demo: "",
    date: "August 27, 2022 - Completed",
    desc: "This is an AI project. Its a voice controlled music app thanks to Alan AI and Youtube Api.",
    github: "",
    stacks: ["ReactJS", "ExpressJS", "NodeJS", "Axios"],
    category: ["react", "express", "node"],
  },
];
