import { useState } from "react"
import { motion } from "framer-motion"
import Project from "../components/Project"
import ProjectNavbar from "../components/ProjectNavbar"
import { projectsData } from "../utils/data"
import { Category } from "../utils/interface"
import Head from "next/head"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
  const sortFeaturedFirst = (items: typeof projectsData) =>
    [...items].sort((a, b) => {
      if (Boolean(a.featured) === Boolean(b.featured)) return a.id - b.id
      return a.featured ? -1 : 1
    })

  const [projects, setProjects] = useState(sortFeaturedFirst(projectsData))
  const [active, setActive] = useState("All")

  const handlerFilterCategory = (category: Category | "All") => {
    if (category === "All") {
      setProjects(sortFeaturedFirst(projectsData))
      setActive(category)
      return
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    )
    setProjects(sortFeaturedFirst(newArray))
    setActive(category)
  }

  return (
    <>
      <Head>
        <title>Rakib Miah - Featured Projects</title>
        <meta
          name="description"
          content="Featured projects by Rakib Miah, including production e-commerce products, dropshipping automation tools, and full-stack web/mobile applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full flex-col px-8 py-6">
        <div className="mb-6">
          <ProjectNavbar
            handlerFilterCategory={handlerFilterCategory}
            active={active}
          />
        </div>

        <motion.div
          className="custom-scrollbar grid grid-cols-12 gap-6 overflow-y-auto pb-8 pr-2"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="col-span-12 sm:col-span-6 lg:col-span-4"
              variants={item}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray/5 bg-white shadow-sm transition-all hover:border-link/30 hover:shadow-md dark:border-dark-700/50 dark:bg-dark-700/30 dark:hover:border-link/50">
                <Project project={project} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Projects
