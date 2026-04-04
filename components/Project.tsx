import { FC, useEffect, useState } from "react"
import { AiFillGithub, AiFillProject } from "react-icons/ai"
import { TProject } from "../utils/interface"
import { createPortal } from "react-dom"

import Image from "next/image"

const ProjectCard: FC<{
  project: TProject
}> = ({
  project: {
    title,
    img,
    date,
    demo,
    desc,
    github,
    stacks,
    featured,
    companyProject,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const shouldHideImage = Boolean(companyProject)
  const hasGithub = !companyProject && github.trim().length > 0
  const isGithubLink = hasGithub && github.includes("github.com")
  const hasDemo = demo.trim().length > 0

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  const modal = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-dark/40 backdrop-blur-sm"
        onClick={() => setShowDetail(false)}
      ></div>

      <div className="relative z-[101] max-h-[90vh] w-full max-w-2xl animate-in fade-in zoom-in overflow-y-auto rounded-3xl bg-white shadow-2xl duration-300 dark:bg-dark-200">
        <div className="p-8">
          <div className="mb-6 flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray dark:text-white">
                {title}
              </h2>
              <p className="mt-1 text-sm font-medium text-gray/40">{date}</p>
            </div>
            <button
              onClick={() => setShowDetail(false)}
              className="rounded-full p-2 transition-colors hover:bg-gray/5 dark:hover:bg-dark-700"
            >
              <svg
                className="h-6 w-6 text-gray/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {!shouldHideImage && (
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray/5 dark:border-dark-700">
                <Image
                  src={img}
                  alt={title}
                  layout="fill"
                  objectFit="cover"
                  className="duration-500 transition-transform hover:scale-105"
                />
              </div>
            )}
            <div className="flex flex-col h-full">
              <p className="mb-6 text-[15px] leading-relaxed text-gray/70 dark:text-gray-300">
                {desc}
              </p>

              <div className="mt-auto space-y-6 border-t border-gray/5 pt-6 dark:border-dark-700">
                {!companyProject && (
                  <div>
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-gray/40">
                      Tech Stacks
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {stacks.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-gray/5 bg-gray/5 px-2.5 py-1 text-[12px] font-semibold text-gray/70 dark:border-dark-700 dark:bg-dark-700/50 dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  {hasGithub && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={github}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray/5 py-2.5 text-sm font-bold text-gray transition-all hover:bg-gray/10 dark:bg-dark-700 dark:text-gray-100 dark:hover:bg-dark-700/70"
                    >
                      <AiFillGithub size={18} />
                      <span>{isGithubLink ? "Github" : "Project"}</span>
                    </a>
                  )}
                  {hasDemo && (
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={demo}
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-link py-2.5 text-sm font-bold text-white shadow-md shadow-link/20 transition-all hover:opacity-90 dark:shadow-none"
                    >
                      <AiFillProject size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="group flex h-full flex-col">
      {!shouldHideImage && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={img}
            alt={title}
            className="cursor-pointer object-cover duration-500 transition-transform group-hover:scale-110"
            onClick={() => setShowDetail(true)}
            layout="fill"
          />
          <div className="pointer-events-none absolute inset-0 bg-dark/5 opacity-0 transition-opacity group-hover:opacity-100" />

          <div className="absolute top-3 left-3 flex flex-wrap gap-2">
            {featured && (
              <span className="rounded-md border border-white/20 bg-black/40 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                Featured
              </span>
            )}
            {companyProject && (
              <span className="rounded-md border border-white/20 bg-black/40 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                Company
              </span>
            )}
          </div>
        </div>
      )}

      {shouldHideImage && (featured || companyProject) && (
        <div className="flex gap-2 px-5 pt-5">
          {featured && (
            <span className="rounded-md border border-gray/10 bg-gray/5 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-gray/50 dark:border-dark-700/50 dark:bg-dark-700 dark:text-gray-400">
              Featured
            </span>
          )}
          {companyProject && (
            <span className="rounded-md border border-gray/10 bg-gray/5 px-2 py-1 text-[9px] font-bold uppercase tracking-widest text-gray/50 dark:border-dark-700/50 dark:bg-dark-700 dark:text-gray-400">
              Company Project
            </span>
          )}
        </div>
      )}

      <div className="flex flex-grow flex-col p-5">
        <button
          type="button"
          onClick={() => setShowDetail(true)}
          className="text-left transition-colors group-hover:text-link"
        >
          <h3 className="truncate text-lg font-bold tracking-tight text-gray dark:text-gray-100">
            {title}
          </h3>
        </button>
        <p className="mt-1 text-xs font-medium text-gray/40">{date}</p>

        {hasDemo && (
          <a
            target="_blank"
            rel="noreferrer"
            href={demo}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-link transition-opacity hover:opacity-80"
          >
            Explore Project
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        )}
      </div>

      {showDetail && isMounted && createPortal(modal, document.body)}
    </div>
  )
}

export default ProjectCard
