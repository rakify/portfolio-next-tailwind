import { useState } from "react";
import { motion } from "framer-motion";
import Project from "../components/Project";
import ProjectNavbar from "../components/ProjectNavbar";
import { projectsData } from "../utils/data";
import { Category } from "../utils/interface";

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
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.ul
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
        <ProjectNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />

        <div className="relative grid grid-cols-12 gap-4 my-3">
          {projects.map((project) => (
            <motion.li
              key={project.id}
              className="col-span-12 p-2 bg-[honeydew] rounded-lg item sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              variants={item}
            >
              <Project project={project} />
            </motion.li>
          ))}
        </div>
      </div>
    </motion.ul>
  );
};

export default Projects;
