import { FC, useState } from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { MdClose } from "react-icons/md"
import { TProject } from "../utils/interface"

import Image from "next/image"

const ProjectCard: FC<{
  project: TProject
}> = ({
  project: { title, img, category, date, demo, desc, github, stacks },
}) => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <div>
      <Image
        src={img}
        alt={title}
        className="h-[150px] cursor-pointer object-cover"
        onClick={() => setShowDetail(true)}
        height="100"
        width="300"
      />
      <p className="my-2 text-center">{title}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid h-auto w-full gap-x-12 bg-gray-100 p-2 text-black dark:bg-gray-100 dark:text-white md:grid-cols-2">
          <div>
            <Image src={img} alt={title} height="150" width="300" />
            <div className="my-4 flex justify-evenly space-x-3">
              <a
                target="_blank"
                rel="noreferrer"
                href={github}
                className="flex items-center space-x-3 bg-gray-200 px-4 py-2 text-lg dark:bg-gray-100"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              {demo !== "" && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={demo}
                  className="flex items-center space-x-3 bg-gray-200 px-4 py-2 text-lg dark:bg-gray-100"
                >
                  <AiFillProject /> <span>Demo</span>
                </a>
              )}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-3xl md:font-bold">
              {title}
            </h2>
            <div className="mb-5 flex flex-wrap space-x-2 text-sm font-thin tracking-wider">
              {date}
            </div>
            <h3 className="mb-3 font-medium">{desc}</h3>
            <p className="text-xl font-medium tracking-wide">Stacks</p>
            <div className="mt-5 flex flex-wrap space-x-2 text-sm tracking-wider">
              {stacks.map((tech) => (
                <span
                  key={tech}
                  className="rounde-sm my-1 bg-gray-200 px-2 py-1 dark:bg-gray-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute top-0 right-1 rounded-full bg-red-200 p-1 hover:bg-red-600 focus:outline-none dark:bg-gray-100 hover:dark:bg-gray-100"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
