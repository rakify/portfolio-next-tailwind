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
        <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
          <div
            className="absolute h-full w-full bg-gray-900 opacity-50"
            onClick={() => setShowDetail(false)}
          ></div>

          <div className="z-50 mx-auto w-11/12 rounded bg-white shadow-slate-700 md:max-w-md">
            <div className="absolute top-0 right-0 z-50 mt-4 mr-4 flex cursor-pointer flex-col items-center overflow-y-auto text-sm text-white"></div>

            <div className="modal-content max-h-[88vh] max-w-md overflow-y-auto py-4 px-6 text-left dark:bg-gray-100">
              <div className="flex items-center justify-between pb-3">
                <h2 className="mb-3 text-xl font-medium md:text-3xl md:font-bold">
                  {title}
                </h2>
                <div className="modal-close z-50 cursor-pointer">
                  <svg
                    className="fill-current text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    onClick={() => setShowDetail(false)}
                  >
                    <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                  </svg>
                </div>
              </div>

              <div className="mb-5 flex flex-wrap space-x-2 text-sm font-thin tracking-wider">
                {date}
              </div>
              <div className="flex flex-col">
                <div className="max-h-full flex-1">
                  <Image
                    src={img}
                    alt={title}
                    width={400}
                    height={150}
                    style={{
                      width: "400px",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div>
                  <div className="my-4 flex justify-evenly space-x-3">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={github}
                      className="flex items-center space-x-3 rounded-full bg-gray-400 px-4 py-2 text-lg hover:bg-gray-500 dark:bg-gray-100"
                    >
                      <AiFillGithub /> <span>Github</span>
                    </a>
                    {demo !== "" && (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={demo}
                        className="flex items-center space-x-3 rounded-full bg-gray-400 px-4 py-2 text-lg hover:bg-gray-500 dark:bg-gray-100"
                      >
                        <AiFillProject /> <span>Demo</span>
                      </a>
                    )}
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
              </div>
              <div className="flex justify-end pt-2">
                <button
                  className="rounded-lg bg-indigo-500 p-3 px-4 text-white hover:bg-indigo-400"
                  onClick={() => setShowDetail(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
