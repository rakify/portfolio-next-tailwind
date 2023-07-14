import { IconType } from "react-icons"
export interface Service {
  Icon: IconType
  title: string
  about: string
}

export interface Skill {
  Icon: IconType
  name: string
  level: string
}

export interface TProject {
  id: number
  title: string
  slug: string
  desc: string
  img: string
  demo: string
  github: string
  date: string
  category: Category[]
  stacks: string[]
}

export type Category =
  | "React"
  | "Express"
  | "Mongo"
  | "Firebase"
  | "Next"
  | "React Native"
  | "Template"
  | "Tasks"
  | "GraphQL"
  | "Rest API"
  | "Nest"
  | "MySQL"
