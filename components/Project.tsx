import { FC, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { TProject } from "../utils/interface";

import Image from "next/image";
import Head from "next/head";

const ProjectCard: FC<{
  project: TProject;
}> = ({
  project: { title, img, category, date, demo, desc, github, stacks },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={img}
        alt={title}
        className="cursor-pointer h-[150px] object-cover"
        onClick={() => setShowDetail(true)}
        height="100"
        width="300"
      />
      <p className="my-2 text-center">{title}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            <Image src={img} alt={title} height="150" width="300" />
            <div className="flex justify-evenly my-4 space-x-3">
              <a
                target="_blank"
                rel="noreferrer"
                href={github}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              {demo !== "" && (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={demo}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject /> <span>Demo</span>
                </a>
              )}
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:font-bold md:text-3xl">
              {title}
            </h2>
            <div className="flex flex-wrap mb-5 space-x-2 text-sm font-thin tracking-wider">
              {date}
            </div>
            <h3 className="mb-3 font-medium">{desc}</h3>
            <p className="text-xl font-medium tracking-wide">Stacks</p>
            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {stacks.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute top-0 p-1 bg-red-200 rounded-full right-1 focus:outline-none dark:bg-dark-200 hover:bg-red-600 hover:dark:bg-dark-500"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
