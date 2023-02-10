import { FC, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { TProject } from "../utils/interface";

import Image from "next/image";

const ProjectCard: FC<{
  project: TProject;
}> = ({ project: { title, img, category, demo, desc, github, stacks } }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      <Image
        src={img}
        alt={title}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      />
      {/* <img
        src={img}
        alt={title}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-center">{title}</p>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            {/* <img src={img} alt={title} /> */}

            <Image
              src={img}
              alt={title}
              layout="responsive"
              height="150"
              width="300"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={demo}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-medium md:text-2xl">{title}</h2>
            <h3 className="mb-3 font-medium">{desc}</h3>

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
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
