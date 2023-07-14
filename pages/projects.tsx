import { useState } from "react"
import { motion } from "framer-motion"
import Project from "../components/Project"
import ProjectNavbar from "../components/ProjectNavbar"
import { projectsData } from "../utils/data"
import { Category } from "../utils/interface"
import Head from "next/head"

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Projects = () => {
  const [projects, setProjects] = useState(projectsData)
  const [active, setActive] = useState("All")

  const handlerFilterCategory = (category: Category | "All") => {
    if (category === "All") {
      setProjects(projectsData)
      setActive(category)
      return
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    )
    setProjects(newArray)
    setActive(category)
  }

  return (
    <>
      <Head>
        <title>Rakib Miah - Projects I have recently worked on</title>
        <meta
          name="description"
          content="These are some of the projects I have worked on recently. Hi! I am Rakib Miah. Passionate about Javascript library and framework. Over 1 year of development experience in HTML, CSS, JS, React and NextJS frameworks and  backend dev. Have an exciting project you need help with? Send me an email or call me directly!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.ul
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="overflow-y-scroll px-5 py-2" style={{ height: "65vh" }}>
          <ProjectNavbar
            handlerFilterCategory={handlerFilterCategory}
            active={active}
          />

          <div className="relative my-3 grid grid-cols-12 gap-4">
            {projects.map((project) => (
              <motion.li
                key={project.id}
                className="item col-span-12 rounded-lg bg-[honeydew] p-2 dark:bg-gray-100 sm:col-span-6 lg:col-span-4"
                variants={item}
              >
                <Project project={project} />
              </motion.li>
            ))}
          </div>
        </div>
      </motion.ul>
    </>
  )
}

export default Projects
